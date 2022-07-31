import styles from './styles.module.scss';

export const FormGroup  = ({children}:any) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
