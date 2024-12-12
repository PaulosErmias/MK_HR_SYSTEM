import { DecreaseSvg, IncreaseSvg } from "../../assets/icons";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function EmployeeInfo({ employeeStat }) {
  console.log(employeeStat);
  return (
    <div className="flex w-fit shadow-even rounded-md py-4 px-4 bg-white">
      <div className="flex w-fit flex-col justify-between gap-3 px-2">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-bold text-[15px] text-[#343434] leading-5">
            {employeeStat.title}
          </h2>

          <div
            className={classNames(
              Number(employeeStat.rate) < 0
                ? "bg-[#C10A0A26] text-[#C71026]"
                : "text-[#0B8A00] bg-[#23C10A26]",
              " flex items-center justify-center rounded-2xl gap-1 px-3 text-sm"
            )}
          >
            <span>
              {Number(employeeStat.rate) < 0 ? (
                <DecreaseSvg />
              ) : (
                <IncreaseSvg />
              )}
            </span>
            <span className=" font-normal text-sm">
              {Math.abs(Number(employeeStat.rate))}
            </span>
          </div>
        </div>
        <h2 className="font-normal text-3xl leading-5 text-[#232323]">
          {employeeStat.quantity}
        </h2>
        <p className="font-normal text-sm text-gray-lght">
          {employeeStat.type}
        </p>
      </div>
    </div>
  );
}

export default EmployeeInfo;
