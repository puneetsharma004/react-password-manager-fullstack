import supabase from "../db/supabaseClient.js"

// POST /api/passwords
export const createPassword = async (req, res) => {
  try {
    const { websiteName, url, password, notes } = req.body

    const { data, error } = await supabase
      .from("passwords")
      .insert([{ website_name: websiteName, url, password, notes }])
      .select()

    if (error) throw error

    res.status(201).json({ message: "Password saved", data })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// GET /api/passwords
export const getAllPasswords = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("passwords")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error

    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}