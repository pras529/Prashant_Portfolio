import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import avatar from "./avatar.svg";
import sigma from "./sigma.svg"; // new central icon
import skills from "./skills"; // skill icons array

const GlobalStyle = createGlobalStyle`
  body {
    background: #160c24;
    font-family: 'Quicksand', 'Montserrat', Arial, sans-serif;
    color: #fff;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    letter-spacing: 0.01em;
  }
`;

const Wrapper = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 48px 16px 64px 16px;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarGlow = styled.div`
  margin: 32px 0 16px 0;
  border-radius: 50%;
  background: radial-gradient(circle, #8d5cff 0%, #160c24 70%);
  box-shadow: 0 0 80px 24px #8d5cff55;
  padding: 24px;
`;

const AvatarImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 32px;
`;

const HelloText = styled.span`
  color: #c9a3ff;
  font-size: 1rem;
  margin-bottom: 12px;
`;

const NameLink = styled.a`
  color: #b281ff;
  text-decoration: none;
  font-weight: 600;
  &:hover { text-decoration: underline; }
`;

const Tagline = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  color: #fff;
  text-align: center;
  line-height: 1.2;
  .highlight {
    color: #b281ff;
    font-weight: 600;
  }
  .cover {
    color: #fff;
    position: relative;
    display: inline-block;
    font-weight: 500;
  }
  .cover::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 100%;
    height: 8px;
    background: #a259ff;
    border-radius: 50%;
    opacity: 0.3;
    z-index: -1;
  }
`;

const Subtag = styled.p`
  font-size: 0.88rem;
  color: #d7b8ff;
  margin-top: 4px;
  margin-bottom: 0;
  text-align: center;
  opacity: 0.77;
`;

const Section = styled.section`
  margin: 48px 0;
`;

const Heading = styled.h1`
  font-family: 'Quicksand', Arial, sans-serif;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 18px;
  color: #fff;
`;

const Emphasis = styled.span`
  color: #b281ff;
  font-weight: 500;
`;

const Paragraph = styled.p`
  font-size: 1.07rem;
  color: #e7dcff;
  margin-bottom: 0.7em;
  line-height: 1.6;
`;

const WorkExpTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 24px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 32px;
`;

const ExpCard = styled.div`
  background: radial-gradient(circle, #2d0c4b 0%, #1b0630 100%);
  border-radius: 18px;
  box-shadow: 0 4px 30px 0 #a259ff36;
  padding: 28px 32px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  overflow: hidden;
  min-height: 120px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 2px 60px 0 #a259ff99;
  }
`;

const ExpIcon = styled.div`
  font-size: 2.2rem;
  margin-right: 10px;
`;

const ExpDetails = styled.div`
  flex: 1;
`;

const ExpTitle = styled.h3`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

const ExpDesc = styled.p`
  color: #d3b3ff;
  font-size: 0.98rem;
  margin: 0 0 12px 0;
`;

const LearnMore = styled.a`
  display: inline-block;
  font-size: 0.97rem;
  color: #a259ff;
  text-decoration: none;
  font-weight: 600;
  background: rgba(162,89,255,0.12);
  border-radius: 8px;
  padding: 7px 17px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #a259ff;
    color: #fff;
  }
`;

// --- New Section: Hero Skills ---
const SkillsSection = styled.section`
  margin: 90px 0 80px 0;
  text-align: center;
`;

const LookingText = styled.div`
  font-size: 1.3rem;
  margin-bottom: 7px;
  color: #fff;
  font-weight: 400;
  span {
    color: #83aaff;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const LookingSub = styled.p`
  color: #d7b8ff;
  margin: 0 0 34px 0;
  font-size: 1rem;
`;

const OrbitWrap = styled.div`
  position: relative;
  width: 520px;
  height: 340px;
  margin: 0 auto 0 auto;
  z-index: 1;
