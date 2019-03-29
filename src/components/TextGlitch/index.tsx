import * as React from 'react'
import './glitch.css'

interface IProps {
	letterSplit?: boolean
	wrapperClassName?: string
	textClassName?: string
	children: string
}

const TextGlitch: React.SFC<IProps> = (props: IProps) => {
	const { letterSplit, wrapperClassName, textClassName, children } = props

	if (!letterSplit) {
		return (
			<div className={['glitch-wrapper', wrapperClassName].join(' ')}>
				<span className={['glitch', textClassName].join(' ')} data-text={children}>
					{children}
				</span>
			</div>
		)
	}

	if (children) {
		const letters = children.split('')

		return (
			<div className={['glitch-wrapper', wrapperClassName].join(' ')}>
				{letters.map(l => {
					const randomInitForDelay = Math.floor(Math.random() * (3 - 0 + 1)) + 0
					const randomInitForDuration = Math.floor(Math.random() * (3 - 0 + 1)) + 0

					return l === ' ' ? (
						<span className={['glitch-letter', textClassName].join(' ')}>&nbsp;</span>
					) : (
						<div className={['glitch-wrapper', wrapperClassName].join(' ')}>
							<span
								className={[
									'glitch-letter',
									`glitch-delay${randomInitForDelay}`,
									`glitch-duration${randomInitForDuration}`,
									textClassName,
								].join(' ')}
								data-text={l}
							>
								{l}
							</span>
						</div>
					)
				})}
			</div>
		)
	}

	return <h1>Veuillez mettre du contenu...</h1>
}

TextGlitch.defaultProps = {
	letterSplit: false,
}

export default TextGlitch
