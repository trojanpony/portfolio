import Link from 'next/link'

export default function Navigation() {
    return (
        <nav class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-gray-200">
            <div>
                <svg class="h-6 w-6 cursor-pointer md:hidden block"></svg>
            </div>
            <ul class ="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0"> 
                <li><Link href="/">
                    <a>About</a>
                </Link>
                </li>
            
                <li> 
                <Link href="/posts">
                    <a>Posts</a>
                </Link>
                </li>
            </ul>
            
            
        </nav>
    )
}