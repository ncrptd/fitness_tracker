import { useDispatch, useSelector } from "react-redux";
import FoodList from "../components/FoodList";
import { useEffect } from "react";
import { fetchFood } from "../store/actions/foodActions";

export default function Food() {
    const foodState = useSelector((state) => state.foodReducer);

    const { foodItems, loading } = foodState;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFood());
    }, [dispatch]);

    return (
        <div>
            <FoodList foodItems={foodItems} loading={loading} />
        </div>
    );
}
