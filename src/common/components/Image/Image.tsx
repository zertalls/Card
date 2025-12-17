type Props = {
  src: string
  alt: string
  widthPx: string
  heightPx: string
};

export const Image = ({ src, alt, widthPx, heightPx }: Props) => {
  return <img src={src} alt={alt} width={widthPx} height={heightPx} />
};
