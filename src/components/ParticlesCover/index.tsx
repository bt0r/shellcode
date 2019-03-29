import * as React from 'react'
import Particles from 'react-particles-js'

const ParticlesCover: React.SFC = () => (
	<Particles
		className="absolute pin w-full overflow-hidden z-0"
		params={{
			particles: {
				number: {
					value: 160,
					density: {
						enable: false,
					},
				},
				size: {
					value: 3,
					random: true,
					anim: {
						speed: 4,
						size_min: 0.3,
					},
				},
				line_linked: {
					enable: false,
				},
				move: {
					random: true,
					speed: 1,
					direction: 'top',
					out_mode: 'out',
				},
			},
			interactivity: {
				events: {
					onhover: {
						enable: false,
					},
					onclick: {
						enable: false,
					},
				},
			},
		}}
	/>
)

export default ParticlesCover
