
function Cards({ dataProdcut }) {
  return (
    <ul>
      {dataProdcut.map((nav) => {
        return (
          <li key={nav.id}>
            <div className="img">
              <img src={nav.img} alt="" />
            </div>
            <div className="name">
              <p>{nav.name}</p>
            </div>
            {nav.stars && (
              <div>
                <div
                  className="stars"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "10px",
                    color: "yellow",
                  }}
                >
                  <img style={{ color: "yellow" }} src="#" alt="alt" />
                  <p>{nav.stars}</p>
                </div>
                <div
                  className="Offer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0px 10px",
                    color: "#000000",
                  }}
                >
                  <p className="price">{nav.price}$</p>
                  <p
                    className="offer"
                    style={{
                      background: "red",
                      borderRadius: "10px",
                      padding: "2px 10px",
                    }}
                  >
                    {nav.offer}%
                  </p>
                </div>
                <div
                  className="endPrice"
                  style={{
                    color: "#000000",
                    textAlign: "left",
                    padding: "2px 10px",
                  }}
                >
                  <p>{nav.endPrice}</p>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Cards;