`;

const CenterIcon = styled.div`
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: radial-gradient(circle, #a259ff 40%, #2d0c4b 100%);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 60px 0 #a259ff77, 0 0 100px 20px #a259ff33;
`;

const OrbitSVG = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  width: 520px;
  height: 340px;
  pointer-events: none;
`;

const SkillIconsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 0;
`;

const SkillBubble = styled.div`
  background: #25123d;
  border-radius: 50%;
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 12px #a259ff22;
`;

const SkillIconImg = styled.img`
  width: 32px;
  height: 32px;
`;

// --- New Section: Featured Project ---
const ProjectSection = styled.section`
  margin: 110px 0 0 0;
  display: flex;
  gap: 60px;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjectInfo = styled.div`
  min-width: 320px;
  max-width: 380px;
`;

const ProjectLabel = styled.div`
  color: #a6a6ff;
  font-size: 0.94rem;
  letter-spacing: 0.01em;
  margin-bottom: 5px;
  span {
    color: #d7b8ff;
    font-weight: 600;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.45rem;
  color: #fff;
  font-weight: 600;
  margin: 0 0 14px 0;
`;

const ProjectDesc = styled.p`
  background: rgba(68, 30, 90, 0.74);
  border-radius: 14px;
  padding: 17px 22px;
  color: #d7cfff;
  font-size: 1.06rem;
  margin-bottom: 0;
  box-shadow: 0 0 36px #a259ff22;
`;

// Project image representation
const ProjectShowcase = styled.div`
  min-width: 370px;
  min-height: 180px;
  background: radial-gradient(circle, #a259ff33 0%, #2d0c4b 80%);
  border-radius: 18px;
  box-shadow: 0 0 60px 0 #a259ff55;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProjectWireframe = styled.img`
  width: 340px;
  border-radius: 14px;
  opacity: 0.92;
  box-shadow: 0 6px 32px #00000022;
`;

const FooterIcons = styled.div`
  display: flex;
  gap: 17px;
  margin: 44px auto 0 auto;
  justify-content: center;
  opacity: 0.82;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Centered>
          <HelloText>
            Hello! I am <NameLink href="#">Prashant</NameLink>
          </HelloText>
          <AvatarGlow>
            <AvatarImg src={avatar} alt="Avatar" />
          </AvatarGlow>
          <Tagline>
            <span className="highlight">A Developer</span> who<br />
            Judges a book by its <span className="cover">cover</span>..
          </Tagline>
          <Subtag>
            Because if the cover does not impress you what else can?
          </Subtag>
        </Centered>

        {/* New Section: Skills Orbit */}
        <SkillsSection>
          <LookingText>
            I'm currently looking to join a <span>cross-functional</span> team
          </LookingText>
          <LookingSub>
            that values improving people's lives through accessible design
          </LookingSub>
          <OrbitWrap>
            <SkillIconsRow>
              {skills.map((icon, i) => (
                <SkillBubble key={i} style={{
                  position: "absolute",
                  left: `${60 + i * 37}px`,
                  top: "0px",
                  zIndex: 3
                }}>
                  <SkillIconImg src={icon.src} alt={icon.alt} />
                </SkillBubble>
              ))}
            </SkillIconsRow>
            <CenterIcon>
              <img src={sigma} alt="Sigma" style={{ width: 54, height: 54 }} />
            </CenterIcon>
            <OrbitSVG viewBox="0 0 520 340">
              <ellipse cx="260" cy="170" rx="230" ry="90" stroke="#a259ff44" strokeWidth="1.2" fill="none"/>
              <ellipse cx="260" cy="170" rx="180" ry="60" stroke="#a259ff33" strokeWidth="1" fill="none"/>
              <ellipse cx="260" cy="170" rx="120" ry="35" stroke="#a259ff22" strokeWidth="1" fill="none"/>
            </OrbitSVG>
          </OrbitWrap>
        </SkillsSection>

        {/* About */}
        <Section>
          <Heading>I'm a Software Engineer.</Heading>
          <Paragraph>
            Currently, I'm a Student at <Emphasis>Bharati Vidyapeeth's College of Engineering</Emphasis>
          </Paragraph>
          <Paragraph>
            A self-taught Engineer. Ready to function in the industry.<br />
            I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
          </Paragraph>
        </Section>

        {/* Work Experience */}
        <Section>
          <WorkExpTitle>Work Experience</WorkExpTitle>
          <CardsGrid>
            <ExpCard>
              <ExpIcon>⭐</ExpIcon>
              <ExpDetails>
                <ExpTitle>CIB on the Mobile</ExpTitle>
                <ExpDesc>
                  Take your client-based processes to your amazing mobile app and get work done anywhere.
                </ExpDesc>
                <LearnMore href="#">LEARN MORE</LearnMore>
              </ExpDetails>
            </ExpCard>
            <ExpCard>
              <ExpIcon>🪐</ExpIcon>
              <ExpDetails>
                <ExpTitle>CIB on the Mobile</ExpTitle>
                <ExpDesc>
                  Take your client-based processes to your amazing mobile app and get work done anywhere.
                </ExpDesc>
                <LearnMore href="#">LEARN MORE</LearnMore>
              </ExpDetails>
            </ExpCard>
            <ExpCard>
              <ExpIcon>🚀</ExpIcon>
              <ExpDetails>
                <ExpTitle>CIB on the Mobile</ExpTitle>
                <ExpDesc>
                  Take your client-based processes to your amazing mobile app and get work done anywhere.
                </ExpDesc>
                <LearnMore href="#">LEARN MORE</LearnMore>
              </ExpDetails>
            </ExpCard>
          </CardsGrid>
        </Section>

        {/* Featured Project */}
        <ProjectSection>
          <ProjectInfo>
            <ProjectLabel>
              <span>Featured</span> Project
            </ProjectLabel>
            <ProjectTitle>Example Project</ProjectTitle>
            <ProjectDesc>
              A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
            </ProjectDesc>
          </ProjectInfo>
          <ProjectShowcase>
            <ProjectWireframe src="project-wireframe.png" alt="Project Wireframe" />
          </ProjectShowcase>
        </ProjectSection>
        <FooterIcons>
          <span style={{ fontSize: 26 }}>❄️</span>
          <span style={{ fontSize: 26 }}>🌟</span>
        </FooterIcons>
      </Wrapper>
    </>
  );
}

export default App;