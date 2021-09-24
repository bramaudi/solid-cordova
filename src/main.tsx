import { render } from "solid-js/web"
import { Router, useRoutes, hashIntegration } from "solid-app-router"
import routes from "./routes" // <- auto-generated
import NavLinks from "./components/NavLinks"
import "./tailwind.css"

const App = () => {
	const Routes = useRoutes(routes)
	return (
		<Router source={hashIntegration()}>
			<NavLinks />
			<Routes />
		</Router>
	)
}

const $app = document.getElementById('app')
render(() => <App />, $app)