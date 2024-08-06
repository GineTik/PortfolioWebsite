"use client"
import { Title, TitleGreen, TitleOutline, TitleRow, TitleWhite } from "@/app/_components/text/Title"
import HeadingAnimation from "@/lib/animations/HeadingAnimation"
import { RiArrowDownSLine } from "react-icons/ri"
import styles from "./Skills.module.scss"
import { Skill, SkillContent, SkillGroup, SkillHeader } from "./components/skill/Skill"

const SkillsSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.section__icon}>
        <RiArrowDownSLine />
        <RiArrowDownSLine />
        <RiArrowDownSLine />
      </div>

      <Title>
        <TitleRow>
          <TitleOutline>What</TitleOutline>
        </TitleRow>
        <TitleRow>
          <TitleWhite>can</TitleWhite>
        </TitleRow>
        <TitleRow>
          <TitleWhite>I</TitleWhite>
          <TitleGreen className={styles.title__green} animate={HeadingAnimation}>do with my skills?</TitleGreen>
        </TitleRow>
      </Title>

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
            <Skill>Web Api</Skill>
            <Skill>Swagger</Skill>
            <Skill>EF Core</Skill>
            <Skill>NGinx</Skill>
            <Skill>OAuth2.0</Skill>
            <Skill>Websocket</Skill>
            <Skill>Microservices</Skill>
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
            <Skill>React icons</Skill>
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
            <Skill>Telegram Bot Api</Skill>
          </SkillContent>
        </SkillGroup>
      </div>
    </div>
  )
}

export default SkillsSection
