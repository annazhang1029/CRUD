export const load = async (loadEvent) => {
    const {fetch} = loadEvent;
    //const response = await fetch("http://localhost:5173/api/cars")
    // const response = await fetch("/api/cars")
    // const cars = await response.json()
  
    const usersResponse = await fetch("/api/users")
    const users = await usersResponse.json()
  
    return {
      users
    }
  }