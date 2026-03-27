import React, { use } from 'react';

const Player = ({playerPromise}) => {
    // console.log(playerPromise)
    const player=use(playerPromise);
    console.log(player);
    return (
        <div>
            <h1>Mostafizur</h1>
        </div>
    );
};

export default Player;