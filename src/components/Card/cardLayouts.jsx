export const CardLayout = {
  ourProducts: (d) => {
    return (
      <li key={d.id}>
        <div className="img">
          <img src={d.img} alt="" />
        </div>
        <div className="name">
          <p>{d.name}</p>
        </div>
      </li>
    );
  },
};
