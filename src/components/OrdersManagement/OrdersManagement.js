import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem;
`;
const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: ${({ type }) => type === 'orders' ? '#1e3a8a' : '#4caf50'};
  text-decoration: underline;
  margin: 0 18rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ type }) => type === 'orders' ? '#153057' : '#3e8e41'};
  }
`;
const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, #4caf50, #1e3a8a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const OrderCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderDetails = styled.div`
  flex: 1;
`;

const OrderID = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const OrderCustomer = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const OrderDate = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const OrderStatus = styled.p`
  font-size: 1.2rem;
  color: ${({ status }) => status === 'Delivered' ? '#4caf50' : '#ff4c4c'};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: ${({ type }) => type === 'delete' ? '#ff4c4c' : '#1e3a8a'};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ type }) => type === 'delete' ? '#ff3333' : '#153057'};
  }
`;

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const OrdersManagement = () => {
    const [orders, setOrders] = useState([
        {
          id: 1,
          customerName: 'John Doe',
          orderDate: '2024-03-08',
          status: 'Delivered',
          orderItems: [
            { name: 'Product A', quantity: 2 },
            { name: 'Product B', quantity: 1 },
          ],
        },
        {
          id: 2,
          customerName: 'Jane Smith',
          orderDate: '2024-03-09',
          status: 'Processing',
          orderItems: [
            { name: 'Product C', quantity: 3 },
            { name: 'Product D', quantity: 1 },
          ],
        },
        {
            id: 3,
            customerName: 'Alice Johnson',
            orderDate: '2024-03-10',
            status: 'Delivered',
            orderItems: [
              { name: 'Product E', quantity: 1 },
              { name: 'Product F', quantity: 2 },
            ],
          },
          {
            id: 4,
            customerName: 'Bob Brown',
            orderDate: '2024-03-11',
            status: 'Processing',
            orderItems: [
              { name: 'Product G', quantity: 5 },
              { name: 'Product H', quantity: 3 },
            ],
          },
          {
            id: 5,
            customerName: 'Emily Davis',
            orderDate: '2024-03-12',
            status: 'Pending',
            orderItems: [
              { name: 'Product I', quantity: 1 },
              { name: 'Product J', quantity: 2 },
            ],
          },
      ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };
  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order))
    );
  };

  const handleDeleteOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };
  return (
    <Container>
      <Title>Orders Management</Title>
      <StyledLink to="/products" type="orders">View Products</StyledLink>
      <StyledLink to="/calendar" type="calendar">View Calendar</StyledLink>
      {orders.map((order) => (
        <OrderCard key={order.id}>
          <OrderInfo>
            <OrderDetails>
              <OrderID>Order ID: {order.id}</OrderID>
              <OrderCustomer>Customer: {order.customerName}</OrderCustomer>
            </OrderDetails>
            <OrderDetails>
              <OrderDate>Date: {order.orderDate}</OrderDate>
              <OrderStatus status={order.status}>Status: {order.status}</OrderStatus>
            </OrderDetails>
          </OrderInfo>
          <ButtonGroup>
            <Button onClick={() => handleViewDetails(order)}>View Details</Button>
            <Button onClick={() => handleUpdateStatus(order.id, 'Processing')}>Process</Button>
            <Button type="delete" onClick={() => handleDeleteOrder(order.id)}>Delete</Button>
          </ButtonGroup>
        </OrderCard>
      ))}
      {selectedOrder && (
        <Modal isOpen={isModalOpen}>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <h2>Order Details</h2>
            <p>Customer: {selectedOrder.customerName}</p>
            <p>Order Date: {selectedOrder.orderDate}</p>
            <p>Status: {selectedOrder.status}</p>
            <h3>Order Items:</h3>
            <ul>
              {selectedOrder.orderItems.map((item, index) => (
                <li key={index}>
                  {item.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default OrdersManagement;
