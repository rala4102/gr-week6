function Sidebar({ data, handleState }) {
  const showPopUp = () => {
    handleState(true);
  };

  return (
    <section className="sidebar">
      <button onClick={showPopUp}>추가</button>
      {data.map(info => {
        return(<span key={info.title}>{info.title}</span>);
      })}
    </section>
  );
}

export default Sidebar;
