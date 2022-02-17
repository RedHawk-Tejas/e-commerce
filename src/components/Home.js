import React from 'react';
import '../styles/Home.css';
import Product from './Product';

function Home() {
  return <div className='home'>
      <div className="home_container">
          <div className="home_row">
                <Product
                    id="786521"
                    image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640766657/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/246548_g2byxz.png/mxw_2048,f_auto"}
                    title="ONIKUMA CW902 Wired Optical Gaming Mouse (High Speed Motion Detection, Black)"
                    price={599.00}/>

                <Product 
                    id="786522"
                    image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1632817601/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/243185_r7aazl.png/mxw_2048,f_auto"}
                    title="pTron Soundster Arcade Over-Ear Wired Gaming Headphone with Mic (40mm Dynamic Driver, 140317988, Black/Blue))"
                    price={829.00}/>

                
          </div>

          <div className="home_row">
                <Product 
                    id="786523"
                    image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605304027/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/8932925636638.png/mxw_2048,f_auto"}
                    title="Lenovo Legion Wired Backlit Gaming Keyboard (K200, Black)"
                    price={2789.00}/>
          </div>

          <div className="home_row">

                    <Product 
                    id="786524"
                    image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631684407/Croma%20Assets/Miscellanous/5K%20SKU_Images/Images/241700_wxo4e0.png/mxw_2048,f_auto"}
                    title="Zebronics USB Keyboard (Bottom Rubber Grip, Max Plus V2, Black)"
                    price={2999.00}/>
                

                <Product 
                    id="786525"
                    image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1626776804/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/235872_nvwcvy.png/mxw_2048,f_auto"}
                    title="Redgear Pro Wireless Controller for PC (Dual High Intensity Motors, 8904130841989, Black))"
                    price={1689.00}/>

                <Product 
                    id="786526"
                    image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1626777713/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/235875_qarbdp.png/mxw_2048,f_auto"}
                    title="Redgear MP44 Gaming Mousepad(Smooth And Fast, 8904130845659, Black))"
                    price={409.00}/>
          </div>

          {/* <div className="home_row">
                <Product 
                    image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640766657/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/246548_g2byxz.png/mxw_2048,f_auto"}
                    title="ONIKUMA CW902 Wired Optical Gaming Mouse (High Speed Motion Detection, Black)"
                    price={599.00}/>

                <Product 
                    image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640766657/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/246548_g2byxz.png/mxw_2048,f_auto"}
                    title="ONIKUMA CW902 Wired Optical Gaming Mouse (High Speed Motion Detection, Black)"
                    price={599.00}/>

                <Product 
                    image={"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1640766657/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/246548_g2byxz.png/mxw_2048,f_auto"}
                    title="ONIKUMA CW902 Wired Optical Gaming Mouse (High Speed Motion Detection, Black)"
                    price={599.00}/>
          </div> */}
      </div>
  </div>;
}

export default Home;

