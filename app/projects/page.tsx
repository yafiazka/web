import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "paperless-hospital")!;
  const top2 = allProjects.find((project) => project.slug === "leumart")!;
  const top3 = allProjects.find((project) => project.slug === "syiar-tauhid-aceh")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    ).sort(
      (a, b) =>
        new Date(b.dateTo ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.dateFrom ?? Number.POSITIVE_INFINITY).getTime(),
    );

  const sortedProfessional = allProjects
    .filter((p) => p.category === "professional")
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    ).sort(
      (a, b) =>
        new Date(b.dateTo ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.dateFrom ?? Number.POSITIVE_INFINITY).getTime(),
    );

  const sortedNonProfessional = allProjects
    .filter((p) => p.category === "non-professional")
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    ).sort(
      (a, b) =>
        new Date(b.dateTo ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.dateFrom ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-zinc-100 ">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
            Professional Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.dateFrom ? (
                      <time dateTime={new Date(featured.dateFrom).toISOString()}>
                        {(() => {
                          try {
                            return Intl.DateTimeFormat('en-US', {
                              year: 'numeric',
                              month: 'long',
                            }).format(new Date(featured.dateFrom));
                          } catch (error) {
                            return 'Invalid Date';
                          }
                        })()}
                        -
                        {featured.dateTo ? (
                          <time dateTime={new Date(featured.dateTo).toISOString()}>

                            {(() => {
                              try {
                                return Intl.DateTimeFormat('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                }).format(new Date(featured.dateTo));
                              } catch (error) {
                                return 'Invalid Date';
                              }
                            })()}
                          </time>
                        ) : (
                          <span>Present</span>
                        )}
                      </time>
                    ) : (
                      <span>Soon</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                {/* <div className="absolute bottom-4 md:bottom-8"> */}
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block mt-4">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                {/* </div> */}
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
           {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {sortedProfessional
              .filter((_, i) => i < 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              )).reverse()}
          </div>
        </div>
        
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
            Certifications
        </h2>

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sortedNonProfessional
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sortedNonProfessional
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sortedNonProfessional
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
