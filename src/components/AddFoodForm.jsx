import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../store/actions/foodActions";

function AddFood({ setOpen }) {
    const dispatch = useDispatch();

    const [foodDetails, setFoodDetails] = useState({
        name: "",
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFoodDetails({
            ...foodDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const food = {
            name: foodDetails.name,
            calories: parseFloat(foodDetails.calories),
            protein: parseFloat(foodDetails.protein),
            carbohydrates: parseFloat(foodDetails.carbohydrates),
            fat: parseFloat(foodDetails.fat),
        };
        dispatch(addFood(food));

        setFoodDetails({
            name: "",
            calories: 0,
            protein: 0,
            carbohydrates: 0,
            fat: 0,
        });
        setOpen(false);
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Add Food</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium">
                        Food Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={foodDetails.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="calories" className="block font-medium">
                        Calories
                    </label>
                    <input
                        type="number"
                        id="calories"
                        name="calories"
                        value={foodDetails.calories}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="protein" className="block font-medium">
                        Protein (grams)
                    </label>
                    <input
                        type="number"
                        id="protein"
                        name="protein"
                        value={foodDetails.protein}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="carbohydrates" className="block font-medium">
                        Carbohydrates (grams)
                    </label>
                    <input
                        type="number"
                        id="carbohydrates"
                        name="carbohydrates"
                        value={foodDetails.carbohydrates}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="fat" className="block font-medium">
                        Fat (grams)
                    </label>
                    <input
                        type="number"
                        id="fat"
                        name="fat"
                        value={foodDetails.fat}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                >
                    Add Food
                </button>
            </form>
        </div>
    );
}

export default AddFood;
