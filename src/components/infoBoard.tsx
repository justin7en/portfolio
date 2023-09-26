"use client"

import { useState } from "react"
import { Button } from "./ui/button";

export function InfoBoard() {
  const [activeItem, setActiveItem] = useState([true, false, false]);

  function changeActiveItem(item: number) {
    const newActiveItems = [false, false, false];
    newActiveItems[item] = true;
    setActiveItem(newActiveItems);
  }

  return (
    <>
      <div className="flex flex-row w-full rounded-sm p-2 space-x-2">
        <div className="relative flex flex-col basis-11/12 p-2 space-y-4 space-x-2 rounded-sm bg-blue-600">
          <div className="absolute -translate-y-7">
            <h1 className="flex flex-col -space-y-3 text-lg font-bold">
              <div>
                Welcome! I&rsquo;m
              </div>
              <div>
                a Developer
              </div>
            </h1>
          </div>
          <div>
            {activeItem[0] ? (
              <p>
                My Name is Justin and I&rsquo;m a 23 year old student. <br/>
                I am currently at the end of my bachelor&rsquo;s degree in applied computer science and looking for a job in web development.
              </p>
            ) : activeItem[1] ? (
              <>
                <section>
                  <h2 className="text-amber-400">Frontend skills</h2>
                  <ul className="indent-2">
                    <li>- NextJS 13</li>
                    <li>- Tailwindcss</li>
                    <li>- shadcn (component library)</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-amber-400">Backend skills</h2>
                  <ul className="indent-2">
                    <li>- Basics with firebase</li>
                    <li>- SQL</li>
                  </ul>
                </section>
              </>
              
            ) : (
              <section>
                <h2 className="text-amber-400">Can be contacted at</h2>
                <ul className="indent-2">
                  <li>- dev.justin@icloud.com</li>
                  <li><a href="https://github.com/justin7en" target="_blank">- GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/justin-e-58902b271/" target="_blank">- LinkedIn</a></li>
                </ul>
              </section>
            )}
          </div>
        </div>
        <div className="basis-1/12 flex flex-col text-center justify-evenly p-2 space-y-2 border-2 rounded-sm border-blue-600">
          {activeItem[0] ? (
            <div className="relative">
              <div className="w-16 h-16 flex items-center justify-end -translate-x-8 bg-blue-600">
                <div className="absolute w-16 h-16 rounded-full -right-8 flex items-center justify-center bg-blue-600 text-amber-400">
                  About Me
                </div>
              </div>
            </div>
          ) : (
            <Button className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-600" 
                    onClick={() => changeActiveItem(0)}>
              About Me
            </Button>
          )}
          {activeItem[1] ? (
            <div className="relative">
              <div className="w-16 h-16 flex items-center justify-end -translate-x-8 bg-blue-600">
                <div className="absolute w-16 h-16 rounded-full -right-8 flex items-center justify-center bg-blue-600 text-amber-400">
                  Skills
                </div>
              </div>
            </div>
          ) : (
            <Button className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-600" 
                    onClick={() => changeActiveItem(1)}>
              Skills
            </Button>
          )}
          {activeItem[2] ? (
            <div className="relative">
              <div className="w-16 h-16 flex items-center justify-end -translate-x-8 bg-blue-600">
                <div className="absolute w-16 h-16 rounded-full -right-8 flex items-center justify-center bg-blue-600 text-amber-400">
                  Contact
                </div>
              </div>
            </div>
          ) : (
            <Button className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-600" 
                    onClick={() => changeActiveItem(2)}>
              Contact
            </Button>
          )}
        </div>
      </div>
    </>
  )
}