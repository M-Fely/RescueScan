import { supabase } from "../config/supabase.js";
import { aiAnalyzer } from "../services/AIService.js";

export const createUpload = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "Please upload an image" });
    }

    const fileExt = file.originalname.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from("report-images")
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      });

    if (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }

    const { data: urlData } = supabase.storage
      .from("report-images")
      .getPublicUrl(fileName);

    const description = await aiAnalyzer(urlData.publicUrl);

    return res.status(200).json({ success: true, description });

    // return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
