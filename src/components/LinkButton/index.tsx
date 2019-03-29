import * as React from 'react'

interface IProps {
	link: string
	children: any
	linkClassName?: string
}

const LinkButton: React.SFC<IProps> = (props: IProps) => {
	const { link, linkClassName, children } = props
	const buttonClassName = `mt-4 py-2 px-4 inline-flex items-center no-underline ${linkClassName}`

	return (
		<a href={link} className={buttonClassName}>
			{children}
		</a>
	)
}

export default LinkButton
