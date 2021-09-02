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
    function MapBadges() {
        return (
            <>
                {BadgeList.map((BadgeRow, BadgeRowIdx) => {
                    return (
                        <>
                            {!reverse && BadgeRow.primary && (
                                <PrimaryBadge key={BadgeRowIdx.toString()}>
                                    {BadgeRow.primary}
                                </PrimaryBadge>
                            )}
                            {BadgeRow.secondary &&
                                BadgeRow.secondary.map(
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
                            {reverse && BadgeRow.primary && (
                                <PrimaryBadge key={BadgeRowIdx.toString()}>
                                    {BadgeRow.primary}
                                </PrimaryBadge>
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
