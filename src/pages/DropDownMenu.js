import FrameComponent4 from "../components/FrameComponent42";
import FrameComponent3 from "../components/FrameComponent32";
import FrameComponent1 from "../components/FrameComponent12";
import './DropDownMenu.css';


const DropDownMenu = () => {
  return (
    <div className="drop-down-menu">
      <img className="background-icon" alt="" src="/hero-background@2x.png" />
      <section className="content"><FrameComponent4 />
        <div className="header"><FrameComponent3 />
          <div className="rectangle-parent79">
            <div className="frame-child21" />
            <h1 className="construction1">CONSTRUCTION</h1>
            <div className="tools-title">
              <h1 className="tools1">TOOLS</h1>
            </div>
            <div className="view-all">
              <div className="view-all-background" />
              <img className="right-arrow-svgrepo-com-6-icon1" alt="" src="/rightarrowsvgrepocom-1.svg" />
            </div>
            <div className="service-list">
              <div className="service-list-child" />
              <div className="floor-screed">Floor Screed</div>
              <div className="rush-coat">Rush Coat</div>
              <div className="cement-plaster">Cement Plaster</div>
              <div className="block-work-mortar">Block Work Mortar</div>
            </div>
          </div>
        </div>
      </section>
      <img className="windows-cursor-logo-png-transp-icon1" loading="lazy" alt="" src="/windowscursorlogopngtransparent-11@2x.png" /><FrameComponent1 />
    </div>);
};

export default DropDownMenu;