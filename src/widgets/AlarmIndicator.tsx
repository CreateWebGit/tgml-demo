interface Props {
	x: number;
	y: number;
	temperature: number;
	dataPoint: string;
}

export function AlarmIndicator({ x, y, temperature, dataPoint }: Props) {
	return (
		<>
			<rect
				x={x}
				y={y}
				width={52}
				height={52}
				fill={temperature > 10 ? "red" : "green"}
				rx={8}
			/>
			<text x={x - 0} y={y + 75} fill="#808080" fontSize="11">
				{dataPoint}
			</text>
		</>
	);
}
