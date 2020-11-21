const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			us: [
				{
					name: "Edward Mendieta",
					background:
						"Edward is an experienced sushi chef, working out of Sushi Sake Doral for the last 8 years. He is happily married and blessed with 3 children",
					img: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getUs: () => {
				return getStore().us;
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
