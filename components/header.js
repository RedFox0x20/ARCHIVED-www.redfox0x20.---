import Link from 'next/link';

export default function Header() {
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="flex-none px-2 mx-2">
                <span className="text-lg font-bold">{'RedFox0x20'}</span>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch hidden md:flex">
                    <Link href="/">
                        <span className="btn btn-ghost btn-sm rounded-btn">{'Home'}</span>
                    </Link>
                    <a
                        className="btn btn-ghost btn-sm rounded-btn"
                        href="https://m7tws.redfox0x20.xyz/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        {'Amateur Radio'}
                    </a>
                </div>
            </div>
        </div>
    );
}
