import { ObjectId } from "mongodb"

export type PayloadResponse = {
  _id: ObjectId
  word: string
  show: number
}

export async function getData() {
  const response = await fetch('/api/prohibited-word/data', {
    method: 'GET',
    // mode: "cors", // no-cors, *cors, same-origin
    cache: 'no-cache', 
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return response.json()
}

export async function postData(data: { word: string }[]) {
  const response = await fetch('/api/prohibited-word/create', {
    method: 'POST',
    // mode: "cors", // no-cors, *cors, same-origin
    cache: 'no-cache', 
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  })
  return response.json()
}

export async function resetData() {
  const response = await fetch('/api/prohibited-word/reset', {
    method: 'POST',
    // mode: "cors", // no-cors, *cors, same-origin
    cache: 'no-cache', 
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return response.json()
}

export async function removeData() {
  const response = await fetch('/api/prohibited-word/remove', {
    method: 'DELETE',
    // mode: "cors", // no-cors, *cors, same-origin
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return response.json()
}

export async function randomData() {
  const response = await fetch('/api/prohibited-word/random', {
    method: 'GET',
    // mode: "cors", // no-cors, *cors, same-origin
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return response.json()
}
