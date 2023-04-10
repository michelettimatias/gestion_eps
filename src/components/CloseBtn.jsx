import { fullScreenOff } from './functions.jsx';

function CloseBtn(props) {
  return (
	<div id={`${props.id}Close`}className="close-btn close-btn-off" onClick={()=>fullScreenOff(props.id)}>
		<span className="material-symbols-outlined">close</span>
	</div>
  );
}

export default CloseBtn;
