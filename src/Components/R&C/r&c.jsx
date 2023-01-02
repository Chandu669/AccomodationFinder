//SCSS Imports
import "./r&c.scss";

//React Imports

//Component Imports
import { Rating } from "@mui/material";
import { Stack } from "@mui/material";

//Assets

const commentsList = [
  {
    date: "17 Dec 2022",
    rate: 5,
    comment:
      "I have stayed here before. It is a comfortable room. Specially I should mention that the place is surrounded by a peacefull enviroment. It was very helpful when I was doing my University studies.",
    commenter: "Upul Abeysinghe",
  },
  {
    date: "15 Dec 2022",
    rate: 5,
    comment:
      "It was the best place among places that I have stayed during my university life",
    commenter: "Nihal Perera",
  },
  {
    date: "14 Dec 2022",
    rate: 4,
    comment: "It is very valuable for this price",
    commenter: "Amal Wijesinghe",
  },
];

const FeedBack = (props) => {
  const CommentTile = (props) => {
    return (
      <div className="comment-tile">
        <div className="section">
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={props.rate}
              readOnly
            />
          </Stack>
          <p className="date">{props.date}</p>
        </div>
        <div className="section">
          <p className="comment">{props.comment}</p>
        </div>
        <div className="section">
          <p className="commenter">{props.commenter}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="feedback">
      <div className="title-wrapper">
        <p className="title">Ratings & Reviews</p>
      </div>
      {commentsList.map((commentData, i) => {
        return (
          <div className="comment-wrapper">
            <CommentTile
              key={"comment" + i}
              rate={commentData.rate}
              date={commentData.date}
              comment={commentData.comment}
              commenter={commentData.commenter}
            />
            <hr className="divider" />
          </div>
        );
      })}
    </div>
  );
};

export default FeedBack;
