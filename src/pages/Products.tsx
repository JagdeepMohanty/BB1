import React from 'react';
import { ProductCard } from '../components/ProductCard';

export function Products() {
  const products = {
    idli: [
      {
        name: 'Udupi Standard Idli Batter ',
        image: 'https://th.bing.com/th/id/OIP.lRuB9j-n52QrRzg9cp5kDAHaHF?rs=1&pid=ImgDetMain',
        description: 'Made from Fine blend of Rice, Sooji (Samolina) and urad dal.',
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
        description: 'A perfect blend of Rice, Urad Dal, Fenugreek, and more fermented to perfection.',
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
        price: '800ml-₹75.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Palak Magic Dosa Batter',
        image: 'https://static.vecteezy.com/system/resources/previews/016/283/228/non_2x/palak-dosa-made-using-mixing-spinach-or-keerai-in-batter-served-with-red-chutney-free-photo.jpg',
        description: 'Spinach Dosa batter is made from fresh spinach blended with Dosa batter. It has a bit of Garlic in it.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Set Dosa Batter',
        image: 'https://i.ytimg.com/vi/UboF2QmswPM/maxresdefault.jpg',
        description: 'This is made of Rice, Urad Dal, Flattened rice, Sabudana (Sago), etc. This is named Set Dosa as it is served in a set of 3 Dosas in restaurants.',
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
        price: '₹800ml-₹100.00 , 450ml-₹60.00 ',
      },
    ],
    weekendSpecialty: [
      {
        name: 'Neer Dosa Batter',
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2017/10/neer-dosa-recipe.jpg',
        description: 'Authentic Udupi style Dosa batter. This thin watery batter made of rice.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Rava Dosa Batter ',
        image: 'https://th.bing.com/th/id/OIP.K3SeQzlTBTAqc-Wyo1aZLQAAAA?rs=1&pid=ImgDetMain',
        description: 'Authentic Udupi style Rava Dosa batter is a thin crispy fried crepe made with Semolina, Rice flour, and chosen spices. Best tasted with Butter Batter chutney.',
        price: '800ml-₹90.00 , 450ml-₹55.00',
      },
      {
        name: 'Masala Dosa Batter',
        image: 'https://th.bing.com/th/id/OIP.XSCo5S6kP3o-7-jVqH4vGgHaE8?rs=1&pid=ImgDetMain',
        description: 'Made of Rice, Urad Dal, Flattened rice, Fenugreek seeds.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Thatte Idli Batter',
        image: 'https://th.bing.com/th/id/OIP.x4uTdLXhkQvVemkZbCwU-AHaFj?rs=1&pid=ImgDetMain',
        description: 'Made of Rice, Urad dal, Beaten rice, Salt, which is perfectly fermented.',
        price: '800ml-₹90.00 , 450ml-₹55.00 ',
      },
      {
        name: 'Multigrain Dosa Batter',
        image: 'https://th.bing.com/th/id/OIP.n6_JdnkNbL0eFRMLDNEmhgHaE8?rs=1&pid=ImgDetMain',
        description: 'Made from Channa dal, Sago, Green gram, Urad dal, rice (<20%).',
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
      {
        name: 'Millet Paddu Batter',
        image: 'https://i.ytimg.com/vi/7ojr4NgauDM/maxresdefault.jpg',
        description: 'Authentic Udupi batter infused with all 4 millets (Finger/ Foxtail/ Jowar/ Pearl)',
        price: '800ml-₹100.00 , 450ml-₹60.00',
      },
      {
        name: 'Chilli Cheese Paddu batter ',
        image: 'https://i.ytimg.com/vi/676-FkxfhrE/maxresdefault.jpg',
        description: 'Cheese batter variant has various spices /herbs in it.',
        price: '800ml-₹110.00 , 450ml-₹70.00',
      },
    ],
    roti: [
      {
        name: 'Phulka - (5 pieces)',
        image: 'https://5.imimg.com/data5/GQ/FU/MY-39838230/phulka-roti-500x500.png',
        description: 'Wheat Flour and Salt.',
        price: '₹55.00',
      },
      {
        name: 'Chapati - (5 pieces)',
        image: 'https://th.bing.com/th/id/OIP.iABVK73UYywVNC4mweoCjgHaGN?rs=1&pid=ImgDetMain',
        description: 'Wheat Flour, Salt and oil.',
        price: '₹55.00',
      },
      {
        name: 'Thepla - (5 pieces)',
        image: 'https://th.bing.com/th/id/OIP.mLPze5nnmiRJ9culplB2rAHaHa?rs=1&pid=ImgDetMain',
        description: 'Wheat flour, Methi leaves, Ginger, Spices, Green chili, Coriander leaves',
        price: '₹75.00',
      },
    ],
    chutney: [
      {
        name: 'Tomato Chutney - (250ml)',
        image: 'https://th.bing.com/th/id/OIP.E1AJjvJmFw_DgyTQc4QXoAHaE8?rs=1&pid=ImgDetMain',
        description: 'Tomato, Onion, Coconut, Fried Gram, Jeera, Garlic, Guntur Chilli, Byadagi Chilli, Salt, Green Chilli, Turmeric powder, Jaggery',
        price: '₹50.00',
      },
      {
        name: 'Coconut  Chutney - (250ml)',
        image: 'https://res.cloudinary.com/dybzmpwaq/image/upload/v1753604672/pudina_kbg0ul.jpg',
        description: 'Coconut, Fried Gram, Green Chilli, Pudina (Mint leaves), Tamarind, Salt, Jaggery.',
        price: '₹45.00',
      },
      {
        name: 'Chutney Powder - (200 gms)',
        image: 'https://th.bing.com/th/id/OIP.Y4KMpEntiKsTlEnyU0LI5gHaFj?rs=1&pid=ImgDetMain',
        description: 'Bengal Gram, Black Gram, Chilli, Salt, Tamarind, Mustard Asafoetida, Refined Oil, Jaggery.',
        price: '₹125.00',
      },
    ],
    gravy: [
      {
        name: 'Ready to cook Curry Paste  - (200 gms ) ',
        image: 'https://keytomylime.com/wp-content/uploads/2023/11/Best-Tomato-Gravy-Recipe-720x720.jpg',
        description: 'Tomato, Onion, Cashew, Fresh Cream, Sunflower,Oil,Garlic, Ginger,Salt , Red Chilli , Garam Masala, Spices,sugar',
        price: '₹125.00',
      },

    ],
    saveforme: [
      {
        name: 'BYOC',
        image: 'https://rukminim2.flixcart.com/image/850/1000/kiew3gw0/container/w/8/q/2-5-litre-super-storer-small-tupperware-original-imafy7k76znmr7nr.jpeg?q=90&crop=false',
        description: 'Bring Your Own Container',
        price: 'For all 800 ml / 450 ml batters , avail 5 % off',
      },
      {
        name: 'Family Packs ',
        image: 'https://t3.ftcdn.net/jpg/03/72/05/60/360_F_372056014_cxUkbsQuBLNXAyKIGeHva8SxuGp2Cpmf.jpg',
        description: 'Only upon bringing own containers . Standard Idli/Dosa Batter',
        price: '1000ml-₹95.00 , 1500ml-₹135.00 , 2000 ml-₹175.00',
      },
    ]
    // combo: [
    //   {
    //     name: 'Choose any 2 Batters from the menu, of 500ml each',
    //     image: 'https://thumbs.dreamstime.com/z/south-indian-breakfast-idli-dosa-chutney-indian-breakfast-lentil-rice-pancake-also-known-as-dosa-dumplings-known-as-idli-158574513.jpg',
    //     description: '',
    //     price: '₹119.00',
    //   },
    //   {
    //     name: 'Family Packs (Only upon bringing own containers)',
    //     image: 'https://th.bing.com/th/id/OIP.s61yJEbF6CAb2Ky6d_EcSgHaI1?rs=1&pid=ImgDetMain',
    //     description: 'Standard Idli/Dosa Batter BYOC (Bring your own container): For all 750ML packs, avail 5% off. Family pack prices are inclusive of discounts.',
    //     price: '1000 ML - ₹95 , 1500 ML - ₹130, 2000 ML - ₹160',
    //   },
    // ],
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">Our Products</h1>

        {/* Idli Batters (Special Menu) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Idli Batters (Special Menu)</h2>
          <p className="mb-6">
            Elevate your breakfast game with our Fluffy Idli Batter. Specially crafted to create soft and spongy idli’s, this batter guarantees a delightful start to your day. Just steam and enjoy these delectable bite-sized delights with your favorite chutneys and sambar.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.idli.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Dosa Batters (Special Menu) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Dosa Batters (Special Menu)</h2>
          <p className="mb-6">
            Unleash the magic of crispy, golden Dosas with our Classic Dosa Batter. Made from premium rice and urad dal, this batter is fermented to perfection, ensuring that each Dosa is light, airy, and irresistibly flavorful.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.dosa.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Weekend specialty batters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Weekend specialty batters One Special Batter every weekend!</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.weekendSpecialty.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Paddu Batters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Paddu Batters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.paddu.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Ready to Eat Rotis */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Ready to Eat Rotis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.roti.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

        {/* Fresh Chutney */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Fresh Chutney</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.chutney.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Gravy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.gravy.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Save For More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.saveforme.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>

{/* Preparation Table - 50% Width and 50% Screen Height */}
<div className="w-1/2 h-[50vh] mx-auto mt-6 font-['Poppins'] flex flex-col justify-start">
  <h2 className="text-base sm:text-lg font-semibold mb-2 text-orange-700 text-center">
    Preparation Estimates
  </h2>
  <div className="border border-orange-300 rounded-md shadow-sm">
    <table className="w-full text-center text-xs leading-tight">
      <thead className="bg-orange-600 text-white">
        <tr>
          <th className="px-2 py-1">Preparation</th>
          <th className="px-2 py-1">800 ml</th>
          <th className="px-2 py-1">450 ml</th>
        </tr>
      </thead>
      <tbody className="bg-orange-50 text-gray-800">
        <tr className="border-t border-orange-200 hover:bg-orange-100">
          <td className="px-2 py-1 font-medium">No. of Dosa's</td>
          <td className="px-2 py-1">13 - 15</td>
          <td className="px-2 py-1">7 - 9</td>
        </tr>
        <tr className="border-t border-orange-200 hover:bg-orange-100">
          <td className="px-2 py-1 font-medium">No. of Idli's</td>
          <td className="px-2 py-1">18 - 20</td>
          <td className="px-2 py-1">9 - 12</td>
        </tr>
        <tr className="border-t border-orange-200 hover:bg-orange-100">
          <td className="px-2 py-1 font-medium">No. of Paddu's</td>
          <td className="px-2 py-1">25 - 27</td>
          <td className="px-2 py-1">17 - 20</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>





        {/* Combo */}
       {/* <section>
          <h2 className="text-2xl font-bold mb-2">Combo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.combo.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}
