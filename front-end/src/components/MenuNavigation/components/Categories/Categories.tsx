import ListItem from "@/components/ListItem/ListItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";
import Link from "next/link";
import { MenuCategoriesTypes } from "../../@types/MenuNavigationTypes";

export default function Categories() {
  const categories: MenuCategoriesTypes[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              render={<Link href="/docs">Página Inicial</Link>}
            />
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>Catálogo</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
                {categories.map((category) => (
                  <ListItem
                    key={category.title}
                    title={category.title}
                    href={category.href}
                  >
                    {category.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Feminino</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built with Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Masculino</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-50">
                <li>
                  <NavigationMenuLink
                    render={
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleAlertIcon />
                        Backlog
                      </Link>
                    }
                  />
                  <NavigationMenuLink
                    render={
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleDashedIcon />
                        To Do
                      </Link>
                    }
                  />
                  <NavigationMenuLink
                    render={
                      <Link href="#" className="flex-row items-center gap-2">
                        <CircleCheckIcon />
                        Done
                      </Link>
                    }
                  />
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Promoções</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built with Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
