import { PropsWithChildren } from "react";

export const metadata = {
    title: 'Welcome to marketing'
};

export default function MarketingLayout({children}: PropsWithChildren) {
    return (
        <div>
            <div>{children}</div>
        </div>
    )
}