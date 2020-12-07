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
					img:
						"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				},
				{
					name: "Catherine Spitzer",
					background: "Catherine is an award-winning opera singer, working out of Broward.",
					img: "{ profilePic }"
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
					price: "39",
					description:
						"Butcher's cut, grass-fed beef aged 21 days. Served with a red wine reduction and grilled vegetables.",
					img:
						"https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				},
				{
					item: "Spicy Ramen",
					price: "16",
					description:
						"Flavorful organic beef broth, wheat noodles, miso, tender flank steak, soft-boiled egg.",
					img:
						"https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				},
				{
					item: "Roast Chicken",
					price: "24",
					description: "Organic, farm-raised Delaware chicken roasted with lemon-garlic butter.",
					img:
						"https://images.pexels.com/photos/2994900/pexels-photo-2994900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				},
				{
					item: "Vegan Sushi",
					price: "14",
					description: "A blend of pickled vegetables, gelatinized squash, and tapioca cake.",
					img:
						"https://images.pexels.com/photos/3628428/pexels-photo-3628428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				},
				{
					item: "Turkey Club Sandwich",
					price: "15",
					description: "Roasted organic turkey, applewood smoked bacon, Bibb lettuce, garlic aoli.",
					img:
						"https://images.pexels.com/photos/959922/pexels-photo-959922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				},
				{
					item: "Pork Lettuce Cups",
					price: "12",
					description: "Sauteed ground pork, guava soy glaze, pickled cabbage, crispy rice noodles.",
					img:
						"https://images.pexels.com/photos/2531051/pexels-photo-2531051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				},
				{
					item: "Chicken Salad Sandwich",
					price: "14",
					description: "Roast chicken tossed in a curry-garlic mayo, grapes, walnuts, artisan bread.",
					img:
						"https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				},
				{
					item: " Wild Alaskan Salmon",
					price: "31",
					description: "Pan-seared, served with steamed vegetables and homemade lemon aoli.",
					img:
						"https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				}
			],
			cart: [{}]
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
