import React, { use, useState } from 'react';
import Btn from './Btn';
import Card from './Card';
import Container from './Container';
import Count from './Count';

const Issuemgt = ({phPromise}) => {
    const phdata=use(phPromise)
    const [data, setData]=useState(phdata)
    
    const[toggle,setToggle]=useState('All')
    const filteredData=toggle==='All'? data : data.filter(elem=>elem.status===toggle)
    return (
        <div>
            <Container>
                <Count data={data}></Count>
                <Btn toggle={toggle} setToggle={setToggle}></Btn>
           <div className='grid grid-cols-3 gap-5'>
             {
                // phdata.map(ph=><Card ph={ph}></Card>)
                 filteredData.length===0? ( <h2 className="font-bold text-[35px] text-center mb-9 text-purple-500 text-shadow-2xs">
            No Data
          </h2>) :

                filteredData.map((issue,ind)=>{
            return(<Card key={ind} issue={issue} data={data} setData={setData}></Card>
                
            )
          })
            }
           </div>

            </Container>

            
        </div>
    );
};

export default Issuemgt;