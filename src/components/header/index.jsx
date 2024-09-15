import { TaskManagerContext } from "@/context";
import { callLogoutApi } from "@/services";
import { LogOut } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { setUser } = useContext(TaskManagerContext);
  const navigate = useNavigate();

  async function handleLogout() {
    const response = await callLogoutApi();

    if (response?.success) {
      setUser(null);
      navigate("/auth");
    }
  }

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto h-16">
        <div className="flex h-[64px] items-center w-full justify-between">
          <div className="w-auto">
            <h2>Task Manager</h2>
          </div>
          <div className="flex gap-4">
            <Link className="text-xl text-black font-bold" to={"/tasks/list"}>
              Tasks
            </Link>
            <Link
              className="text-xl text-black font-bold"
              to={"/tasks/scrum-board"}
            >
              Scrum Board
            </Link>
          </div>
          <div>
            <LogOut
              onClick={handleLogout}
              color="#000"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
