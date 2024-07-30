import { useAppSelector } from "@/app/ReduxHooks";
import moment from "moment";
import { BsBoxes } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
const Class_Header_Props = () => {
  let { Students, sections, Session, subjects,start_date ,_id } = useAppSelector(
    (s) => s.classDetailed.payload
  );
  return (
    <>
      <div className="flex flex-wrap gap-1 w-[95%] items-center">
        <div className="w-[32%]">
          <div className="">
            <ul className="flex gap-2 items-center">
              <li className=" w-10  h-10 aspect-square   bg-dark text-white p-2 center rounded-full">
                <FaUsers size={"30"} />
              </li>
              <li className="">
                <h3 className="hFont font-medium  ">
                  {Students.length} students
                </h3>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[32%]">
          <div className="">
            <ul className="flex gap-2 items-center">
              <li className="w-10 h-10 aspect-square center  bg-dark text-white p-2 rounded-full">
                <BsBoxes size={"30"} />
              </li>
              <li className="">
                <h3 className="hFont font-medium  ">
                  {sections.length} section
                </h3>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[32%] flex max-md:flex-col gap-4 justify-end">
          <Link
            to={"/sessions/"}
            className="bg-dark text-white h-max rounded font-bold hFont px-3 py-1 w-max"
          >
            {Session?.acedmic_year}
          </Link>
  <Link to={`/dashboard/class/edit/${_id}`} className="bg-darker max-md:hidden whitespace-nowrap active:scale-95 transition-transform text-white h-max rounded font-bold hFont px-3 py-1 w-max">
  Edit </Link>
        </div>
      </div>

      <div className=" w-[95%] flex gap-1 flex-wrap">
        <div className="w-[32%] font-bold">
          <p className="text-gray-600">Start Date</p>
          <p>{moment(start_date).format("D MMMM Y")}</p>
        </div>
        <div className="w-[32%] font-bold">
          <p className="text-gray-600">Session Name</p>
          <p>{Session?.session_name}</p>
        </div>
        <div className="w-[32%] font-bold">
          <p className="text-gray-600">Session Acedmic Year</p>
          <p>{Session?.acedmic_year}</p>
        </div>
        <div className="w-[32%] font-bold">
          <p className="text-gray-600">Class Teacher</p>
          {sections.map(e=><p>{e?.ClassTeacher?.firstName}</p>)}

        </div>
      </div>

      

      <div className="  w-[95%] flex flex-col gap-2  ">
        <div className="">

        <h1 className="hFont text-xl font-semibold pb-2">Subjects</h1>
        <div className="flex gap-1.5 flex-wrap">
          {subjects.map((e) => {
            return (
              <div className="w-max rounded-md  text-sm px-3 py-1 font-semibold border-2 hover:bg-dark_dimmer transition-colors border-[var(--dark)] text-darker">
                {e}
              </div>
            );
          })}
          </div>
        </div>
      </div>
        <Link to={`/dashboard/class/edit/${_id}`} className="bg-darker md:hidden whitespace-nowrap active:scale-95 transition-transform text-white h-max rounded-md font-bold hFont  py-2 text-center  w-full">
        Edit Class Details
        </Link>

    </>
  );
};

export default Class_Header_Props;
