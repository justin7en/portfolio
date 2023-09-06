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

export function NavMenu(){
  return(
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row w-screen">
        <NavigationMenuItem className="grow flex">
          <Link href="/" className="text-xl font-bold w-1/3 flex">
            <div className="mx-auto">
              Dev.Justin
            </div>
          </Link>
        </NavigationMenuItem>
        <div className="flex flex-row basis-1/4 space-x-4">
          <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={`text-lg ${navigationMenuTriggerStyle()}`}>Projects</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>
        <NavigationMenuItem className="pr-2">
          <ModeToggle/>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
