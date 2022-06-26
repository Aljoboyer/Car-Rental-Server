const path = require('path')
const fs = require('fs');
const GraphQLUpload = require('graphql-upload/GraphQLUpload.js');
const { finished } = require('stream/promises');
const usercollection = require('../Models/usercollection');
const bookingcollection = require('../Models/bookingcollection');
const { ObjectId } = require('mongodb');
const stripe = require('stripe')(process.env.STRIPE_SECRET)

const UserResolver = {
    Upload: GraphQLUpload,
    Query: {
        GetPaymentIntent: async (parent, {price}) => {
            console.log('hitted', price)
            const payment = parseInt(price) * 100;
            const paymentIntent = await stripe.paymentIntents.create({
                currency: 'usd',
                amount: payment,
                payment_method_types: ['card']
              });
            return({
            clientSecret: paymentIntent.client_secret
            });
        },
        User: async (parent, {email}) => {
            console.log('hitted User')
            const user = await usercollection.findOne({email: email})
            return user
        },
        Bookings: async () => {
            const booking = await bookingcollection.find({})
            return booking
        },
    },
    
    Mutation: {
        AddUser: async(parent, {input}) => {
            const user = new usercollection(input)
            user.save()
        },
        AddBookings: async(parent, {input}) => {
            const booking = new bookingcollection(input)
            booking.save()
        },
        UpdateUserPorfile: async(parent, {input}) => {
            console.log('hitted', input)
            const query = {_id: ObjectId(input.id)};

            const user = await usercollection.findOneAndUpdate(query, {
                $set: {
                    name: input.name,
                    phone: input.phone,
                    img: input.img
                }
            })
        },
    }
}

module.exports = { UserResolver }