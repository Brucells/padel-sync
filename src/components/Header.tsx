import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  BellRing,
  Camera,
  ChartColumnBig,
  ChartSpline,
  Database,
    Diameter,
    Dribbble,
    Home,
    Menu,
    User,
    Users,
  } from "lucide-react"
import { Badge } from "@/components/ui/badge"  
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Notification } from "./Notification"

function Header() {
    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <a
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Diameter className="h-6 w-6" />
                  <span className="">PadelSync</span>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <Dribbble className="h-5 w-5" />
                  Match
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <ChartColumnBig className="h-5 w-5" />
                  Statistiques
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <ChartSpline className="h-5 w-5" />
                  Progression
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Camera className="h-5 w-5" />
                  Videos
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Database className="h-5 w-5" />
                  Données
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Coéquipiers
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    3
                  </Badge>
                </a>
                <a
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <User className="h-5 w-5" />
                  Profil
                </a>
              </nav>
              
            </SheetContent>
          </Sheet>


          <div className="w-full flex-1">
            <form>
              <div className="relative">
                
              </div>
            </form>
          </div>

          <Popover>
            <PopoverTrigger>
                <BellRing className="h-4 w-4" />
            </PopoverTrigger>
            <PopoverContent className="mr-2 mt-6 w-[380px]" >
              <Notification />
            </PopoverContent>
          </Popover>

          
        </header>
    );
}

export default Header;