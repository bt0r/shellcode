import * as React from 'react'

import LinkButton from '../LinkButton'
import DiscordLogo from '../SVG/DiscordLogo'
import Logo from '../SVG/Logo'
import TextGlitch from '../TextGlitch'

const Content: React.SFC = () => (
	<div className="container mx-auto h-screen flex justify-center items-center text-center text-white z-10 relative">
		<header className="w-2/3 lg:w-1/3">
			<Logo className="fill-current text-teal h-32 md:h-48 lg:h-64 w-full" />
			<TextGlitch textClassName="font-hairline font-hacked mt-6 mb-2 text-6xl">ShellCode</TextGlitch>
			<LinkButton
				link="https://discord.gg/4hmDxUn"
				linkClassName="bg-topaz bg-gradient-animation text-white rounded-full uppercase font-hairline font-sans tracking-wide min-h-btn"
			>
				<DiscordLogo className="fill-current w-8 h-8 mr-2 hidden sm:block" />
				Rejoignez-nous sur Discord !
			</LinkButton>
		</header>
	</div>
)

export default Content
