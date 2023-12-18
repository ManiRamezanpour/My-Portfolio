import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <span>{"<"}</span>
        <p className="font-bold text-inherit text-rose-700">ManiRmp</p>
        <span>{"/>"}</span>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className="hover:text-rose-700" href="#">
            SKILLS
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" className="hover:text-rose-700">
            PROJECTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="hover:text-rose-700">
            SOCIALS
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
