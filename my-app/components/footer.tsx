import Link from "next/link";

export const Footer1 = () => {
  const navigationItems = [
    {
      title: "Product",
      description: "Transform playtime into a musical adventure",
      items: [
        {
          title: "Features",
          href: "/features",
        },
        {
          title: "Contact",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <footer className="w-full py-10 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="flex gap-8 flex-col">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl tracking-tighter font-regular text-[#7EB9B2]">
                PupStrings™
              </h2>
              <p className="text-lg leading-relaxed tracking-tight text-background/75">
                Unleashing your dog's musical potential
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-sm text-background/75">
                <p>PupStrings HQ</p>
                <p>123 Melody Lane</p>
                <p>San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {navigationItems.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-medium">{section.title}</h3>
                <p className="text-sm text-background/75">
                  {section.description}
                </p>
              </div>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-background/75 hover:text-background transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="text-sm text-background/75">
              © 2024 PupStrings. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link
                href="/terms"
                className="text-sm text-background/75 hover:text-background"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-background/75 hover:text-background"
              >
                Privacy Policy
              </Link>
              <Link
                href="/returns"
                className="text-sm text-background/75 hover:text-background"
              >
                Return Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
