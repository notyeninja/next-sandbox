export const metadata = {
    title: 'Welcome to marketing'
};

export default function MarketingLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <div>{children}</div>
        </div>
    )
}