import Images from "../../components/Images"

const Screens = () => {
	return (
		<div className="p-5">
			<div><Images type="Achievement" src="Achievement_Eye_on_You.png" /></div>
			Home <a className="p-2 m-2 rounded bg-green-700" href="/item">ItemList</a>
		</div>
	)
}

export default Screens