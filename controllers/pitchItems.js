import mongoose from "mongoose";
import pitchItem from "../models/pitchItem.js";
import offerItem from "../models/offerItem.js";

export const getPitchItems = async (req, res) => {
    try{
        const pitchItems = await pitchItem.find();
        res.status(200).json(pitchItems);
    } catch(error){
        res.status(404).json({message: error.message});
    }
};

export const createPitchItem = async (req, res) => {
    const pitchItemFromRequest = req.body;
    const newpitchItem = new pitchItem(pitchItemFromRequest);
    try{
        await newpitchItem.save();
        res.status(201).json(newpitchItem._id);
    } catch(error){
        res.status(409).json( { message: error.message });
    }
}

export const createPitchOffer = async (req, res) => {
    const { pitch_id : _id } = req.params;
    const pitchOfferFromRequest = req.body;
    
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Pitch not found");
    try{
        const Pitch = await pitchItem.findById(_id);
        console.log(Pitch);
        const offer = new offerItem(pitchOfferFromRequest);
        await offer.save();
        Pitch.offers.push(offer);
        const updatedPitchItem = await pitchItem.findByIdAndUpdate(_id, { ...Pitch, _id}, { new: true });
        res.status(201).json(offer._id);
    }catch(error){
        res.status(409).json( { message: error.message });
    }
    
}
