function Botton(props) {
	return (
		<button onClick={() => props.onClick(props.value)}>{props.value}</button>
	);
}

export default Botton;
