import { Skill, SkillContent, SkillGroup, SkillGroupTitle, SkillHeader } from "@/app/_components/skill/Skill"
import { SiGoogledocs } from "react-icons/si"
import PortfolioLink from "../../components/link/PortfolioLink"
import styles from "./TechnologiesSection.module.scss"

const TechnologiesSection = () => {
  return (
    <div className={styles.page__technologies}>
        <SkillGroup index={1}>
          <SkillHeader>
            <SkillGroupTitle>Front-end</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill>React/Next.js</Skill>
            <Skill>Redux</Skill>
            <Skill>TypeScript</Skill>
            <Skill>
              <span>Shacdn/ui</span>
            </Skill>
            <Skill>Gsap</Skill>
            <Skill>SCSS</Skill>
            <Skill>Tailwind</Skill>
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={2}>
          <SkillHeader>
            <SkillGroupTitle>Back-end</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill>React/Next.js</Skill>
            <Skill>Redux</Skill>
            <Skill>TypeScript</Skill>
            <Skill>
              <span>Shacdn/ui</span>
            </Skill>
            <Skill>Gsap</Skill>
            <Skill>SCSS</Skill>
            <Skill>Tailwind</Skill>
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={3}>
          <SkillHeader>
            <SkillGroupTitle>Functionality</SkillGroupTitle>
            <PortfolioLink
              text="documentation"
              href="#"
              icon={<SiGoogledocs />}
            />
          </SkillHeader>
          <SkillContent>
            <Skill>Open source</Skill>
            <Skill>Dependency injections</Skill>
            <Skill>Controllers</Skill>
            <Skill>Middlewares</Skill>
            <Skill>Configuration</Skill>
            <Skill>Target, validation, filtration attributes</Skill>
            <Skill>Dialog system</Skill>
            <Skill>Sessions</Skill>
          </SkillContent>
        </SkillGroup>
      </div>
  )
}

export default TechnologiesSection
