import { useEffect, useState } from "react";

interface Props {
	x: number;
	y: number;
	temperature: number;
	dataPoint: string;
}

export function FanWidget({ x, y, temperature, dataPoint }: Props) {
	const [angle, setAngle] = useState(0);

	useEffect(() => {
		//store interval, so we can destroy it later
		let intervalId: number | undefined;

		//fan speed
		let fanSpeed: number | null = null;

		/*
			conditions based on temperature from the data stream
		*/
		if (temperature > 10) {
			fanSpeed = 5;
		} else if (temperature < 10) {
			fanSpeed = 15;
		} else {
			fanSpeed = null;
		}

		if (fanSpeed !== null) {
			intervalId = window.setInterval(() => {
				setAngle((a) => (a + 1) % 360);
			}, fanSpeed);
		} else {
			setAngle(0);
		}

		return () => {
			if (intervalId !== undefined) {
				window.clearInterval(intervalId);
			}
		};
	}, [temperature]);

	return (
		<>
			<g transform={`translate(${x}, ${y}) rotate(${angle} 30 30)`}>
				<circle cx="30" cy="30" r="28" fill="#ccc" stroke="#666" />
				<rect x="28" y="5" width="4" height="20" fill="#444" />
				<rect x="28" y="35" width="4" height="20" fill="#444" />
				<rect x="5" y="28" width="20" height="4" fill="#444" />
				<rect x="35" y="28" width="20" height="4" fill="#444" />
			</g>
			<text x={x - 15} y={y + 80} fill="#808080" fontSize="11">
				{dataPoint}
			</text>
		</>
	);
}
