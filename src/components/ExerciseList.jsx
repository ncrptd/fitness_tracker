import AddExerciseDialog from "./AddExerciseDialog";
import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercises, loading }) {
    return (
        <div className="p-4 ">
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 ">Exercise Tracking</h2>

            <div className="mb-4 mx-auto inline-block">
                <AddExerciseDialog />
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {loading ? <p className="text-xl text-gray-500 mt-4">loading...</p> : exercises?.map((exercise) => (
                    <ExerciseCard key={exercise?._id} exercise={exercise} />
                ))}
                {!loading && exercises.length < 1 && <p className="text-xl text-gray-500 mt-4">No data found</p>}
            </div>
        </div>
    );
}

export default ExerciseList;
