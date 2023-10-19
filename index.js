$(document).ready(() =>{
    const proInfo =[
        {   
            title:"Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
            Image: "1.jpg",
            price:"$44.00",
        },
        {
            title:"Smart Speaker with Alexa Voice Control Built-in Compact Size with Incredible Sound for Any Room",
            Image: "2.jpg",
            price:"$219.00",
        },
        {
            title:"Home Speaker 500: Smart Bluetooth Speaker with Alexa Voice Control Built-In, White",
            price:"$209.00",
            Image: "3.jpg",
        },
        {
            title:"Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking",
            price:"$129.00",
            Image: "4.jpg",
        },
        {
            title:"Smart Wifi Alexa Control, 6L Top Fill Cool Mist for Baby and Plants, Ultrasonic, Essential Oil Diffuser",
            price:"$199.00",
            Image: "5.jpg",
        },
       
        {
            title:"Smartwatch with Bright Touchscreen Display, Up to 6 Days of Battery Life, Orchid Purple",
            price:"$299.00",
            Image: "6.jpg",
        },
        {
            title:"Mirrorless Vlogging Camera Polaroid Kit with EF-M 15-45mm Lens, Black",
            price:"$599.00",
            Image: "7.jpg",
        },
        {
            title:"4K Digital Camera, 12-32mm and 45-150mm Lens Bundle, 16 Megapixel Kit, 5 Axis In-Body Dual Image Stabilization, Black",
            price:"$799.00",
            Image: "8.jpg",
        },
        {
            title:"Smart Wifi Alexa Control, 6L Top Fill Cool Mist for Baby and Plants, Ultrasonic, Essential Oil Diffuser",
            price:"$199.00",
            Image: "9.jpg",
        },
        {
            title:"Note 10 Pro 128GB 6GB RAM Factory Unlocked (GSM ONLY) International Model",
            price:"$659.00",
            Image: "10.jpg",
        },
        {
            title:"5G Unlocked Smartphone,12GB RAM+256GB Storage120Hz Fluid Display Hasselblad Quad Camera 65W Ultra Fast Charge 50W Wireless Charge",
            price:"$1,199.00",
            Image: "11.jpg",
        },
        {
            title:"5G Factory Unlocked Android Cell Phone 128GB Pro-Grade Camera 30X Space Zoom Night Mode, Space Grey",
            price:"$999.00",
            Image: "12.jpg",
        },
        {
            title:"14″ FHD Ultrabook (400 nits) with 10th Gen Intel i7-10510U Processor up to 4.90 GHz, 1 TB PCIe SSD, 16GB RAM, and Windows 11 Pro",
            price:"$1,099.00",
            Image: "13.jpg",
        },
        {
            title:"15.6″ Rugged Ultrabook – 4K UHD – 3840 x 2160 – Intel Core i7 11th Gen i7-1195G7 2.90 GHz – 32 GB RAM – 1 TB SSD – Carbon Gray",
            price:"$799.00",
            Image: "14.jpg",
        },
        {
            title:"13 Ultrabook Gaming Laptop: Intel Core i7-1165G7 4 Core, NVIDIA GeForce GTX 1650 Ti Max-Q, 13.3″ 1080p 120Hz, 16GB RAM, 512GB SSD, CNC Aluminum, Chroma RGB, Thunderbolt 4",
            price:"$1,399.00",
            Image: "15.jpg",
        },
        {
            title:"15.6″ FHD Display Laptop – Intel i7 – Intel HD Graphics 6000 , Webcam, WiFi, Bluetooth, HDMI, Windows 11,Grey",
            price:"$999.00",
            Image: "16.jpg",
        },
        {
            title:"0.9 Cubic Feet Capacity 900 Watts Kitchen Essentials for the Countertop Stainless Steel",
            price:"$559.00",
            Image: "17.jpg",
        },
        {
            title:"Microwave Oven with Smart Sensor Easy Clean Interior ECO Mode 1.2 Cu Ft Stainless Steel",
            price:"$509.00",
            Image: "18.jpg",
        },
        {
            title:"Compact Pulsator Washer for Clothes, .9 Cubic ft. Tub, White, BPAB10WH",
            price:"$259.00",
            Image: "19.jpg",
        },
        {
            title:"Small Space Heat Pump Dryer with Sensor Dry, 12 Preset Machine Cycles, 40 Minute Express Drying",
            price:"$279.00",
            Image: "20.jpg",
        },
        {
            title:"Microwave Oven with Smart Sensor Easy Clean Interior ECO Mode 1.2 Cu Ft Stainless Steel",
            price:"$509.00",
            Image: "18.jpg",
        },
        {
            title:"Compact Pulsator Washer for Clothes, .9 Cubic ft. Tub, White, BPAB10WH",
            price:"$259.00",
            Image: "19.jpg",
        },
        {
            title:"Small Space Heat Pump Dryer with Sensor Dry, 12 Preset Machine Cycles, 40 Minute Express Drying",
            price:"$279.00",
            Image: "20.jpg",
        },
        {
            title:"0.9 Cubic Feet Capacity 900 Watts Kitchen Essentials for the Countertop Stainless Steel",
            price:"$559.00",
            Image: "17.jpg",
        },
       
    ];
    const star = '<i class="fa-regular fa-star"></i>';
    const path = "/Product/";
    proInfo.map((im) =>{
      $('#Image_grow').append(` 
       <div class=" h-96 mb-32">
       <img class"w-full h-full"  id="setImage" src=${path+ im.Image} alt="">
       <div class="px-3">
        <div class="mt-1 text-red-400">
            ${star+star+star+star+star}
         </div>
         <h1 class="text-black text-md  text-clip overflow-hidden inline-block">${im.title}</h1>
         <h1 class="text-black text-md font-mono">${im.price}</h1> 
         </div>
         </div>
       `)
      console.log(`${path+im.Image}` )
    })
   
    $("#Bar").click(() =>{
        $("#MenuCol").toggleClass("hidden ")
        (check === "hidden")? alert("Hi"):"HEllo";
       })
 
    
})
