import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";

const IconMountain = () => <span style={{fontSize:24}}>⛰️</span>;
const IconGate = () => <span style={{fontSize:24}}>🏰</span>;
const IconAmenities = () => <span style={{fontSize:24}}>🏊</span>;

export default function Kasara() {
  return (
    <Container>
      {/* Project Introduction */}
      <section className="my-10">
        <p className="text-lg md:text-xl mb-6">
          Kasara Villas offer a unique blend of mountain serenity and luxury living. Choose from 2, 3, 4 & 5 BHK villas, each designed to maximize comfort and natural beauty. Enjoy spacious gardens, private pools, and breathtaking views of the surrounding hills.
        </p>
        <p className="text-md text-gray-700">Experience the tranquility of mountain living, just a short drive from Mumbai.</p>
      </section>

      {/* Key Features Row */}
      <section className="flex flex-wrap gap-8 my-10 justify-center">
        <div className="flex-1 min-w-[220px] max-w-[300px] bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <IconMountain />
          <h3 className="font-bold text-lg mt-2 mb-1">MOUNTAIN TOUCH</h3>
          <p className="text-sm text-center">Nestled in the heart of the mountains, Kasara offers a peaceful retreat with stunning natural landscapes.</p>
        </div>
        <div className="flex-1 min-w-[220px] max-w-[300px] bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <IconGate />
          <h3 className="font-bold text-lg mt-2 mb-1">GATED COMMUNITY</h3>
          <p className="text-sm text-center">Exclusive gated community for privacy and security, ensuring a safe and refined lifestyle.</p>
        </div>
        <div className="flex-1 min-w-[220px] max-w-[300px] bg-white rounded-lg shadow p-5 flex flex-col items-center">
          <IconAmenities />
          <h3 className="font-bold text-lg mt-2 mb-1">OPEN AMENITIES & CLUB HOUSE</h3>
          <p className="text-sm text-center">Enjoy world-class amenities, including a clubhouse, swimming pool, and recreational facilities.</p>
        </div>
      </section>

      {/* Why Kasara Section */}
      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">Why <span className="text-teal-600">Kasara</span></h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mountain touch location</li>
          <li>Customizable villa designs</li>
          <li>Spacious gardens and private pools</li>
          <li>Easy payment plans</li>
          <li>Gated community</li>
          <li>Clubhouse amenities</li>
          <li>Housekeeping and maintenance services</li>
          <li>Tax benefits & deductions</li>
        </ul>
      </section>

      {/* Property Details Section */}
      <section className="my-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Property <span className="text-teal-600">Details</span></h2>
          <div className="bg-teal-600 text-white py-2 px-4 rounded mb-4">Kasara is a perfect blend of nature and luxury.</div>
          <h3 className="text-xl font-bold mb-2">Customized Villa</h3>
          <p className="mb-4">Choose from a variety of villa sizes and layouts, all designed to offer maximum comfort and flexibility. Enjoy panoramic mountain views and modern amenities.</p>
          <ul className="list-none pl-0 mb-4">
            <li>➔ <b>2 BHK (Compact) and 2 BHK (Spacious)</b></li>
            <li>➔ <b>3 BHK (Compact) and 3 BHK (Spacious)</b></li>
            <li>➔ <b>4 BHK (Compact)</b></li>
            <li>➔ <b>5 BHK (Spacious)</b></li>
          </ul>
          <Button>GET DETAILS</Button>
        </div>
        <div>
          <img src="/public/images/kasara-villa.jpg" alt="Kasara Villa" className="rounded-xl border-4 border-white shadow-lg w-full h-auto" />
        </div>
      </section>

      {/* Clubhouse Amenities Section */}
      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4">Clubhouse <span className="text-teal-600">Amenities</span></h2>
        <div className="bg-teal-600 text-white py-2 px-4 rounded mb-4">Enjoy a wide range of amenities designed for relaxation, recreation, and socializing.</div>
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
          <div className="flex items-center gap-2"><span>🏞️</span> MOUNTAIN VIEWS</div>
          <div className="flex items-center gap-2"><span>🧒</span> KIDS PLAY AREA</div>
          <div className="flex items-center gap-2"><span>🏹</span> ARCHERY</div>
          <div className="flex items-center gap-2"><span>🎱</span> TABLE TENNIS</div>
          <div className="flex items-center gap-2"><span>🎲</span> TABLE OF SNAKE LADDER GAME</div>
        </div>
      </section>
    </Container>
  );
}
