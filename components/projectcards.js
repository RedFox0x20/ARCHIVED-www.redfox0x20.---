import { CardButton, CardDescription, CardTitle, ProjectCard } from './cards';

import AnonSVG from '../public/anon.svg';
import GitHubLogo from '../public/GitHub.svg';
import MHFLogo from '../public/MHF-Color.svg';

export default function ProjectCards({ children }) {
    return (
        <>
            <ProjectCard
                altTxt="Guy Fawkes mask because I don't have a logo for the project..."
                imgSrc={AnonSVG}
            >
                <CardTitle>{'RedFox32'}</CardTitle>
                <CardDescription>{'OS Development Project'}</CardDescription>
                <CardButton linkTo="https://github.com/RedFox0x20/RedFox32#redfox32-complete-repository">
                    {'Project on GitHub'}
                </CardButton>
            </ProjectCard>
            <ProjectCard
                altTxt="Margarita Humanitarian Foundation Logo - A planet and heart with the letters M H F"
                imgSrc={MHFLogo}
            >
                <CardTitle>{'Margarita Humanitarian Foundation'}</CardTitle>
                <CardDescription>
                    {'Help A Family Collaborator'}
                </CardDescription>
                <CardButton linkTo="https://helpafamily.margaritahumanitarian.org/">
                    {'View the site'}
                </CardButton>
                <CardButton linkTo="https://github.com/margaritahumanitarian/helpafamily#helpafamilymargaritahumanitarianorg">
                    {'Project on GitHub'}
                </CardButton>
            </ProjectCard>
            <ProjectCard altTxt="The GitHub octo-cat logo" imgSrc={GitHubLogo}>
                <CardTitle>{'Projects on GitHub'}</CardTitle>
                <CardDescription>
                    {'Take a look at my other projects'}
                </CardDescription>
                <CardButton linkTo="https://github.com/RedFox0x20/">
                    {'RedFox0x20 on GitHub'}
                </CardButton>
            </ProjectCard>
            {children}
        </>
    );
}
