import LoginRight from "../components/login_right"
import LoginSidebar from "../components/login_sidebar"

export const LoginPage = () => {
    return <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
            <div className="">
                <LoginSidebar />
            </div>
            
            <LoginRight />
        </div>
    </div>
}