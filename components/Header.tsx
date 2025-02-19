
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { BookMarkedIcon, BookOpen } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton  } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import SearchInput from "./SearchInput";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 my-1">
            <div className="flex justify-between items-center gap-4">
                {/* left */}
                <div className="flex items-center gap-4">
                    <Link 
                    href="/"
                    prefetch={false}
                    className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
                    >
                        <BookOpen className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">Cursos</span>
                    </Link>
                 <SearchInput /> 
                </div>
                {/* Right */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <nav>
                     <SignedIn>
                        <Link
                         href="/"
                         prefetch={false}
                         className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md_border-border md:rounded-md md_px-4 md:py-2"
                        >
                           <BookMarkedIcon className="h-4 w-4" />
                           <span className="hidden md:block">Mis Cursos</span>
                        </Link>
                    </SignedIn>  
                    </nav>
                    <DarkModeToggle /> 

                    <SignedIn>
                     <UserButton />
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="outline" size="default">Iniciar Sesión</Button>
                        </SignInButton>
                    </SignedOut>
                </div>

            </div>
            
        </div>
    </header>
  )
}

export default Header