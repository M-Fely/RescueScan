import { supabase } from "../config/supabase.js";

export const createUsers = async (req, res) => {
  const { name, email, role } = req.body;
  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, role }])
    .select();

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(201).json({ success: true, data });
};

export const getUsers = async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ success: true, data });
};

export const getUsersById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ success: true, data });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  const { data, error } = await supabase
    .from("users")
    .update({ name, email, role })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ success: true, data });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("users")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ success: true, data });
};
