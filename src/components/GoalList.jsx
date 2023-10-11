import AddGoalDialog from "./AddGoalDialog";
import GoalCard from "./GoalCard";

function GoalList({ goals, loading }) {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Goal Tracking</h2>
            <div className="mb-4 mx-auto inline-block">
                <AddGoalDialog />
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {loading ? <p className="text-xl text-gray-500 mt-4">Loading...</p> : goals && goals.map((goal) => (
                    <GoalCard key={goal?._id} goal={goal} />
                ))}
                {!loading && goals.length < 1 && <p className="text-xl text-gray-500 mt-4">No Data Found</p>}
            </div>
        </div>
    );
}

export default GoalList;
