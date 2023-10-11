import { useDispatch, useSelector } from "react-redux";
import GoalList from "../components/GoalList";
import { useEffect } from "react";
import { fetchGoals } from "../store/actions/goalActions";

export default function Goal() {
    const goalState = useSelector((state) => state.goalReducer);

    const { goals, loading } = goalState;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGoals());

    }, [dispatch]);

    return (
        <div>
            <GoalList goals={goals} loading={loading} />
        </div>
    );
}
