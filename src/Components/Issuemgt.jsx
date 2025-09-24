import React, { use, useState } from 'react';
import Btn from './Btn';
import Card from './Card';
import Container from './Container';

const Issuemgt = ({phPromise}) => {
    const phdata=use(phPromise)
    console.log(phdata)
    const[toggle,setToggle]=useState('All')
    return (
        <div>
            <Container>
                <Btn toggle={toggle} setToggle={setToggle}></Btn>
           <div className='grid grid-cols-3 gap-5'>
             {
                phdata.map(ph=><Card ph={ph}></Card>)
            }
           </div>

            </Container>

            
        </div>
    );
};

export default Issuemgt;