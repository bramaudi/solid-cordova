import type { Accessor, JSXElement } from "solid-js"
import { onMount, onCleanup } from "solid-js"
import { SidebarElement } from 'sidebarjs'
import Header from "./Header"
import Sidebar from "./Sidebar"

const Layout = (props: {
	view: Accessor<() => JSXElement>
}) => {
	let sidebarjs: SidebarElement
	const refs: {
		sidebar?: HTMLDivElement
		content?: HTMLDivElement
	} = {}

	onMount(() => {
		sidebarjs = new SidebarElement({
			component: refs.sidebar,
			mainContent: refs.content,
			responsive: true
		})
	})
	onCleanup(() => {
		sidebarjs.destroy()
	})

	return (
		<>
			<Sidebar sidebarRef={refs.sidebar} />
			<div ref={refs.content}>
				<Header toggleSidebar={() => sidebarjs.toggle()} />
				{props.view()}
			</div>
		</>
	)
}

export default Layout