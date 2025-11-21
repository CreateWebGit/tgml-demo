import rawConfig from "../data/widgetConfig.json";
import { FanWidget } from "../widgets/FanWidget";
import { TemperatureWidget } from "../widgets/TemperatureWidget";
import { AlarmIndicator } from "../widgets/AlarmIndicator";
import { WidgetType } from "../types";

const widgetMap = {
	[WidgetType.Fan]: FanWidget,
	[WidgetType.Temperature]: TemperatureWidget,
	[WidgetType.Alarm]: AlarmIndicator,
};

interface WidgetConfigItem {
	type: WidgetType;
	x: number;
	y: number;
	dataPoint: string;
}

interface WidgetConfig {
	widgets: WidgetConfigItem[];
}

const config = rawConfig as WidgetConfig;

interface LiveData {
	Room1_Temp: number;
}

interface Props {
	data: LiveData;
}

/* 
	loop through the widget config and display active widgets.
	data is recieved from mockSocket.ts
*/

export function GraphicCanvas({ data }: Props) {
	return (
		<svg width="100%" height={200} style={{ backgroundColor: "#353535" }}>
			{config.widgets.map((w, i) => {
				const Widget = widgetMap[w.type];

				return (
					<Widget
						key={i}
						x={w.x}
						y={w.y}
						dataPoint={w.dataPoint}
						temperature={data.Room1_Temp ?? 0}
					/>
				);
			})}
		</svg>
	);
}
