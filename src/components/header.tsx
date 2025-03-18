import { Separator } from "@radix-ui/react-separator";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { NavigationLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import { AccountMenu } from "./account-menu";

export function Header() {
    return (
        <>
            <header className="border-b">
                <div className="flex h-16 items-center gap-6 px-6">
                    <Pizza className="w-6 h-6" />

                    <Separator orientation="vertical" className="h-6" />

                    <nav className="flex items-center space-x-4 lg:space-x-6">
                        <NavigationLink to={"/"}>
                            <Home className="h-4 w-4" />
                            Início
                        </NavigationLink>

                        <NavigationLink to={"/orders"}>
                            <UtensilsCrossed className="h-4 w-4" />
                            Pedidos
                        </NavigationLink>
                    </nav>

                    <div className="ml-auto flex items-center gap-2">
                        <ThemeToggle />
                        <AccountMenu />
                    </div>
                </div>
            </header>
        </>
    );
}