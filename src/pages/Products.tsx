import React from 'react';
import { ProductCard } from '../components/ProductCard';

export function Products() {
  const products = {
    idli: [
      {
        name: 'Udupi Standard Idli Batter ',
        image: 'https://th.bing.com/th/id/OIP.lRuB9j-n52QrRzg9cp5kDAHaHF?rs=1&pid=ImgDetMain',
        description: 'Fine blend of Bombay Sooji (Samolina) & Urad dal, Poha, perfectly fermented',
        price: '800ml-₹80.00 , 450ml-₹50.00 ',
      },
      {
        name: 'Ragi Idli Batter ',
        image: 'https://th.bing.com/th/id/OIP.rmyx8r-dqwaYFMnSVim9uQHaLH?rs=1&pid=ImgDetMain',
        description: 'Healthy blend of authentic Idli batter with high-quality Ragi flour.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Masala Idli Batter',
        image: 'https://i0.wp.com/southindianrecipes.in/wp-content/uploads/2021/07/Masala-Idli.jpg?resize=768%2C900&ssl=1',
        description: 'Masala twist to authentic Idli batter with Carrot, Chilli, Ginger, and more.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Dill Leaf (Sabsige) Batter ',
        image: 'https://res.cloudinary.com/dp5t3oidu/image/upload/v1753033219/ab7c241f17e904ecece20e4027ce1019_udeawu.jpg',
        description: 'Idli batter blended with Dill Leaf gives an extinct aroma. It is Popularly known as Sabsige soppu Idli',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
    ],
    dosa: [
      {
        name: 'Udupi Standard Dosa Batter',
        image: 'https://th.bing.com/th/id/OIP.JOlO2To7LKAoeIWLVQW5xAHaD2?rs=1&pid=ImgDetMain',
        description: 'A perfect blend of Rice, Fenugreek, Urad Dal, Puffed rice, Salt & Sugar fermented to perfection.',
        price: '800ml-₹80.00 , 450ml-₹50.00 ',
      },
      {
        name: 'Ragi Dosa Batter ',
        image: 'https://th.bing.com/th/id/OIP.5t_08q1Vn2auV5oR4LqzPgHaEK?rs=1&pid=ImgDetMain',
        description: 'Healthy Dosa batter with perfect blend of high quality ragi flour.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Millet Dosa Batter',
        image: 'https://th.bing.com/th/id/OIP.lmmAsiQR4bLFsV8v_XSSoQHaG5?rs=1&pid=ImgDetMain',
        description: 'Authentic Udupi Dosa batter infused with all 4 millets (Finger/Foxtail/Jowar/Pearl).',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Chatpata Pudina Dosa Batter',
        image: 'https://sankalprestaurants.com/wp-content/uploads/2024/07/Mysore-chatpata-dosa.jpg',
        description: 'Pudina (Mint) Dosa batter is green textured and a healthy batter. It has a bit of Garlic in for flavor.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Butter Dosa Batter',
        image: 'https://th.bing.com/th/id/OIP.Qhl2NtDKcAYxSmcjPH_H2QHaGP?rs=1&pid=ImgDetMain',
        description: 'Tasty desi cow butter blended into fresh Dosa batter. Ideal for Butter masala Dosa.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Palak Magic Dosa Batter',
        image: 'https://img-global.cpcdn.com/recipes/d636b7f34f16d9c3/680x781cq80/moongdal-palak-dosa-recipe-main-photo.jpg',
        description: 'Spinach Dosa batter is made from fresh spinach blended with Dosa batter. It has a bit of Garlic in it.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Set Dosa Batter',
        image: 'https://i.ytimg.com/vi/UboF2QmswPM/maxresdefault.jpg',
        description: 'This is made of Rice, Urad dal, Methi,Flattened Rice, Sabudana (Sago), etc.This is named Set Dosa as it is served in a set of 3 Dosa's in restaurants.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Beetroot Dosa Batter',
        image: 'https://th.bing.com/th/id/OIP.plrvCJFPMdRArDxBl03VuwHaHa?rs=1&pid=ImgDetMain',
        description: 'A perfect blend of Rice, Urad Dal, Fenugreek, and Beetroot fermented to perfection.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Chilli Cheese Dosa Batter',  
        image: 'https://i.pinimg.com/originals/00/07/8c/00078c3a5782b1367a6cdfcc03f710a9.jpg',
        description: "Butter Batter's signature Dosa batter with richness of high-quality cheese and chilli.",
        price: '800ml-₹100.00 , 450ml-₹60.00 ',
      },
      {
        name: 'Yummy Chocolate Dosa Batter',
        image: 'https://i.pinimg.com/736x/5e/4a/2d/5e4a2db552f2bd4f814d4ace1e78e3c0.jpg',
        description: 'Chocolate infused Dosa batter is a sweet & salt batter. Goes well with chocolate sauce/Jam.',
        price: '800ml-₹100.00 , 450ml-₹60.00 ',
      },
      {
        name: 'Mexican Spicy Dosa Batter',
        image: 'https://b.zmtcdn.com/data/dish_photos/c99/c7fcce01147d144ca4640b9ab1dcac99.jpg',
        description: 'Upadi Dosa batter infused with Red chilly paste , garlic , salt ',
        price: '800ml-₹125.00 , 450ml-₹85.00 ',
      },
      {
        name: 'Onion Dosa Batter',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUmwLOJZLQDT2OPah4CFDgZnb4_EVyB4uEg&s',
        description: 'A perfect blend of Rice, Fenugreek, Urad Dal fermented to perfection and Onion, herbs are added into it. ',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
    ],
    weekendSpecialty: [
      {
        name: 'Neer Dosa Batter',
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2017/10/neer-dosa-recipe.jpg',
        description: 'Authentic Udupi style Dosa batter. This thin watery batter made of rice & jeera. ',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Rava Dosa Batter ',
        image: 'https://th.bing.com/th/id/OIP.K3SeQzlTBTAqc-Wyo1aZLQAAAA?rs=1&pid=ImgDetMain',
        description: 'Rava Dosa batter is a thin crispy fried crepe made with Semolina, Rice flour ,Green Chilly, Ginger, Curry &Coriander leaves.',
        price: '800ml-₹90.00 , 450ml-₹55.00',
      },
      {
        name: 'Masala Dosa Batter',
        image: 'https://th.bing.com/th/id/OIP.XSCo5S6kP3o-7-jVqH4vGgHaE8?rs=1&pid=ImgDetMain',
        description: 'Made of Red rice, Flattened Rice, Urad Dal, Fenugreek seeds.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Thatte Idli Batter',
        image: 'https://th.bing.com/th/id/OIP.x4uTdLXhkQvVemkZbCwU-AHaFj?rs=1&pid=ImgDetMain',
        description: 'Made of Rice, Urad Dal, Beaten Rice and salt.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Multigrain Dosa Batter',
        image: 'https://th.bing.com/th/id/OIP.n6_JdnkNbL0eFRMLDNEmhgHaE8?rs=1&pid=ImgDetMain',
        description: 'Made from Chana Dal, Sago, Green gram, Dal, Rice (< 20%).',
        price: '800ml-₹125.00 , 450ml-₹85.00',
      },
       {
        name: 'Pesarattu Dosa Batter',
        image: 'https://cookilicious.com/wp-content/uploads/2025/02/Pesarattu-Dosa-1-scaled.jpg',
        description: 'Made from Green moong dal, Rice,Green chilli, Ginger & Cumin seeds',
        price: '800ml-₹125.00 , 450ml-₹85.00',
      },
    ],
    paddu: [
      {
        name: 'Guliyappa / Paddu batter',
        image: 'https://img-global.cpcdn.com/recipes/07e454200549b257/680x482cq70/guliyappa-recipe-main-photo.jpg',
        description: "Udupi's authentic batter variant. Has various spices/herbs in it",
        price: '800ml-₹90.00 , 450ml-₹55.00',
      },
      {
        name: 'Palak Paddu batter',
        image: 'https://foodofinterest.com/wp-content/uploads/2018/08/DSC_0042_00042-1200x803.jpg',
        description: 'Fresh Spinach blended batter variant has various spices /herbs in it.',
        price: '800ml-₹100.00 , 450ml-₹60.00',
      },
      {
        name: 'Pudina Paddu Batter',
        image: 'https://i.ytimg.com/vi/676-FkxfhrE/maxresdefault.jpg',
        description: 'Pudina (Mint) batter is green textured and has a bit of Garlic in for flavor.',
        price: '800ml-₹100.00 , 450ml-₹60.00',
      },
      {
        name: 'Butter Paddu Batter',
        image: 'https://i.ytimg.com/vi/9sIPdtibeEY/maxresdefault.jpg',
        description: 'Tasty desi cow butter blended into fresh batter.',
        price: '800ml-₹100.00 , 450ml-₹60.00',
      },
      {
        name: 'Beetroot Paddu Batter',
        image: 'https://i0.wp.com/kitchenkathukutty.com/wp-content/uploads/2017/09/beetroot-dumplings.jpg?resize=830%2C467',
        description: 'A perfect blend of Rice, Urad Dal, Fenugreek, and Beetroot fermented to perfection.',
        price: '800ml-₹100.00 , 450ml-₹60.00',
      },
      {
        name: 'Ragi Paddu Batter',
        image: 'https://i.ytimg.com/vi/DqbAEhnT84o/maxresdefault.jpg',
        description: 'Healthy batter with perfect blend of high quality ragi flour.',
        price: '800ml-₹100.00 , 450ml-₹60.00',
      },
    ],
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="section-title">Our Products</h1>
          <p className="section-subtitle">
            Explore our wide range of authentic Udupi batters
          </p>
        </div>

        {/* Idli Batters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Idli Batters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.idli.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Dosa Batters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Dosa Batters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.dosa.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Weekend Specialty */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Weekend Specialty</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.weekendSpecialty.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Paddu Batters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Paddu Batters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.paddu.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
