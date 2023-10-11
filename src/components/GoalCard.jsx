import { useDispatch } from "react-redux";
import { removeGoal } from "../store/actions/goalActions";

function GoalCard({ goal }) {
    const dispatch = useDispatch();

    const formattedDate = new Date(goal.targetDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    return (
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 flex flex-col justify-between">
            <h5 className="mb-2 text-xl font-semibold text-gray-900">Goal Name: {goal?.name}</h5>
            <p className="mb-1 text-gray-700">Description: {goal?.description}</p>
            <p className="mb-1 text-gray-700">Target Date: {formattedDate}</p>
            <p className="mb-1 text-gray-700">Target Calories Value: {goal?.targetCaloriesValue}</p>
            <p className="mb-3 text-gray-700">Status: {goal?.status}</p>

            <button
                onClick={() => dispatch(removeGoal(goal?._id))}
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-300 focus:outline-none"
            >
                Remove
            </button>
        </div>
    );
}

export default GoalCard;
