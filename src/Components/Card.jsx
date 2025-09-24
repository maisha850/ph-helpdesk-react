import React from 'react';

const Card = ({ph}) => {
    return (
        <div>
            <div className='shadow-xl p-4 space-y-4'>
                <img src={ph.userImg} alt={ph.requestedBy}  className="h-[80px] w-[80px] rounded-full"></img>
              <h2 className="font-semibold text-lg">{ph.requestedBy}</h2>
               <h2 className="font-bold text-[26px]">{ph.subject}</h2>
               <div className={`font-semibold py-1 px-2 shadow rounded mr-2 ${ph.priority==='High'? 'text-red-500 bg-red-100': ph.priority==='Medium'?"text-yellow-500  bg-yellow-100" : "text-green-500 bg-green-100" } btn`}>
                {ph.priority}
               </div>
                <div className={`font-semibold py-1 px-2 shadow rounded mr-2 ${ph.status==='Pending'?"text-red-500 bg-red-100" : ph.status==='Submitted'? "text-yellow-500 bg-yellow-100" : "text-green-500 bg-green-100"} btn`}>
                    {ph.status}
                </div>
                <p className='text-slate-500'>{ph.description}</p>
            </div>
               
            
        </div>
    );
};

export default Card;