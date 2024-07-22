
const UdangKejuSection = () => {
  return (
    <>
      <div className=" min-h-screen  justify-center items-center pt-6" id="udangKeju">
        <div className="font-bold text-center text-2xl md:text-4xl ms-2">
          Udang Keju
        </div>
        <div className="text-center  flex justify-center">
          <div className="w-11/12 md:w-7/12 text-sm md:text-lg">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need.
          </div>
        </div>
        {/* atas */}
        <div className="grid md:grid-cols-8 md:mx-40 gap-4 mt-5 mx-2">
          <div className="md:col-span-4 flex">
            <img
              src="https://picsum.photos/seed/picsum/1000/300"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="md:col-span-2 flex">
            <img
              src="https://picsum.photos/seed/picsum/300/300"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="md:col-span-2 flex">
            <img
              src="https://picsum.photos/seed/picsum/300/300"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
        {/* bawah */}
        <div className="grid md:grid-cols-8 md:mx-40 gap-4 mt-5 mx-2">
          <div className=" md:col-span-2 flex">
            <img
              src="https://picsum.photos/seed/picsum/300/300"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
          <div className="md:col-span-4 flex h-full rounded-xl">
            <img
              className="rounded-xl"
              src="https://picsum.photos/seed/picsum/1000/300"
              alt=""
            />
          </div>
          <div className=" md:col-span-2 flex">
            <img
              src="https://picsum.photos/seed/picsum/300/300"
              alt=""
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default UdangKejuSection;
