import { supabase } from "../config/supabase.js";

export const createReports = async (req, res) => {
  const {
    user_id,
    image_url,
    latitude,
    longitude,
    location_name,
    ai_description,
    user_description,
    is_confirmed,
    status,
  } = req.body;
  const { data, error } = await supabase
    .from("reports")
    .insert([
      {
        user_id,
        image_url,
        latitude,
        longitude,
        location_name,
        ai_description,
        user_description,
        is_confirmed,
        status,
      },
    ])
    .select();

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(201).json({ success: true, data });
};

export const getReports = async (req, res) => {
  const { data, error } = await supabase.from("reports").select("*");

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json({ success: true, data });
};

export const getReportById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  console.log(data);
  return res.status(200).json({ success: true, data });
};

export const updateReport = async (req, res) => {
  const { id } = req.params;
  const {
    user_id,
    image_url,
    latitude,
    longitude,
    location_name,
    ai_description,
    user_description,
    is_confirmed,
    status,
  } = req.body;

  const { data, error } = await supabase
    .from("reports")
    .update({
      user_id,
      image_url,
      latitude,
      longitude,
      location_name,
      ai_description,
      user_description,
      is_confirmed,
      status,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  console.log(data);
  return res.status(201).json({ success: true, data });
};

export const deleteReport = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("reports")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(201).json({ success: true, data });
};
