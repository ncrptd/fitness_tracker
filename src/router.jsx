import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Food from "./pages/Food";
import Goal from "./pages/Goal";
import RequiresAuth from './components/auth/RequiresAuth'
import Auth from "./components/auth/auth";
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={
            <RootLayout />

        }>
            <Route index element={
                <RequiresAuth>
                    <Home />
                </RequiresAuth>

            } />
            <Route path='/auth' element={<Auth />} />
            <Route path="/exercises" element={
                <RequiresAuth>
                    <Exercise />
                </RequiresAuth>
            } />
            <Route path="/foods" element={
                <RequiresAuth>
                    <Food />
                </RequiresAuth>
            } />
            <Route path="/goals" element={
                <RequiresAuth>
                    <Goal />
                </RequiresAuth>
            } />
        </Route>
    )
);
