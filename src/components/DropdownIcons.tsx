import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface DropdownProps {
    addTodo: AddTodo,
}

export const BasicExample: React.FC<DropdownProps> = ({ addTodo }) => {
    let lacteo: string[] = ['Leche', 'Huevo', 'Yogurt', 'Queso untable', 'Queso cremoso', 'Queso rayado', 'Manteca', 'Helado']
    let procesados: string[] = ['Fideos', 'Arroz', 'Polenta', 'Pan', 'Galletas', 'Facturas', 'Mermelada', 'Dulce de leche', 'Aceite', 'Vinagre', 'Sal', 'Azucar', 'Edulcorante']
    let limpiezaHogar: string[] = ['Lavandina', 'Detergente', 'Rejilla', 'Desodorante de ambiente', 'Raid', 'Limpia muebles', 'Suavizante de ropa', 'Esponja']
    let fruit: string[] = ['Manzana', 'Naranja', 'Limón', 'Frutilla', 'Durazno', 'Mandarina', 'Banana', 'Uvas', 'Tomate', 'Lechuga', 'Acelga', 'Zanahoria', 'Zapallito', 'Calabaza', 'Papas']
    let higiene: string[] = ['Pasta dental', 'Jabón', 'Desodorante', 'Shampoo', 'Acondicionador', 'Perfume', 'Cepillo de dientes', 'Hilo dental', 'Hisopos', 'Algodón', 'Papel higiénico']
    let carne: string[] = ['Costeletas', 'Pollo', 'Cerdo', 'Costilla', 'Matambre', 'Chorizo', 'Morcilla', 'Pata muslo', 'Jamón', 'Salame', 'Bondiola', 'Salchichas']
    
    
    const handleSubmit = (e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>, elem: string) => {
        e.preventDefault();
        addTodo(elem);
    }


    return (
        <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ height: '60px', width: '160px', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '2px', marginRight: '18px', marginBottom: '10px' }}><img style={{ maxHeight: '50px', maxWidth: '50px' }} src='https://cdn-icons-png.flaticon.com/512/2843/2843666.png'></img>
                    <DropdownButton title='' id='button-drop'>
                        {fruit.map((elem, index) => {
                            return (
                                <Dropdown.Item eventKey={elem} onClick={e => handleSubmit(e, elem)}>{elem}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                </div>
                <div style={{ height: '60px', width: '160px', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '2px', marginRight: '18px', marginBottom: '10px' }}><img style={{ maxHeight: '50px', maxWidth: '50px' }} src='https://cdn-icons-png.flaticon.com/512/2674/2674465.png'></img>
                    <DropdownButton title="" id='button-drop1'>
                        {lacteo.map((elem, index) => {
                            return (
                                <Dropdown.Item eventKey={elem} onClick={e => handleSubmit(e, elem)}>{elem}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                </div>
                <div style={{ height: '60px', width: '160px', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '2px', marginRight: '18px', marginBottom: '10px' }}><img style={{ maxHeight: '50px', maxWidth: '50px' }} src='https://cdn-icons-png.flaticon.com/512/527/527658.png'></img>
                    <DropdownButton title="" id='button-drop2'>
                        {procesados.map((elem, index) => {
                            return (
                                <Dropdown.Item eventKey={elem} onClick={e => handleSubmit(e, elem)}>{elem}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                </div>
            {/* </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}> */}
                <div style={{ height: '60px', width: '160px', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '2px', marginRight: '18px', marginBottom: '10px' }}><img style={{ maxHeight: '50px', maxWidth: '50px' }} src='https://cdn-icons-png.flaticon.com/512/995/995053.png'></img>
                    <DropdownButton title='' id='button-drop'>

                        {limpiezaHogar.map((elem, index) => {
                            return (
                                <Dropdown.Item eventKey={elem} onClick={e => handleSubmit(e, elem)}>{elem}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                </div>
                <div style={{ height: '60px', width: '160px', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '2px', marginRight: '18px', marginBottom: '10px' }}><img style={{ maxHeight: '50px', maxWidth: '50px' }} src='https://cdn-icons-png.flaticon.com/512/3347/3347810.png'></img>
                    <DropdownButton title="" id='button-drop1'>
                        {higiene.map((elem, index) => {
                            return (
                                <Dropdown.Item eventKey={elem} onClick={e => handleSubmit(e, elem)}>{elem}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                </div>
                <div style={{ height: '60px', width: '160px', backgroundColor: 'white', border: 'none', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: '2px', marginRight: '18px', marginBottom: '10px' }}><img style={{ maxHeight: '50px', maxWidth: '50px' }} src='https://cdn-icons-png.flaticon.com/512/2853/2853141.png'></img>
                    <DropdownButton title="" id='button-drop2'>
                        {carne.map((elem, index) => {
                            return (
                                <Dropdown.Item eventKey={elem} onClick={e => handleSubmit(e, elem)}>{elem}</Dropdown.Item>
                            )
                        })}
                    </DropdownButton>
                </div>
            </div>
        </div>
    );
}

