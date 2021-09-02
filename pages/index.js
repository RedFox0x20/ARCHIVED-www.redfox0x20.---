import Head from 'next/head';

import {
    ContentSection,
    MainSection,
    SectionContent,
    SectionDescription,
    SectionTitle,
} from '../components/sections';
import Badges from '../components/badges';
import DynamicGrid from '../components/dynamicgrid';
import Footer from '../components/footer';
import Header from '../components/header';
import ProjectCards from '../components/projectcards';

export default function Home() {
    return (
        <div>
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
                <ContentSection>
                    <SectionTitle>{'RedFox0x20'}</SectionTitle>
                    <SectionContent>
                        <SectionDescription>
                            {'A tech enthusiast of some description?'}
                        </SectionDescription>
                        <Badges />
                    </SectionContent>
                </ContentSection>
                <div className="divider" />
                <ContentSection>
                    <SectionTitle>{'Projects'}</SectionTitle>
                    <SectionContent>
                        <SectionDescription>
                            {"Here's some of the projects I have worked on..."}
                        </SectionDescription>
                        <DynamicGrid>
                            <ProjectCards />
                        </DynamicGrid>
                    </SectionContent>
                </ContentSection>
            </MainSection>

            <Footer />
        </div>
    );
}
