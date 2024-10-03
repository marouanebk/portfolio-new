export function Returns() {
    return (
        <>
            <div className="px-2 pb-20 sm:px-3 md:px-12  text-white">
                <header>
                    <h1 className="text-center text-4xl mb-2">
                        {"Clients' Returns"}
                    </h1>
                    <div className="flex justify-center gap-4 items-center ">
                        <p className="text-grayText text-center">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Quas, voluptatum?
                        </p>
                    </div>
                </header>
                <main className="my-5  max-w-full md:max-w-md lg:max-w-6xl mx-auto flex-wrap flex justify-center gap-4 px-3">
                    <div className="flex flex-col lg:flex-row lg:justify-center gap-10 min:gap-5 flex-wrap items-center">
                        <SingleReturn />
                        <SingleReturn />
                        <SingleReturn />
                        <SingleReturn />
                    </div>
                </main>
            </div>
        </>
    )
}

const SingleReturn = () => {
    return (
        <>
            <article className="transition before:transition after:transition before:shadow-sm before:hover:shadow-purple max-w-[430px] md:w-[530px] lg:min-w-[500px] text-center p-5 border-2 border-grayText hover:border-purple hover:before:bg-purple  rounded-2xl bg-linearBlack relative before:w-[40%] before:absolute before:left-1/2 before:-bottom-[14px] before:h-[25px] before:bg-grayText before:rounded-full before:-translate-x-1/2 before:-z-10 after:w-full after:h-full after:top-0 after:left-0 hover:after:bg-purple after:absolute after:rounded-2xl after:filter after:blur-lg after:-z-10">
                <p className="mb-3 leading-6 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum maiores dolor, cumque blanditiis sunt debitis
                    dolorum iusto, rem officia voluptate cum provident sit quasi
                    iure. Fugit, non. Architecto, excepturi a!
                </p>
                <div className=" flex gap-3 text-center w-fit mx-auto">
                    <h4 className="text-lg">client name</h4>
                    <span className="text-lg">/</span>
                    <h4 className="text-lg text-grayText">client function.</h4>
                </div>
            </article>
        </>
    )
}
