import Image from 'next/image';

export function ProjectCard({ imgSrc, altTxt, children }) {
    return (
        <div className="card bordered shadow-2xl p-5 flex">
            {imgSrc && (
                <div className="h-64 content-center">
                    <figure>
                        <Image
                            alt={altTxt}
                            height={1080}
                            layout="responsive"
                            src={imgSrc}
                            width={1920}
                        />
                    </figure>
                </div>
            )}
            <div className="card-body flex p-0 md:p-4">{children}</div>
        </div>
    );
}

export function CardTitle({ children }) {
    return (
        <h2 className="card-title justify-self-start text-center">
            {children}
        </h2>
    );
}

export function CardDescription({ children }) {
    return <p className="flex-grow text-center">{children}</p>;
}

export function CardButton({ linkTo, children }) {
    return (
        <a
            className="btn mt-5 h-16 xl:h-12"
            href={linkTo}
            rel="noreferrer"
            target="_blank"
        >
            {children}
        </a>
    );
}
