import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error("Error while fetching users", error.message);
    res.status(500).json({ success: false, message: "Fetching failed" });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  if (!user.name || !user.email || !user.address) {
    return res
      .status(400)
      .json({ success: false, message: "Enter all your details" });
  }

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(200).json({ success: true, message: "User Created" });
  } catch (error) {
    console.error("Error while creating user account", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    res.status(200).json({ message: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Updation Failed" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    console.error("error while deleting", error.message);
    res.status(500).json({ success: false, message: "Deletion Error" });
  }
};
