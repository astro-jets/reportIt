import ContactsComponent from "@/components/contacts/contacts";
import Articles from "../components/Articles";
import Faqs from "../components/Faqs";


const LandingPage = () => {
    return (
        <>
            <div className="container my-0 w-full mx-auto ">
                {/* Section: Design Block */}
                <section className="background-radial-gradient mb-32 w-full text-center lg:text-left ">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('/bribe.png')] h-[500px] rounded-xl">
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[#0000007c] bg-fixed ">
                            <div className="flex h-full items-center justify-center">
                                <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
                                    <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                                        Report It
                                    </h2>
                                    <p className="text-lg">
                                        A safe platform for every person to report crimes, abuse, unfairness and corruption.
                                    </p>
                                    <div className="my-8 space-x-5">
                                        <a className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] text-white md:mr-2 md:mb-0"
                                            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
                                        <a href={'/signup'} className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal bg-white text-primary transition duration-150 ease-in-out scale-110 focus:outline-none focus:ring-0"
                                            data-te-ripple-init data-te-ripple-color="light" role="button">Sign Up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>


            {/* 
            <section className="container my-24 mx-auto md:px-6">
                <section className="mb-32">
                    <div
                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12">
                                    <h2 className="mb-4 text-2xl font-bold">
                                        What's the secret of the great taste?
                                    </h2>
                                    <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                            stroke="currentColor" className="mr-2 h-5 w-5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                        </svg>
                                        Hot news
                                    </p>
                                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Earum maxime voluptas ipsam aliquam itaque cupiditate
                                        provident architecto expedita harum culpa odit, inventore rem
                                        molestias laborum repudiandae corporis pariatur quo eius iste!
                                        Quaerat, assumenda voluptates! Molestias, recusandae? Maxime
                                        fuga omnis ducimus.
                                    </p>
                                    <p className="text-neutral-500 dark:text-neutral-300">
                                        Commodi ut nisi assumenda alias maxime necessitatibus ad rem
                                        repellat explicabo, reiciendis illum suscipit iusto? Provident
                                        dignissimos similique, reiciendis inventore accusantium unde
                                        mollitia, deleniti quae atque error id perspiciatis illum.
                                        Laboriosam aperiam ab illo dignissimos obcaecati corporis
                                        similique a odio, optio iste quis placeat alias amet rerum
                                        sint quos dolor pariatur inventore possimus ad consequuntur
                                        fugiat perferendis consectetur laudantium.
                                    </p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                                <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/088.jpg" alt="Trendy Pants and Shoes"
                                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                        </div>
                    </div>
                </section>
            </section> */}

            <div className="container my-24 mx-auto md:px-6">
                {/* Section: Design Block */}
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                            <div className="flex lg:py-12">
                                <img src="/abuse.jpg"
                                    className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]" alt="image" />
                            </div>
                        </div>

                        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                            <div
                                className="flex h-full items-center rounded-lg bg-primary p-6 text-center text-white lg:pl-12 lg:text-left">
                                <div className="lg:pl-12">
                                    <h2 className="mb-8 text-3xl font-bold">Dont be kept silent</h2>
                                    <p className="mb-8 pb-2 lg:pb-0">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Maxime, sint, repellat vel quo quisquam accusamus in qui at
                                        ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
                                        distinctio eum neque!
                                    </p>

                                    <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Best team
                                        </p>

                                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Best quality
                                        </p>

                                        <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Best experience
                                        </p>
                                    </div>

                                    <p>
                                        Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                                        porta dui, sit amet rutrum enim massa in ante. Curabitur in
                                        justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                                        eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                                        ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                                        faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                                        Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                                        Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                                        tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                                        aliquam lectus. Vestibulum mattis felis quis ex pharetra
                                        luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                                        ut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>
            <div className="container my-24 mx-auto md:px-6">
                {/* Section: Design Block */}
                <section className="mb-32">
                    <div
                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex flex-wrap items-center">
                            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                                <img src="/speaker.jpg" alt="Trendy Pants and Shoes"
                                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12">
                                    <h2 className="mb-6 pb-2 text-4xl font-bold">
                                        Being kept silent?
                                    </h2>
                                    <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                                        Below is our list of carfully stratigised services to help you get the justice you desrve.
                                    </p>

                                    <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Support
                                                24/7
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Analytics
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Components
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Updates
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Reports
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Mobile
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Modules
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Blocks
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Templates
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section: Design Block */}
            </div>

            <div className="container my-24 mx-auto md:px-6">
                {/* Section: Design Block */}
                <section className="mb-32">
                    {/* Jumbotron */}
                    <div className="container mx-auto text-center lg:text-left xl:px-32">
                        <div className=" grid items-center lg:grid-cols-2">
                            <div className="mb-12 lg:mb-0">
                                <div
                                    className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                    <h2 className="mb-8 text-3xl font-bold">Enjoy the moment</h2>
                                    <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                        soluta corporis voluptate ab error quam dolores doloremque,
                                        quae consectetur.
                                    </p>

                                    <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Best team
                                        </p>

                                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Best quality
                                        </p>

                                        <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                                stroke="currentColor" className="mr-2 h-5 w-5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Best experience
                                        </p>
                                    </div>

                                    <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                                        In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                                        pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam
                                        sed cursus lectus. Proin non rutrum magna. Proin gravida,
                                        justo et imperdiet tristique, turpis nisi viverra est, nec
                                        posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium
                                        condimentum nulla, ut aliquet erat auctor sed. Aenean
                                        facilisis neque id ligula maximus scelerisque. Nunc sed velit
                                        rhoncus, interdum dolor at, lacinia lacus. Proin eleifend
                                        viverra posuere. Ut commodo risus lacus, ac scelerisque quam
                                        aliquam dictum. Etiam dignissim pulvinar eros eget auctor.
                                        Quisque congue turpis quis libero ullamcorper imperdiet.
                                        Vivamus a orci maximus, dignissim ligula a, congue dui. Morbi
                                        et lectus sit amet neque luctus viverra.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/117.jpg"
                                    className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                            </div>
                        </div>
                    </div>
                    {/* Jumbotron */}
                </section>
                {/* Section: Design Block */}
            </div>
            <Faqs />
            <ContactsComponent />

        </>
    );
}

export default LandingPage;