const supabase=require("../config/supabase");
exports.createTrip=async(req,res)=>{
    try{
        const{data,error}=await supabase.from("trips").insert([req.body]);
        if (error) throw error;
        res.status(201).json(data);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};
exports.endTrip=async(req,res)=>{
    try{
        res.json({message:"Trip ended"})
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};