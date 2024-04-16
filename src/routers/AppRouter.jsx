import { Route, Routes } from "react-router-dom"
import { Character, HomePage } from "../pages"
import { PageLogin } from "../pages/auth/PageLogin"
import { PageDashboard } from "../pages/dashboard/PageDashboard"
import { PrivateRouters } from "./PrivateRouters"

export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/character/:id" element={<Character />} />

            <Route path="/login" element={<PageLogin />} />

            <Route path="/dashboard" element={
                <PrivateRouters>
                    <PageDashboard />
                </PrivateRouters>
            } />

            <Route path="/dashboard/users" element={
                <PrivateRouters>
                    <h2>Dashboard User</h2>
                </PrivateRouters>
            } />

            <Route />
            <Route />
        </Routes>
    )
}