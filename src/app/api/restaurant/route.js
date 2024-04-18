import { restaurantSchema } from "@/app/lib/restaurantsModel";
import { connectionstr } from "@/app/lib/db";
import mongoose from "mongoose";
import {NextResponse} from "next/server";

export async function GET(){

    await mongoose.connect(connectionstr,{useNewUrlParser:true})
    const data  = await restaurantSchema.find();
    console.log(data);
    return NextResponse.json({result:true});

} 

export async function POST(request) {
    let payload = await request.json();
    let result;
    let success=false;
    await mongoose.connect(connectionstr, { useNewUrlParser: true })
    if (payload.login) {
        result = await restaurantSchema.findOne({ email: payload.email, password: payload.password });
        if(result){
            success=true;
        }

    } else {
        const restaurant = new restaurantSchema(payload)
        result = await restaurant.save();
        if(result){
            success=true;
        }
        
    }

    return NextResponse.json({result,success});
    
}