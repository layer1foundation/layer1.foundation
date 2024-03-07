import { INTERNAL_LINKS, EXTERNAL_LINKS } from "../links";

const copy = {
    tools: {
        chapter0: {
            heading: "[ 00 / OVERVIEW ]",
            subsection1: {
                title: "CORE PRINCIPLE",
                smallText: true,
                paragraphs: [
                    {
                        text: "We curate tools, technologies, and information for users and developers working with metaprotocols on Bitcoin. This effort includes the aggregation of open-source tooling and resources that we believe will drive the ecosystem forward.",
                    },
                ],
            },
        },
        chapter1: {
            heading: (
                <>
                    Lifecycle Support for{" "}
                    <em className="font-melior  text-[46px] md:text-[52px]">
                        Metaprotocols
                    </em>
                </>
            ),
            headingBig: true,
            subsection1: {
                title: "",
            },
        },
        chapter2: {
            headingList: [
                {
                    text: " 01 / METASHREW ",
                    link: INTERNAL_LINKS.tools.metashrew,
                },
                {
                    text: " 02 / SANDSHREW ",
                    link: INTERNAL_LINKS.tools.sandshrew,
                },
                {
                    text: " 03 / OPI ",
                    link: INTERNAL_LINKS.tools.opi,
                },
                {
                    text: " 04 / UNISAT ",
                    link: INTERNAL_LINKS.tools.unisat,
                },
                {
                    text: " 05 / CHISEL ",
                    link: INTERNAL_LINKS.tools.chisel,
                },
                {
                    text: " 06 / ORIDINALSBOT ",
                    link: INTERNAL_LINKS.tools.ordinalsbot,
                },
                {
                    text: " 07 / ORDISCAN ",
                    link: INTERNAL_LINKS.tools.ordiscan,
                },
                {
                    text: " 08 / ORD.IO ",
                    link: INTERNAL_LINKS.tools.ordio,
                },
                {
                    text: " 09 / UNISAT ",
                    link: INTERNAL_LINKS.tools.unisatwallet,
                },
                {
                    text: " 10 / Xverse ",
                    link: INTERNAL_LINKS.tools.xverse,
                },
            ],
            subsection1: {
                title: "RESOURCES THAT ARE BEING BUILT ON L1F",
                paragraphs: [
                    {
                        text: "As a central hub, L1F tailors its offerings to meet the diverse needs of protocols at various stages of development. Our lifecycle support framework includes:",
                    },
                ],
            },
        },
        tool1: {
            subheading: "LIFECYCLE SUPPORT",
            heading: "Logic",
            text: "Development platforms that foster the creation of metaprotocol logic, including pseudologic, for conceptualization and design phases.",
        },
        chapterMeta: {
            heading: "[ 01 / METASHREW ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "Metashrew is a custom indexing tool that makes designing and implementing your own indexing logic easy. Build your own Metaprotocol—and custom indexer—with Metashrew using your own data or Sandshrew’s robust RPC endpoints as a base layer.",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE METASHREW",
                    link: EXTERNAL_LINKS.metashrew,
                },
            },
        },
        chapterSand: {
            heading: "[ 02 / SANDSHREW ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "Sandshrew is a comprehensive RPC serving raw, un-opinionated data endpoints from Bitcoin Core, Esplora, Ordinals and BRC20. Sandshrew is the most robust RPC for Bitcoin and Ordinals related data in the world, enabling highly creative and expressive application building.",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE SANDSHREW",
                    link: EXTERNAL_LINKS.sandshrew,
                },
            },
        },
        tool2: {
            subheading: "LIFECYCLE SUPPORT",
            heading: "Indexer",
            text: "Tools for building robust indexes and facilitating interactions, crucial for developing and scaling protocols.",
        },
        chapterOpi: {
            heading: "[ 03 / OPI ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "OPI stands for “Open Protocol Indexer” and is a protocol for decentralized indexing of BRC20. One of the biggest challenges faced by BRC20 is centralized control of its indexers—OPI is attempting to solve for this challenge by creating a standard of decentralized verification of indexers.",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE OPI",
                    link: EXTERNAL_LINKS.opi,
                },
            },
        },
        chapterUnisat: {
            heading: "[ 04 / UNISAT ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "Unisat offers a full suite of developer tooling—starting with a BRC20 indexer API that can be used for building any BRC20-based applications. Unisat created the original BRC20 indexer with Domo and is co-lead-maintainer of the BRC20 protocol with Best In Slot.",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE UNISAT",
                    link: EXTERNAL_LINKS.unisatapilink,
                },
            },
        },
        tool3: {
            subheading: "LIFECYCLE SUPPORT",
            heading: "Inscriber",
            text: "Inscribe on Bitcoin—tokens, JPEGs, and more",
        },
        chapterChisel: {
            heading: "[ 05 / CHISEL ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "Chisel is a powerful inscription tooling service—offering batch inscription services, inscriptions on unique sats (including by batch), metadata editing, parent-child inscription services, and test inscription services. Chisel is managed independently by Devaloft—one of the most renowned Ordinals developers in the world.",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE CHISEL",
                    link: EXTERNAL_LINKS.chisel,
                },
            },
        },
        chapterOrdinalsBot: {
            heading: "[ 06 / ORIDINALSBOT ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "OrdinalsBot is one of the earliest inscriber tools out there - and also enables inscriptions on specific sats. Ordinals bot also supports batch inscriptions, metadata editing, textfiles and markdown in addition to images.",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE ORIDINALSBOT",
                    link: EXTERNAL_LINKS.ordinalsbot,
                },
            },
        },
        tool4: {
            subheading: "LIFECYCLE SUPPORT",
            heading: "Explorer",
            text: "For monitoring protocol activities, enhancing transparency and operational efficiency",
        },
        chapterScan: {
            heading: "[ 07 / ORDISCAN ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "One of the earliest Ordinals explorers, Ordiscan launched in early 2023, letting you explore inscriptions, rare sats, BRC-20 tokens, Sats names, and other digital collectibles. Runes and other metaprotocols will soon also be viewable.",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE ORDISCAN",
                    link: EXTERNAL_LINKS.ordiscan,
                },
            },
        },
        chapterOrdIo: {
            heading: "[ 08 / ORD.IO ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "Ord.io is an Ordinals explorer where you can discover and collect inscriptions and rare sats. Ord.io has an intricate cataloging system for discoverability and makes looking for types of sats and inscriptions easy for users. ",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE ORD.IO",
                    link: EXTERNAL_LINKS.ordio,
                },
            },
        },
        tool5: {
            subheading: "LIFECYCLE SUPPORT",
            heading: "Wallet",
            text: "PSBT, wallets, and API tooling to provide the necessary infrastructure for seamless protocol operation, transfer of assets, and user interaction.",
        },
                // chapterOYL: {
        //     heading: "[ 08 / OYL ]",
        //     subsection1: {
        //         smallText: true,
        //         paragraphs: [
        //             {
        //                 text: "PSBT, wallets, and API tooling to provide the necessary infrastructure for seamless protocol operation, transfer of assets, and user interaction.",
        //                 props: "text-smoke40 pr-8",
        //             },
        //         ],
        //         outerLink: {
        //             text: "EXPLORE OYL",
        //             link: EXTERNAL_LINKS.oyl,
        //         },
        //     },
        // },
        chapterUnisatWallet: {
            heading: "[ 09 / UNISAT ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "Unisat wallet is a browser extension wallet enabling the transfer of Ordinals, BRC20, and other Bitcoin-native tokens. Unisat is a single account wallet (i.e. your Bitcoin and Ordinals are easily transferred with one address) and enables the hosting of multiple accounts / keys within the browser. ",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE UNISAT",
                    link: EXTERNAL_LINKS.unisat,
                },
            },
        },
        chapterXverse: {
            heading: "[ 10 / Xverse ]",
            subsection1: {
                smallText: true,
                paragraphs: [
                    {
                        text: "Xverse Wallet is a browser extension and mobile wallet for Bitcoin, Ordinals and BRC20 tokens. Xverse is easy to use and beginner friendly - separating Bitcoin and Ordinals addresses.",
                        props: "text-smoke40 pr-8",
                    },
                ],
                outerLink: {
                    text: "EXPLORE Xverse",
                    link: EXTERNAL_LINKS.xverse,
                },
            },
        },
    },
};
export default copy;
