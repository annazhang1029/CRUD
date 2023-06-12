import db from "$lib/db"
import { json } from "@sveltejs/kit";

export async function GET() {
  const users = await db.collection('restaurantsInDurham').find().toArray()
  return new Response(JSON.stringify(users), {
    headers: {
      "Content-type": "application/json"  
    }
  })
  //return json(cars)
}
export async function POST() {
  //...MongoDB how to create a record
  const newUser = {
      name: "the best restaurant in durham",
      review: "10/10 for sure"
  }
  const users = await db.collection('restaurantsInDurham').insertOne(newUser);
  return json(newUser, {status: 201});
}

export async function PATCH() {
  //...MongoDB how to update a record
}


export async function DELETE() {
  //...MongoDB how to delete a record
}