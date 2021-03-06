import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres}){
    return(
        <dl>
            <dt className="title">{title}({year})</dt>
            <dd><img src={poster} alt={title} title={title}/></dd>
            <dd><ul>{genres.map((genre) => <li>{genre}</li>)}</ul></dd>
            <dd>{summary.slice(0, 200)}...</dd>
        </dl>

    );
}

Movie.propTypes={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}



export default Movie;