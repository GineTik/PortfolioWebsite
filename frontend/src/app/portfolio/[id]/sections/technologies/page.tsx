import { Skill, SkillContent, SkillGroup, SkillGroupTitle, SkillHeader } from "@/app/_components/skill/Skill"
import { SiGoogledocs } from "react-icons/si"
import PortfolioLink from "../../components/link/PortfolioLink"
import styles from "./TechnologiesSection.module.scss"

const TechnologiesSection = () => {
  return (
    <div className={styles.section}>
        <SkillGroup index={1}>
          <SkillHeader>
            <SkillGroupTitle>Technologies</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill 
              name={"C#"} 
              description={"is a modern, object-oriented programming language developed by Microsoft, widely used for building Windows applications, web services, and games with frameworks like .NET."} 
              links={[{text: "Microsoft Docs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/"}]}
            />

            <Skill 
              name={"Telegram.Bot"} 
              description={"is a .NET client library that provides a convenient API for creating Telegram bots using C#. It simplifies interaction with the Telegram Bot API."} 
              links={[{text: "GitHub Repository", url: "https://github.com/TelegramBots/Telegram.Bot"}]}
            />

            <Skill 
              name={"Telegram Bot Api"} 
              description={"is an HTTP-based interface created by Telegram to enable developers to build bots that can interact with Telegram users and groups."} 
              links={[{text: "Official Documentation", url: "https://core.telegram.org/bots/api"}]}
            />
          </SkillContent>
        </SkillGroup>

        <SkillGroup index={2}>
          <SkillHeader>
            <SkillGroupTitle>Functionality</SkillGroupTitle>
            <PortfolioLink
              text="Documentation"
              href="https://github.com/GineTik/Telegramper-TelegramFramework/blob/master/README.md"
              icon={<SiGoogledocs />}
            />
          </SkillHeader>
          <SkillContent>
            <Skill name={"Open Source"} description={"Projects or tools that are developed with a source code made freely available for modification and distribution."} />
            <Skill name={"Dependency Injections"} description={"A design pattern in which an object receives other objects that it depends on, promoting loose coupling."} />
            <Skill name={"Controllers"} description={"Components in an MVC pattern that handle user input, work with the model, and select a view to render the UI."} />
            <Skill name={"Middlewares"} description={"Functions that have access to the request object, response object, and the next middleware function in the application’s request-response cycle."} />
            <Skill name={"Configuration"} description={"The process of setting up and managing the settings and options in a system or application to meet specific requirements."} />
            <Skill name={"Target, Validation, Filtration Attributes"} description={"Attributes used in programming to specify targets, validate data, and filter content within applications."} />
            <Skill name={"Dialog System"} description={"A system that manages the flow of conversations or dialogs between the user and the application, often used in chatbots or interactive software."} />
            <Skill name={"Sessions"} description={"A method of persisting user data across multiple requests in web applications, typically used to maintain user state between page reloads."} />
          </SkillContent>
        </SkillGroup>
      </div>
  )
}

export default TechnologiesSection
