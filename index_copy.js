//fetch

async function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.log("Response NOT okay :(");
    } else {
      console.log(data.results);
      return data.results;
    }
  } catch (error) {
    console.error("ERROR");
  }
}

fetchCharacters();
