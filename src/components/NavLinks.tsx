import { Link } from "solid-app-router"

const NavLinks = () => {
	return (
		<nav>
			<Link href="/">Home</Link> | 
			<Link href="/about">About</Link> | 
			<Link href="/boss">Boss Index</Link> | 
			<Link href="/boss/amogus">Boss Slug</Link> | 
			<Link href="/asgfaksjh">404</Link> | 
		</nav>
	)
}

export default NavLinks