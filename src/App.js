import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css";
// import DayInfo from "./DayInfo";

class App extends React.Component {
    
    // getFormatDate(date){
    //     var year = date.getFullYear();              //yyyy
    //     var month = (1 + date.getMonth());          //M
    //     month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
    //     var day = date.getDate();                   //d
    //     day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
    //     return  year + '' + month + '' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
    // }
    
    state = {
        isLoading: true,
        //key : "e0f057fffec92cd3b9c22518443550bf",
        // yesterday : DayInfo.DayInfo(),
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({movies, isLoading: false});
        console.log(await axios.get("https://yts.mx/api/v2/list_movies.json"))
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return <div className="container">
            {isLoading
                    ? (
                    <div className="loader">
                        <span className="loader_text">데이터 수신중!</span>
                    </div>
                    ):( 
                    <div className="movies">
                        {movies.map(movie => {
                            return <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image }
                                genres={movie.genres}/>
                            })
                        }
                    </div>
                    )
            }</div>;
    }
}

export default App;