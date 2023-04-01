import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta
          name="description"
          content="Meet Estehsan Tariq: The Multi-Talented Marketing Maverick from Gothenburg"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Meet Estehsan Tariq: The Multi-Talented Marketing Maverick from Gothenburg
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              Are you looking for a talented freelancer who can take your business to the next level? Look no further than Estehsan Tariq. With years of experience as a successful entrepreneur, developer, UI/UX designer, and photographer, Estehsan has the skills and expertise to help you achieve your goals.

</p>
              <p>
              Based in the beautiful city of Gothenburg, Estehsan has worked with a wide range of clients across different industries, from small startups to large corporations. Whether you need a website built from scratch, a stunning photo shoot for your product, or a complete branding overhaul, Estehsan has the talent and creativity to make it happen.


              </p>
              <p>
              What sets Estehsan apart from other freelancers is his ability to truly understand your business and your customers. He takes the time to listen to your needs and goals, and uses his expertise to craft a customized solution that will exceed your expectations. Plus, with his background in entrepreneurship, Estehsan knows what it takes to succeed in today&apos;s competitive market, and he&apos;ll work tirelessly to help you achieve your vision.


              </p>
              <p>
              So if you&apos;re ready to take your business to new heights, don&apos;t hesitate to contact Estehsan Tariq today. With his unparalleled talent and dedication, he&apos;s the freelance superstar you&apos;ve been searching for.




              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
           
              <SocialLink href="https://www.instagram.com/estehsaan/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/estehsan" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/estehsan/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:estehsaan@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                estehsaan@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
