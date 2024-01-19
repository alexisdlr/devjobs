export async function fetchData() {
  try {
    const API_URL = process.env.NODE_ENV === "production"
      ? "https://my-json-server.typicode.com/typicode/demo/"
      : "http://localhost:3000";
    
    await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar 3 segundos

    const response = await fetch(`${API_URL}/data.json`);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}


