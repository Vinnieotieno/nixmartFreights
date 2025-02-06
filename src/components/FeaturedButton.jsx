import { cn } from "@/lib/utils";

const FeaturedButton = ({ children, className, type }) => {
    return <button type={type} className={cn("bg-brandRed text-white px-6 rounded-lg py-2 font-medium", className)} >{ children}</button>
}

export default FeaturedButton;