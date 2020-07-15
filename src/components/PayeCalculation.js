import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SalaryBrackets from './SalaryBrackets'
const PayeCalculation = (props) => {
    //format of taxBrackets = [deductions,taxRate,fixedTaxAmount]
    var deductions = 0
    var taxRate = 0
    var fixedTaxAmount = 0
    const basicSalary = props.basicSalary

    
    
    
   // const taxamount = basicSalary - deductions * taxRate + fixedTaxAmount
    //const [taxVariables, setTaxVariables] = useState([])
     //setTaxVariables(
      //[deductions, taxRate, fixedTaxAmount] = taxBrackets.first      
     //)


    const [paye, setPaye] = useState(0)
    const [napsa, setNapsa] = useState(0)
    

    useEffect(() => {
        setPaye(SalaryBrackets(props.basicSalary))
        setNapsa(props.basicSalary*0.05)
        console.log(paye)
    }, [paye,props.basicSalary ])
    
    return (
        

        <Container className="calculation_section">
    
            <Row>
                <Col className="result-body-right" lg md="6" sm="8"> 
                <Row className="result-head">
                    <p className="font-contrast">PAYE Calculation</p>
                    </Row>
                 <Row>
                     <Col className="result-body" lg md="5" sm="7">
                    <p><strong>Country:</strong> {props.country}</p>
                    <p><strong>Your Basic Salary:</strong> {props.basicSalary}</p>
                    <p><strong>Your PAYE IS:</strong>  K {paye.toFixed(2)} </p>
                    </Col>
                    </Row>

                </Col>
                <Col md="6" sm="8">
                    <Row className="result-head">
                    <p className="font-contrast">NAPSA <span >(5%)</span></p>
                    </Row>
                    <Row>
                        <Col className="result-body" lg md="5" sm="7">
                          <p> Employer-Contribution: K {napsa/2}</p>
                          <p> Employee-Contribution: K {napsa/2}</p>
                          <p>Total Contribution K {napsa}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    
                </Col>
            </Row>
        </Container>
    )
    
}
export default PayeCalculation


