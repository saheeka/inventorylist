import React from 'react'
import { Form, Button, Table, Nav, Navbar, Container, Modal } from 'react-bootstrap'
import { useState } from 'react';
import './Home.css'

function Home() {

  let initialvalue = []
  const handleClose = () => setAdd(false);
  const [pro, setPro] = useState(initialvalue);
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState(false);
  const [view, setView] = useState(false);
  const [show, setShow] = useState(false);


  //show add component
  const Show = () => {
    setShow(true)
  }
 
  // add product function

  const addProduct = (e) => {
    e.preventDefault();
    console.log(e.target.qty.value);
    
     
    const fdata = e.target;
    const nproduct = {
      product_name: fdata.pname.value,
      price: fdata.price.value,
      quantity: Number(fdata.qty.value)

    }
    // console.log(nproduct);
    setPro([...pro, nproduct]);
    console.log([pro]);
  }


  // increment quantity function
  const incrQty = (e) => {
    console.log(e.target.value);
    const indexOfArray = e.target.value;
    pro[indexOfArray].quantity = pro[indexOfArray].quantity + 1;
    setPro([...pro])
  }


  //decrement quantity function
  const decrQty = (e) => {
    console.log(e.target.value);
    const indexOfArray = e.target.value;
    if (pro[indexOfArray].quantity > 0) {
      pro[indexOfArray].quantity = pro[indexOfArray].quantity - 1;
    }
    else {
      alert("Quantity can not be negative number")
    }
    setPro([...pro])
  }


  //remove item function
  const removeitem = (e) => {
    console.log(e.target.value);
    const indexOfArray = e.target.value;
    //pro[indexOfArray].quantity=pro[indexOfArray].quantity-1;
    pro.splice(indexOfArray, 1)
    setPro([...pro])
  }


  return (
    <div >
       {/* navbar */}

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className='brand'>Inventory LIst</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#add"><Button onClick={() => setAdd(true)}>Add products</Button></Nav.Link>
              <Nav.Link href="#remove"><Button onClick={() => setRemove(true)}>Remove Products</Button></Nav.Link>
              <Nav.Link href="#list"><Button onClick={() => setView(true)}> List Products</Button></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <div className='contain' >

        {/* Modal window for Add */}

        <Modal
          size="lg"
          show={add}
          onHide={() => setAdd(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className="mymodal">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg" className='title'>
              Add Product

            </Modal.Title>
         
            <div className='txtbox'>
              <input type="number" placeholder='No.of items giong to add..' name="count"></input>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <Button variant="primary" onClick={Show}>Ok</Button></div>

          </Modal.Header>
          <Modal.Body>
            <Form className='box' onSubmit={addProduct}>
{ show ? 
              <div>
                
                <Form.Group className="mb-3" controlId="formBasicProduct">
               
                  <Form.Label className='text'>Product code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Product code " name="pname" />
                  <Form.Text className="text-muted">

                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label className='text'>Product Name</Form.Label>
                  <Form.Control type="text" placeholder="Product name" name="price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQuantity">
                  <Form.Label className='text'>Quantity</Form.Label>
                  <Form.Control type="text" placeholder="Quantity" name="qty" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button></div>
                : null }
            </Form>
          </Modal.Body>
        </Modal>

        {/* Modal window for list */}

        <Modal
          size="lg"
          show={view}
          onHide={() => setView(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg" className='title'>
              Product List
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table bordered size="sm" className='tab'>
              <thead>
                <tr>
                  <th>#</th>
                  <th  >Product Code</th>
                  <th >Product Name</th>
                  <th>Quantity</th>

                </tr>
              </thead>
              <tbody>
                {
                  pro.map((item, index) => {
                    return (
                      <tr>
                        <td>{index}</td>
                        <td>{item.product_name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>

                      </tr>
                    )
                  })
                }

              </tbody>
            </Table>
          </Modal.Body>
        </Modal>


        {/* Modal window for remove */}


        <Modal
          size="lg"
          show={remove}
          onHide={() => setRemove(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg" className='title'>
              Product List
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table bordered size="sm" className='tab'>
              <thead>
                <tr>
                  <th>#</th>
                  <th  >Product code</th>
                  <th >Product Name</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  pro.map((item, index) => {
                    return (
                      <tr>
                        <td>{index}</td>
                        <td>{item.product_name}</td>
                        <td>{item.price}</td>
                        <td className='qty'>{item.quantity}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <Button variant="dark" onClick={e => decrQty(e)} value={index}>
                            -
                          </Button>  &nbsp;
                          <Button variant="dark" onClick={e => incrQty(e)}
                            value={index}>
                            +
                          </Button></td>
                        <td>

                          <Button variant="danger" onClick={e => removeitem(e)} value={index} >Remove</Button></td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </Table>
          </Modal.Body>
        </Modal>

      </div>

    </div>
  )
}

export default Home
