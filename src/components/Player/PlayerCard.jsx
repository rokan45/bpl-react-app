import React from 'react';
import coin from './../../assets/dollar 1.png'

const PlayerCard = ({ player }) => {
    console.log(player)
    const { name, country, role, battingStyle, bowlingStyle, matches, runs, wickets, image,price } = player
    return (
        <div className='border bg-gray-50 rounded-md p-5'>
            <img src={image} alt={name} onError={(e) => e.target.src = 'https://placehold.co/400x300?text=No+Image'} className='w-full h-50 object-cover' />
            <div className='p-5'>
                <h2 className='text-center font-bold text-xl'>{name}</h2>
                <div className='flex justify-between text-sm mt-3'>
                    <span className=' bg-amber-200 rounded-sm p-2'>{role}</span>
                    <span className=' bg-amber-200 rounded-sm p-2'>{country}</span>
                </div>
            </div>
            <div className='flex justify-between text-sm '>
                <p className=''>BattingStyle</p> <p>{battingStyle}</p>
            </div>
            <div className='flex justify-between text-sm'>
                <p className='text-sm'>BowlingStyle</p> <p>{bowlingStyle}</p>
            </div>
            <div className='flex justify-between'>
                <p>Matches</p> <p>{matches}</p>
            </div>
            <div className='flex justify-between bg-amber-100'>
                <h5>Runs</h5> <h5>{runs}</h5>
            </div>
            <div className='flex justify-between '>
                <h4>Wickets</h4> <h4>{wickets}</h4>
            </div>
            <div className='flex justify-between items-center mt-2.5'>
                <button className='btn'>{price} <img src={coin} alt="" /></button>
                <button className='btn'>Choose Player</button>
            </div>
        </div>
    );
};

export default PlayerCard;