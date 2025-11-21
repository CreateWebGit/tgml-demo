import { useEffect, useState } from "react";
import { createMockSocket } from "./data/mockSocket";
import { GraphicCanvas } from "./components/GraphicCanvas";
import type { LiveData } from "./types";

export default function App() {
	const [data, setData] = useState<LiveData>({ Room1_Temp: 0 });

	useEffect(() => {
		// setup mock data stream
		createMockSocket((newData) => {
			setData(newData);
		});
	}, []);

	return (
		<div className="container">
			<div>
				<h1>TGML-inspirerad React Widget Demo</h1>
				<p>
					Simulerad vektorvy med datadrivna widgets (fläkt,
					temperatur, alarm). Den här demon visar hur jag tänker kring
					visare/widgets i en TGML-lik miljö.
				</p>
				<p>
					Appen simulerar som sagt ett TGML-liknande widgetsystem i
					React. En mockad datastream uppdaterar temperaturvärden i
					realtid, och varje SVG-baserad widget hämtas via en
					JSON-konfiguration som mappar type, position och datapunkt
					till rätt komponent. Widgets är helt synkade med
					temperaturvärdet och uppdateras automatiskt vid varje
					datapush.
				</p>
			</div>
			<GraphicCanvas data={data} />

			<div>
				<p>mock data stream, updates every 1.5 seconds</p>
				<pre>{JSON.stringify(data, null, 4)}</pre>
			</div>

			<p className="footer">
				&copy; <a href="mailto:kaj@createweb.se">Kaj Olason</a> | <a href="https://createweb.se" target="_blank">Createweb</a> 2025
			</p>
		</div>
	);
}