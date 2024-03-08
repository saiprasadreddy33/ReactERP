import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Link } from 'react-router-dom';


const localizer = momentLocalizer(moment);

const OrdersCalendarView = () => {
 const [open, setOpen] = useState(false);
 const [selectedOrder, setSelectedOrder] = useState(null);

 const orders = [
    { id: 1, title: 'Order 1', start: new Date(2024, 3, 1), end: new Date(2024, 3, 1) },
    { id: 2, title: 'Order 2', start: new Date(2024, 4, 8), end: new Date(2024, 4, 8) },
    { id: 3, title: 'Order 3', start: new Date(2024, 5, 10), end: new Date(2024, 5, 10) },

 ];

 const handleSelectEvent = (event) => {
    setSelectedOrder(event);
    setOpen(true);
 };

 const handleClose = () => {
    setOpen(false);
 };

 return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Orders Calendar</h2>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={orders}
        onSelectEvent={handleSelectEvent}
        style={{ height: '60vh' }}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedOrder ? `Order ID: ${selectedOrder.id}` : 'No order selected'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <Link to="/dashboard">Dashboard</Link>

    </div>
 );
};

export default OrdersCalendarView;
