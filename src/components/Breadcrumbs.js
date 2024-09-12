import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs({ modifiedClassName }) {
  const location = usePathname();
  const pathnames = location.split("/").filter((x) => x);

  return (
    <div className={modifiedClassName}>
      {pathnames.slice(0, pathnames.length).map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        // Capitalize the first letter of the breadcrumb value
        const breadcrumb =
          value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");

        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            <Link
              className="text-xs transition-all hover:text-blue-500"
              href={to}
            >
              {breadcrumb}
            </Link>
            {!isLast && <span className="text-xs"> &gt; </span>}
          </span>
        );
      })}
    </div>
  );
};
