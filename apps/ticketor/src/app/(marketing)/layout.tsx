import { PropsWithChildren } from "react";
import { CopyrightYear } from "../components/CopyrighYear";

export const metadata = {
    title: 'Welcome to marketing'
};

export default function MarketingLayout({children}: PropsWithChildren) {
    return (
        <div>
            <div>{children}</div>
            <footer className="bg-fuchsia-300 p-2">
                <p>
                    &copy; <CopyrightYear />  Mode. Build for Next.js Sandbox
                </p>
            </footer>
        </div>
    )
}