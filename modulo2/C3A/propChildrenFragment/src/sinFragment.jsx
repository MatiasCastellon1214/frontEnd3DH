import { number } from "yup";


const ListItems = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listNumbers = numbers.map((number)=>{
        return (
        <>
            <span>N° </span>
            <p>{number}</p>
        </>
        )
    })

   return (
        
        <div>
            {listNumbers}
        </div>
    
   )
}

export default ListItems