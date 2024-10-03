import Inner from "@/components/Layout/Inner"
import { useRouter } from "next/router"
import { projectsData } from "@/components/work/projectsData"
import { PHPSVG } from "../../../../public/techstack-php"
import { HTMLSVG } from "../../../../public/techstack-html5"
import { DjangoSVG } from "../../../../public/techstack-django"

export default function Project() {
    const router = useRouter()

    const currentProject = projectsData.find(
        (project) => project.id.toString() == router.query.projectID
    )
    return (
        <Inner>
            <div className="bg-linearBlack">
                <div className="text-white min-h-screen">
                    <div>
                        <div
                            style={{
                                backgroundImage: `url(${currentProject?.img})`,
                                height: "100px",
                                width: "100%",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    </div>
                    <div className="mx-4 md:mx-8 lg:mx-28">
                        <h3 className="text-center text-3xl my-8 mb-12 capitalize">
                            {currentProject?.projectName}
                        </h3>
                        <article className="mb-6">
                            <h4 className="text-left text-2xl mb-4">
                                Used Tech
                            </h4>
                            <div className="max-w-full md:max-w-md lg:max-w-6xl flex-wrap flex justify-start gap-4 pe-3">
                                <PHPSVG />
                                <HTMLSVG />
                                <DjangoSVG />
                            </div>
                        </article>
                        <article className="mb-6">
                            <h4 className="text-left text-2xl mb-4">
                                Project Overview
                            </h4>
                            <p className=" leading-6 text-lg text-left text-grayText">
                                {currentProject?.overview}
                            </p>
                        </article>
                        <article className="mb-6">
                            <h4 className="text-left text-2xl mb-4">My Role</h4>
                            <p className="leading-6 text-lg text-left text-grayText">
                                {currentProject?.myRole}
                            </p>
                        </article>
                        <article className="mb-6">
                            <div className="flex justify-start items-center gap-3">
                                <a
                                    href={currentProject?.seeLiveUrl}
                                    target="_blank"
                                >
                                    <div className="inline-flex items-center justify-between px-4 py-2 border border-white rounded-lg text-white gap-3">
                                        <span className="font-bold mr-1">
                                            See Live
                                        </span>
                                        <span className="text-sm opacity-70">
                                            <img
                                                src="/arrow1.svg"
                                                className="h-4"
                                            />
                                        </span>
                                    </div>
                                </a>
                                <a
                                    href={currentProject?.seeCodeUrl}
                                    target="_blank"
                                >
                                    <div className="inline-flex items-center justify-between px-4 py-2 border border-white rounded-lg text-white gap-3">
                                        <span className="font-bold mr-1">
                                            See code
                                        </span>
                                        <span className="text-sm opacity-70">
                                            <img
                                                src="/github-1.svg"
                                                className="h-4"
                                            />
                                        </span>
                                    </div>
                                </a>
                                {/* <UxItem />
                                <UxItem />
                                <UxItem isLast={true} /> */}
                            </div>
                        </article>

                        {/* <article className="mb-6">
                            <h4 className="text-left text-2xl mb-4">
                                Project Gallery
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <div key={index} className="relative group">
                                        <Image
                                            src="/project5.png"
                                            alt={`Image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="w-full h-auto duration-300 ease-in-out"
                                        />
                                     
                                    </div>
                                ))}
                            </div>
                        </article> */}
                    </div>
                </div>
            </div>
        </Inner>
    )
}
