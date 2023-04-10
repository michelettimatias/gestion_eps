import './App.css';
import logo_molinos from './src/images/logo-molinos.svg';
import TrH from './components/TrH';
import Tr from './components/Tr';
import eps from "./sku.json";
import insumos from "./insumos.json";
import { useState, useEffect } from 'react';

function App() {

	const [ep, setSku]=useState(eps.find( ep => ep.sku == 76006));

	const [isVisible, setVisible]=useState("hidden");

	const openNewSku=(e)=>{
		e.preventDefault();
		setVisible(isVisible==="hidden"?"block":"hidden");
	}

	useEffect(() => {
		if(isVisible==="block"){
			document.querySelector('#sku').focus();
		}
	  });

	const toogleVisible=(e)=>{
		e.preventDefault();
		setVisible(isVisible==="hidden"?"block":"hidden");
	}

	const findSku = (inputSku) =>{
		return eps.find( ep => ep.sku == inputSku)
	}

	const changeSku=(e)=>{
		e.preventDefault();
		let inputSku=document.querySelector('#sku').value;
		document.querySelector('#sku').value="";
		if(findSku(inputSku)!=undefined){
			setSku(findSku(inputSku));
			setVisible(isVisible==="hidden"?"block":"hidden");
		}else{
			alert("No se encuentra el SKU");
		}
	}

	return (
		<div>
			<div className={`absolute w-full h-full bg-black bg-opacity-70 flex flex-wrap justify-center content-center ${isVisible}`}>
					<form className='p-4 bg-white w-60 bg-slate-100 rounded grid gap-4'>
						<input type="number" id='sku' name='sku' className='border pl-2'/>
						<button type="submit" className='rounded bg-blue-500 hover:bg-blue-600 px-4 text-white' onClick={changeSku}>Ver SKU</button>
						<button className='rounded border bg-white px-4 hover:bg-slate-200' onClick={toogleVisible}>Cancelar</button>
					</form>
			</div>

{/*			Header*/}

			<header id="header" className="bg-blue-900 grid grid-cols-2 px-8 py-4 text-white">
				<h1 className="text-3xl font-bold">{ep.sku} - {ep.sku_desc}</h1>
				<div className='grid grid-cols-7 gap-4'>
					<p className="border rounded text-lg px-2 hover:bg-white hover:text-blue-900 cursor-pointer col-span-2 text-center" onClick={openNewSku}>Cambiar SKU</p>
					<p className="border rounded text-lg px-2 hover:bg-white hover:text-blue-900 cursor-pointer col-span-2 text-center">Versión: {ep.version}</p>
					<p className="border rounded text-lg px-2 hover:bg-white hover:text-blue-900 cursor-pointer col-span-2 text-center">Fecha: {ep.date}</p>
					<div>
						<img src={logo_molinos} className="w-20" alt="Logo Molinos"/>
					</div>
				</div>
			</header>


{/*			Body*/}

			<div id="body" className="p-4 grid grid-cols-7 gap-4">
				<section className="rounded-md shadow-md bg-white border overflow-hidden">
					<div className="px-4 py-2 border-b border-slate-200">
						<p className="text-md font-medium">Render</p>
					</div>
					<div className="grid justify-center">
						<img id="render-img" src={require(`../src/images/${ep.sku}.jpg`)} alt={ep.sku}/>
					</div>
					<div className='px-2'>
						<p className='text-xs text-center'>La imagen es ilustrativa. Algunos textos pueden variar.</p>
					</div>
				</section>


{/*					Materiales*/}

				<div className="grid grid-cols-2 gap-4 col-span-6">
					<section id='materiales' className="rounded-md shadow-md bg-white border border-slate-300 overflow-hidden">
						<div className="bg-blue-50 px-4 py-2 border-b border-slate-300">
							<p className="text-md font-medium">Materiales</p>
						</div>
						<div className='text-sm inner'>
							<table className='w-full h-full'>
								<tbody>
									<TrH insumo="INSUMO" codigo="CÓDIGO" desc="DESCRIPCIÓN" loyal="LOYAL"/>
									{
										ep.materials.map((material)=>{
											if(material.insumo=="SEPARADOR"){
												ep.separador=true;
											}
											let insumo = insumos.find( insumo => insumo.codigo == material.codigo)
											return(<Tr key={material.codigo} insumo={material.insumo} codigo={material.codigo} desc={insumo.desc_insumo} loyal={insumo.loyal} />)
										})
									}
								</tbody>
							</table>
						</div>
					</section>


{/*					Caja*/}

					<section id='caja' className="rounded-md shadow-md bg-white border overflow-hidden">
						<div className="bg-blue-50 px-4 py-2 border-b border-slate-300">
							<p className="text-md font-bold italic">Caja y rotulado</p>
						</div>
						<div className='p-4 text-xs inner grid grid-cols-2 gap-4'>
							<div>
								<img src={require(`../src/images/${ep.materials.find( material => material.insumo == "CAJA")['codigo']}.jpg`)} alt="Caja" />
								<div className='border rounded p-2 mt-2'>
									<p>Separador: {ep.separador?"SÍ":" NO"}</p>
								</div>
							</div>
							<div className='text-center'>
								<p className='font-bold'>20217263 ROTULO AUT. BCO 50X100</p>
								<div className='border border-dashed rounded-md border-slate-900 px-2 py-1 text-xxs my-2'>
									<p>M-XXXXXXX-E</p>
									<p>{ep.familia}</p>
									<p>{`${ep.varietal} ${ep.presentacion}`}</p>
									<p>{`${ep.importador=="ML"?"":ep.importador} ${ep.pais}`}</p>
									<img src={require(`../src/images/${ep.itf}.jpg`)} alt="Código ITF caja"/>
								</div>
								<div>
									<p>2 RÓTULOS O INKJET EN CARAS OPUESTAS</p>
								</div>
							</div>
						</div>
					</section>


{/*					Etiquetado*/}

					<section id='etiquetado' className="rounded-md shadow-md bg-white border overflow-hidden">
						<div className="bg-blue-50 px-4 py-2 border-b border-slate-300">
							<p className="text-md font-bold italic">Etiquetado</p>
						</div>
						<div className='inner text-xs flex'>
							<img className='h-full' src={require(`../src/images/${ep.materials.find( material => material.insumo == "DORSO")['codigo']}.jpg`)} alt="Contraetiqueta" />
							<div className='h-full inner p-4'>
								<p>Datos inkjet dorso</p>
								<p>Az uva x.x% - [mayor a 1,5mm de alto]</p>
								<p>L-- ---- -- --- ----[sugerido 3mm de alto]</p>
								<p>Línea (2) | Origen (4) | Año etiquetado (2) | Día juliano etiquetado (3) | Hora etiquetado</p>
								<div className={`border rounded-md p-2 text-center mb-2 text-bold`}>
									<p className='text-base'>Observaciones</p>
									<p className={`text-${ep.color_observacion}-600`}>{ep.observaciones}</p>
								</div>
								<div className='border rounded-md p-2 text-center'>
									<p className=' text-base text-bold'>Altura de etiquetado</p>
									<div className='text-base grid grid-cols-2 gap-4'>
										<p className='rounded bg-blue-600 text-white'>ET: <span className='text-xl font-bold'>{ep.altura_frente} mm</span></p>
										<p className='rounded bg-blue-600 text-white'>CET: <span className='text-xl font-bold'>{ep.altura_dorso} mm</span></p>
									</div>
									<p>Desde la base de la botella a borde inferior de la etiqueta</p>
								</div>
							</div>
						</div>
					</section>


{/*					Palletizado*/}

					<section id='palletizado' className="rounded-md shadow-md bg-white border overflow-hidden">
						<div className="bg-blue-50 px-4 py-2 border-b border-slate-300">
							<p className="text-md font-bold italic">Palletizado</p>
						</div>
						<div className='text-sm inner flex p-4'>
							<table className='w-full h-full'>
								<tr>
									<td>Norma</td>
									<td>NOP-808</td>
								</tr>
								<tr>
									<td>Pallet</td>
									<td>Arlog</td>
								</tr>
								<tr>
									<td>Cajas/camada</td>
									<td>28</td>
								</tr>
								<tr>
									<td>Cajas/pallet</td>
									<td>140</td>
								</tr>
								<tr>
									<td>Film</td>
									<td>20217104 FILM STRETCH AUTOMÁTICO</td>
								</tr>
								<tr>
									<td>Esquineros</td>
									<td>Sí</td>
								</tr>
								<tr>
									<td colSpan={2}>PALLET CON TRATAMIENTO TÉRMICO</td>
								</tr>
							</table>
							<img src={require('../src/images/palletizado.jpg')} alt="Diagrama de palletizado"/>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;