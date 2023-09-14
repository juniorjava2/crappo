

const ProfitTracker = () => {
  return (
    <div className="absolute top-[1440px] left-[120px] w-[1200px] h-[334px] text-left text-base text-gray-6 font-inter bg-blue-500">
      <div className="absolute top-[0px] left-[518px] w-[682px] h-[334px]">
        <div className="absolute top-[0px] left-[72px] rounded-2xl bg-color-primary-kingfisher-daisy [backdrop-filter:blur(4px)] w-[610px] h-[334px]" />
        <div className="absolute top-[40px] left-[293px] w-[354px] h-[17px] text-sm text-neutral-white">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Price
          </div>
          <div className="absolute top-[0px] left-[121px] font-semibold">
            Change
          </div>
          <div className="absolute top-[0px] left-[262px] font-semibold">
            Volume (24h)
          </div>
        </div>
        <div className="absolute top-[73px] left-[112px] w-[521px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] w-[109px] h-[47px] text-xl text-neutral-white">
            <div className="absolute top-[0px] left-[56px] w-[53px] h-[47px] flex flex-col items-start justify-start gap-[4px]">
              <b className="relative">BTC</b>
              <div className="relative text-base tracking-[0.01em] text-gray-6">
                Bitcoin
              </div>
            </div>
            <img
              className="absolute top-[3px] left-[0px] w-10 h-10"
              alt=""
              src="/group-17.svg"
            />
          </div>
          <div className="absolute top-[14px] left-[181px]">$6750</div>
          <div className="absolute top-[14px] left-[302px] w-[69px] h-[19px] flex flex-row items-center justify-start gap-[8px] text-aquamarine">
            <img className="relative w-4 h-4" alt="" src="/group-96.svg" />
            <div className="relative">+7.3%</div>
          </div>
          <div className="absolute top-[14px] left-[443px]">$3420214</div>
        </div>
        <div className="absolute top-[144px] left-[0px] shadow-[0px_20px_80px_rgba(54,_113,_233,_0.1)] w-[610px] h-[79px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-darkblue w-[610px] h-[79px]" />
          <div className="absolute top-[16px] left-[40px] w-[518px] h-[47px]">
            <div className="absolute top-[0px] left-[0px] w-[130px] h-[47px] text-xl text-neutral-white">
              <div className="absolute top-[0px] left-[56px] w-[74px] h-[47px] flex flex-col items-start justify-start gap-[4px]">
                <b className="relative">ETH</b>
                <div className="relative text-base tracking-[0.01em] text-gray-6">
                  Ethereum
                </div>
              </div>
              <img
                className="absolute top-[4px] left-[0px] w-10 h-10"
                alt=""
                src="/logoethereum.svg"
              />
            </div>
            <div className="absolute top-[14px] left-[181px]">$156.83</div>
            <div className="absolute top-[14px] left-[302px] w-[69px] h-[19px] flex flex-row items-center justify-start gap-[8px] text-salmon">
              <img className="relative w-4 h-4" alt="" src="/group-97.svg" />
              <div className="relative">-0.9%</div>
            </div>
            <div className="absolute top-[14px] left-[443px]">$1812350</div>
          </div>
        </div>
        <div className="absolute top-[247px] left-[112px] w-[523px] h-[47px]">
          <div className="absolute top-[14px] left-[181px]">$8535</div>
          <div className="absolute top-[14px] left-[302px] w-[72px] h-[19px] flex flex-row items-center justify-start gap-[8px] text-aquamarine">
            <img className="relative w-4 h-4" alt="" src="/group-98.svg" />
            <div className="relative">+8.2%</div>
          </div>
          <div className="absolute top-[14px] left-[443px]">$5820399</div>
          <div className="absolute top-[0px] left-[0px] w-[117px] h-[47px] flex flex-row items-center justify-start gap-[16px] text-xl text-neutral-white">
            <img className="relative w-10 h-10" alt="" src="/logolite.svg" />
            <div className="w-[61px] h-[47px] flex flex-col items-start justify-start gap-[4px]">
              <b className="relative">LTC</b>
              <div className="relative text-base tracking-[0.01em] text-gray-6">
                Litecoin
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[10px] left-[0px] w-[454px] h-[295px] text-neutral-grey-5 font-body-small-regular">
        <button className="cursor-pointer [border:none] py-4 px-8 bg-color-accent absolute top-[236px] left-[0px] rounded-13xl overflow-hidden flex flex-row items-center justify-center">
          <div className="relative text-lg leading-[150%] font-medium font-body-small-regular text-neutral-white text-center">
            Learn More
          </div>
        </button>
        <div className="absolute top-[120px] left-[0px] tracking-[0.01em] leading-[28px] inline-block w-[408px]">
          Use advanced analytical tools. Clear TradingView charts let you track
          current and historical profit investments.
        </div>
        <b className="absolute top-[0px] left-[0px] text-13xl leading-[150%] inline-block text-neutral-white w-[454px]">
          Grow your profit and track your investments
        </b>
      </div>
    </div>
  );

};

export default ProfitTracker;
