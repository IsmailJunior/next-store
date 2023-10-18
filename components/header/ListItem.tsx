import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface IListItemProps {
  href: string;
  children: ReactNode;
  onMouseEnter?: MouseEventHandler;
}
function ListItem(props: IListItemProps) {
  const { children, href, onMouseEnter } = props;
  return (
		<li
			className="hover:text-slate-700 transition-all"
			onMouseEnter={onMouseEnter}
		>
			<Link
				className="flex justify-center items-center h-12 w-max  text-center"
				href={href}
			>
				{children}
			</Link>
		</li>
  );
}

export default ListItem;
