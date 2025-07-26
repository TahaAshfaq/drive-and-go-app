import { Button } from "@/components/ui/button";

interface IconButtonProps {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export const IconButton = ({
  icon,
  size = "md",
  onClick,
  className = "",
}: IconButtonProps) => {
  const sizeClass =
    size === "sm" ? "h-8 w-8" : size === "lg" ? "h-12 w-12" : "h-10 w-10";

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`${sizeClass} p-0 flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};
