import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";

// Placeholder icons (replace with your own or use a library like react-icons)
const IconRoad = () => <span style={{fontSize:24}}>🛣️</span>;
const IconGate = () => <span style={{fontSize:24}}>🏰</span>;
const IconAmenities = () => <span style={{fontSize:24}}>🏊</span>;

export default function Shahpur() {
  return (
    <Container>
      {/* Project Introduction */}
      <section className="my-10">
        <p className="text-lg md:text-xl mb-6">
          Meravilla Brings you a signature statement of living and address, which brings you utter satisfaction of completion of making your dream house. Pool City, A loaded choice of 1, 2 & 3 BHK Pool Villas offering sizes greater then life which will be enough to accompany you and your dear one's with un-believable huge garden & private pool ensuring utmost enjoyment with nature. A signature pool villa in a township within 100 kms vicinity of Mumbai with options of well designed ready possession to customized choices to match your taste & expectations.
        </p>
        <p className="text-md text-gray-700">We believe our dreams can come true, if we have the courage to pursue them.</p>
      </section>

      {/* Key Features Row */}
      <section className="flex flex-wrap gap-8 my-10 justify-center">
        <div className="flex-1 min-w-[220px] max-w-[300px] bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <IconRoad />
          <h3 className="font-bold text-lg mt-2 mb-1">2 HOURS AWAY FROM MUMBAI</h3>
          <p className="text-sm text-center">Embraced by majestic mountains and bordered by a meandering river, the project is just 2 hours away from Mumbai.</p>
        </div>
        <div className="flex-1 min-w-[220px] max-w-[300px] bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <IconGate />
          <h3 className="font-bold text-lg mt-2 mb-1">GATED COMMUNITY</h3>
          <p className="text-sm text-center">Gated community dedicated to villas, residents are welcomed into a world of opulence and refined living.</p>
        </div>
        <div className="flex-1 min-w-[220px] max-w-[300px] bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <IconAmenities />
          <h3 className="font-bold text-lg mt-2 mb-1">OPEN AMENITIES & CLUB HOUSE</h3>
          <p className="text-sm text-center">Residents of these villas enjoy a plethora of world-class amenities at their fingertips with private swimming pools offer refreshing retreats.</p>
        </div>
      </section>

      {/* Why Poolcity Section */}
      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">Why <span className="text-teal-600">Poolcity</span></h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>2 Spectacular Location Full Customization of Villa Design</li>
          <li>Property starts from just 99 Lacs Shahapur is river touch</li>
          <li>Kasara is mountain touch</li>
          <li>Easy payment plan</li>
          <li>All villas with private Swimming Pool</li>
          <li>ROI upto 12% Fixed monthly rental plan</li>
          <li>Guaranteed Capital Growth till possession</li>
          <li>No Maintenance</li>
          <li>Easy way to start your own Holiday Company</li>
          <li>Tax benefits & deductions</li>
          <li>Open amenities & club house</li>
          <li>Customer service is just phone call away</li>
          <li>Housekeeping services available</li>
          <li>Gated community</li>
        </ul>
      </section>

      {/* Property Details Section */}
      <section className="my-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Property <span className="text-teal-600">Details</span></h2>
          <div className="bg-teal-600 text-white py-2 px-4 rounded mb-4">Poolcity is a Perfect Destination For Rejuvenation And Holidays.</div>
          <h3 className="text-xl font-bold mb-2">Customized Villa</h3>
          <p className="mb-4">Our collection of tailor-made villas offers a diverse range of options, from cozy 2 BHK to expansive 5 BHK residences, designed to suit your needs. These villas come in both compact and spacious layouts, ensuring flexibility and comfort. With areas spanning from 550 to 1500 sq.ft., you can find the perfect space that aligns with your preferences.</p>
          <ul className="list-none pl-0 mb-4">
            <li>➔ <b>2 BHK (Compact) and 2 BHK (Spacious)</b></li>
            <li>➔ <b>3 BHK (Compact) and 3 BHK (Spacious)</b></li>
            <li>➔ <b>4 BHK (Compact)</b></li>
          </ul>
          <Button>GET DETAILS</Button>
        </div>
        <div>
          <img src="/public/images/shahpur-villa.jpg" alt="Shahpur Villa" className="rounded-xl border-4 border-white shadow-lg w-full h-auto" />
        </div>
      </section>

      {/* Clubhouse Amenities Section */}
      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">50+ Clubhouse <span className="text-teal-600">Amenities</span></h2>
        <div className="bg-teal-600 text-white py-2 px-4 rounded mb-4">Clubhouse amenities enhance the overall experience for members, providing a place to relax, exercise, socialize, and engage in various activities within a convenient and well-equipped setting.</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2"><span>🎱</span> POOL TABLE</div>
          <div className="flex items-center gap-2"><span>♟️</span> CHESS</div>
          <div className="flex items-center gap-2"><span>🏏</span> BOX CRICKET</div>
          <div className="flex items-center gap-2"><span>🏐</span> VOLLEY BALL</div>
          <div className="flex items-center gap-2"><span>🏀</span> BASKET BALL</div>
          <div className="flex items-center gap-2"><span>🏋️</span> GYM</div>
          <div className="flex items-center gap-2"><span>🎲</span> TABLE OF LUDO GAME</div>
          <div className="flex items-center gap-2"><span>🏊</span> PRIVATE POOL</div>
          <div className="flex items-center gap-2"><span>🏡</span> PARTY HALL</div>
          <div className="flex items-center gap-2"><span>🍔</span> FOOD COURT</div>
          <div className="flex items-center gap-2"><span>🌳</span> LAWN AREA</div>
          <div className="flex items-center gap-2"><span>🏞️</span> RIVER FACING VIEWS</div>
          <div className="flex items-center gap-2"><span>🧒</span> KIDS PLAY AREA</div>
          <div className="flex items-center gap-2"><span>🏹</span> ARCHERY</div>
          <div className="flex items-center gap-2"><span>🎱</span> TABLE TENNIS</div>
          <div className="flex items-center gap-2"><span>🎲</span> TABLE OF SNAKE LADDER GAME</div>
        </div>
      </section>
    </Container>
  );
}
