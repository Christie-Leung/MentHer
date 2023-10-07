"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}) {

  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/`,
      label: 'MentHer',
      active: pathname === `/`,
    },
    {
      href: `/find-mentors`,
      label: 'Find Mentors',
      active: pathname === `/find-mentors`,
    },
    {
      href: `/events`,
      label: 'Join Events',
      active: pathname === `/events`,
    },
    {
      href: `/resources`,
      label: 'Learn & Grow',
      active: pathname === `/resources`,
    },
  ];
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}    
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "font-extrabold text-lg" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}

    </nav>
  )
}