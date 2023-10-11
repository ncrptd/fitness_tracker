import { useState } from "react";
import { addGoal } from "../store/actions/goalActions";
import { useDispatch } from "react-redux";

function AddGoal({ setOpen }) {
    const dispatch = useDispatch();

    const [goalDetails, setGoalDetails] = useState({
        name: "",
        description: "",
        targetDate: "",
        targetCaloriesValue: 0,
        status: "In Progress",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGoalDetails({
            ...goalDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const goal = {
            name: goalDetails.name,
            description: goalDetails.description,
            targetDate: goalDetails.targetDate,
            targetCaloriesValue: parseFloat(goalDetails.targetCaloriesValue),
            status: goalDetails.status,
        };
        dispatch(addGoal(goal))
        setGoalDetails({
            name: "",
            description: "",
            targetDate: "",
            targetCaloriesValue: 0,
            status: "In Progress",
        });
        setOpen(false)
    };

    return (
        <div className="max-w-lg mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">Set Fitness Goal</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium">
                        Goal Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={goalDetails.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block font-medium">
                        Goal Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={goalDetails.description}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="targetDate" className="block font-medium">
                        Target Date
                    </label>
                    <input
                        type="date"
                        id="targetDate"
                        name="targetDate"
                        value={goalDetails.targetDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="targetCaloriesValue" className="block font-medium">
                        Target Calories Value
                    </label>
                    <input
                        type="number"
                        id="targetCaloriesValue"
                        name="targetCaloriesValue"
                        value={goalDetails.targetCaloriesValue}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block font-medium">
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        value={goalDetails.status}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
                    >
                        <option value="In Progress">In Progress</option>
                        <option value="Achieved">Achieved</option>
                        <option value="Abandoned">Abandoned</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                >
                    Set Goal
                </button>
            </form>
        </div>
    );
}

export default AddGoal;
