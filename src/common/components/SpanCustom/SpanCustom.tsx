import styles from './SpanCustom.module.css'

type Props = {
  title: string
  className?: string
}

export const SpanCustom = ({ title, className='' }: Props) => {
  const combinedStyles = `${styles.span} ${className}`
  return <span className={combinedStyles}>{title}</span>
}
