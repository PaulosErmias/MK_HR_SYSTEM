import { AvatarSvg, NotificationSvg } from "../assets/icons";
import { logoPng } from "../assets/img";
import Search from "./ui/Search";
function Navbar() {
  return (
    <div className="flex items-center justify-between bg-primary h-[10vh]">
      <div className="flex items-center justify-center">
        <div className="w-64 pl-16">
          <img
            className="w-[4.5rem]"
            src={logoPng}
            alt="The logo of Mahibere Kidusan"
          />
        </div>
        <Search />
      </div>
      <div className="flex justify-end gap-4 mr-16">
        <div className="p-2 bg-green-dark w-fit flex items-center justify-center rounded-lg">
          <AvatarSvg />
        </div>
        <div className="flex items-center justify-center p-2 bg-slate-lght w-fit rounded-lg">
          <NotificationSvg />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
