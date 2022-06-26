const { gql } = require("apollo-server");

const UsersType = gql`
    type User {
        id: ID
        name: String,
        email: String,
        phone: String,
        img: String
    }
    type Booking{
        id: ID
        name: String,
        email: String,
        phone: String,
        img: String,
        carName: String
        perDayPrice: String
        seat: String
        carImg: String
        licenseFront: String
        licenseBack: String
        licenseDate: String
        licenseNum: String
        NidFront: String
        NidBack: String
        NidNum: String
        payment: String
        location: String
        diffDays: String
        startDate: String
        endDate: String
        secretKey: String
    }
    input UserInput {
        name: String,
        email: String,
        phone: String,
    }
    input BookingInput {
        name: String,
        email: String,
        phone: String,
        img: String,
        carName: String
        perDayPrice: String
        seat: String
        carImg: String
        licenseFront: String
        licenseBack: String
        NidFront: String
        NidBack: String
        licenseNum: String
        NidNum: String
        payment: String
        location: String
        diffDays: String
        startDate: String
        endDate: String
        licenseDate: String
    }
    type clientSecret {
        clientSecret: String
    }
    input UpdateProfileInput {
        id: ID
        name: String,
        phone: String,
        img: String
    }
    type Query {
        GetPaymentIntent(price: String):  clientSecret
        User(email: String): User
        Bookings: [Booking]
    }
    type Mutation {
        AddUser(input: UserInput): User
        AddBookings(input: BookingInput): Booking
        UpdateUserPorfile(input: UpdateProfileInput): User
    }
  
`

module.exports = { UsersType }