import { Main } from "next/document";

export default function Custom500(){
    return (
        <main className="w-full h-96 m-2 flex flex-col justify-center ">
            <h1 className="text-center text-red-900 text-9xl">500!</h1>
            <h2 className="text-center text-5xl">Hey, looks like we got a problem, <br /> server ain't responding!</h2>
        </main>
    )
}