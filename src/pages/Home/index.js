import VideoCard from "../../components/VideoCard";
import "./index.css";

function Home() {


    const video=[
        {
            title:"Boost 4 Divine Departure Shanks",
            image:"https://www.youtube.com/embed/2bD3U-AocSI",
            small:'https://yt3.ggpht.com/kW3JHV_TkxtbTrXM5Q-3ghltKr-KQyiM2GErUUZ9JEYXIZMpt62wTZsALnukt58ETMal1uuqrQ=s68-c-k-c0x00ffffff-no-rj',
            color:"red",
            data:"",
            by:"Fire opbr"
        },
        {
            title:"ONE PIECE BOUNTY RUSH",
            image:"https://www.youtube.com/embed/5MdqVynrYjo",
            small:'https://yt3.ggpht.com/kW3JHV_TkxtbTrXM5Q-3ghltKr-KQyiM2GErUUZ9JEYXIZMpt62wTZsALnukt58ETMal1uuqrQ=s68-c-k-c0x00ffffff-no-rj',
            color:"green",
            data:"",
            by:"Soul 47"
        },
        {
            title:"I built 10 different languages",
            image:"https://www.youtube.com/embed/FQPlEnKav48",
            small:'https://yt3.ggpht.com/kW3JHV_TkxtbTrXM5Q-3ghltKr-KQyiM2GErUUZ9JEYXIZMpt62wTZsALnukt58ETMal1uuqrQ=s68-c-k-c0x00ffffff-no-rj',
            color:"purple",
            data:"",
            by:"Fireship"
        },
        {
            title:" Which JS Framework is best?",
            image:"https://www.youtube.com/embed/cuHDQhDhvPE",
            small:'https://yt3.ggpht.com/kW3JHV_TkxtbTrXM5Q-3ghltKr-KQyiM2GErUUZ9JEYXIZMpt62wTZsALnukt58ETMal1uuqrQ=s68-c-k-c0x00ffffff-no-rj',
            color:"red",
            data:"",
            by:"Fireship"
        },
       
    ]

    return ( 
        <div className="home-container">
            {video.map((vi,ind)=>{
              return(
                <VideoCard {...vi} key={ind} />
              )
            })}
        </div>
     );
}

export default Home;