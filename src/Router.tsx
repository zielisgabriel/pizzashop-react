import { Route, Routes } from "react-router";
import { Dashboard } from "./pages/app/Dashboard";
import { SignIn } from "./pages/auth/Sign-in";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/Sign-up";

export function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Route>
            </Routes>
        </>
    );
}