import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    const links = [
        // { label: "Photography", path: "/photography" },
        // { label: "Coding Projects", path: "/codingprojects" },
    ];

    return (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {links.map((link) => (
                <Typography
                    key={link.label}
                    as="li"
                    variant="small"
                    color="#39ff14"
                    className="p-1 font-normal font-mono"
                >
                    <a
                        href={link.path}
                        className="flex items-center text-[oklch(88%_0.32_135)] transition-colors">
                        {link.label}
                    </a>
                </Typography>
            ))}
        </ul>
    );
}

export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
            <Navbar className="sticky top-0 z-10 h-max max-w-full bg-black-100 rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-[oklch(88%_0.32_135)] font-mono">
                    <Typography
                        as="a"
                        href="/home"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Christina Knapp
                    </Typography>
                    <div className="mr-4 hidden lg:block">
                        <NavList />
                    </div>
                    {/* <Button
                        variant="gradient"
                        size="sm"
                        className="hidden lg:inline-block"
                    >
                        <span>Surprise</span>
                    </Button> */}
                    <IconButton
                        variant="text"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                        aria-label="Toggle nav menu"
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                    {/* <Button fullWidth variant="gradient" size="sm" className="mt-2">
                        <span>Surprise</span>
                    </Button> */}
                </Collapse>
            </Navbar>
    )
}