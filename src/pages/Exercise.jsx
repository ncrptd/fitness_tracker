import { useDispatch, useSelector } from "react-redux";
import ExerciseList from "../components/ExerciseList";
import { useEffect } from "react";
import { fetchExercise } from "../store/actions/exerciseActions";

export default function Exercise() {
    const exerciseState = useSelector((state) => state.exerciseReducer);
    const { exercises, loading } = exerciseState;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExercise())
    }, [dispatch])


    return (
        <div>
            <ExerciseList exercises={exercises} loading={loading} />
        </div>
    )
}
