import meditationIcon from "../assets/icons/meditation-icon.png";
import swimmerIcon from "../assets/icons/swimmer-icon.png";
import cyclistIcon from "../assets/icons/cyclist-icon.png";
import dumbbellIcon from "../assets/icons/dumbbell-icon.png";

import copyright from "../assets/copyright.png";

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-[300px] h-screen bg-secondary ">
      <ul className="flex flex-col items-center justify-between mt-44">
        <li className="p-4 font-bold text-tertiary">
          <img
            src={meditationIcon}
            alt="Icone de Meditation"
            className="w-10 h-10 p-2 bg-tertiary"
          />
        </li>
        <li className="p-4 font-bold text-tertiary">
          <img
            src={swimmerIcon}
            alt="Icone de Nageur"
            className="w-10 h-10 p-2 bg-tertiary"
          />
        </li>
        <li className="p-4 font-bold text-tertiary">
          <img
            src={cyclistIcon}
            alt="Icone de Cycliste"
            className="w-10 h-10 p-2 bg-tertiary"
          />
        </li>
        <li className="p-4 font-bold text-tertiary">
          <img
            src={dumbbellIcon}
            alt="Icone Haltère"
            className="w-10 h-10 p-2 bg-tertiary"
          />
        </li>
      </ul>

      <div className="flex justify-center mt-20">
        <img src={copyright} alt="CopyRight" />
      </div>
    </div>
  );
};
