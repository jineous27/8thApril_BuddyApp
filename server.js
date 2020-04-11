const express = require ('express');
const app = express();


const BuddyIdRoutes = require('./routes/buddy_id');
const BuddyVehicleIdRoutes = require('./routes/buddy_vechicle_id');
const BuddyTaskIDRoutes = require('./routes/buddy_task_id');
const DeliveryOrderStatus = require('./routes/deliveryorder_status_id')
const BuddyPaymentRoutes = require ('./routes/buddy_payment_id');


app.use('/api/buddyid', BuddyIdRoutes);
app.use('/api/buddyvehicleid', BuddyVehicleIdRoutes);
app.use('/api/buddytaskid', BuddyTaskIDRoutes);
app.use('/api/deliveryorderstatsid', DeliveryOrderStatus);
app.use('/api/buddypaymentid', BuddyPaymentRoutes);




const port = 5678;
app.listen(port, console.log(`Server running on port ${port}`));
