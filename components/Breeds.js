import { useState, useEffect } from "react";

export default function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dogapi.dog/api/v2/breeds")
      .then((res) => res.json())
      .then((res) => {
        const allBreeds = res.data;
        const randomBreeds = [];

        for (let i = 0; i < 5; i++) {
          const randomIndex = Math.floor(Math.random() * allBreeds.length);
          randomBreeds.push(allBreeds[randomIndex]);
          allBreeds.splice(randomIndex, 1);
        }

        setBreeds(randomBreeds);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!breeds.length) return <p>No Data</p>;

  return (
    <>
      <div className="breeds-container">
        <div>
          {breeds.map((breed) => (
            <div key={breed.id}>
              <h2 className="text-xl">{breed.attributes.name}</h2>
              <hr />
              <p className="breeds-info m-2">{breed.attributes.description}</p>
              <p>
                Hypoallergenic: {breed.attributes.hypoallergenic ? "Yes" : "No"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem",
        }}
      >
        <button
          className="text-center"
          onClick={() => window.location.reload()}
          style={{
            border: "1px solid blue",
            borderRadius: "10px",
            background: "green",
            padding: "0.5rem",
          }}
        >
          Reload for New Breeds
        </button>
      </div>
    </>
  );
}
