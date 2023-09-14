const Graph = () => {
  return (
    <div className=" w-[583px] h-60">
        <div className=" border-2 border-[#b9c1d9] w-[583px] h-60 opacity-[0.1]">
            <div className="grid grid-cols-8 w-[inherit]">
                <div className="h-[60px]  border-[#b9c1d9]">1</div>
                <div className="h-[60px]  border-[#b9c1d9]">2</div>
                <div className="h-[60px] w-1 bg-[#b9c1d9]">3</div>
                <div className="h-[60px] w-1 bg-[#b9c1d9]">4</div>
                <div className="h-[60px] w-1 bg-[#b9c1d9]">5</div>
                <div className="h-[60px] w-1 bg-[#b9c1d9]">6</div>
                <div className="h-[60px] w-1 bg-[#b9c1d9]">7</div>
                <div className="h-[60px] w-1 bg-[#b9c1d9]">8</div>
            </div>
        </div>
{/* 
        <div className="{styles.frameGroup">
        <div className="absolute top-[181px] left-[53px] w-[552px] h-44">
          <div className="absolute top-[39px] left-[416px] w-2 h-20">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#6edcb5] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-20" />
          </div>
          <div className="absolute top-[88px] left-[480px] w-2 h-20">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#ff325f] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-20" />
          </div>
          <div className="absolute top-[35px] left-[304px] w-2 h-20">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#ff325f] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-20" />
          </div>
          <div className="absolute top-[26px] left-[400px] w-2 h-20">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#6edcb5] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-20" />
          </div>
          <div className="absolute top-[75px] left-[464px] w-2 h-20">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#6edcb5] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-20" />
          </div>
          <div className="absolute top-[51px] left-[96px] w-2 h-20">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#ff325f] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-20" />
          </div>
          <div className="absolute top-[32px] left-[64px] w-2 h-20">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#6edcb5] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-20" />
          </div>
          <div className="absolute top-[17px] left-[80px] w-2 h-[124px]">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#6edcb5] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[124px]" />
          </div>
          <div className="absolute top-[53px] left-[16px] w-2 h-[103px]">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#ff325f] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-[103px]" />
          </div>
          <div className="absolute top-[72px] left-[192px] w-2 h-20">
            <div className="absolute top-[8px] left-[0px] rounded bg-[#6edcb5] w-2 h-[54px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-20" />
          </div>
          <div className="absolute top-[25px] left-[256px] w-2 h-20">
            <div className="absolute top-[20px] left-[0px] rounded bg-[#6edcb5] w-2 h-10" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-20" />
          </div>
          <div className="absolute top-[0px] left-[240px] w-2 h-[120px]">
            <div className="absolute top-[60px] left-[0px] rounded bg-[#6edcb5] w-2 h-8" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[120px]" />
          </div>
          <div className="absolute top-[50px] left-[336px] w-2 h-[72px]">
            <div className="absolute top-[4px] left-[0px] rounded bg-[#6edcb5] w-2 h-[27px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[72px]" />
          </div>
          <div className="absolute top-[41px] left-[432px] w-2 h-[72px]">
            <div className="absolute top-[4px] left-[0px] rounded bg-[#ff325f] w-2 h-[27px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-[72px]" />
          </div>
          <div className="absolute top-[90px] left-[496px] w-2 h-[72px]">
            <div className="absolute top-[4px] left-[0px] rounded bg-[#6edcb5] w-2 h-[27px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[72px]" />
          </div>
          <div className="absolute top-[53px] left-[352px] w-2 h-[55px]">
            <div className="absolute top-[4px] left-[0px] rounded bg-[#ff325f] w-2 h-[27px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-[55px]" />
          </div>
          <div className="absolute top-[44px] left-[448px] w-2 h-[55px]">
            <div className="absolute top-[4px] left-[0px] rounded bg-[#6edcb5] w-2 h-[27px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[55px]" />
          </div>
          <div className="absolute top-[93px] left-[512px] w-2 h-[55px]">
            <div className="absolute top-[4px] left-[0px] rounded bg-[#ff325f] w-2 h-[27px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-[55px]" />
          </div>
          <div className="absolute top-[84px] left-[176px] w-2 h-[55px]">
            <div className="absolute top-[4px] left-[0px] rounded bg-[#6edcb5] w-2 h-[27px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[55px]" />
          </div>
          <div className="absolute top-[33px] left-[288px] w-2 h-[55px]">
            <div className="absolute top-[4px] left-[0px] rounded bg-[#6edcb5] w-2 h-[27px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[55px]" />
          </div>
          <div className="absolute top-[67px] left-[48px] w-2 h-[55px]">
            <div className="absolute top-[21px] left-[0px] rounded bg-[#ff325f] w-2 h-[27px]" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-[55px]" />
          </div>
          <div className="absolute top-[83px] left-[368px] w-2 h-[55px]">
            <div className="absolute top-[16px] left-[0px] rounded bg-[#6edcb5] w-2 h-9" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[55px]" />
          </div>
          <div className="absolute top-[90px] left-[384px] w-2 h-[46px]">
            <div className="absolute top-[7px] left-[0px] rounded bg-[#6edcb5] w-2 h-5" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[46px]" />
          </div>
          <div className="absolute top-[73px] left-[320px] w-2 h-[46px]">
            <div className="absolute top-[7px] left-[0px] rounded bg-[#6edcb5] w-2 h-5" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[46px]" />
          </div>
          <div className="absolute top-[62px] left-[528px] w-2 h-[46px]">
            <div className="absolute top-[7px] left-[0px] rounded bg-[#6edcb5] w-2 h-5" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[46px]" />
          </div>
          <div className="absolute top-[40px] left-[544px] w-2 h-[46px]">
            <div className="absolute top-[23px] left-[0px] rounded bg-[#6edcb5] w-2 h-5" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[46px]" />
          </div>
          <div className="absolute top-[65px] left-[112px] w-2 h-[46px]">
            <div className="absolute top-[7px] left-[0px] rounded bg-[#6edcb5] w-2 h-5" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[46px]" />
          </div>
          <div className="absolute top-[31px] left-[272px] w-2 h-[46px]">
            <div className="absolute top-[7px] left-[0px] rounded bg-[#6edcb5] w-2 h-5" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[46px]" />
          </div>
          <div className="absolute top-[50px] left-[224px] w-2 h-[55px]">
            <div className="absolute top-[6px] left-[0px] rounded bg-[#ff325f] w-2 h-4" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-[55px]" />
          </div>
          <div className="absolute top-[94px] left-[160px] w-2 h-[55px]">
            <div className="absolute top-[6px] left-[0px] rounded bg-[#ff325f] w-2 h-4" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-[55px]" />
          </div>
          <div className="absolute top-[102px] left-[144px] w-2 h-[70px]">
            <div className="absolute top-[9px] left-[0px] rounded bg-[#ff325f] w-2 h-4" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-[70px]" />
          </div>
          <div className="absolute top-[78px] left-[0px] w-2 h-[98px]">
            <div className="absolute top-[22px] left-[0px] rounded bg-[#6edcb5] w-2 h-4" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-[98px]" />
          </div>
          <div className="absolute top-[58px] left-[208px] w-2 h-10">
            <div className="absolute top-[6px] left-[0px] rounded bg-[#ff325f] w-2 h-4" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#ff325f] w-0.5 h-10" />
          </div>
          <div className="absolute top-[60px] left-[32px] w-2 h-10">
            <div className="absolute top-[6px] left-[0px] rounded bg-[#6edcb5] w-2 h-4" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-10" />
          </div>
          <div className="absolute top-[111px] left-[128px] w-2 h-10">
            <div className="absolute top-[6px] left-[0px] rounded bg-[#6edcb5] w-2 h-4" />
            <div className="absolute top-[0px] left-[3px] rounded-12xs bg-[#6edcb5] w-0.5 h-10" />
          </div>
        </div>
        <div className="absolute top-[185.5px] left-[39.5px] box-border w-[596px] h-px border-t-[1px] border-dashed border-mediumaquamarine" />
        <div className="absolute top-[176px] left-[633px] w-[42px] h-5">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-[#6edcb5] w-[42px] h-5" />
          <div className="absolute top-[4px] left-[6px] font-medium">$1569</div>
        </div> 
      </div>*/}
    </div>
  )
}
export default Graph;