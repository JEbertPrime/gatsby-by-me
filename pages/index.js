import Head from 'next/head'
import fs from 'fs'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Input, Button, FormGroup, Form, Container as container, Col as col, Row as row} from 'reactstrap'
import styled from 'styled-components'
const Col = styled(col)`
margin:auto;
background: rgba(0,0,0,.5);
border-radius: 10px;
padding:10px;
`
const Row = styled(row)`
`
const Container = styled(container)`
height:100vh;
  ${({background}) => handleBackground(background)}
`;
const handleBackground = (i) =>{
  switch(i){
    case 0:
      return "background-color: #4158D0;background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);";
    case 1:
      return "background-color: #0093E9;background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);";
    case 2:
      return "background-color: #8EC5FC;background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);";
    case 3:
      return "background-color: #8EC5FC;background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);" ;
    default:
      return "background-color: #85FFBD;background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);";
  }
}
export async function getStaticProps(context) {
  var book = {}
     book.text =   fs.readFileSync('./public/gatsby.txt', 'utf8', (err, data)=> { 
         return data
     }) 
  var background = Math.floor(Math.random()*5)
  console.log(background)
  return {
    props: {
        book,
        background
    }, // will be passed to the page component as props
  }
}
export default function Home({book, background}) {
    
 const createBook = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }

  return (
    <Container fluid background={background}>
    <Row>
      <Col md={6}>
        <h1>Gatsby by Me</h1>
        <p>Ever wish your work could be counted among the greatest of the 20th century? Ever want to create a novel that captures the soul of scarred nation?</p>
        <p>Well, thanks to the magic of the <strong>public domain</strong>, now you can!</p>
        <p>A public domain work isn't owned by anybody; but if you make an alteration to it, you can own the copyright on that alteration! Just type in your name and the words you want to replace, and this app will give you your new book and the legally
         binding license to it.</p>
          <Form onSubmit={createBook}>
            <FormGroup>
              <Input id="name" type="text" autoComplete="name" required placeholder='Name' />
            </FormGroup>
            <FormGroup>
              <Input id="replace1" type="text" autoComplete="replace" required placeholder='Replace this...' />
              </FormGroup>
            <FormGroup>
              <Input id="replace2" type="text" autoComplete="replace" required placeholder='... with this' />
              </FormGroup>
              
          <Button type="submit" color="primary">Write my Novel!</Button>
      </Form>
      </Col>
    </Row>
      
    </Container>
    
  )
}
