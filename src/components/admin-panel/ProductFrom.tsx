"use client"; 
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import React, { FormEvent, useState } from "react";

interface IPayload {
    imgSrc: null | string;
    fileKey: null | string;
    name: string;
    category: string;
    price: string;
}
const ProductFrom = () => {

    const [payLoad, setpayLoad] = useState<IPayload>({
        imgSrc: null, 
        fileKey: null, 
        name: "",
        category: "",
        price: "",
    });

    const dispatch = useAppDispatch ();

    const handleSumbit = (e: FormEvent) => {
        e.preventDefault();

        dispatch(setLoading(true));

        axios
            .post("/api/add_product", payLoad)
            .then((res) => {
                console.log(res);
                makeToast("Product added Successfully");
                setpayLoad({
                    imgSrc: null, 
                    fileKey: null, 
                    name: "",
                    category: "",
                    price: "",
                });
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSumbit}>
        <Image 
            className="max-h-[300px] w-auto object-contain rounded-md"
            src={payLoad.imgSrc ? payLoad.imgSrc : "/placeholder.png"}
            width={800}
            height={500}
            alt="product_image"
        />

        <UploadButton 
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                // Do something with the response
                console.log(res);
                
                setpayLoad({
                    ...payLoad,
                    imgSrc: res[0]?.url,
                    fileKey: res[0]?.key,
                });
        
            }}
            onUploadError={(error: Error) => {
                // DO something with error
                console.log(`ERROR! ${error}`);
             }}
        />
        <div>
            <label className="block ml-1">Nama Produk</label>
            <input 
                className="bg-gray-300 w-full px-4 py-2 border outline-blue-600 rounded-md"
                type="text"
                value={payLoad.name}
                onChange={(e) => setpayLoad({...payLoad, name: e.target.value})}
                required
            />
        </div>
        <div>
            <label className="block ml-1">Kategori Produk</label>
            <input 
                className="bg-gray-300 w-full px-4 py-2 border outline-blue-600 rounded-md"
                type="text"
                value={payLoad.category}
                onChange={(e) => setpayLoad({...payLoad, category: e.target.value})}
                required
            />
        </div>
        <div>
            <label className="block ml-1">Harga</label>
            <input 
                className="bg-gray-300 w-full px-4 py-2 border outline-blue-600 rounded-md"
                type="text"
                value={payLoad.price}
                onChange={(e) => setpayLoad({...payLoad, price: e.target.value})}
                required
            />
        </div>

        <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-8 py-2 rounded-md">Tambah</button>
        </div>

    </form>
  );
};

export default ProductFrom;