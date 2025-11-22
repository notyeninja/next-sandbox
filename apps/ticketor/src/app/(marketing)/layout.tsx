import { PropsWithChildren } from "react";
import { CopyrightYear } from "../components/CopyrighYear";

export const metadata = {
    title: 'Welcome to marketing'
};

export default function MarketingLayout({children}: PropsWithChildren) {
    return (
        <div>
            <div>{children}</div>
            <footer className="p-2 border-t border-x-gray-200 dark:border-gray-600">
                <p className="dark:text-gray-400">
                    &copy; <CopyrightYear />  Mode. Build for Next.js Sandbox
                </p>
            </footer>
        </div>
    )
}