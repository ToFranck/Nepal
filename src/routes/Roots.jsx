import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Roots.css";

export default function Roots() {
  const location = useLocation();

  // State pour suivre la page actuelle
  const [currentPage, setCurrentPage] = useState("home");

  // Mettez à jour la page actuelle chaque fois que l'emplacement (location) change
  useEffect(() => {
    // Extraire le nom de la page à partir de l'emplacement (location.pathname)
    const pageName = location.pathname.replace("/", "") || "home";
    setCurrentPage(pageName);
  }, [location]);

  return (
    <>
      <nav className={`neumorphic`}>
        <Link to="/" className={currentPage === "home" ? "activeLink links" : "links"}>
          Home
        </Link>

        <span>|</span>
        <Link to="/bio" className={
            currentPage === "bio"  // Correction ici
              ? "activeLink links activeLink-move"
              : "links"
          }
        >
          Bio
        </Link>

      </nav>
      <Outlet />
    </>
  );
}
