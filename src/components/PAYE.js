import React, { useState } from 'react'
import PayeCalculation from './PayeCalculation';
import Select from 'react-select';
import {Container, Form, Row, Col} from 'react-bootstrap';
import * as yup from 'yup'
const options = [
    { value: 'Zambia', label: 'Zambia' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'Zimbabwe', label: 'Zimbabwe' }
  ]
export default function PAYE() {
    const [country, selectCountry] = useState('');
    const [basicSalary, setBasicSalary] = useState(0)
    

    return (
      
        <Container>
           <Row>
            <Col md= "8">
            <h1>Paye Calculator</h1>
            <Container>
            <Form >
                <Form.Group  controlId="country">
                    <Form.Label> Select Country:  </Form.Label>
                    <Select  type="select"onChange= {(e) => selectCountry(e.value)}   options={options} />
                   
                 </Form.Group>

                 <Form.Group>
                    <Form.Label>Basic Salary: </Form.Label> 
                    <Form.Control className="form-control" onChange ={(event)=> setBasicSalary(event.target.value)} value={basicSalary} name="basicSalary"  />
                    <Form.Text className="text-muted">
                        Enter your gross salary here...
                    </Form.Text>
                
                 </Form.Group>
            
            </Form>
            </Container>
            <Container>
                <PayeCalculation country={country} basicSalary={basicSalary} />  
            </Container>
            </Col>
          
        </Row>
       
        </Container>
    )
}






