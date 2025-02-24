import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center font-geist bg-secondary ">
      <div
        className="w-5/6 h-5/6 bg-neutral rounded-3xl
shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
      flex items-center justify-center "
      >
        <div className="mx-auto w-1/2 h-full p-4">
          <div className="w-full h-full rounded-3xl bg-gradient-to-r bg-primary">
            <h2 className="font-bold text-5xl text-center pt-12 p-4 font-meow text-white">
              Eventz
            </h2>
            <div>
              <div className="font-semibold text-7xl font-meow p-4 text-center pt-44 text-white">
                <span> Master Your Day, </span> <br />
                <span> One Task at a Time! </span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-center w-1/2 h-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Login;
