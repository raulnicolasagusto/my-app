
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center gap-4">
                {/* left */}
                <div className="flex items-center gap-4">

                </div>
                {/* Right */}
                <div className="flex items-center space-x-2 md:space-x-4">

                </div>
                <DarkModeToggle />

            </div>
            
        </div>
    </header>
  )
}

export default Header