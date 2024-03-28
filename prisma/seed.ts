import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: 'Caneca de cerâmica rústica',
        category: 'MUG',
        image: 'caneca-01.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 40,
      },
      {
        name: 'Camiseta not today',
        category: 'TSHIRT',
        image: 'camiseta-01.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 78,
      },
      {
        name: 'Caneca Black Ring',
        category: 'MUG',
        image: 'caneca-06.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 32,
      },
      {
        name: 'Camiseta Broken Saints',
        category: 'TSHIRT',
        image: 'camiseta-05.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 58,
      },
      {
        name: 'Camiseta Outcast',
        category: 'TSHIRT',
        image: 'camiseta-04.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 89,
      },
      {
        name: 'Caneca The Grounds',
        category: 'MUG',
        image: 'caneca-06.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 85,
      },
      {
        name: 'Camiseta evening',
        category: 'TSHIRT',
        image: 'camiseta-03.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 69,
      },
      {
        name: 'Caneca preto fosco',
        category: 'MUG',
        image: 'caneca-02.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 28,
      },
      {
        name: 'Caneca Never settle',
        category: 'MUG',
        image: 'caneca-05.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 43,
      },
      {
        name: 'Camiseta DREAMER',
        category: 'TSHIRT',
        image: 'camiseta-02.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 55,
      },
      {
        name: 'Caneca Decaf! P&Co',
        category: 'MUG',
        image: 'caneca-03.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 32,
      },
      {
        name: 'Camiseta Ramones',
        category: 'TSHIRT',
        image: 'camiseta-06.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 92,
      },

      {
        name: 'Caneca de cerâmica rústica 2',
        category: 'MUG',
        image: 'caneca-01.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 40,
      },
      {
        name: 'Camiseta not today 2',
        category: 'TSHIRT',
        image: 'camiseta-01.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 78,
      },
      {
        name: 'Caneca Black Ring 2',
        category: 'MUG',
        image: 'caneca-06.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 32,
      },
      {
        name: 'Camiseta Broken Saints 2',
        category: 'TSHIRT',
        image: 'camiseta-05.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 58,
      },
      {
        name: 'Camiseta Outcast 2',
        category: 'TSHIRT',
        image: 'camiseta-04.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 89,
      },
      {
        name: 'Caneca The Grounds 2',
        category: 'MUG',
        image: 'caneca-06.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 85,
      },
      {
        name: 'Camiseta evening 2',
        category: 'TSHIRT',
        image: 'camiseta-03.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 69,
      },
      {
        name: 'Caneca preto fosco 2',
        category: 'MUG',
        image: 'caneca-02.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 28,
      },
      {
        name: 'Caneca Never settle 2',
        category: 'MUG',
        image: 'caneca-05.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 43,
      },
      {
        name: 'Camiseta DREAMER 2',
        category: 'TSHIRT',
        image: 'camiseta-02.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 55,
      },
      {
        name: 'Caneca Decaf! P&Co 2',
        category: 'MUG',
        image: 'caneca-03.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 32,
      },
      {
        name: 'Camiseta Ramones 2',
        category: 'TSHIRT',
        image: 'camiseta-06.jpg',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sed ducimus assumenda, possimus ut fugiat reprehenderit provident harum labore ipsum mollitia illum ex. Quis, fugiat. Culpa rem maxime recusandae.',
        price: 92,
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
