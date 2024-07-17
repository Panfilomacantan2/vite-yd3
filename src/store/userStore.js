import { create } from 'zustand';

const baseURL = 'https://jsonplaceholder.typicode.com';

export const useUserStore = create((set) => ({
	// State
	count: 0,
	isSigned: false,

	// Actions
	incrementCount: () => set(({ count }) => ({ count: count + 1 })),
	decrementCount: () => set(({ count }) => ({ count: count - 1 })),

	fetchAPI: async () => {
		const response = await fetch(`${baseURL}/todos`);
		const data = await response.json();

		console.log({ data });z

		let output = '';

		data?.map((item, index) => {
			output += `${item}`;
		});

		document.body.innerHTML = output;
	},
}));
