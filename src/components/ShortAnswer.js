import {
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Grow,
  InputAdornment,
  TextField,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerSAQuestion } from "../reducers/shortAnswerReducer";
import MyCard from "./MyCard";

const ShortAnswer = (prop) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(answerSAQuestion(prop.arynum, event.target.value));
  };
  return (
    <MyCard>
      {prop.quest.img ? (
        <>
          <CardMedia image={prop.quest.img} style={{ height: 250 }} />
          <Divider />
        </>
      ) : null}
      <CardContent>
        <CardActionArea
          onClick={() => {
            dispatch(answerSAQuestion(prop.arynum, ""));
          }}
        >
          <Typography gutterBottom>{prop.quest.stem}</Typography>
          <Typography variant="body2" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
            （点此清除本题答案）
          </Typography>
        </CardActionArea>
        <TextField
          variant="outlined"
          autoComplete="off"
          onChange={handleChange}
          multiline
          rows="4"
          rowsMax="10"
          style={{ width: "100%",paddingTop:5 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">答：</InputAdornment>
            ),
          }}
        ></TextField>
      </CardContent>
    </MyCard>
  );
};

const ShortAnswers = (prop) => {
  const quests = useSelector((state) => state.shortanswers);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        简答题
      </Typography>
      <Grid container spacing={2}>
        {quests.map((quest, arynum) => (
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 1000 * arynum }}
            key={quest.stem}
          >
            <Grid item lg={12} xs={12}>
              <ShortAnswer quest={quest} arynum={arynum} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </>
  );
};
export default ShortAnswers;
