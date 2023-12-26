"use client";

import Button from "@/components/Button";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AccountContent = () => {

    const router= useRouter();
    const{isLoading,subscription, user}= useUser();

    const[loading,setLoading]= useState(false)

    useEffect(()=>{
        if(!isLoading && !user){
            router.replace('/')
        }

    },[isLoading,user,router])


  return (
    <div className="mb-7 px-6">
        <div className="flex flex-col gap-y-4">
            <p>No Active Plan.</p>
            <Button className="w-[200px]">
                Subscribe
            </Button>
        </div>

    </div>
  )
}

export default AccountContent