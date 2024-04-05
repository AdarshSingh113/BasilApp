import Search_LOGO from '../../src/assets/images/svg.tabler-icon.png';
import Excel_LOGO from '../../src/assets/images/_Button_.png';
import Pdf_LOGO from '../../src/assets/images/_Button_ (1).png';
import { useState } from 'react';

const Search = ({ orders, setFilteredOrders }) => {
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = orders.filter(order => order.order_id.toLowerCase().includes(query.toLowerCase()));
    setFilteredOrders(filtered);
  };
  return (
    <div className='bg-white w-[1328px]  h-[68px] ml-[16px] flex flex-row  mt-[16px]  justify-between items-center'>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 pl-8 border w-[227px] h-[36px] border-gray-300 rounded-lg focus:outline-none focus:border-[#377DFF]"
        />
        <img src={Search_LOGO} className="absolute left-2 top-1/2 transform -translate-y-1/2 h-[16px] w-[16px]" alt="Search" />
      </div>
      <div className='flex flex-row'> 
        <img
        className='w-[36px] h-[36px]'
        src={Excel_LOGO}
        alt='Excel_LOGO'
        />
         <img
          className='w-[36px] h-[36px] mr-[43px] ml-[21px]'
        src={Pdf_LOGO}
        alt='Pdf_LOGO'
        />
      </div>
    </div>
  )
}

export default Search
