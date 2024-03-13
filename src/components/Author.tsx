import Image from "next/image";

type IAuthor = {
    img: string;
    name: string;
    description: string;
    readtime?: string;
    date: string | Date;
    preview?: boolean;
};

export const Author = ({ img, name, description, readtime, date, preview }: IAuthor) => {
    
    typeof date === "string" ? (date = new Date(date)) : date;
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short', // "short" for abbreviated month name (e.g., "Feb")
        day: 'numeric', // "numeric" for numeric day of the month
        year: 'numeric' // "numeric" for four digit year
      });
    return (
        <div className={ !preview ? "flex flex-col gap-10 border-b pb-10 border-smoke20" : ""}>
            <div>
                <code className="font-mono text-sm">{description}</code>
            </div>
            {preview ? (
                <div className="flex gap-4">
                <img
                    src={img}
                    alt={"avatar"}
                    width={50}
                    height={50}
                    className=" rounded-full border border-smoke20 hidden md:flex"
                />
                <div className="flex flex-col">
                    <span className="font-suisse text-[18px]">{name}</span>
                    <div className="flex items-center gap-2 text-smoke60">
                        <code className="font-mono md:text-sm text-xs">
                            {readtime} Min Read
                        </code>
                        <span className="text-xl leading-none">•</span>
                        <code className="font-mono md:text-sm text-xs">{formattedDate}</code>
                    </div>
                </div>
                </div>
            ):(
            <div className="flex items-center gap-4">
                <img
                    src={img}
                    alt={"avatar"}
                    width={50}
                    height={50}
                    className=" rounded-full border border-smoke20"
                />
                <div className="flex flex-col">
                    <span className="font-suisse text-[18px]">{name}</span>
                    <div className="flex items-center gap-2 text-smoke60">
                        <code className="font-mono text-sm">
                            {readtime} Min Read
                        </code>
                        <span className="text-lg leading-none">•</span>
                        <code className="font-mono text-sm">{formattedDate}</code>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};
