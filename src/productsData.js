 const products = [
    {
      id:1,
      title: "iPhone 13 Pro",
      category: "Electronics",
      price: 74999,
      ratings: 5,
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg"
    },
    {
      id:2,
      title: "Samsung 4K QLED TV",
      category: "Electronics",
      price: 87999,
      ratings: 4,
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/qa85qn90cakxxl/gallery/in-qled-qn90c-455012-qa85qn90cakxxl-535909549?$1300_1038_PNG$"
    },
    {
      id:3,
      title: "Sony Noise-Canceling Headphones",
      category: "Electronics",
      price: 13499,
      ratings: 3,
      image: "https://st.depositphotos.com/67903508/58831/i/1600/depositphotos_588318092-stock-photo-closeup-shot-sony-1000xm4-wireless.jpg"
    },
    {
      id:4,
      title: "Apple AirPods Pro",
      category: "Electronics",
      price: 19999,
      ratings: 5,
      image: "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlycG9kcyUyMHByb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:5,
      title: "Nike Air Zoom Running Shoes",
      category: "Footwear",
      price: 5499,
      ratings: 4,
      image: "https://thumbs.dreamstime.com/z/new-style-nike-shoes-chisinau-moldova-september-taken-studio-isolated-over-white-background-83334652.jpg?w=992"
    },
    {
      id:6,
      title: "Adidas Ultraboost Sneakers",
      category: "Footwear",
      price: 6999,
      ratings: 4,
      image: "https://i.pinimg.com/564x/75/fd/a4/75fda428ce57e23df739be76de8b161b.jpg"
    },
    {
      id:7,
      title: "Bosch 7 kg Front Load Washing Machine",
      category: "Kitchen Appliances",
      price: 29999,
      ratings: 5,
      image: "https://i.pinimg.com/564x/c8/4b/b5/c84bb5d45a5b7f097a2956d0417e718b.jpg"
    },
    {
      id:8,
      title: "Philips 2-Slice Toaster",
      category: "Kitchen Appliances",
      price: 1699,
      ratings: 4,
      image: "https://i.pinimg.com/564x/88/b1/c8/88b1c80660baa53da837944f78271383.jpg"
    },
    {
      id:9,
      title: "Fitbit Versa 3 Smartwatch",
      category: "Wearables",
      price: 15999,
      ratings: 4,
      image: "https://i.pinimg.com/originals/27/3e/3b/273e3bbbf41b56cd6238ace6f85776c7.jpg"
    },
    {
      id:10,
      title: "Garmin Forerunner 245 Music",
      category: "Wearables",
      price: 18999,
      ratings: 3,
      image: "https://i.pinimg.com/564x/09/e2/9b/09e29b749718bd7daabef73df07df1b6.jpg"
    },
    {
      id:11,
      title: "LEGO Creator Expert Roller Coaster",
      category: "Toys & Games",
      price: 7999,
      ratings: 5,
      image: "https://i.pinimg.com/736x/12/14/d8/1214d88708fcfa3e7b13bb543d0b25f5.jpg"
    },
    {
      id:12,
      title: "PlayStation 5 Gaming Console",
      category: "Electronics",
      price: 49999,
      ratings: 4,
      image: "https://i.pinimg.com/564x/cd/43/67/cd43672a63f6356bd4199d4ae6d1d480.jpg"
    },
    {
      id:13,
      title: "Puma Men's Athletic Shorts",
      category: "Clothing",
      price: 1499,
      ratings: 3,
      image: "https://i.pinimg.com/564x/7f/39/ba/7f39badc208e0f60795a5f7c5cfb4b83.jpg"
    },
    {
      id:14,
      title: "Adidas Women's Running Leggings",
      category: "Clothing",
      price: 1999,
      ratings: 4,
      image: "https://i.pinimg.com/564x/af/26/07/af2607bce97e4a8957394342cb20f7e4.jpg"
    },
    {
      id:15,
      title: "Sony 50-inch 4K Smart TV",
      category: "Electronics",
      price: 59999,
      ratings: 5,
      image: "https://i.pinimg.com/564x/4e/de/ab/4edeab6f2ebddbd0c62dc2457df359ef.jpg"
    },
    {
      id:16,
      title: "KitchenAid Stand Mixer",
      category: "Kitchen Appliances",
      price: 24999,
      ratings: 4,
      image: "https://i.pinimg.com/736x/e5/08/79/e50879b3d958096aae9ab6a1889481f5.jpg"
    },
    {
      id:17,
      title: "Apple Watch Series 6",
      category: "Wearables",
      price: 29999,
      ratings: 4,
      image: "https://i.pinimg.com/564x/77/c0/7e/77c07e90dc3a3cff37c3f479c9851892.jpg"
    },
    {
      id:18,
      title: "LEGO Star Wars Millennium Falcon Set",
      category: "Toys & Games",
      price: 8499,
      ratings: 5,
      image: "https://i.pinimg.com/564x/88/81/55/888155ffeaa7d896d89bff7e770ae088.jpg"
    },
    {
      id:19,
      title: "Nike Men's Track Pants",
      category: "Clothing",
      price: 1999,
      ratings: 3,
      image: "https://i.pinimg.com/564x/71/02/f9/7102f96d2a1c146ddf6bf585860bfb32.jpg"
    },
    {
      id:20,
      title: "Sony Noise-Canceling Headphones",
      category: "Electronics",
      price: 10999,
      ratings: 4,
      image: "https://i.pinimg.com/564x/af/54/27/af5427c9e8b1fabcbc26a59fcbeb6ba4.jpg"
    }
  ];
  

  
  export default products;