/*
    a mock websocket for demo purposes.
    simulates a realtime data stream
*/

import type { LiveData } from "../types";

type Callback = (data: LiveData) => void;

export function createMockSocket(callback: Callback) {
	setInterval(() => {
		callback({
			Room1_Temp: parseFloat((Math.random() * 20).toFixed(1)),
		});
	}, 1500);
}
