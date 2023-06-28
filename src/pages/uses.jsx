import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
  title="Software I use, gadgets I love, and other things I recommend."
  intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
>
  <div className="space-y-20">
    <ToolsSection title="Frameworks">
      <Tool title="React">
        A popular frontend library for building dynamic user interfaces that are reusable and easy to maintain. I use React because it&apos;s	 fast, efficient, and has a large community of developers.
      </Tool>
      
      <Tool title="React Native">
        React Native is an open-source mobile application framework developed by Facebook. It allows developers to build native mobile applications for iOS, Android, and other platforms using JavaScript and React.
      </Tool>
      
      <Tool title="Next.js">
        A popular frontend framework for building dynamic user interfaces that are reusable and easy to maintain. I use Next.js because it&apos;s fast, efficient, and has a large community of developers.
      </Tool>

      <Tool title="Gatsby">
        Gatsby is a free and open-source static site generator based on React. It allows developers to create high-performance websites that can be easily optimized for search engines, load quickly, and deliver an excellent user experience.
      </Tool>

      <Tool title="Redux">
        Redux is a predictable state container for JavaScript apps. It helps manage the application state and enables efficient data flow between components.
      </Tool>

      <Tool title="Storybook">
        Storybook is an open-source tool for developing UI components in isolation. It allows you to build, test, and document components independently, making it easier to develop and maintain your UI.
      </Tool>
    </ToolsSection>
    
    <ToolsSection title="Data Analysis and Visualization">
      <Tool title="Pandas">
        Pandas is a powerful data manipulation and analysis library for Python. It provides easy-to-use data structures and data analysis tools, making it suitable for working with structured data.
      </Tool>
      
      <Tool title="NumPy">
        NumPy is a fundamental package for scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays.
      </Tool>
      
      <Tool title="Matplotlib">
        Matplotlib is a plotting library for Python. It enables you to create a wide variety of static, animated, and interactive visualizations in Python.
      </Tool>
      
      <Tool title="Seaborn">
        Seaborn is a data visualization library based on Matplotlib. It provides a high-level interface for creating informative and attractive statistical graphics.
      </Tool>
      
      <Tool title="Plotly">
        Plotly is a JavaScript graphing library that allows you to create interactive, publication-quality graphs and dashboards. It supports a wide range of chart types and customization options.
      </Tool>
    </ToolsSection>
    
    <ToolsSection title="Cloud Services">
      <Tool title="Firebase">
        Firebase is a comprehensive suite of cloud services for building web and mobile applications. It provides features like real-time database, authentication, hosting, and cloud functions.
      </Tool>
      
      <Tool title="AWS">
        AWS (Amazon Web Services) is a cloud computing platform that offers a wide range of services and tools for building scalable and reliable applications. It includes services for computing, storage, databases, and more.
      </Tool>
      
      <Tool title="Azure">
        Azure is a cloud computing platform provided by Microsoft. It offers a variety of services for building, deploying, and managing applications and services through Microsoft-managed data centers.
      </Tool>
    </ToolsSection>
    
    <ToolsSection title="Testing">
      <Tool title="Jest">
        Jest is a JavaScript testing framework developed by Facebook. It provides a simple and intuitive way to write tests for your JavaScript and React applications.
      </Tool>
      
      <Tool title="Cypress">
        Cypress is an end-to-end testing framework for web applications. It allows you to write tests that simulate user interactions and verify the behavior of your application.
      </Tool>
      
      <Tool title="React Testing Library">
        React Testing Library is a lightweight library for testing React components. It encourages testing components in a way that resembles how they are used by the users.
      </Tool>
      
      <Tool title="Webdriverio">
        Webdriverio is a next-gen browser and mobile automation framework for Node.js. It provides a simple and concise API for interacting with browsers using the WebDriver protocol.
      </Tool>
    </ToolsSection>
    
    <ToolsSection title="Design">
      <Tool title="Figma">
        Figma is a collaborative design tool that allows multiple designers to work on the same project simultaneously. It offers a range of features for creating, prototyping, and collaborating on designs.
      </Tool>
      
      <Tool title="Photoshop">
        Photoshop is a powerful raster graphics editing software developed by Adobe. It provides advanced tools for image editing, compositing, and digital painting.
      </Tool>
      
      <Tool title="AdobeXD">
        Adobe XD is a user experience design and prototyping tool. It enables designers to create interactive prototypes, wireframes, and UI designs for web and mobile applications.
      </Tool>
      
      <Tool title="Premiere Pro">
        Premiere Pro is a professional video editing software developed by Adobe. It offers a comprehensive set of tools for editing, color grading, audio mixing, and video effects.
      </Tool>
    </ToolsSection>
    
    <ToolsSection title="DevOps">
      <Tool title="Azure DevOps">
        Azure DevOps is a set of development tools and services provided by Microsoft. It includes source control, continuous integration, continuous delivery, and project management capabilities.
      </Tool>
      
      <Tool title="Terraform">
        Terraform is an open-source infrastructure as code tool. It allows you to define and provision infrastructure resources across multiple cloud providers using a declarative configuration language.
      </Tool>
    </ToolsSection>
  </div>
</SimpleLayout>
    </>
  )
}
