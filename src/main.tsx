import { render } from "solid-js/web"

const App = () => {
	return (
		<h1>Latom</h1>
	)
}

render(
	() => <App />,
	document.getElementById('app')
)