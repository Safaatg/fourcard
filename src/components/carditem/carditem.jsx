import supervisor from "../../assets/images/icon-supervisor.svg";

function Carditem () {
    return (
        <div className="super">
        <h2 className="title-2">Supervisor</h2>
        <p className="p-1">Monitors activity to identify project roadblocks</p>
        <img src= {supervisor} />
      </div>
    );
}

export default Carditem;
