import React from 'react';

const Card = ({issue, data, setData}) => {
    console.log(issue)
    return (
        <div>
            <div className='shadow-xl p-4 space-y-4'>
                <img src={issue.userImg} alt={issue.requestedBy}  className="h-[80px] w-[80px] rounded-full"></img>
              <h2 className="font-semibold text-lg">{issue.requestedBy}</h2>
               <h2 className="font-bold text-[26px]">{issue.subject}</h2>
               <div className={`font-semibold py-1 px-2 shadow rounded mr-2 ${issue.priority==='High'? 'text-red-500 bg-red-100': issue.priority==='Medium'?"text-yellow-500  bg-yellow-100" : "text-green-500 bg-green-100" } btn`}>
                {issue.priority}
               </div>
                <div className={`font-semibold py-1 px-2 shadow rounded mr-2 ${issue.status==='Pending'?"text-red-500 bg-red-100" : issue.status==='Submitted'? "text-yellow-500 bg-yellow-100" : "text-green-500 bg-green-100"} btn`}>
                    {issue.status}
                </div>
                <p className='text-slate-500'>{issue.description}</p>
            </div>
               
            
        </div>
    );
};

export default Card;