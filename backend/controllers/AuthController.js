import Auth from "../models/AuthModel.js";
import bcrypt from "bcrypt";

export const getAuth = async (req, res) => {
  try {
    const response = await Auth.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    return res
      .status(400)
      .json({ msg: "Password and Confirm Password do not match" });
  }
  console.log('Data received:', req.body); // Logging untuk melihat data yang diterima

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {

    await Auth.create({
      username,
      email,
      password: hashPassword,
    });
    res.status(201).json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cari user berdasarkan email yang diberikan pada request body
    const user = await Auth.findAll({
      where: { email }
    });

    // Pastikan user ditemukan
    if (user.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Bandingkan password yang diberikan dengan password yang ada di database
    const match = await bcrypt.compare(password, user[0].password);

    // Jika password tidak cocok
    if (!match) return res.status(400).json({ msg: "Wrong Password" });

    // Jika password cocok
    res.status(200).json({ msg: "Login Successful" });
  } catch (error) {
    console.log(error); // Log error ke console
    res.status(500).json({ msg: "Server Error" }); // Kembalikan status 500 dengan pesan "Server Error"
  }
};
