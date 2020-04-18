const express = require ('express');
const app = express();
const morgan = require ('morgan');
const bodyParser = require ('body-parser');

const BuddyIdRoutes = require('./routes/buddy_id');
const BuddyVehicleIdRoutes = require('./routes/buddy_vechicle_id');
const BuddyTaskIDRoutes = require('./routes/buddy_task_id');
const DeliveryOrderStatus = require('./routes/deliveryorder_status_id')
const BuddyPaymentRoutes = require ('./routes/buddy_payment_id');

require("./database");
app.use(morgan('dev')); //dev 버전의 형식으로 log를 찍겠다. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})) ; 


app.use('/api/buddyid', BuddyIdRoutes);
app.use('/api/buddyvehicleid', BuddyVehicleIdRoutes);
app.use('/api/buddytaskid', BuddyTaskIDRoutes);
app.use('/api/deliveryorderstatsid', DeliveryOrderStatus);
app.use('/api/buddypaymentid', BuddyPaymentRoutes);





const port = 5678;
app.listen(port, console.log(`Server running on port ${port}`));
