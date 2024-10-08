import React from 'react';
import { Link } from 'react-router-dom';

const AdBox = ({ imgSrc, adName, rating, adUrl }) => (


<a href={adUrl} target='_blank' rel=' noopener noreferrer'>
<div className="border rounded-lg shadow-lg p-2 flex flex-col items-center">
    {/* Ad Image */}
    <img src={imgSrc} alt={adName} className="w-full h-40 object-cover" />
    
    {/* Ad Name */}
    <h2 className="text-lg font-semibold">{adName}</h2>

    {/* Rating */}
    <div className="text-yellow-500">
      {Array.from({ length: rating }, (_, i) => (
        <span key={i}>⭐</span>
      ))}
    </div>
  </div>
</a>

);

const Section1 = () => {
  const ads = [
    { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwQJsUmBZT07tJ02NAI_H7sUZ6AfKI_Odsw&s', adName: 'Duck Hunt Game', rating: 4, adUrl : 'https://duckhuntjs.com/' },
    { imgSrc: 'https://play.js13kgames.com/space-exploration-2021/.t.jpg', adName: 'Space Exporation', rating: 5, adUrl : 'https://play.js13kgames.com/space-exploration-2021/' },
    { imgSrc: 'https://play.js13kgames.com/spacing-guild/.t.jpg', adName: 'Space Guild', rating: 3, adUrl : 'https://play.js13kgames.com/spacing-guild/'  },
    { imgSrc: 'https://play.js13kgames.com/space-huggers/.c.jpg', adName: 'Space Hugger', rating: 4, adUrl : 'https://play.js13kgames.com/space-huggers/'},
    { imgSrc: 'https://play.js13kgames.com/refuel-the-factory/.t.jpg', adName: 'Refual Factory', rating: 5, adUrl : 'https://play.js13kgames.com/refuel-the-factory/'},
    { imgSrc: 'https://play.js13kgames.com/escape-2021/.t.jpg', adName: 'Escape', rating: 4, adUrl : 'https://play.js13kgames.com/escape-2021/'},
    { imgSrc: 'https://play.js13kgames.com/safe-space/.c.jpg', adName: 'Safe Space', rating: 2, adUrl : 'https://play.js13kgames.com/safe-space/'},
    { imgSrc: 'https://play.js13kgames.com/outofmemory/.t.jpg', adName: 'OUT_OF_MEMORY', rating: 5, adUrl : 'https://play.js13kgames.com/outofmemory/'},
    { imgSrc: 'https://play.js13kgames.com/cursed-elevator/.ts.png', adName: 'Cursed Elevator', rating: 3, adUrl : 'https://play.js13kgames.com/cursed-elevator/'},
    {imgSrc: 'https://play.js13kgames.com/13s/.ts.png', adName: '13S', rating: 4, adUrl : 'https://play.js13kgames.com/13s/'},
   
  ];

  return (
    <div className="mx-5 mt-4">
    <h2 className=' text-black md:text-3xl font font-poppins font-bold text-2xl '>Top Games</h2>
    <hr  className=' border-black my-2'/>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {ads.map((ad, index) => (
        <AdBox key={index} imgSrc={ad.imgSrc} adName={ad.adName} rating={ad.rating}  adUrl={ad.adUrl} />
      ))}
    </div>
    
    </div>
  );
};

export default Section1;
