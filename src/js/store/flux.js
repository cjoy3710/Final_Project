import rigoImage from "../../img/rigo-baby.jpg";
import profilePic from "../../img/profile-pic.png";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			us: [
				{
					name: "Edward Mendieta",
					background:
						"Edward is an experienced sushi chef, working out of Sushi Sake Doral for the last 8 years. He is happily married and blessed with 3 children",
					img: { profilePic }
				},
				{
					name: "Catherine Spitzer",
					background: "Catherine is an award-winning opera singer, working out of Broward.",
					img: { profilePic }
				},
				{
					name: "David Wimert",
					background: "David is an oscar-winning film editor, working out of Miami.",
					img: { profilePic }
				}
			],
			menu: [
				{
					item: "Fillet Mignon",
					price: "39"
				},
				{
					item: "Fillet Mignon",
					price: "39"
				},
				{
					item: "Fillet Mignon",
					price: "39"
				},
				{
					item: "Fillet Mignon",
					price: "39"
				},
				{
					item: "Fillet Mignon",
					price: "39"
				},
				{
					item: "Fillet Mignon",
					price: "39"
				}
			]
		},
		actions: {
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
