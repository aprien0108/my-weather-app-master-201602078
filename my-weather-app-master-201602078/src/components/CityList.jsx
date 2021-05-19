function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div>
      <h2>CityList</h2>

      <ul>
        {cities.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
