import Head from 'next/head';
import Image from 'next/image';

import {
    CardButton,
    CardDescription,
    CardTitle,
    ProjectCard,
} from '../components/cards';
import { CollapseAlwaysOpen } from '../components/collapse';
import Footer from '../components/footer';
import Header from '../components/header';
import MainSection from '../components/main';

import MHFLogo from '../public/MHF-Color.svg';
import PlaceHolderImage from '../public/placeholder.png';

export default function Home() {
    return (
        <div className="min-h-screen">
            <Head>
                <title>{'RedFox0x20'}</title>
                <meta
                    content="RedFox0x20 | Operating System Development | Open Source Contributing | Amateur Radio"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>

            <Header />

            <MainSection>
                <CollapseAlwaysOpen title="$ whoami">
                    <div className="grid grid-flow-col grid-cols-3 w-3/4 m-auto gap-12">
                        <div className="avatar col-span-1 m-auto mx-2">
                            <div className="mb-8 rounded-btn w-48 h-48">
                                <Image
                                    alt=""
                                    layout="fill"
                                    src={PlaceHolderImage}
                                />
                            </div>
                        </div>
                        <div className="text-justify mx-auto">
                            <p>{'Tech enthusiast focussing on'}</p>
                            <ul className="list-disc">
                                <li>{'Open Source Software'}</li>
                                <li>{'Operating Systems'}</li>
                                <li>{'Amateur Radio'}</li>
                                <li>{'Cyber Security'}</li>
                            </ul>
                        </div>
                        <div className="col-span-2">
                            <div className="badge mx-1 my-1 badge-primary">
                                {'Software developer'}
                            </div>
                            <div className="badge mx-1 my-1 badge-secondary">
                                {'C'}
                            </div>
                            <div className="badge mx-1 my-1 badge-secondary">
                                {'C# &amp; Unity 3D'}
                            </div>
                            <div className="badge mx-1 my-1 badge-secondary">
                                {'x86 Assembly'}
                            </div>
                            <div className="badge mx-1 my-1 badge-secondary">
                                {'Open Source Contributor'}
                            </div>
                            <div className="badge mx-1 my-1 badge-primary">
                                {'Information Security'}
                            </div>
                            <div className="badge mx-1 my-1 badge-secondary">
                                {'TryHackMe'}
                            </div>
                            <div className="badge mx-1 my-1 badge-primary">
                                {'Amateur Radio'}
                            </div>
                            <div className="badge mx-1 my-1 badge-secondary">
                                {'M7TWS'}
                            </div>
                            <div className="badge mx-1 my-1 badge-primary">
                                {'Blender'}
                            </div>
                            <div className="badge mx-1 my-1 badge-primary">
                                {'Web developer'}
                            </div>
                            <div className="badge mx-1 my-1 badge-secondary">
                                {'NodeJS'}
                            </div>
                            <div className="badge mx-1 my-1 badge-secondary">
                                {'Yarn'}
                            </div>
                            <div className="badge mx-1 my-1 badge-secondary">
                                {'React - NextJS'}
                            </div>
                        </div>
                    </div>
                </CollapseAlwaysOpen>
                <CollapseAlwaysOpen title="Projects">
                    <div className="grid grid-cols-3 w-3/4 m-auto gap-x-5 gap-y-8">
                        <ProjectCard imgSrc={PlaceHolderImage}>
                            <CardTitle>
                                {'RedFox32'}
                                <br />
                                <span className="invisible">{'_'}</span>
                            </CardTitle>
                            <CardDescription>
                                {'OS Development Project'}
                            </CardDescription>
                            <CardButton linkTo="https://github.com/RedFox0x20/RedFox32">
                                {'Project on GitHub'}
                            </CardButton>
                        </ProjectCard>
                        <ProjectCard imgSrc={MHFLogo}>
                            <CardTitle>
                                {'Margarita Humanitarian Foundation'}
                            </CardTitle>
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
                    </div>
                </CollapseAlwaysOpen>
            </MainSection>

            <Footer />
        </div>
    );
}
