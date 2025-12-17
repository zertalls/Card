import styles from './HeaderTwo.module.css'

type Props = {
    title: string
};
export const HeaderTwo = ({title}: Props) => {
    return (
        <h2 className={styles.h2}>
            {title}
        </h2>
    );
};