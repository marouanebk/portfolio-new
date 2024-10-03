import React from "react"

const Testimonials = () => {
    const renderCard = (
        text: string,
        clientName: string,
        clientFunction: string
    ) => {
        return (
            <div className="relative hover:shadow-2xl">
                {/* Main Card */}
                <div
                    className="bg-black border border-white rounded-tl-2xl rounded-tr-2xl rounded-b-2xl h-170 transition duration-300 hover:border-purple-500"
                    style={{
                        background:
                            "linear-gradient(103.02deg, #2E2E2E 0%, #222222 81.17%)",
                    }}
                >
                    <p className="text-white text-base font-normal leading-5 text-center px-4 py-3">
                        {text}
                    </p>
                    <p className="text-white text-base font-normal leading-6 tracking-normal text-center font-dosis pb-4">
                        {clientName} /{" "}
                        <span style={{ color: "#686868" }}>
                            {clientFunction}
                        </span>
                    </p>
                </div>

                {/* Small Container */}
                <div className="bg-grayText absolute bottom-0 left-0 right-0 mx-auto w-2/5 h-[10px] top-full rounded-bl-2xl rounded-br-2xl transition duration-300 smallContainer"></div>
            </div>
        )
    }

    return (
        // <div className="flex flex-col items-center justify-center h-screen bg-black px-8">
        <div className="flex flex-col items-center justify-start h-screen bg-black px-8 py-10">
            <h1 className="text-white text-4xl font-normal mb-2 kalnia-font text-center">
                Clients Returns
            </h1>
            <p className="text-gray-600 text-base font-normal mb-4 dosis-font">
                Lorem ipsum dolor sit amet consectetur. Quisque posuere ornare
                nec.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {renderCard(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ac nunc tincidunt, vitae ultricies nunc tincidunt. Nullam auctor, nisl id tincidunt tincidunt, nunc nisl tincidunt nunc, id consectetur nunc nunc vitae nunc.",
                    "John Doe",
                    "Software Engineer"
                )}
                {renderCard(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ac nunc tincidunt, vitae ultricies nunc tincidunt. Nullam auctor, nisl id tincidunt tincidunt, nunc nisl tincidunt nunc, id consectetur nunc nunc vitae nunc.",
                    "Jane Smith",
                    "Product Manager"
                )}
                {renderCard(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ac nunc tincidunt, vitae ultricies nunc tincidunt. Nullam auctor, nisl id tincidunt tincidunt, nunc nisl tincidunt nunc, id consectetur nunc nunc vitae nunc.",
                    "Mike Johnson",
                    "UX Designer"
                )}
                {renderCard(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ac nunc tincidunt, vitae ultricies nunc tincidunt. Nullam auctor, nisl id tincidunt tincidunt, nunc nisl tincidunt nunc, id consectetur nunc nunc vitae nunc.",
                    "Sarah Thompson",
                    "Frontend Developer"
                )}
                {renderCard(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ac nunc tincidunt, vitae ultricies nunc tincidunt. Nullam auctor, nisl id tincidunt tincidunt, nunc nisl tincidunt nunc, id consectetur nunc nunc vitae nunc.",
                    "Sarah Thompson",
                    "Frontend Developer"
                )}
                {renderCard(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo ac nunc tincidunt, vitae ultricies nunc tincidunt. Nullam auctor, nisl id tincidunt tincidunt, nunc nisl tincidunt nunc, id consectetur nunc nunc vitae nunc.",
                    "Sarah Thompson",
                    "Frontend Developer"
                )}
            </div>
        </div>
    )
}

export default Testimonials
