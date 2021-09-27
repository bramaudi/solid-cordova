import Images from "../Images"
import pkg from "../../../package.json"

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> {
      sidebarjs?: boolean;
    }
  }
}

const Sidebar = (props: {
	sidebarRef: HTMLDivElement
}) => {	
	return (
		<div sidebarjs ref={props.sidebarRef}>
			<div className="p-4 py-2 bg-pink-500 text-white">
				<Images className="w-10 h-10" type="UI" src="logo.png" />
				<div className="flex items-center font-semibold">
					Terracraft
					<div className="ml-auto">v{pkg.version}</div>
				</div>
			</div>
			<nav>
				<a className="block p-4 py-2 hover:bg-gray-200" href="link">Home</a>
				<a className="block p-4 py-2 hover:bg-gray-200" href="link">About</a>
				<a className="block p-4 py-2 hover:bg-gray-200" href="link">Contacts</a>
			</nav>
		</div>
	)
}

export default Sidebar