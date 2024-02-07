import {sobreMi} from '../../public/data.json'

function Descripcion(){
    return(
        <section>
            <h1 className='mb-3 text-2xl font-extrabold'>Sobre mi</h1>
            <p className='text-pretty font-light text-lg text-slate-500'>{sobreMi}</p>
        </section>
    )
}
export {Descripcion}