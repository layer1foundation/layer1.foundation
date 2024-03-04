"use client"

import React, { ReactNode } from "react";

interface Paragraph {
  text?: string;
  bullets?: string[];
  props?: string;
}
interface Team {
  title?: string;
  name?: string;
  role?: string;
}
interface ChapterProps {
    heading?: string;
    subheading?: string;
    headingList?: string[];
    headingBig?: boolean;
    column?: boolean;
    subheadingBig?: boolean;
    subsection1?: {
        title?: string;
        paragraphs?: Paragraph[];
        textSize?: string;
        smallText?: boolean;
        footer?: string[];
        links?: { name: string; link?: string; grow?: boolean }[];
        outerLink?: { link?: string; text: string };
        items?: string[];
        team?: Team[]
    };
    subsection2?: {
        title?: string;
        paragraphs?: Paragraph[];
        textSize?: string;
        items?: string[];
        smallText?:boolean
    };
}

export default function Chapter({
  chapter,
  half,
  children,
}: {
  chapter?: ChapterProps;
  half?: boolean;
  children?: React.ReactNode;
}) {
  if(!chapter) return <div>Chapter Not Found</div>
    return (
    <div className={`flex flex-col ${ chapter.column ? "" : "md:flex-row"} md:w-full md:justify-between px-6 md:px-10`}>
      <div className={`${half ? "md:w-3/5" : ""}`}>
        {chapter.heading ? (
         chapter.headingBig ? (
          <h1 className={`mb-5 md:pr-16 max-w-md`}>{chapter.heading}</h1>
        ) : (
          <h6 className="text-smoke60 mb-5 font-mono">{chapter.heading}</h6>
        )
        ) : null }
        {chapter.subheading ? (
            chapter.subheadingBig ? (
                <h1 className={`mb-8 mt-10 font-suisse md:max-w-72`}>
                    {chapter.subheading}
                </h1>
            ) : (
          <h6 className={`text-smoke60 mb-8 mt-20 font-mono md:max-w-72`}>
            {chapter.subheading}
          </h6>
            )
        ) : null}
        {chapter.headingList ? 
            <div className="hidden md:flex md:flex-col">
            {chapter.headingList.map((h: string, i: number) => {
                return (
                <h6 key={i} className="text-smoke50 mb-2 font-mono">
                    {h}
                </h6>
                );
            })
            }
            </div>: null
        }
      </div>
      {chapter.subsection1 ? (
        <div className={`flex flex-col ${half ? "md:w-2/5" : "md:w-2/3"}`}>
          {chapter.subsection1.title ? (
            <h6 className="text-smoke60 mb-8 font-mono">
              {chapter.subsection1.title}
            </h6>
          ) : null}
          {chapter.subsection1.paragraphs ? (
            <div className="md:flex">
            <ul
              className={`${
                chapter.subsection1.textSize
                  ? `text-${chapter.subsection1.textSize}`
                  : null
              }`}
            >
              {chapter.subsection1.paragraphs.map((p: Paragraph, i: number) => {
                return (
                  <li
                    key={i}
                    className={`leading-8 mb-8 font-suisse ${
                      p.props ? p.props : null
                    }`}
                  >
                    {chapter.subsection1 && chapter.subsection1.smallText ? (
                      <h4 className="font-sans">{p.text}</h4>
                    ) : (
                      <h3>{p.text}</h3>
                    )}{" "}
                    {p.bullets ? (
                      <ul className="list-disc pl-5 mt-8">
                        {" "}
                        {p.bullets.map((bullet,b) => {
                          return (
                            <li key={b} className="text-smoke40 mb-6 font-sans">
                              <h3 >{bullet}</h3>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
            { chapter.subsection1.outerLink ? (
                <div className="border-b w-full flex justify-between md:items-center h-6 ">
                    <a href={chapter.subsection1.outerLink.link} className="font-mono">{chapter.subsection1.outerLink.text}</a>
                    <img src="/arrow-top-right.svg"/>
                </div>
                ) : null }
            </div>
          ) : null 
          }
          {chapter.headingList ? 
            <div className=" md:hidden md:flex-col">
            {chapter.headingList.map((h: string, i: number) => {
                return (
                <h6 key={i} className="text-smoke50 mb-2 font-mono">
                    {h}
                </h6>
                );
            })
            }
            </div>: null
            }
          {chapter.subsection1.footer
            ? chapter.subsection1.footer.map((p: string, i: number) => {
                return (
                  <h3 key={i} className="text-smoke40 mb-8 font-suisse">
                    {p}
                    <a href="https://domo-2.gitbook.io/brc-20-experiment/" className="text-smoke70 text-xl">
                      {" "}
                      click here
                    </a>
                  </h3>
                );
              })
            : null}
          {chapter.subsection1.links ? (
            <div className="w-full flex justify-start space-x-2">
              {chapter.subsection1.links.map((l, i) => {
                  return (
                    
                    <a
                      key={i}
                      href={l.link}
                      className={`flex items-center  bg-smoke50 rounded-full p-0.5 active:scale-90 cursor-pointer ${
                        l.grow ? "flex-grow md:flex-grow-0" : null
                      } `}
                    >
                      <div className={`bg-light text-dark h-9 flex justify-between w-full items-center space-x-2 rounded-full hover:bg-black hover:text-light active:bg-black active:text-light ${
                        l.grow ? "flex-grow md:flex-grow-0" : null
                      } `}>
                        <img className="pl-2" src="/fan-left.svg" />
                        <p
                          className="mb-0 flex justify-center"
                          style={{ fontSize: "12px" }}
                        >
                          {l.name}
                        </p>
                        <img className="pr-2" src="/fan-right.svg" />
                      </div>
                    </a>
                  );
                }
              )}
            </div>
          ) : null}
          {chapter.subsection1.team ? (
            <div className="md:flex flex-grow">
            <ul
              className={`${
                chapter.subsection1.textSize
                  ? `text-${chapter.subsection1.textSize}`
                  : null
              }`}
            >
              {chapter.subsection1.team.map((p: Team, i: number) => {
                return (
                  <li
                    key={i}
                    className={`leading-8 mb-8 font-suisse w-full`}
                  >
                    <h6 className="font-mono mb-6 text-smoke50">{p.title}</h6>
                    <h3>{p.name}</h3>
                    <h3 className="text-smoke50">{p.role}</h3>
                    {" "}
                  </li>
                );
              })}
            </ul>
            { chapter.subsection1.outerLink ? (
                <div className="border-b w-full flex justify-between md:items-center h-6 md:ml-4">
                    <a href={chapter.subsection1.outerLink.link} className="font-mono">{chapter.subsection1.outerLink.text}</a>
                    <img src="/arrow-top-right.svg"/>
                </div>
                ) : null }
            </div>
          ) : null 
          }
          {chapter.subsection1.items ? (
            <div className="md:w-full bg-black">
                <ul className="">
                  {chapter.subsection1.items.map((i: string, j: number) => {
                    return (
                      <li key={j} className=" leading-8 mb-8 font-suisse">
                        <h3
                          className={`${
                            j === 0 ? "text-dark" : "text-smoke40"
                          }`}
                        >
                          {i}
                        </h3>
                      </li>
                    );
                  })}
                </ul>
              </div>
              ) : null}
          {chapter.subsection2 ? (
            <div >
              <h6 className="text-smoke60 mb-8 font-mono">
                {chapter.subsection2.title}
              </h6>
              {chapter.subsection2.paragraphs ? (
                <ul
                  className={`${
                    chapter.subsection2.textSize
                      ? `text-${chapter.subsection2.textSize}`
                      : null
                  }`}
                >
                  {chapter.subsection2.paragraphs.map(
                    (p: Paragraph, i: number) => {
                      return (
                        <li
                          key={i}
                          className={`leading-8 mb-8 font-suisse ${
                            p.props ? p.props : null
                          }`}
                        >
                          {chapter.subsection2 && chapter.subsection2.smallText ? (
                            <h4 className="font-sans">{p.text}</h4>
                          ) : (
                            <h3>{p.text}</h3>
                          )}{" "}
                          {p.bullets ? (
                            <ul className="list-disc pl-5 mt-8">
                              {" "}
                              {p.bullets.map((bullet,b) => {
                                return (
                                  <li
                                    key={b}
                                    className="text-smoke40 mb-6 font-sans"
                                  >
                                    <h3>{bullet}</h3>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : null}
                        </li>
                      );
                    }
                  )}
                </ul>
              ) : null}
              {chapter.subsection2.items ? (
                <ul className="">
                  {chapter.subsection2.items.map((i: string, j: number) => {
                    return (
                      <li key={j} className=" leading-8 mb-8 font-suisse">
                        <h3
                          className={`${
                            j === 0 ? "text-dark" : "text-smoke40"
                          }`}
                        >
                          {i}
                        </h3>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          ) : null}
         {children}
        </div>
      ) : null}
       
    </div>
  );
}
