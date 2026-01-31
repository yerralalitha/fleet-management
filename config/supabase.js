const { createClient }=require("@supabase/supabase-js");
require("dotenv").config();
const supabase=createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABSE_KEY
);
module.exports=supabase;