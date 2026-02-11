import { FaSwimmer, FaBiking, FaDumbbell, FaVolleyballBall, FaChild, FaBasketballBall, FaStore, FaTree, FaWater, FaCar, FaBolt, FaUtensils, FaGamepad, FaChess } from 'react-icons/fa';
import { GiWaterSplash, GiRiver, GiTheaterCurtains, GiPickle, GiSnake, GiPartyPopper, GiPoolTableCorner, GiCricketBat, GiBowlingAlley, GiPingPongBat, GiCardboardBoxClosed, GiShuttlecock } from 'react-icons/gi';

// Map amenity names to icons (choose best match for each)
export const amenityIcons = {
  'Pool Table': <GiPoolTableCorner className="inline mr-2 text-yellow-400" />,
  'Table Tennis': <GiPingPongBat className="inline mr-2 text-yellow-400" />,
  'Carrom Board': <GiCardboardBoxClosed className="inline mr-2 text-yellow-400" />,
  'Chess': <FaChess className="inline mr-2 text-yellow-400" />,
  'Bowling Alley': <GiBowlingAlley className="inline mr-2 text-yellow-400" />,
  'ATV Bikes': <FaBiking className="inline mr-2 text-yellow-400" />,
  'Badminton': <GiShuttlecock className="inline mr-2 text-yellow-400" />,
  'Box Cricket': <GiCricketBat className="inline mr-2 text-yellow-400" />,
  'Utility Shop': <FaStore className="inline mr-2 text-yellow-400" />,
  'Wedding/Party Lawn': <GiPartyPopper className="inline mr-2 text-yellow-400" />,
  'Volley Ball': <FaVolleyballBall className="inline mr-2 text-yellow-400" />,
  'Kids Play Area*': <FaChild className="inline mr-2 text-yellow-400" />,
  'Basket Ball': <FaBasketballBall className="inline mr-2 text-yellow-400" />,
  'Gym': <FaDumbbell className="inline mr-2 text-yellow-400" />,
  'Pickle Ball Court': <GiPickle className="inline mr-2 text-yellow-400" />,
  'Table of Snake Ladder Game': <GiSnake className="inline mr-2 text-yellow-400" />,
  'Private Pool Room': <FaSwimmer className="inline mr-2 text-yellow-400" />,
  'Private Pool': <GiWaterSplash className="inline mr-2 text-yellow-400" />,
  'Food Court': <FaUtensils className="inline mr-2 text-yellow-400" />,
  'Lawn Area': <FaTree className="inline mr-2 text-yellow-400" />,
  'River facing views': <GiRiver className="inline mr-2 text-yellow-400" />,
  'Machan': <FaTree className="inline mr-2 text-yellow-400" />,
  'Car Parking': <FaCar className="inline mr-2 text-yellow-400" />,
  'Electricity': <FaBolt className="inline mr-2 text-yellow-400" />,
  '24/7 water supply': <FaWater className="inline mr-2 text-yellow-400" />,
  'Mini Theatre': <GiTheaterCurtains className="inline mr-2 text-yellow-400" />,
};
