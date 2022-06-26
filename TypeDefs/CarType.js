const { gql } = require("apollo-server");

const CarType = gql`
    scalar Upload

    type Car {
        id: ID
        carName: String
        perDayPrice: String
        location: String
        seat: String
        brand: String
        description: String
        carimg: String
    }

    input CarInput {
        carName: String
        perDayPrice: String
        location: String
        seat: String
        brand: String
        description: String
        carimg: Upload
    }
    input BrandInput{
        brand: String
    }
    type Query {
        GetCars: [Car]
        BrandCar(input: BrandInput): [Car]
    }
    type Mutation {
        AddCar(input: CarInput): Car
    }
  
`

module.exports = { CarType }