import Link from 'next/link'

export default function Navigation() {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/posts">
                    <a>Posts</a>
                </Link>
            </li>
        </ul>
    )
}