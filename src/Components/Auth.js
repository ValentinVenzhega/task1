import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
   width:300px;
   height: 300px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: #fff;
   border: 2px solid grey;
   border-radius: 5px;
   margin-top: 150px;
`;

const Input = styled.input`
   border: 1px solid grey;
   border-radius: 5px;
   width: 250px;
   height: 35px;
   margin: 15px 0 15px 0;
`;

const Button = styled.button`
   background: blue;
   border: 1px solid grey;
   border-radius: 5px;
   margin-top: 15px;
   height: 45px;
   width: 250px;
   color: #fff;
   font-size: 18px;
   font-weight: 600;
`;

export function Welcome() {
   return (
      <>
         <Form>
            <Input/>
            <Input/>
            <Button>Отправить</Button>
         </Form>
      </>
   );
}