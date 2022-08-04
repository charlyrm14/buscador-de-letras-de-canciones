import { AiOutlineAlert } from 'react-icons/ai';


export function Alert ( { message } ) {

    return (
        <div className="alert"> <AiOutlineAlert/> { message } </div>
    )

}