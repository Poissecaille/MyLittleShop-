'use strict';
const condition = ["new", "occasion", "renovated"];
const now = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ')


module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('product', [
      {
        "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "label": "RandomLabel",
        "unitPrice": 109.95,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Mens Casual Premium Slim Fit T-Shirts ",
        "label": "RandomLabel",
        "unitPrice": 22.3,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Mens Cotton Jacket",
        "label": "RandomLabel",
        "unitPrice": 55.99,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Mens Casual Slim Fit",
        "label": "RandomLabel",
        "unitPrice": 15.99,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "label": "RandomLabel",
        "unitPrice": 695,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Solid Gold Petite Micropave ",
        "label": "RandomLabel",
        "unitPrice": 168,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "White Gold Plated Princess",
        "label": "RandomLabel",
        "unitPrice": 9.99,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "label": "RandomLabel",
        "unitPrice": 10.99,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "label": "RandomLabel",
        "unitPrice": 64,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "label": "RandomLabel",
        "unitPrice": 109,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "label": "RandomLabel",
        "unitPrice": 109,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "label": "RandomLabel",
        "unitPrice": 114,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "label": "RandomLabel",
        "unitPrice": 599,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "label": "RandomLabel",
        "unitPrice": 999.99,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "label": "RandomLabel",
        "unitPrice": 56.99,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "label": "RandomLabel",
        "unitPrice": 29.95,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "label": "RandomLabel",
        "unitPrice": 39.99,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "label": "RandomLabel",
        "unitPrice": 9.85,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "Opna Women's Short Sleeve Moisture",
        "label": "RandomLabel",
        "unitPrice": 7.95,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      },
      {
        "name": "DANVOUY Womens T Shirt Casual Cotton Short",
        "label": "RandomLabel",
        "unitPrice": 12.99,
        "condition": condition[Math.floor(Math.random() * 3)],
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        sellerId: 2,
        "availableQuantity": Math.floor(Math.random() * 1000),
        created_at: now,
        updated_at: now
      }
    ])
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('product', null, {});
  }

};
