import { useState } from 'react';
import Display from '../Display/Display';
import './calculator.css';
import Actions from '../Actions/Actions';

function Calculator() {
	const [input, setInput] = useState('');
	const [result, setReult] = useState(0);

	const handleButtonClick = value => {
		if (value === '=') {
			try {
				setReult(eval(input));
			} catch (error) {
				setReult('Error');
			}
		} else if (value === 'C') {
			setInput('');
		} else setInput(input + value);
	};

	return (
		<div className='calculator'>
			<Display showInput={input} name={'Ariet'} result={result} />
			<Actions handleButtonClick={handleButtonClick} />
		</div>
	);
}

export default Calculator;
