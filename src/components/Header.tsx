import logo from "../assets/logo-sportsee.png";

export const Header = () => {
  return (
    <header className="absolute flex items-center w-full h-20 bg-secondary">
      <nav className="flex w-full gap-10">
        <div className="flex items-center gap-2 ml-4">
          <img src={logo} alt="Logo SportSee" />
          <span className="text-xl text-primary">SportSee</span>
        </div>
        <ul className="flex items-center justify-around w-full">
          <li className="p-4 font-bold text-tertiary">Accueil</li>
          <li className="p-4 font-bold text-tertiary">Profil</li>
          <li className="p-4 font-bold text-tertiary">Réglages</li>
          <li className="p-4 font-bold text-tertiary">Communauté</li>
        </ul>
      </nav>
    </header>
  );
};
