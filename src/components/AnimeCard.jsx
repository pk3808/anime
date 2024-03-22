import  { useState } from "react";


// eslint-disable-next-line react/prop-types
function AnimeCard({ anime }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  

  return (
    <>
      {anime
        // eslint-disable-next-line react/prop-types
        ? anime.map((animeItem, index) => {
            return (
              <div
                key={index}
                style={{
                  maxWidth: hoveredIndex === index ? "300px" : "150px",
                  height: "210px",
                  borderRadius: "8px",
                  marginBottom: "30px",
                  transition: "max-width 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={{ padding: "15px" }}>
                  <img
                    src={animeItem.images.jpg.large_image_url}
                    alt={animeItem.title}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                  {hoveredIndex === index && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: `url(${animeItem.images.jpg.large_image_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "10px",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "10px",
                         marginBottom:0,
                          color: "#fff",
                        }}
                      >
                        {animeItem.title}
                      </h1>
                      {/* Button to open modal */}
                     
                    </div>
                  )}
                  <h1
                    style={{
                      fontSize: "1.2rem",
                      marginBottom: "10",
                      color: "black",
                    }}
                  >
                    {animeItem.title}
                  </h1>
                </div>
                {/* <hr style={{ margin: "0" }} /> */}
              </div>
            );
          })
        : "not found"}
     
    </>
  );
}

export default AnimeCard;
