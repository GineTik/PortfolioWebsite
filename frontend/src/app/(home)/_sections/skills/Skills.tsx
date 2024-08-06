"use client"
import { Skill, SkillContent, SkillGroup, SkillGroupTitle, SkillHeader } from "@/app/_components/skill/Skill"
import { Title, TitleGreen, TitleOutline, TitleRow, TitleWhite } from "@/app/_components/text/Title"
import HeadingAnimation from "@/lib/animations/HeadingAnimation"
import { RiArrowDownSLine } from "react-icons/ri"
import styles from "./Skills.module.scss"

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
            <SkillGroupTitle>Front-end</SkillGroupTitle>
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
            <SkillGroupTitle>Back-end</SkillGroupTitle>
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
            <SkillGroupTitle>Web design</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill>Figma</Skill>
            <Skill>React icons</Skill>
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={4}>
          <SkillHeader>
            <SkillGroupTitle>Desktop</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill>WPF</Skill>
            <Skill>Win forms</Skill>
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={5}>
          <SkillHeader>
            <SkillGroupTitle>Bots</SkillGroupTitle>
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
