"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({ className, ...props }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMouseInDropdown, setMouseInDropdown] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  const closeDropdown = () => {
    setTimeout(() => {
      if (!isMouseInDropdown) {
        setDropdownOpen(false);
      }
    }, 100);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const routes = [
    {
      href: `/`,
      label: "MentHer",
      active: pathname === `/`,
    },
    {
      href: `/find-mentors`,
      label: "Find Mentors",
      active: pathname === `/find-mentors`,
    },
    {
      href: `/events`,
      label: "Join Events",
      active: pathname === `/events`,
    },
    {
      href: `/resources`,
      label: "Learn & Grow",
      active: pathname === `/resources`,
    },
    {
      href: `/faq`,
      label: "FAQ",
      active: pathname === `/faq`,
    },
  ];
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) =>
        route.dropdown ? (
          <div
            key={route.label}
            className="relative text-sm font-medium"
            onClick={toggleDropdown} // Toggle dropdown on label click
            onMouseEnter={() => {
              setDropdownOpen(true);
              setMouseInDropdown(true);
            }}
            onMouseLeave={() => {
              setMouseInDropdown(false);
              closeDropdown();
            }}
          >
            {route.label}
            {isDropdownOpen && (
              <div
                className="absolute mt-2 space-y-2"
                onMouseEnter={() => setMouseInDropdown(true)}
                onMouseLeave={() => setMouseInDropdown(false)}
              >
                {route.items.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.href}
                    href={dropdownItem.href}
                    className={cn(
                      "block px-4 py-2 transition-colors hover:bg-yellow-500 hover:text-black",
                      dropdownItem.active ? "bg-yellow-200 text-black" : ""
                    )}
                  >
                    {dropdownItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
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
        )
      )}
    </nav>
  );
}

/*
{
      label: "Dashboards",
      active: false,
      dropdown: true,
      items: [
        {
          href: `/mentor-dashboard`,
          label: "Mentor",
          active: pathname === `/mentor-dashboard`,
        },
        {
          href: `/mentee-dashboard`,
          label: "Mentee",
          active: pathname === `/mentee-dashboard`,
        },
      ],
    }
    */