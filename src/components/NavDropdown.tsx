"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type MenuItem = {
  name: string;
  path?: string;
  children?: MenuItem[];
};

type NavDropdownProps = {
  title: string;
  items: MenuItem[];
  mobile?: boolean;
  basePath?: string;  // ← add this
};



export default function NavDropdown({
  title,
  items,
  mobile = false,
  basePath=''
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  // =========================
  // MOBILE VERSION (CLICK)
  // =========================
  if (mobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full justify-between items-center text-lg font-medium py-2 text-gray-700"
        >
          {title}
          <ChevronDown
            size={18}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

     {open && (
  <div className="pl-4 space-y-3">

    {items.map((item) => (

      <div key={item.name} className="border-l-2 border-gray-200 pl-3">

        {item.path ? (
          <Link
            href={item.path}
            className="font-semibold text-[#0B1F3A] hover:text-[#C4A15A]"
          >
            {item.name}
          </Link>
        ) : (
          <span className="font-semibold text-[#0B1F3A]">
            {item.name}
          </span>
        )}

        {item.children && (
          <div className="mt-2 ml-3 border-l border-gray-200">

            {item.children.map((child) => (
              <Link
                key={child.name}
                href={child.path ?? "#"}
                className="block py-2 pl-4 text-gray-600 hover:text-[#C4A15A]"
              >
                {child.name}
              </Link>
            ))}

          </div>
        )}

      </div>

    ))}

  </div>
)}
      </div>
    );
  }

  // =========================
  // DESKTOP VERSION (HOVER)
  // =========================
  return (
    <div className="relative group">
      {/* Top Level Button */}
      <button className="flex items-center gap-1 text-gray-700 hover:text-[#c5720c] font-medium">
        {title}
        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      <div className="absolute left-0 top-full mt-3 w-64 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {items.map((item) =>
          item.children && item.children.length > 0 ? (
            <div key={item.name} className="relative group/sub">
              {/* Parent item */}
             {item.path ? (
  <Link
    href={item.path}
    className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#c5720c]"
  >
    <span>{item.name}</span>
    <ChevronRight size={14} />
  </Link>
) : (
  <div className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
    <span>{item.name}</span>
    <ChevronRight size={14} />
  </div>
)}

              {/* Second level submenu */}
              <div className="absolute top-0 left-full w-72 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                {item.children.map((child) =>
                  child.path ? (
                    <Link
                      key={child.name}
                      href={child.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#c5720c]"
                    >
                      {child.name}
                    </Link>
                  ) : (
                    <span
                      key={child.name}
                      className="block px-4 py-2 text-gray-700"
                    >
                      {child.name}
                    </span>
                  )
                )}
              </div>
            </div>
          ) : item.path ? (
            <Link
              key={item.name}
              href={item.path}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#c5720c]"
            >
              {item.name}
            </Link>
          ) : (
            <span key={item.name} className="block px-4 py-2 text-gray-700">
              {item.name}
            </span>
          )
        )}
      </div>
    </div>
  );
}