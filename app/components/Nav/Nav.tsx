import { getNotifications } from "@/app/actions/action";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import NavComponent from "./NavComponent";

type notificationProps = {
    notifications: {
        _id: string,
        title: string,
        description: string
    }[]
}

const Navbar = async () => {
    const session = await getServerSession(options);

    const res: notificationProps = await getNotifications(session?.user.id!);


    return (
        <NavComponent notifications={res.notifications} />
    );
}

export default Navbar;