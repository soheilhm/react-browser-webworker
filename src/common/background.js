import WebWorker from "./workerSetup";
import worker from './worker.js';

const executeWebworker = (next) => {
	let webWorker = new WebWorker(worker);
	webWorker.onmessage = (res) => {
		next(null, {
			worker: webWorker,
			result: res.data,
		})
	};
};



function background() {
	return new Promise((resolve, reject) => {
		executeWebworker((err, { worker, result }) => {
			if (err) {
				reject(err);
				return;
			}

			worker.terminate();
			worker = undefined;

			resolve({ result });
		})
	});
}


export default background;