import React from 'react';
import orders from '../utils/orders';
import Sidebar from './Sidebar';
import Header from './Header';

import RefundBar from './RefundBar';
import AllOrders from './AllOrders';

const  Body = () => {
    const firstOrder = orders[0];
  const { order_id, customer_name } = firstOrder;
  console.log(order_id,customer_name);
  return (
    <div className='flex flex-row'>
      <Sidebar/>
      <div>
      <Header/>
      <RefundBar/>
      <AllOrders/>
      </div>
    </div>
  )
}

export default Body
