function current() {
	const executeFunction = () => {
		let thing = 0;
		for (let i = 0; i < 2000000000; ++i) {
			thing += i;
		}

		return thing;
	};
	return new Promise((resolve, reject) => {
		const result = executeFunction();
		resolve({ result });
	});

}


export default current;