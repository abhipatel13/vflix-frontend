import { img_300 } from "../../config/config";
import { unavailable } from "../../config/config";
import './SingleContent.css';
import Badge from "@mui/material/Badge";
import { Box, Link, Modal, Typography } from "@mui/material";
import Singlepage from "../SinglePage/Singlepage";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import ContentModal from '../ContentModal/ContentModal';

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {
  return (
    <>
      <div className="media">
        <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />
        {<img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />}
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === 'tv' ? 'TV Series' : 'Movies'}
          <span className="date">{date}</span>
        </span>
      </div>
    </>
  )
}
export default SingleContent;