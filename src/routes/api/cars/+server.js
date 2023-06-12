//import { json } from '@sveltejs/kit'
import db from "$lib/db"
import { json } from "@sveltejs/kit";

export async function GET() {
  // const cars = await db.collection('listingsAndReviews').find().toArray()
  const cars = await db.collection('cars').find().toArray()
  //const cars = await db.collection('cars').find({ brand: 'Volvo' }).toArray()
  return new Response(JSON.stringify(cars), {
    headers: {
      "Content-type": "application/json"  
    }
  })
  //return json(cars)
}

export async function POST() {
  //...MongoDB how to create a record
  const newCar = {
      brand: "tesla",
      mileage: "30"
  }
  const users = await db.collection('cars').insertOne(newCar);
  return json(newCar, {status: 201});
}


export async function PATCH() {
  //...MongoDB how to update a record
}


export async function DELETE() {
  //...MongoDB how to delete a record
}