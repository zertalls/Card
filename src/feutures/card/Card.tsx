import { FlexWrapper } from "../../common/components/Wrapper/FlexWrapper";
import { ImageBlock } from "./ui/ImageBlock/ImageBlock";
import { InfoBlock } from "./ui/InfoBlock/InfoBlock";
import styles from './Card.module.css'

export const Card = () => {
  return (
    <div className="section">
      <div className="myContainer">
        <FlexWrapper className={styles.flexWrapper}>
          <ImageBlock />          
          <InfoBlock />
        </FlexWrapper>
      </div>
    </div>
  );
};
