import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-void-public border-b border-platinum">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand Anchor */}
                <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-platinum/50 flex-shrink-0">
                        <Image
                            src="/logo-circle.png"
                            alt="Protocol 33 Logo"
                            fill
                            className="object-cover"
                            sizes="48px"
                            priority
                        />
                    </div>
                    <Link href="/" className="text-alchemical-gold font-medium tracking-widest text-lg">
                        PROTOCOL 33
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-sm tracking-wide font-light">
                    <Link href="/destiny-xray" className="text-primary hover:text-alchemical-gold transition-colors duration-300">
                        Destiny X-Ray
                    </Link>
                    <Link href="/join" className="text-primary hover:text-alchemical-gold transition-colors duration-300">
                        Compass Pulse
                    </Link>
                    <Link href="/awakening" className="text-primary hover:text-alchemical-gold transition-colors duration-300">
                        Awakening
                    </Link>
                    <Link href="/hub" className="text-primary hover:text-alchemical-gold transition-colors duration-300">
                        Hub
                    </Link>
                    <Link href="/vault-portals" className="text-primary hover:text-alchemical-gold transition-colors duration-300">
                        Vault Portals
                    </Link>
                    <Link href="/contact" className="text-primary hover:text-alchemical-gold transition-colors duration-300">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
