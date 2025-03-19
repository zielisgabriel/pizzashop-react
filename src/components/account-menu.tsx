import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function AccountMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"} className="flex items-center gap-2 select-none">
                    Pizza Shop
                    <ChevronDown className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    );
}