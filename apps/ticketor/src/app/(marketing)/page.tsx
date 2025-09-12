import Link from "next/link";

const MarketingLandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="max-w-7xl mx-auto text-center mt-11">
                <h1 className="text-8xl font-extrabold dark:text-white tracking-tight">
                    Issue tracking <br />
                    <span className="text-purple-400">simplified</span>
                </h1>

                <p className="dark:text-white pt-4 text-lg tracking-wide">
                    A minimal and elegant issue tracking tool for modern teams.
                </p>

                <div className="mt-6">
                    <Link href="/signup">
                        <button className="bg-purple-600 px-4 py-2 rounded-md text-white">Get Started</button>
                    </Link>
                </div>


            </div>
        </div>
    )
};

export default MarketingLandingPage