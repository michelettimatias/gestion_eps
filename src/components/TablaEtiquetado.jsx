
function TablaEtiquetado({frente, dorso}) {
  return (
	<div className='border rounded-md p-2'>
		<p className='text-center text-lg'>Altura de etiquetado</p>
		<div className='text-center text-base grid grid-cols-2'>
			<p>ET</p>
			<p>CET</p>
		</div>
		<div className='text-center text-lg font-bold grid grid-cols-2'>
			<p>{frente} mm</p>
			<p>{dorso} mm</p>
		</div>
		<p>Desde la base de la botella a borde inferior de la etiqueta</p>
	</div>
  );
}

export default TablaEtiquetado;