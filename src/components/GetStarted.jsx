import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`flexCenter w-[120px] h-[120px] hover:scale-125  transition ease-in-out delay-150 rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`flexCenter flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <a href="#features">
        <div className={`flexStart flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">
              Get
            </span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </a>
    </div>
  </div>
);

export default GetStarted;
