import React, {useState} from "react";
// import { Stack,Rating} from "@mui/material"


export default function Rate(props) {
  const { rating, numReviews } = props;
  // const [value,setValue]= useState<number | null>(null)
  // const handleChange = (
  // _event: React.ChangeEvent<{}>,
  // newValue: number | null
  // ) => {
  //   setValue(newValue)
  // }
  return (
    // <Stack spacing={3} >
    //   <Rating value={4} />
    // </Stack>
    
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? "fa fa-star"
              : rating >= 0.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? "fa fa-star"
              : rating >= 1.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? "fa fa-star"
              : rating >= 2.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "fa fa-star"
              : rating >= 3.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? "fa fa-star"
              : rating >= 4.5
              ? "fa fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>{numReviews + " reviews"}</span>
    </div>
  );
}
