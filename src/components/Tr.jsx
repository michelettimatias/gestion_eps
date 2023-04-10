
function Tr({insumo, codigo, desc, loyal}) {
  return (
	<tr className='border-b border-slate-200 hover:bg-slate-100'>
		<th className='text-right text-xs px-2'>{insumo}</th>
		<td className='text-center pr-2'>{codigo}</td>
		<td>{desc}</td>
		<td className='pr-2'>{loyal}</td>
	</tr>
  );
}

export default Tr;
