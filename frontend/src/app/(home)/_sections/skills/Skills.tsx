"use client"
import { useRef } from "react"
import { RiArrowDownSLine } from "react-icons/ri"
import styles from "./Skills.module.scss"
import AnimationText from "./components/animation-text/AnimationText"
import { Skill, SkillContent, SkillGroup, SkillHeader } from "./components/skill/Skill"

const Skills = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  return (
    <div className={styles.section}>
      <div className={styles.section__icon}>
        <RiArrowDownSLine />
        <RiArrowDownSLine />
        <RiArrowDownSLine />
      </div>
      <h2 className={styles.section__title} ref={titleRef}>
        <AnimationText className={styles.title__row}>
          <span className={styles.title__outline}>What</span>
        </AnimationText>
        <AnimationText className={styles.title__row}>
          <span className={styles.title__white}>can</span>
        </AnimationText>
        <AnimationText className={styles.title__row}>
          <span className={styles.title__white}>I</span>
          <AnimationText className={styles.title__green}>do with my skills?</AnimationText>
        </AnimationText>
      </h2>
      <div className={styles.section__groups}>
        <SkillGroup index={1}>
          <SkillHeader>
            <h3 className={styles.group__title}>Front-end</h3>
          </SkillHeader>
          <SkillContent>
            <Skill>React/Next.js</Skill>
            <Skill>Redux</Skill>
            <Skill>TypeScript</Skill>
            <Skill>
              <span>Shacdn/ui</span>
              {/* <FaLink /> */}
            </Skill>
            <Skill>Gsap</Skill>
            <Skill>SCSS</Skill>
            <Skill>Tailwind</Skill>
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={2}>
          <SkillHeader>
            <h3 className={styles.group__title}>Back-end</h3>
          </SkillHeader>
          <SkillContent>
            <Skill>ASP.NET Core</Skill>
            <Skill>EF Core</Skill>
            <Skill>NGinx</Skill>
            <Skill>OAuth2.0</Skill>
            <Skill>Websocket</Skill>
            <Skill>RabbitMq</Skill>
            <Skill>Kafka</Skill>
            <Skill>Redis</Skill>
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={3}>
          <SkillHeader>
            <h3 className={styles.group__title}>Web design</h3>
          </SkillHeader>
          <SkillContent>
            <Skill>Figma</Skill>
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={4}>
          <SkillHeader>
            <h3 className={styles.group__title}>Desktop</h3>
          </SkillHeader>
          <SkillContent>
            <Skill>WPF</Skill>
            <Skill>Win forms</Skill>
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={5}>
          <SkillHeader>
            <h3 className={styles.group__title}>Bots</h3>
          </SkillHeader>
          <SkillContent>
            <Skill>Telegramper, C#</Skill>
          </SkillContent>
        </SkillGroup>
      </div>
    </div>
  )
}

export default Skills
