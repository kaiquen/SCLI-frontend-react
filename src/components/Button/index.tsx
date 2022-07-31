import styles from'./styles.module.scss';

interface IButton {
    title:string;
    className?: string | undefined
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: any | null
}

const Button = ({title, className, type, onClick}:IButton) => {
    return (
        <button 
            type={type} 
            className={[styles.container, styles[`${className}`]].join(" ")}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export { Button }