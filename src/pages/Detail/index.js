import { useLocation } from 'react-router-dom';
import "./index.css";

function Detail() {


    const location = useLocation();

    console.log(location)



    const video = location.state.image;
    const title = location.state.title;

    return (
        <div className='detail-container'>
            <iframe width="800" height="500" src={video} title="BOOST 4 DIVINE DEPARTURE SHANKS 52/52 GAMEPLAY ONE PIECE BOUNTY RUSH OPBR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h2>{title}</h2>
            <p>OnePiece Bounty Rush is a multiplayer action game based on the popular manga and anime series, One Piece. Developed by Bandai Namco Entertainment, the game allows players to take on the roles of various characters from the One Piece universe and engage in fast-paced battles in a team-based setting.

                In One Piece Bounty Rush, players form teams of up to four characters and compete against other teams in real-time battles. The objective is to collect as many treasure points as possible within a given time limit. These treasure points can be obtained by defeating opponents, capturing treasure chests, or securing specific areas on the map.

                The game features a wide roster of characters from the One Piece series, each with their unique abilities and playstyles. Players can choose from iconic characters like Luffy, Zoro, Nami, Sanji, and many more, each with their own special moves and techniques. As players progress in the game, they can unlock and upgrade characters, improving their stats and unlocking new abilities.

                One Piece Bounty Rush offers various game modes to cater to different playstyles. The game includes a cooperative mode where players team up with friends or other players from around the world to tackle challenging missions and quests. There is also a competitive mode where players can participate in ranked matches and climb the leaderboard for rewards and recognition.

                As players progress and gain experience, they can unlock new features, equipment, and customization options to enhance their characters' abilities and appearance. The game also introduces regular updates and events, providing players with new challenges, limited-time events, and the opportunity to obtain exclusive rewards.

                Overall, One Piece Bounty Rush offers an exciting and action-packed experience for fans of the One Piece series. With its multiplayer battles, diverse character roster, and constant updates, the game provides an engaging and immersive experience for both casual and competitive players alike.</p>
        </div>
    );
}

export default Detail;