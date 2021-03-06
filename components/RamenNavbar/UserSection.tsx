import LoginAndRegisterBtn from "./LoginAndRegisterBtn";
import UserInfoAndLogout from "./UserInfoAndLogout";
import {useUser} from "../../context/UserContext";


const UserSection = () => {
    const { user } = useUser()! ;
    return (
        <div>
            { user ? <UserInfoAndLogout />: <LoginAndRegisterBtn/>}
        </div>
    );
}

export default UserSection;