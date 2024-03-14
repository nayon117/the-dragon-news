

import { getAllCategories } from "@/utils/getAllCategories";
// import { useEffect, useState } from "react";

const CategoryList = async () => {
     const {data:allCategories} =await  getAllCategories()
    //  console.log(allCategories);
    return(
        <div>
             <p> Welcome to CategoryList part </p>
        </div>
    )
}
export default CategoryList;