import ProductFrom from "@/components/admin-panel/ProductFrom";
import React from "react";

const products = () => {
  return (
    <div className="h-[calc(100vh-96px)] w-full grid place-items-center overflow-y-auto p-4">
        <div className="bg-white w-[300px] rounded-lg">
            <ProductFrom />
        </div>
    </div>
  )
}

export default products