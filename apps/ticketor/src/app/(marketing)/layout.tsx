import { PropsWithChildren } from "react";

export const metadata = {
    title: 'Welcome to marketing'
};

export default function MarketingLayout({children}: PropsWithChildren) {
    return (
        <div>
            <div>{children}</div>
            <footer className="bg-fuchsia-300 p-2">
                <p>
                    &copy; 2026 Mode. Build for Next.js Sandbox
                </p>
            </footer>
        </div>
    )
}