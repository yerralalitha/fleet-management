const supabase=require("../config/supabase");
exports.addVehicle=async(req,res)=>{
    try{
        const{role}=req.body;
        if(role!="owner"){
            return res.status(403).json({message:"Only owner allowed"});
        }
        const {data,error}=await supabase
            .from("vehicles")
            .insert([req.body]);
        if(error) throw error;
        res.status(201).json(data);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};