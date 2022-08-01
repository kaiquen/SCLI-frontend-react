import styles from './styles.module.scss';

interface IInput {
    label?: string;
    type: string;
    value?: string | number;
    setValue?: any;
    inputClassName?: string;
    labelClassName?:string;
    placeholder?: string;
    disabled?: boolean;
}

const Input = ({type, label,value, setValue, labelClassName, inputClassName, disabled, placeholder }:IInput) => {
    return (
        <div className={styles.container}>
            <label className={[styles.label, styles[`label${labelClassName}`]].join(' ')}>{label}</label>
						
            <input
                type={type}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className={[styles.input, styles[`input${inputClassName}`]].join(' ')}
                {...placeholder && {placeholder: placeholder}}
                {...disabled && {disabled:disabled}}
                required
            />
        </div>
    )
}

export {Input}