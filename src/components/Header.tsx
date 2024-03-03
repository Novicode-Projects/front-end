import logo from "../assets/logo-sportsee.png";

export const Header = () => {
  return (
    <header className="absolute flex items-center h-20 xl:w-full bg-secondary">
      <nav className="flex w-full xl:gap-10 lg:gap-2">
        <div className="flex items-center gap-2 ml-4">
          <img src={logo} alt="Logo SportSee" />
          <span className="text-xl text-primary">SportSee</span>
        </div>
        <ul className="flex items-center w-full xl:justify-around">
          <li className="p-4 font-bold text-tertiary">Accueil</li>
          <li className="p-4 font-bold text-tertiary">Profil</li>
          <li className="p-4 font-bold text-tertiary">Réglages</li>
          <li className="p-4 font-bold text-tertiary">Communauté</li>
        </ul>
      </nav>
    </header>
  );
};
