import Progress from "./Progress";
import Continue from "./Continue";
import Upcoming from "./Upcoming";

const CardContainer = () => {
  return (
    <cardContainer>
      <div className="cardContainer">
        <Progress />
        <Continue />
        <Upcoming />
      </div>

    </cardContainer>
  )
}

export default CardContainer;