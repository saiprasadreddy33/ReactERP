import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
`;

const Metric = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const ButtonLink = styled(Link)`
  background-color: #4caf50;
  color: #fff;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
`;

const Dashboard = () => {
  // Mock data for demonstration
  const totalProducts = 100;
  const totalOrders = 50; 

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <Card>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Key Metrics</h2>
        <Metric>Total Number of Products: {totalProducts}</Metric>
        <Metric>Total Number of Orders: {totalOrders}</Metric>
      </Card>
      <ButtonGroup>
        <ButtonLink to="/products">Manage Products</ButtonLink>
        <ButtonLink to="/orders">Manage Orders</ButtonLink>
      </ButtonGroup>
    </DashboardContainer>
  );
};

export default Dashboard;
