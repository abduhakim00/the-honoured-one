import Link from "next/link"
export default function Nav(){
    return (
        <nav className="flex justify-between items-center my-2 h-1/5 pb-1 mx-24 px-12 border-b-2  border-red-900 transition-colors duration-500	
         hover:border-blue-950">
            <Link href="/"><img className="w-1/3 h-1/3 object-contain p-0" src="/assets/pics/jjk_logo.png" alt="JJK Logo" /></Link>
            <img className="animate-pulse w-1/6 h-1/6 object-contain p-0 m-0" src="/assets/pics/sukuna_tattoo.png" alt="Sukuna face" />
        </nav>
    )
}