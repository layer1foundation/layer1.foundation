import Image from "next/image";

type IAuthor = {
    img: string;
    name: string;
    description: string;
    readtime: string;
    date: string;
};

export const Author = ({ img, name, description, readtime, date }: IAuthor) => {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <code className="font-mono text-sm">{description}</code>
            </div>
            <div className="flex items-center gap-4">
                <Image
                    src={img}
                    alt={description}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-suisse text-[18px]">{name}</span>
                    <div className="flex items-center gap-2 text-smoke60">
                        <code className="font-mono text-sm">
                            {readtime} Read
                        </code>
                        <span className="text-xl leading-none">•</span>
                        <code className="font-mono text-sm">{date}</code>
                    </div>
                </div>
            </div>
        </div>
    );
};
