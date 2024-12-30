import Link from "next/link";

interface HeaderMenuProps {
    link: string;
    title: string;
    list?: boolean; 
    options?: string[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ link, title, list = false, options = [] }) => {
    return (
        <div className="relative group">
            <Link href={link}>
                <div className="text-neutral-400 text-sm cursor-pointer">{title}</div>
            </Link>

            {list && options.length > 0 && (
                <div className="absolute z-40 left-0 mt-2 w-40 backdrop-blur-lg border border-zinc-900 rounded-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition duration-200 ease-in-out">
                    <ul className="py-2">
                        {options.map((option, index) => (
                            <li key={index}>
                                <Link href={`/${option.toLowerCase()}`} className="block px-4 py-2 text-neutral-400 cursor-pointer text-sm">
                                    {option}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HeaderMenu;
