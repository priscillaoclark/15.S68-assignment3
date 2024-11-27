import Link from "next/link";

export const Header1 = () => {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Demo",
            href: "/demo",
        },
        {
            title: "Features",
            href: "/features",
        },
        {
            title: "Support",
            href: "/support",
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full py-4 bg-gradient-to-r from-[#7EB9B2] via-[#9CC5BE] to-[#B8D1CC] shadow-md backdrop-blur-sm bg-opacity-90">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <h1 className="text-xl font-semibold text-white hover:text-opacity-90 transition-colors">
                        PupStrings™
                    </h1>
                    <nav className="hidden md:flex gap-6">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="text-sm text-white hover:text-opacity-75 transition-colors font-medium relative group"
                            >
                                {item.title}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/preorder">
                        <button className="px-4 py-2 text-sm text-[#7EB9B2] bg-white rounded-md hover:bg-opacity-90 transition-colors">
                            Preorder
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
};
