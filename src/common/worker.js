export default () => {
	const executeFunction = () => {
		let thing = 0;
		for (let i = 0; i < 2000000000; ++i) {
			thing += i;
		}

		return thing;
	};
	const result = executeFunction();

	postMessage(result);
};