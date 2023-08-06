import React from 'react'
import GithubLogo from 'remixicon/icons/Logos/github-fill.svg'
import LinkedInLogo from 'remixicon/icons/Logos/linkedin-box-fill.svg'
import StackOverflowLogo from 'remixicon/icons/Logos/stack-overflow-fill.svg'
import Logo from './logo'

interface Props {
  className?: string
}

export default function ProfileLinks(props: Props) {
  const { className } = props

  return (
    <div className={`space-x-6 ${className}`}>
      <Logo
        href="https://www.linkedin.com/in/simonorono"
        name="linkedin"
        src={LinkedInLogo.src}
      />

      <Logo
        href="https://github.com/simonorono"
        name="github"
        src={GithubLogo.src}
      />

      <Logo
        href="https://stackoverflow.com/users/3001663/sim%c3%b3n-oro%c3%b1o"
        name="stack overflow"
        src={StackOverflowLogo.src}
      />
    </div>
  )
}
