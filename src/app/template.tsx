export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div className="animate-[var(--animate-slow-fade)]">
            {children}
        </div>
    );
}
