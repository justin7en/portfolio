"use client"

import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/modeToggle"
import { usePathname } from 'next/navigation';

export function NavMenu(){
  const currentRoute = usePathname();

  function checkRoute(route: string) {
    if (route === currentRoute) {
      return "border-b-4 border-highlight"
    }else{
      return ""
    }
  }

  return(
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row w-screen p-1">
        <NavigationMenuItem className="grow flex">
          <Link href="/" className="text-xl font-bold w-1/3 flex">
            <div className="mx-auto">
              Dev.Justin
            </div>
          </Link>
        </NavigationMenuItem>
        <div className="flex flex-row basis-1/4 space-x-6">
          <NavigationMenuItem className={checkRoute("/")}>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className={checkRoute("/projects")}>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>Projects</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
        <NavigationMenuItem className="pr-2 mt-1">
          <ModeToggle/>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
