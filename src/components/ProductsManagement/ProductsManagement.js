import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem;
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
const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ProductName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductCategory = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1e3a8a;
`;

const ProductStock = styled.p`
  font-size: 1.2rem;
  color: #666;
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

const AddButton = styled(Button)`
  background-color: #4caf50;
  margin-left: auto; /* Align button to the right */
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e3a8a;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const Alert = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f0f0f0;
  border: 2px solid #1e3a8a;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;


const AddProductModal = ({ isOpen, closeModal, handleAddProduct }) => {
    const [newProduct, setNewProduct] = useState({
      name: '',
      category: '',
      price: '',
      stock: ''
    });
  //console.log(props)
    const handleSubmit = (e) => {
      e.preventDefault();
      handleAddProduct(newProduct);
      setNewProduct({
        name: '',
        category: '',
        price: '',
        stock: ''
      });
      closeModal();
    };
  //console.error
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewProduct(prevProduct => ({
        ...prevProduct,
        [name]: value,
      }));
    };
  
    return (
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <ModalTitle>Add Product</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
          <Label>Category</Label>
          <Input type="text" name="category" value={newProduct.category} onChange={handleInputChange} required />
          <Label>Price</Label>
          <Input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />
          <Label>Stock</Label>
          <Input type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} required />
          <Button type="submit">Add Product</Button>
        </Form>
      </Modal>
    );
  };
  
  const EditProductModal = ({ isOpen, closeModal, product, handleEditProduct }) => {
    const [editedProduct, setEditedProduct] =  useState({
        name: '',
        category: '',
        price: '',
        stock: ''
     });
  
    useEffect(() => {
      if (isOpen && product) {
        setEditedProduct(product);
      }
    }, [isOpen, product]); 
  
    // return null 
    if (!isOpen || !product) {
      return null;
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleEditProduct(editedProduct);
      closeModal();
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedProduct(prevProduct => ({
        ...prevProduct,
        [name]: value,
      }));
    };
  
    return (
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <ModalTitle>Edit Product</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} required />
          <Label>Category</Label>
          <Input type="text" name="category" value={editedProduct.category} onChange={handleInputChange} required />
          <Label>Price</Label>
          <Input type="number" name="price" value={editedProduct.price} onChange={handleInputChange} required />
          <Label>Stock</Label>
          <Input type="number" name="stock" value={editedProduct.stock} onChange={handleInputChange} required />
          <Button type="submit">Save Changes</Button>
        </Form>
      </Modal>
    );
  };
  
  

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Electronics', price: 100, stock: 5 },
    { id: 2, name: 'Product 2', category: 'Clothing', price: 50, stock: 10 },
    { id: 3, name: 'Product 3', category: 'Books', price: 20, stock: 15 },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertMessage('');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [alertMessage]);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, { id: prevProducts.length + 1, ...newProduct }]);
    closeAddModal();
    setAlertMessage('Product added successfully!');
    alert('Product added successfully!')
  };

  const handleEditProduct = (editedProduct) => {
    setProducts(prevProducts => prevProducts.map(product => {
       if (product.id === editedProduct.id) {
         return editedProduct;
       }
       return product;
    }));
    closeEditModal();
    setAlertMessage('Product edited successfully!');
    alert('Product edited successfully!')
   };
   

  const handleDelete = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <Container>
      <Title>Products Management</Title>
      <StyledLink to="/orders" type="orders">View Orders</StyledLink>
      <StyledLink to="/calendar" type="calendar">View Calendar</StyledLink>
      {products.map(product => (
        <ProductCard key={product.id}>
          <ProductName>{product.name}</ProductName>
          <ProductDetails>
            <ProductInfo>
              <ProductCategory>Category: {product.category}</ProductCategory>
              <ProductPrice>Price: ${product.price}</ProductPrice>
            </ProductInfo>
            <ProductStock>Stock: {product.stock}</ProductStock>
          </ProductDetails>
          <ButtonGroup>
            <Button type="delete" onClick={() => handleDelete(product.id)}>Delete</Button>
            <Button onClick={() => openEditModal(product)}>Edit</Button>
          </ButtonGroup>
        </ProductCard>
      ))}
      <AddButton onClick={openAddModal}>Add Product</AddButton>
      {showAlert && (
        <Alert>
          <p>{alertMessage}</p>
        </Alert>
      )}
      <AddProductModal isOpen={isAddModalOpen} closeModal={closeAddModal} handleAddProduct={handleAddProduct} />
      {isEditModalOpen && selectedProduct && (
  <EditProductModal
    isOpen={isEditModalOpen}
    closeModal={closeEditModal}
    product={selectedProduct}
    handleEditProduct={handleEditProduct}
  />
)}

    </Container>
  );
};

export default ProductsManagement;
