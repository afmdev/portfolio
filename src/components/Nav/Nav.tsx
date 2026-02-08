import { createSignal, createEffect, For } from "solid-js";
import { useLocation } from "@solidjs/router";
import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";
import { useScrollDirection } from "~/utils/useScrollDirection";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const location = useLocation();
  const { isHidden, isScrolled } = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [menuPosition, setMenuPosition] = createSignal({ x: 0, y: 0 });

  let hamburgerRef: HTMLButtonElement | undefined;

  const isActive = (path: string) => path === location.pathname;

  const navClass = () => {
    let classes = styles.nav;
    if (isScrolled()) classes += ` ${styles.scrolled}`;
    if (isHidden() && !isMenuOpen()) classes += ` ${styles.hidden}`;
    return classes;
  };

  const toggleMenu = () => {
    if (hamburgerRef) {
      const rect = hamburgerRef.getBoundingClientRect();
      setMenuPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setIsMenuOpen(!isMenuOpen());
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle escape key to close menu
  createEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen()) {
        closeMenu();
        hamburgerRef?.focus();
      }
    };

    if (isMenuOpen()) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  });

  return (
    <>
      <nav class={navClass()} role="navigation" aria-label="Main navigation">
        <div class={styles.container}>
          <a href="/" class={styles.logo} aria-label="Go to homepage">
            Logo
          </a>

          <div class={styles.actions}>
            <ThemeToggle />
            <button
              ref={hamburgerRef}
              type="button"
              class={`${styles.hamburger} ${isMenuOpen() ? styles.hamburgerOpen : ""}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen() ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen()}
              aria-controls="main-menu"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="main-menu"
        class={`${styles.menu} ${isMenuOpen() ? styles.menuOpen : ""}`}
        style={{
          "--menu-x": `${menuPosition().x}px`,
          "--menu-y": `${menuPosition().y}px`,
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isMenuOpen()}
      >
        <nav class={styles.menuContent} aria-label="Site pages">
          <ul class={styles.menuLinks}>
            <For each={links}>
              {(link) => (
                <li>
                  <a
                    href={link.href}
                    class={`${styles.menuLink} ${isActive(link.href) ? styles.menuLinkActive : ""}`}
                    onClick={closeMenu}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    tabIndex={isMenuOpen() ? 0 : -1}
                  >
                    {link.label}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </nav>
      </div>
    </>
  );
}
