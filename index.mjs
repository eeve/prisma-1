import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const app = {
    id: '1pqTcsnO5675ZHM7-qu31_aUakQdkHalj-h5'
  }
  const userId = 'test'

  const createRes = await prisma.cloudApp.create({
    data: {
      id: app.id,
      name: 'test',
      authorizes: {
        create: {
          authorize: {
            create: {
              id: 'enImPUMoEaXYTYmkAMkBaCCCM5PWHPNnXWXS',
              user_id: userId,
              app_id: app.id,
            }
          },
          created_by: 'test',
          created_at: new Date(),
        }
      }
    }
  })

  console.log(111, createRes)
  
  const updateRes = await prisma.cloudApp.update({
    where: {
      id: app.id
    },
    data: {
      authorizes: {
        updateMany: {
          where: {
            cloud_app_id: app.id,
            user_id: userId
          },
          data: {
            updated_at: new Date(),
            updated_by: userId,
          }
        }
      }
    }
  })

  console.log(222, updateRes)

}

main()