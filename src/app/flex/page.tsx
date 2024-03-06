"use client"

// import { useEffect, useState } from "react";
import Image from "next/image";
import TextField from '@mui/material/TextField';
import React from "react";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Flex() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    // const [random, setRandom] = useState("");

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         GetRandomColor();
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);

    // const GetRandomColor = () => {
    //     const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    //     setRandom(randomColor);
    // }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-gray-200">
            <div className="flex flex-col justify-evenly rounded-xl w-[450px] h-[620px] bg-white shadow-md">

                <div className="flex justify-center items-center h-[100%]">
                    <div className="flex justify-center items-center flex-col gap-8">
                        <h1 className="font-extrabold text-3xl">Welcome Best</h1>
                        <Image className="hover:w-24 hover:h-24" alt="" src="next.svg" width={70} height={70} />
                    </div>
                </div>

                <div className="h-[100%] flex flex-col gap-4 items-center">
                    <TextField className="w-[270px]" id="standard-basic" label="Email" variant="standard" />
                    <FormControl className="w-[270px]" sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>

                <div className="h-[100%] border-2 border-blue-500"></div>
            </div>
        </div>
    )
}



// md:w-[350px] md:h-[500px] lg:w-[500px] lg:h-[570px]
