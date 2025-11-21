interface Props {
	x: number;
	y: number;
	temperature: number;
	dataPoint: string;
}

export function TemperatureWidget({ x, y, temperature, dataPoint }: Props) {
	return (
		<>
			<text x={x} y={y} fontFamily="monospace" fill="white" fontSize="20">
				{temperature?.toFixed(0) + `° C`}
			</text>
			<text x={x - 0} y={y + 40} fill="#808080" fontSize="11">
				{dataPoint}
			</text>
		</>
	);
}
