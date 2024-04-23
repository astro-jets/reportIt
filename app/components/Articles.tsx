const Articles = () => {
    return (
        <div className="container my-24 mx-auto md:px-6">
            {/* Section: Design Block */}
            <section className="mb-32">
                <h1 className="mb-16 text-center text-2xl font-bold">About us</h1>

                <div className="mb-16 flex flex-wrap">
                    <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                        <div
                            className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init data-te-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg" className="w-full" alt="Louvre" />
                            <a href="#!">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                        <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                        <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" className="mr-2 h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                            </svg>
                            Keep the world safe
                        </div>
                        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
                            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
                            ullamcorper diam.
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
                            nulla saepe rerum aspernatur odio amet perferendis tempora
                            mollitia? Ratione unde magni omnis quaerat blanditiis cumque
                            dolore placeat rem dignissimos?
                        </p>
                    </div>
                </div>

                <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
                    <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
                        <div
                            className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init data-te-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg" className="w-full" alt="Louvre" />
                            <a href="#!">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
                        <h3 className="mb-4 text-2xl font-bold">Our vission</h3>
                        <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" className="mr-2 h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                            </svg>
                            Crime free world
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-300">
                            Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
                            dui, sit amet rutrum enim massa in ante. Curabitur in justo at
                            lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
                            vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
                            vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
                            tortor finibus, a eleifend lectus dictum. Cras tempor convallis
                            magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
                            imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
                            at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
                            felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
                            iaculis est vehicula ut.
                        </p>
                    </div>
                </div>
            </section>
            {/* Section: Design Block */}
        </div>
    );
}

export default Articles;