import Container from "./Container";



const Btn = ({toggle,setToggle}) => {
    const btns=['All', 'Pendings','Submitted','Reviewed']
    return (
        <div>
            <Container>
                <div className="text-right my-12">
                    {
                        btns.map((btn,ind)=>{
                            return(
                                <button key={ind} className={`btns ${ind===0 && 'rounded-l-xl'}
                                 ${ind===btns.length-1 && 'rounded-r-xl'}
                                 ${toggle===btn && '!bg-purple-500 !text-white'}`} onClick={()=>setToggle(btn)}>
                                    {btn}
                                </button>
                            )

                        })
                    }

                </div>
            </Container>
        </div>
    );
};

export default Btn;