import { Skill, SkillContent, SkillGroup, SkillGroupTitle, SkillHeader } from "@/app/_components/skill/Skill"
import { SiGoogledocs } from "react-icons/si"
import PortfolioLink from "../../components/link/PortfolioLink"
import styles from "./TechnologiesSection.module.scss"

const TechnologiesSection = () => {
  return (
    <div className={styles.section}>
        <SkillGroup index={1}>
          <SkillHeader>
            <SkillGroupTitle>Front-end</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill name={"React/Next.js"} description={"React is a JavaScript library for building user interfaces, and Next.js is a React framework that enables server-side rendering and static site generation."} />
            <Skill name={"Redux"} description={"Redux is a state management library for JavaScript apps, often used with React for predictable state management."} />
            <Skill name={"TypeScript"} description={"TypeScript is a superset of JavaScript that adds static types, helping catch errors during development."} />
            <Skill name={"Shacdn/ui"} description={"Shacdn/ui is a collection of reusable components that you can copy and paste into your apps."} />
            <Skill name={"GSAP"} description={"GSAP (GreenSock Animation Platform) is a robust JavaScript animation library built for high-performance animations."} />
            <Skill name={"SCSS"} description={"SCSS is a mature, stable, and powerful CSS extension language that adds features like variables, nested rules, and mixins."} />
            <Skill name={"Tailwind"} description={"Tailwind CSS is a utility-first framework packed with classes that can be composed to build any design directly in your markup."} />
          </SkillContent>
        </SkillGroup>

        <SkillGroup index={2}>
          <SkillHeader>
            <SkillGroupTitle>Back-end</SkillGroupTitle>
          </SkillHeader>
          <SkillContent>
            <Skill name={"Microservices"} description={"An architectural style that structures an application as a collection of loosely coupled services, each implementing specific business capabilities."} />
            <Skill name={"Clean Architecture"} description={"A design pattern that separates the elements of a software solution into layers, promoting separation of concerns and making the system easier to maintain and test."} />
            <Skill name={"Docker"} description={"Docker is a platform for developing, shipping, and running applications in containers, ensuring consistency across different environments."} />
            <Skill name={"NGinx"} description={"NGINX is a high-performance HTTP server, reverse proxy, and load balancer, commonly used to serve web applications and APIs."} />
            <Skill name={"Redis"} description={"Redis is an in-memory data structure store, used as a database, cache, and message broker, known for its high performance and flexibility."} />
            <Skill name={"RabbitMQ"} description={"RabbitMQ is an open-source message broker that enables communication between different services in a distributed system using a messaging protocol like AMQP."} />
            <Skill name={"Kafka"} description={"Kafka is a distributed streaming platform used for building real-time data pipelines and streaming applications, capable of handling large volumes of data with high throughput."} />
          </SkillContent>
        </SkillGroup>

        <SkillGroup index={3}>
          <SkillHeader>
            <SkillGroupTitle>Functionality</SkillGroupTitle>
            <PortfolioLink
              text="Documentation"
              href="#"
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
