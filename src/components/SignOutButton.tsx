"use client";

import {  signOut } from "next-auth/react";
import { FC, useState } from "react";
import Button from "./ui/Button";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutWithGoogle =async ()=>{
    setIsLoading(true)
    try {
        await signOut()
    } catch (error) {
        // toast({
        //     title :'Error signing out',
        //     message: 'Please try again later',
        //     type:'error'
        // })
    }

  }



  return <Button onClick={signOutWithGoogle} isLoading={isLoading}>Sign Out</Button>;
};

export default SignOutButton;
