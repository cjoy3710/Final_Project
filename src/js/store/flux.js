import rigoImage from "../../img/rigo-baby.jpg";
import profilePic from "../../img/profile-pic.png";
import { useState } from "react";
import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			us: [
				{
					name: "Edward Mendieta",
					background:
						"Edward is an experienced sushi chef, working out of Sushi Sake Doral for the last 8 years. He is happily married and blessed with 3 children",
					img:
						"https://images.pexels.com/photos/3437689/pexels-photo-3437689.jpeg?cs=srgb&dl=pexels-sebastian-coman-photography-3437689.jpg&fm=jpg"
				},
				{
					name: "Catherine Spitzer",
					background: "Catherine is an award-winning opera singer, working out of Broward.",
					img:
						"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.scienceabc.com%2Fwp-content%2Fuploads%2F2017%2F05%2FLady-opera-singer-singing-on-stage-waagnerbirocom.jpg&f=1&nofb=1"
				},
				{
					name: "David Wimert",
					background: "David is an oscar-winning film editor, working out of Miami.",
					img:
						"https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
				}
			],
			product: [
				{
					item: "Fillet Mignon",
					price: "39",
					img:
						"https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 1
				},
				{
					item: "Spicy Ramen",
					price: "16",
					img:
						"https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 2
				},
				{
					item: "Roast Chicken",
					price: "24",
					img:
						"https://images.pexels.com/photos/2994900/pexels-photo-2994900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 3
				}
			],
			menu: [
				{
					item: "Fillet Mignon",
					price: "39",
					description:
						"Butcher's cut, grass-fed beef aged 21 days. Served with a red wine reduction and grilled vegetables.",
					img:
						"https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 1
				},
				{
					item: "Spicy Ramen",
					price: "16",
					description:
						"Flavorful organic beef broth, wheat noodles, miso, tender flank steak, soft-boiled egg.",
					img:
						"https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 2
				},
				{
					item: "Roast Chicken",
					price: "24",
					description: "Organic, farm-raised Delaware chicken roasted with lemon-garlic butter.",
					img:
						"https://images.pexels.com/photos/2994900/pexels-photo-2994900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 3
				},
				{
					item: "Vegan Sushi",
					price: "14",
					description: "A blend of pickled vegetables, gelatinized squash, and tapioca cake.",
					img:
						"https://images.pexels.com/photos/3628428/pexels-photo-3628428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 4
				},
				{
					item: "Turkey Club Sandwich",
					price: "15",
					description: "Roasted organic turkey, applewood smoked bacon, Bibb lettuce, garlic aoli.",
					img:
						"https://images.pexels.com/photos/959922/pexels-photo-959922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 5
				},
				{
					item: "Pork Lettuce Cups",
					price: "12",
					description: "Sauteed ground pork, guava soy glaze, pickled cabbage, crispy rice noodles.",
					img:
						"https://images.pexels.com/photos/2531051/pexels-photo-2531051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 6
				},
				{
					item: "Chicken Salad Sandwich",
					price: "14",
					description: "Roast chicken tossed in a curry-garlic mayo, grapes, walnuts, artisan bread.",
					img:
						"https://images.pexels.com/photos/3609894/pexels-photo-3609894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 7
				},
				{
					item: " Wild Alaskan Salmon",
					price: "31",
					description: "Pan-seared, served with steamed vegetables and homemade lemon aoli.",
					img:
						"https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					id: 8
				}
			],
			cart: []
		},
		actions: {
			getUs: () => {
				return getStore().us;
			},

			addToCart: item => {
				let store = getStore();
				store.cart.push(item);
				setStore(store);
				// setStore({ cart: store.cart.concat(item) });
			},
			getCart: () => {
				return getStore().cart;
			},
			removeFromCart: index => {
				/* loop through cart array
                    remove the element with the index - array.splice
                    setstore()
                */
				const store = getStore();
				setStore({ cart: store.cart.filter((e, i) => i !== index) });
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
