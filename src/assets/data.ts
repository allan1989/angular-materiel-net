export interface productInfo {
  id: number,
  brand: string,
  name: string,
  description: string,
  img: string,
  price: number, 
  customerReview: number
}

const data: Array<productInfo> = [
  {
    id: 1,
    brand: 'Dell',
    name: 'DELL XPS 13 7390 (7390-0065)',
    description: 'Bureautique, 13,3", Core i7-10510U, RAM 16 Go, SSD 512 Go, Windows 10 Pro, 1,29 kg',
    img: 'https://media.materiel.net/r150/oproducts/AR201806280128_g1_0005221595_0005316700_0005596230_0005673353.jpg',
    price: 1199,
    customerReview: 4.5
  },
  {
    id: 2,
    brand: 'Dell',
    name: 'Dell Inspiron 15 7501 (7501-1645)',
    description: 'Multimédia, 15,6", Core i7-10750H, GTX 1650 Ti, RAM 16 Go, SSD 1 To, Windows 10, 1,90 kg',
    img: 'https://media.materiel.net/r150/products/MN0005702447_1_0005740589.jpg',
    price: 1499,
    customerReview: 3.5
  },
  {
    id: 3,
    brand: 'Dell',
    name: 'DELL G7 17-7700 (MC5FW)',
    description: 'Gamer, 17,3", Core i7-10750H, RTX 2070 SUPER, RAM 16 Go, SSD 1 To, Windows 10, 3,29 kg',
    img: 'https://media.materiel.net/r150/products/MN0005742946_1.jpg',
    price: 1999,
    customerReview: 4.9
  },
  {
    id: 4,
    brand: 'Dell',
    name: 'DELL G5 15 5500 (5500-0252)',
    description: 'Gamer, 15,6", Core i7-10750H, RTX 2060 Max-Q, RAM 16 Go, SSD 1 To, Windows 10, 2,65 kg',
    img: 'https://media.materiel.net/r150/products/MN0005736682_1.jpg',
    price: 1799,
    customerReview: 2.9
  },
  {
    id: 5,
    brand: 'HP',
    name: 'HP 14s-fq0070nf',
    description: 'Bureautique, 14", 3020e, RAM 4 Go, SSD 128 Go, Windows 10 en mode S, 1,46 kg',
    img: 'https://media.materiel.net/r150/products/MN0005812161_1.jpg',
    price: 499,
    customerReview: 1.9
  },
  {
    id: 6,
    brand: 'HP',
    name: 'HP Omen 17-cb1019nf',
    description: 'Gamer, 17,3", Core i7-10750H, RTX 2060, RAM 16 Go, SSD 512 Go, Windows 10, 3,29 kg',
    img: 'https://media.materiel.net/r150/products/MN0005431347_1_0005725315_0005784748.jpg',
    price: 1599,
    customerReview: 3.4
  },
  {
    id: 7,
    brand: 'Razer',
    name: 'Razer Blade Pro 17 (RZ09-0368CF63-R3F1)',
    description: 'Gamer, 17,3", i7-10875H, RTX 3080 Max-Q, RAM 32 Go, SSD 1 To, Windows 10, 2,75 kg',
    img: 'https://media.materiel.net/r150/products/MN0005818106_1.jpg',
    price: 3999,
    customerReview: 4.4
  },
  {
    id: 8,
    brand: 'Lenovo',
    name: 'IdeaPad Gaming 3 15ARH05 (82EY00PNFR)',
    description: 'Gamer, 15,6", Ryzen 5 4600H, GTX 1650Ti, RAM 8 Go, SSD 512 Go, Windows 10, 2,20 kg',
    img: 'https://media.materiel.net/r150/products/MN0005815927_1.jpg',
    price: 999,
    customerReview: 4.1
  },
  {
    id: 9,
    brand: 'Lenovo',
    name: 'LENOVO IdeaPad 3 15ADA05 (81W100D7FR)',
    description: 'Bureautique, 15,6", Ryzen 7 3700U, RAM 8 Go, SSD 128 Go + HDD 1 To, Windows 10, 1,85 kg',
    img: 'https://media.materiel.net/r150/products/MN0005766598_1.jpg',
    price: 929,
    customerReview: 4.2
  },
  {
    id: 10,
    brand: 'Lenovo',
    name: 'LENOVO Ideapad 3 17ADA05 (81W20076FR)',
    description: 'Bureautique, 17", Ryzen 3 3250U, RAM 8 Go, SSD 512 Go, Windows 10, 2,20 kg',
    img: 'https://media.materiel.net/r150/products/MN0005768834_1_0005774569.jpg',
    price: 649,
    customerReview: 2.1
  },
  {
    id: 11,
    brand: 'Asus',
    name: 'ASUS Chromebook Flip 14 C436FA-E10073',
    description: 'Bureautique, 14", i5-10210U, RAM 16 Go, SSD 128 Go, Chrome OS, 1,17 kg',
    img: 'https://media.materiel.net/r150/products/MN0005685638_1.jpg',
    price: 1152,
    customerReview: 2.3
  },
  {
    id: 12,
    brand: 'Asus',
    name: 'ASUS A15 TUF 506II-AL024T',
    description: 'Gamer, 15,6", Ryzen 5-4600H, GTX 1650 Ti, RAM 8 Go, SSD 512 Go, Windows 10, 2,30 kg',
    img: 'https://media.materiel.net/r150/products/MN0005686527_1.jpg',
    price: 1099,
    customerReview: 1.2
  }
]

export default data;