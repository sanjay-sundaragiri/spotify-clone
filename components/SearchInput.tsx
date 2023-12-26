"use client";

import qs from "query-string";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";

const SearchInput = () => {
     const router = useRouter();
     const [value, setValue]= useState<string>("")
     const debounedValue= useDebounce<string>(value,50)

     useEffect(()=>{
        const query={
            title: debounedValue,

        }

        const url= qs.stringifyUrl({
            url: '/search',
            query:query,
        })
        router.push(url);

     },[debounedValue,router])


  return (
    <Input 
    placeholder="what do you want to listen?"
    value={value}
    onChange={(e)=>setValue(e.target.value)}
    />
  )
}

export default SearchInput