import Bell_LOGO from '../../src/assets/images/bell.png';
import Profile_LOGO from '../../src/assets/images/Frame 53.png';
import Search_LOGO from '../../src/assets/images/svg.tabler-icon.png';

const Header = () => {
  return (
    <div className='bg-white w-[1328px] mt-0.5 h-[85px] ml-[16px] flex items-center'>
    <div className='bg-white ml-[32px] my-[16px] w-[246px] h-[53px]'>
      <h2 className='text-black mb-[12px]'>All Orders</h2>
      <p className="text-xs text-[#377DFF]">All Orders</p>
    </div>
    <div className='flex items-center w-[227px] h-[38px]  ml-[669px] mr-[32px]'>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="p-2 pl-8 border border-gray-300 w-[227px] h-[38px] rounded-md focus:outline-none focus:border-[#377DFF]"
        />
        <img src={Search_LOGO} className="absolute left-2 top-1/2 transform -translate-y-1/2 h-[16px] w-[16px]" alt="Search" />
      </div>
      <img src={Bell_LOGO} alt='Bell Logo' className="h-[18px] w-[16px] ml-[32px]"/>
      <img src={Profile_LOGO} alt='Profile Logo' className="h-[36px] w-[36px] ml-[32px]"/>
    </div>
  </div>
  )
}

export default Header
