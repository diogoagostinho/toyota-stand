import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleDarkModeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <img className="w-40" src="/toyota-type-inlogo-light.png" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/vehicles">
            Vehicles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/faq" color="foreground" aria-current="page">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="gap-2"
            color="foreground"
            isExternal
            showAnchorIcon
            href="https://www.toyotacertified.com/"
          >
            Certified Used Vehicles
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="items-center align-middle content-center flex gap-8">
          <Link
            onClick={handleDarkModeToggle}
            className={
              isDark === true
                ? "cursor-pointer text-2xl items-center align-middle content-center text-white"
                : "hidden"
            }
          >
            {" "}
            <FaSun />
          </Link>
          <Link
            onClick={handleDarkModeToggle}
            className={
              isDark === false
                ? "cursor-pointer text-2xl items-center align-middle content-center text-black"
                : "hidden"
            }
          >
            {" "}
            <FaMoon />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="/vehicles">
            Vehicles
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/faq" color="foreground" aria-current="page">
            FAQ
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="gap-2"
            color="foreground"
            isExternal
            showAnchorIcon
            href="https://www.toyotacertified.com/"
          >
            Certified Used Vehicles
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComponent;