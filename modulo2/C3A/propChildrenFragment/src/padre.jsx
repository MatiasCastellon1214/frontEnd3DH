const Padre = (props)=>{
    return (
        <div 
            style={{
                width:"75%",
                background: "#FFEFD5",
                height: "200px",
                color:"black",
                padding: "20px"
            }}
        >
            <h5>Soy un padre</h5>
            {props.children}   
        </div>
    )
}

export default Padre;