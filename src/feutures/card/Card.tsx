import { FlexWrapper } from "../../common/components/Wrapper/FlexWrapper";
import { ImageBlock } from "./ui/ImageBlock/ImageBlock";
import { InfoBlock } from "./ui/InfoBlock/InfoBlock";

export const Card = () => {
  return (
    <div className="section">
      <div className="myContainer">
        <FlexWrapper>
          <ImageBlock />
          <hr/>
          <InfoBlock />
        </FlexWrapper>
      </div>
    </div>
  );
};
