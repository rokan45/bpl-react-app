import React, { use, useState } from 'react';
import PlayerCard from './PlayerCard';
import SelectedPlayer from './SelectedPlayer';

const Player = ({ playerPromise,coin,setCoin }) => {
    // console.log(playerPromise)
    const playerData = use(playerPromise);
    // console.log(playerData);

    const [select, setSelect] = useState("available");


    return (
        <div>
            <div className='flex mx-auto justify-between items-center p-5'>
                {
                    select === "available" ? <h2 className='font-bold text-2xl'>Available Players</h2> : <h2 className='font-bold text-2xl'>Selected Player (4/6)</h2>
                }
                <div className=''>
                    <button onClick={() => setSelect("available")} className={`btn rounded-r-none ${select === "available" ? "bg-amber-200" : "btn"} `}>Available</button>

                    <button onClick={() => setSelect("selected")} className={`btn rounded-l-none ${select === "selected" ? "bg-amber-200" : "btn"} `}>Selected(0)</button>
                </div>
            </div>
            {
                select === "available" ?
                    <div className='grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 '>
                        {
                            playerData.map(player => <PlayerCard key={player.id} player={player} coin={coin} setCoin={setCoin}></PlayerCard>)
                        }
                    </div>
                    :
                    <SelectedPlayer></SelectedPlayer>
            }

        </div>
    );
};

export default Player;