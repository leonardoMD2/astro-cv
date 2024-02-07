import {sobreMi} from '../../public/data.json'

function Descripcion(){
    return(
        <p className='font-semibold text-pretty'>{sobreMi}</p>
    )
}
export {Descripcion}