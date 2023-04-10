
function TrH(props) {
  return (
	<tr className='border-b border-slate-200 text-xs'>
		<th className='text-right px-2'>{props.insumo}</th>
		<th>{props.codigo}</th>
		<th>{props.desc}</th>
		<th>{props.loyal}</th>
	</tr>
  );
}

export default TrH;
