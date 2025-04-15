import React from "react";
import { NavLink } from "react-router-dom";
import iconImage from "../assets/profile_img.png";

interface NavbarProps {
  onNavigate: (component: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div className="top-0 z-10 h-16 pt-6">
        <div
          className="sm:px-8 w-full"
          style={{
            top: "var(--header-top, var(--spacing-6))",
          }}
        >
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1">
                    <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                      <NavLink
                        to="/"
                        aria-label="Home"
                        className="pointer-events-auto"
                        onClick={() => onNavigate("home")}
                      >
                        <img
                          alt="Profile avatar"
                          fetchPriority="high"
                          width="512"
                          height="512"
                          decoding="async"
                          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                          sizes="2.25rem"
                          src={iconImage}
                          style={{ color: "transparent" }}
                        />
                      </NavLink>
                    </div>
                    <div className="flex flex-1 justify-end md:justify-center">
                      <nav className="pointer-events-auto hidden md:block">
                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                          <li>
                            <NavLink
                              to="/about"
                              className={({ isActive }) =>
                                `relative block px-3 py-2 transition ${
                                  isActive
                                    ? "text-teal-500 dark:text-teal-400"
                                    : "hover:text-teal-500 dark:hover:text-teal-400"
                                }`
                              }
                              onClick={() => onNavigate("about")}
                            >
                              About
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/articles"
                              className={({ isActive }) =>
                                `relative block px-3 py-2 transition ${
                                  isActive
                                    ? "text-teal-500 dark:text-teal-400"
                                    : "hover:text-teal-500 dark:hover:text-teal-400"
                                }`
                              }
                              onClick={() => onNavigate("articles")}
                            >
                              Articles
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/projects"
                              className={({ isActive }) =>
                                `relative block px-3 py-2 transition ${
                                  isActive
                                    ? "text-teal-500 dark:text-teal-400"
                                    : "hover:text-teal-500 dark:hover:text-teal-400"
                                }`
                              }
                              onClick={() => onNavigate("projects")}
                            >
                              Projects
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/speaking"
                              className={({ isActive }) =>
                                `relative block px-3 py-2 transition ${
                                  isActive
                                    ? "text-teal-500 dark:text-teal-400"
                                    : "hover:text-teal-500 dark:hover:text-teal-400"
                                }`
                              }
                              onClick={() => onNavigate("speaking")}
                            >
                              Speaking
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/Tools"
                              className={({ isActive }) =>
                                `relative block px-3 py-2 transition ${
                                  isActive
                                    ? "text-teal-500 dark:text-teal-400"
                                    : "hover:text-teal-500 dark:hover:text-teal-400"
                                }`
                              }
                              onClick={() => onNavigate("Tools")}
                            >
                              Tools
                            </NavLink>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
