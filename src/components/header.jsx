import {nombre, descripcion} from '../../public/data.json'
function Header(){
    return(
        <header className='grid grid-cols-2 '>
            <h1>{nombre}</h1>
            <p className='col-start-1'>{descripcion}</p>
            <p className='col-start-2'>img</p>
            <footer className='col-span-2 flex justify-between w-3/5'>
                <p>iconos</p>
                <p>iconos</p>
                <p>iconos</p>
            </footer>
        </header>
    )
}

export{Header}