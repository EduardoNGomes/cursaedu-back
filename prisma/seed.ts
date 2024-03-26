import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  await prisma.product.createMany({
    data:[
      {
        name:'Caneca de cerâmica rústica',
        category:'MUG',
        image:'caneca-01',
        price:40,
      },
      {
        name:'Camiseta not today',
        category:'TSHIRT',
        image:'camisa-01',
        price:78,
      },
      {
        name:'Caneca Black Ring',
        category:'MUG',
        image:'caneca-06',
        price:32,
      },
      {
        name:'Camiseta Broken Saints',
        category:'TSHIRT',
        image:'camisa-05',
        price:58,
      },
      {
        name:'Camiseta Outcast',
        category:'TSHIRT',
        image:'camisa-04',
        price:89,
      },
      {
        name:'Caneca The Grounds',
        category:'MUG',
        image:'caneca-06',
        price:85,
      },
      {
        name:'Camiseta evening',
        category:'TSHIRT',
        image:'camisa-03',
        price:69,
      },
      {
        name:'Caneca preto fosco',
        category:'MUG',
        image:'caneca-02',
        price:28,
      },
      {
        name:'Caneca Never settle',
        category:'MUG',
        image:'caneca-05',
        price:43,
      },
      {
        name:'Camiseta DREAMER',
        category:'TSHIRT',
        image:'camisa-02',
        price:55,
      },
      {
        name:'Caneca Decaf! P&Co',
        category:'MUG',
        image:'caneca-03',
        price:32,
      },
      {
        name:'Camiseta Ramones',
        category:'TSHIRT',
        image:'camisa-06',
        price:92,
      },


      {
        name:'Caneca de cerâmica rústica 2',
        category:'MUG',
        image:'caneca-01',
        price:40,
      },
      {
        name:'Camiseta not today 2',
        category:'TSHIRT',
        image:'camisa-01',
        price:78,
      },
      {
        name:'Caneca Black Ring 2',
        category:'MUG',
        image:'caneca-06',
        price:32,
      },
      {
        name:'Camiseta Broken Saints 2',
        category:'TSHIRT',
        image:'camisa-05',
        price:58,
      },
      {
        name:'Camiseta Outcast 2',
        category:'TSHIRT',
        image:'camisa-04',
        price:89,
      },
      {
        name:'Caneca The Grounds 2',
        category:'MUG',
        image:'caneca-06',
        price:85,
      },
      {
        name:'Camiseta evening 2',
        category:'TSHIRT',
        image:'camisa-03',
        price:69,
      },
      {
        name:'Caneca preto fosco 2',
        category:'MUG',
        image:'caneca-02',
        price:28,
      },
      {
        name:'Caneca Never settle 2',
        category:'MUG',
        image:'caneca-05',
        price:43,
      },
      {
        name:'Camiseta DREAMER 2',
        category:'TSHIRT',
        image:'camisa-02',
        price:55,
      },
      {
        name:'Caneca Decaf! P&Co 2',
        category:'MUG',
        image:'caneca-03',
        price:32,
      },
      {
        name:'Camiseta Ramones 2',
        category:'TSHIRT',
        image:'camisa-06',
        price:92,
      },
      
    ]
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