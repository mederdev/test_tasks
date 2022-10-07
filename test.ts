//Вывести все value в консоль, задача на 5 - 10мин, попалась Дену на собесе
//Start time 17:29
//End time 17:36

const linkedList = {
	value: 5,
	next: {
		value: 10,
		next: {
			value: 100,
			next: {
				value: 10000,
				next: {
					value: 20000,
					next: {
						value: 50000,
						next: {
							value: 10000000,
							next: {
								value: 20000000,
								next: {
									value: 5,
									next: null,
								},
							},
						},
					},
				},
			},
		},
	},
};


const showList = (list) => {
	if (list == null) {
		return;
	}
	else {
		console.log(list.value);
		showList(list.next);
	}
}

showList(linkedList);