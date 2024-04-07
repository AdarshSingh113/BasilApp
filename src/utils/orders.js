const orders = [
    {
      "date": "21/03/2023",
      "time":"13 :58 : 21",
      "order_id": "OD101",
      "machine_name": "Aahaar Stall 2 (WH104)",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "total_amount": 796,
      "status": "SUCCESS",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "21/03/2023",
      "order_id": "OD101",
      "machine_name": "Aahaar Stall 4 (WH103)",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "total_amount": 796,
      "status": "SUCCESS",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "25/05/2023",
      "order_id": "OD103",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "total_amount": 804,
      "status": "FAILURE",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 201,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 201,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 201,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 201,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "25/02/2023",
      "order_id": "OD102",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "total_amount": 796,
      "status": "PENDING",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "26/01/2023",
      "order_id": "OD105",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "total_amount": 796,
      "status": "SENT",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "21/03/2022",
      "order_id": "OD101",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "total_amount": 796,
      "status": "REFUND INITIATED",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "21/03/2023",
      "order_id": "OD101",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "total_amount": 796,
      "status": "REFUND COMPLETED",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "21/03/2023",
      "order_id": "OD101",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "total_amount": 796,
      "status": "SUCCESS",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "21/03/2023",
      "order_id": "OD101",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "customer_name": "Adarsh Singh",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "contact_number": "9999999999",
      "total_amount": 796,
      "status": "SUCCESS",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "21/03/2023",
      "order_id": "OD101",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "total_amount": 796,
      "status": "SUCCESS",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "21/03/2023",
      "time":"13 :58 : 21",
      "order_id": "OD101",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "total_amount": 796,
      "status": "SUCCESS",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "21/03/2023",
      "order_id": "OD101",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "customer_name": "Adarsh Singh",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "contact_number": "9999999999",
      "total_amount": 796,
      "status": "SUCCESS",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 199,
          "drink_status": "SUCCESS"
        }
      ]
    },
    {
      "date": "25/05/2023",
      "order_id": "OD103",
      "machine_name": "Aahaar Stall 3 (WH101)",
      "customer_name": "Adarsh Singh",
      "contact_number": "9999999999",
      "address":"Aahaar Stall 10, Pragati Maidan, New Delhi",
      "total_amount": 804,
      "status": "FAILURE",
      "refund": false,
      "transaction_id": "TX1042480129481",
      "email": "simranjeet.kaur@basil.health",
      "order_details": [
        {
          "id": "C1O1",
          "drink_name": "Blueberry Juice",
          "customization": "Low Honey",
          "amount": 201,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O2",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 201,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O3",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 201,
          "drink_status": "SUCCESS"
        },
        {
          "id": "C1O4",
          "drink_name": "**Replace with drink name**",
          "customization": "**Replace with customization (if any)**",
          "amount": 201,
          "drink_status": "SUCCESS"
        }
      ]
    },
  ]
  export default orders;