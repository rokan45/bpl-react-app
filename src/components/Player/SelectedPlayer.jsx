import { Trash2 } from 'lucide-react';
import Player from './Player';

const SelectedPlayer = ({ selectPlayer, setSelectPlayer, coin, setCoin }) => {
    // const { name, country, role, battingStyle, bowlingStyle, matches, runs, wickets, image, price } = selectPlayer
    console.log(selectPlayer)

    const handleDelteBtn = (players) => {
        // console.log("got clicked")
        const filteredPlayer = selectPlayer.filter((selectPlayer) => selectPlayer.name !== players.name);
        // console.log(filteredPlayer);
        setSelectPlayer(filteredPlayer)
        setCoin(coin + players.price)
    }

    return (
        <div className='grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3'>
            {
                selectPlayer.map((players, index) => {
                    const { name, country, role, battingStyle, bowlingStyle, matches, runs, wickets, image } = players
                    return (
                        <div key={index} className='border bg-gray-50 rounded-md p-5'>
                            <img src={image} alt={name} onError={(e) => e.target.src = 'https://placehold.co/400x300?text=No+Image'} className='w-full h-50 object-cover' width={"100px"} height={"100px"} />
                            <div className='mb-2.5'>
                                <h2 className='text-center font-bold text-xl'>{name}</h2>
                                <div className='flex justify-between text-sm mt-3'>
                                    <span className=' bg-gray-300 rounded-sm p-2'>{role}</span>
                                    <span className=' bg-gray-300 rounded-sm p-2'>{country}</span>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex justify-between text-sm bg-gray-100'>
                                    <p className=''>BattingStyle</p> <p>{battingStyle}</p>
                                </div>
                                <div className='flex justify-between text-sm bg-gray-100'>
                                    <p className='text-sm'>BowlingStyle</p> <p>{bowlingStyle}</p>
                                </div>
                                <div className='flex justify-between bg-gray-100'>
                                    <p>Matches</p> <p>{matches}</p>
                                </div>
                                <div className='flex justify-between bg-gray-100'>
                                    <h5>Runs</h5> <h5>{runs}</h5>
                                </div>
                                <div className='flex justify-between bg-gray-100 '>
                                    <h4>Wickets</h4> <h4>{wickets}</h4>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-2.5'>
                                <button className='btn w-full mt-3 text-red-400' onClick={() => handleDelteBtn(players)} ><Trash2 /></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayer;