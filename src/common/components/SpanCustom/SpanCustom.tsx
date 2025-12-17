import styles from './SpanCustom.module.css'

type Props = {
  title: string
}

export const SpanCustom = ({ title }: Props) => {
  return <span className={styles.span}>{title}</span>
}
