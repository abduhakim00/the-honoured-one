import React, { useRef } from "react";
import { useRouter } from 'next/router'
import {  useDispatch } from "react-redux";
import { signUp } from "@/store/slicePData";


export default function Home() {
    const router = useRouter()
    const dispatch = useDispatch();
    const fName = useRef()
    const email = useRef()
    const formSubmit = e => {
        e.preventDefault();
        dispatch(signUp([fName.current.value, email.current.value]))
        router.replace('/questions')
    }
    return (
        <main className="flex justify-around mt-6 h-2/3 w-2/3 m-auto ">
            <img className="h-1/2 w-1/2 object-cover rounded-sm shadow-cs shadow-blue-950 transition duration-500 hover:shadow-red-950" src="/assets/pics/sukuna-ryomen-sukuna.gif" alt="Sukuna Image" />
            <form onSubmit={formSubmit} className="relative  font-bold text-red-900 flex flex-col justify-center items-center text-xl">
                <img className="absolute inset-x-0 bottom-0 w-full h-full object-cover z-1 
                overflow-visible transform scale-125 rotate-45" src="/assets/pics/bubble_white.png" alt="Manga bubble" />
                <h1 className="z-0 text-6xl uppercase text-center">Ikuzo Kozo!</h1>
                <div className="z-0 m-1">
                    <label className="block my-2 text-center " htmlFor="fullN">Full Name Sorcerer</label>
                    <input ref={fName} className="text-blue-900 px-1 rounded-sm  bg-gray-400 
                    focus:bg-gray-50 shadow-lg shadow-red-800 focus:shadow-blue-300" required type="text" id="fullN"/>
                </div>
                <div className="z-0 m-1">
                    <label className="block my-2 text-center " htmlFor="email">Your Email</label>
                    <input ref={email} className="text-blue-900 px-1 rounded-sm bg-gray-400
                     focus:bg-gray-50 shadow-lg  shadow-red-800 focus:shadow-blue-300" required type="email" id="email" />
                </div>
                <button className="text-2xl z-0 text-gray-900 mt-3 pb-2 px-3 pt-1 border-8 border-double self-end rounded-sm
                 border-b-red-700 border-l-red-700 border-r-blue-600 border-t-blue-600 hover:shadow-pink-300 hover:shadow-cs">Hajime!</button>
            </form>
        </main>
    )
}