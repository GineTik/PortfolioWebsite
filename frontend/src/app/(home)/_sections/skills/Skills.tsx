"use client"
import { Skill, SkillContent, SkillGroup, SkillGroupTitle, SkillHeader } from "@/app/_components/skill/Skill"
import { Title, TitleGreen, TitleOutline, TitleRow, TitleWhite } from "@/app/_components/text/Title"
import HeadingAnimation from "@/lib/animations/HeadingAnimation"
import { RiArrowDownSLine, RiGithubFill, RiNextjsFill, RiReactjsFill } from "react-icons/ri"
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
            <Skill 
              name={"React/Next.js"} 
              description={"Next.js is a React framework that gives you building blocks to create web applications. This means that Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application"}
              links={[
                {icon: <RiNextjsFill />, text: "Next.js", url: "https://nextjs.org/"},
                {icon: <RiReactjsFill />, text: "React", url: "https://react.dev/"}
              ]} />
            <Skill 
              name={"Redux"} 
              description={"Redux is a state management library often used with JavaScript applications, especially those built with React. It helps manage the state of your application in a predictable way by centralizing the entire state into a single source of truth, known as the \"store\""}
              links={[{text: "Official Site", url: "https://redux.js.org/"}]} />
            <Skill 
              name={"TypeScript"} 
              description={"TypeScript is a superset of JavaScript that adds static types to the language. It was developed by Microsoft to enhance the development experience by catching errors during development rather than at runtime."} 
              links={[{text: "Official Site", url: "https://www.typescriptlang.org"}]}
            />
            <Skill 
              name={"Shacdn/ui"} 
              description={"Shacdn/ui is NOT a component library. It's a collection of reusable components that you can copy and paste into your apps."} 
              links={[{text: "Official Site", url: "https://ui.shadcn.com/"}]}
            />
            <Skill 
              name={"Gsap"} 
              description={"GSAP (GreenSock Animation Platform) is a wildly robust JavaScript animation library built for professionals, enabling high-performance animations across all major browsers."} 
              links={[{text: "Official Site", url: "https://greensock.com/gsap/"}]}
            />
            <Skill 
              name={"SCSS"} 
              description={"SCSS is the most mature, stable, and powerful professional-grade CSS extension language in the world. It extends CSS with variables, nested rules, and mixins, among other features."} 
              links={[{text: "Official Site", url: "https://sass-lang.com/"}]}
            />
            <Skill 
              name={"Tailwind"} 
              description={"Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design directly in your markup."} 
              links={[{text: "Official Site", url: "https://tailwindcss.com"}]}
            />
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={2}>
          <SkillHeader>
            <SkillGroupTitle>Back-end</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill 
              name={"ASP.NET Core"} 
              description={"A cross-platform, high-performance framework for building modern, cloud-based, internet-connected applications."} 
              links={[{text: "Official Site", url: "https://dotnet.microsoft.com/apps/aspnet"}]}
            />
            <Skill 
              name={"Web Api"} 
              description={"A framework for building HTTP services that can be consumed by a broad range of clients, including browsers and mobile devices."}
            />
            <Skill 
              name={"Swagger"} 
              description={"An open-source tool for designing, building, documenting, and consuming RESTful web services."} 
              links={[{text: "Official Site", url: "https://swagger.io"}]}
            />
            <Skill 
              name={"EF Core"} 
              description={"Entity Framework Core is a lightweight, extensible, open-source, and cross-platform version of Entity Framework, used for data access in .NET applications."} 
              links={[{text: "Official Site", url: "https://docs.microsoft.com/en-us/ef/core/"}]}
            />
            <Skill 
              name={"NGinx"} 
              description={"A high-performance HTTP server, reverse proxy, and load balancer, commonly used for serving web applications and APIs."} 
              links={[{text: "Official Site", url: "https://nginx.org"}]}
            />
            <Skill 
              name={"OAuth2.0"} 
              description={"An open standard for access delegation, commonly used as a way to grant websites or applications limited access to user information without exposing passwords."} 
              links={[{text: "Official Site", url: "https://oauth.net/2/"}]}
            />
            <Skill 
              name={"Websocket"} 
              description={"A communication protocol that provides full-duplex communication channels over a single TCP connection, commonly used for real-time applications."}
            />
            <Skill 
              name={"Microservices"} 
              description={"An architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities."}
            />
            <Skill 
              name={"RabbitMq"} 
              description={"An open-source message broker that enables communication between different services in a distributed system using a messaging protocol such as AMQP."} 
              links={[{text: "Official Site", url: "https://www.rabbitmq.com"}]}
            />
            <Skill 
              name={"Redis"} 
              description={"An open-source, in-memory data structure store, used as a database, cache, and message broker, known for its high performance and flexibility."} 
              links={[{text: "Official Site", url: "https://redis.io"}]}
            />
          </SkillContent>
        </SkillGroup>
        <SkillGroup index={3}>
          <SkillHeader>
            <SkillGroupTitle>Web design</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill 
              name={"Figma"} 
              description={"A popular web-based design tool used for UI/UX design, prototyping, and collaboration."} 
              links={[{text: "Official Site", url: "https://www.figma.com"}]}
            />
            <Skill 
              name={"React icons"} 
              description={"A collection of popular icons that can be easily integrated into React applications for UI enhancement."} 
              links={[
                {icon: <RiGithubFill />, text: "GitHub Repository", url: "https://github.com/react-icons/react-icons"},
                {text: "Official Site", url: "https://react-icons.github.io/react-icons/"}
              ]}
            />
          </SkillContent>
        </SkillGroup>

        <SkillGroup index={4}>
          <SkillHeader>
            <SkillGroupTitle>Desktop</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill 
              name={"WPF"} 
              description={"Windows Presentation Foundation (WPF) is a UI framework for building visually compelling desktop applications on Windows."} 
              links={[{text: "Microsoft Docs", url: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/?view=netdesktop-6.0"}]}
            />
            <Skill 
              name={"Win forms"} 
              description={"Windows Forms is a UI framework for building Windows desktop applications, providing a wide range of controls and flexibility."} 
              links={[{text: "Microsoft Docs", url: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/?view=netdesktop-6.0"}]}
            />
          </SkillContent>
        </SkillGroup>

        <SkillGroup index={5}>
          <SkillHeader>
            <SkillGroupTitle>Bots</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill
              name={"Telegramper, C#"} 
              description={"A C# library used for building Telegram bots with easy-to-use interfaces and features. (This is my project)"} 
              links={[{text: "GitHub Repository", url: "https://github.com/GineTik/Telegramper-TelegramFramework"}]}
            />
            <Skill 
              name={"Telegram Bot Api"} 
              description={"An HTTP-based interface created for developers to interact with Telegram servers and create bots."} 
              links={[{text: "Official Site", url: "https://core.telegram.org/bots/api"}]}
            />
          </SkillContent>
        </SkillGroup>
      </div>
    </div>
  )
}

export default SkillsSection
