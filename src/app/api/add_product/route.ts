import { connectMongoDB } from "@/libs/models/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try{
        const body = await request.json();
        const {imgScr, fileKey, name, category, price} = body;

        await connectMongoDB();

        const data = await Product.create({
            imgScr, 
            fileKey, 
            name, 
            category, 
            price
        });

        return NextResponse.json({msg: "Product added successfully", data});
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Something Went Wrong",
        }, 
        {status: 400}
        );
    }
}