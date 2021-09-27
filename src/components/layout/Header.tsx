import Images from "../Images"

const Header = (props: {
	toggleSidebar: Function
}) => {
	return (
		<header
			className="flex items-center bg-pink-500 text-white"
		>
			<button
				className="p-2"
				onClick={() => props.toggleSidebar()}
			>
				<Images type="UI" src="menu-left.svg" className="w-8 h-8" />
			</button>
		</header>
	)
}

export default Header