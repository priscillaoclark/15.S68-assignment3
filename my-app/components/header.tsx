export const Header1 = () => {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Features",
            href: "/features",
            items: [
                {
                    title: "Canine-Adapted Design",
                    href: "/features#design",
                    description:
                        "Specially designed with paw-friendly strumming pads",
                },
                {
                    title: "Smart App Integration",
                    href: "/features#app",
                    description: "AI-powered feedback and progress tracking",
                },
                {
                    title: "Training Program",
                    href: "/features#training",
                    description:
                        "Step-by-step learning with professional support",
                },
                {
                    title: "Success Stories",
                    href: "/features#stories",
                    description: "Real stories from our furry musicians",
                },
            ],
        },
        {
            title: "Shop",
            href: "/shop",
        },
        {
            title: "Support",
            href: "/support",
        },
    ];

    return (
        <header className="w-full py-4 border-b">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <h1 className="text-xl font-semibold">PupStrings™</h1>
                    <nav className="hidden md:flex gap-6">
                        {navigationItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="text-sm hover:text-primary transition-colors"
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};
