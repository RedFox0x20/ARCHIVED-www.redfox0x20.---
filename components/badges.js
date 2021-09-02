const BadgeList = [
    {
        primary: 'Software Developer',
        secondary: [
            'C',
            'C# & Unity 3D',
            'x86 Assembly',
            'Open Source Contributor',
            'OS Development',
        ],
    },
    {
        primary: 'Web Developer',
        secondary: ['NodeJS', 'ReactJS', 'Yarn', 'TailwindCSS', 'DaisyUI'],
    },
    { primary: 'Information Security', secondary: ['TryHackMe'] },
    { primary: 'Amateur Radio', secondary: ['M7TWS'] },
    { primary: 'Blender', secondary: [] },
];

export function PrimaryBadge({ children }) {
    return <div className="badge mx-1 my-1 badge-primary">{children}</div>;
}

export function SecondaryBadge({ children }) {
    return <div className="badge mx-1 my-1 badge-secondary">{children}</div>;
}

export default function Badges({ reverse = false, newlines = true, children }) {
    function MapBadges({ reverse }) {
        return (
            <>
                {BadgeList.map((primary, primary_idx) => {
                    return (
                        <>
                            {!reverse && primary.primary && (
                                <PrimaryBadge key={primary_idx.toString()}>
                                    {primary.primary}
                                </PrimaryBadge>
                            )}
                            {primary.secondary &&
                                primary.secondary.map(
                                    (secondary_item, secondary_idx) => {
                                        return (
                                            <SecondaryBadge
                                                key={secondary_idx.toString()}
                                            >
                                                {secondary_item}
                                            </SecondaryBadge>
                                        );
                                    }
                                )}
                            {reverse && primary.primary && (
                                <PrimaryBadge>{primary.primary}</PrimaryBadge>
                            )}
                            {newlines && <br />}
                        </>
                    );
                })}
            </>
        );
    }

    return (
        <>
            {MapBadges(reverse)}
            {children}
        </>
    );
}
