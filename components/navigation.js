import Link from 'next/link'

export default function Navigation() {
    return (
        <nav class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 ">
             
           <div class="hidden w-full md:flex md:items-center md:w-auto mx-auto">
            <ul class ="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0"> 
                <li>
                    <Link href="/">
                    <a class="md:p-4 py-2 block hover:text-gray-400">About</a>
                </Link>
                </li>
            
                <li> 
                <Link href="/posts">
                    <a class="md:p-4 py-2 block hover:text-gray-400">Posts</a>
                </Link>
                </li>
            </ul>
           </div> 
            
        </nav>
    )
}