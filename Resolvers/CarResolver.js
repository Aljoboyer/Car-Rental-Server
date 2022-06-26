const path = require('path')
const fs = require('fs');
const GraphQLUpload = require('graphql-upload/GraphQLUpload.js');
const { finished } = require('stream/promises');
const carcollection = require('../Models/carcollection');
const stripe = require('stripe')(process.env.STRIPE_SECRET)

const CarResolver = {
    Upload: GraphQLUpload,
    Query: {
        GetCars: async () => {
            const cars = await carcollection.find({})
            return cars
        },
        BrandCar: async (parent, {input}) => {
            const Allcars = await carcollection.find({})
            const cars = Allcars.filter(car => car.brand.toLowerCase() === input.brand.toLowerCase())
            return cars
        },
    },
    
    Mutation: {
        AddCar: async(parent, {input}) => {
            const { createReadStream, filename} = await input.carimg;

            const stream = createReadStream();
            
            const imagepath = "./CarImage/" + filename;

            const pathName = "CarImage/" + filename;
            await stream.pipe(fs.createWriteStream(pathName))

            const newdata ={
                carName: input.carName,
                perDayPrice: input.perDayPrice,
                location: input.location,
                seat: input.seat,
                brand: input.brand,
                description: input.description,
                carimg: pathName
            }
            const cars = new carcollection(newdata)
            cars.save()
        },
    }
}

module.exports = { CarResolver }