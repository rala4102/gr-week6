function Sidebar({ data, handleState }) {

  return (
    <section className="sidebar">
      <button onClick={()=>handleState(true)}>추가</button>
      {data.map(info => {
        return(<span key={info.title}>{info.title}</span>);
      })}
    </section>
  );
}

export default Sidebar;
