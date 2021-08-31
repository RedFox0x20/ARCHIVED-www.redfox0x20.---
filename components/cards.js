import Image from 'next/image';

export function ProjectCard({ imgSrc, altTxt, children }) {
    return (
        <div className="card bordered max-w-s shadow-2xl p-5">
            {imgSrc && (
                <figure>
                    <Image
                        alt={altTxt}
                        src={imgSrc}
                        layout="responsive"
                        width={1920}
                        height={1080}
                    />
                </figure>
            )}
            <div className="card-body flex">{children}</div>
        </div>
    );
}

export function CardTitle({ children }) {
    return <h2 className="card-title justify-self-start">{children}</h2>;
}

export function CardDescription({ children }) {
    return <p className="flex-grow">{children}</p>;
}

export function CardButton({ linkTo, children }) {
    return (
        <a className="btn mt-5" href={linkTo} rel="noreferrer" target="_blank">
            {children}
        </a>
    );
}
