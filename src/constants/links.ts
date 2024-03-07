export const EXTERNAL_LINKS = {
    documentation:
        "https://layer1.gitbook.io/layer1-foundation/protocols/brc-20/documentation",
    bestinslot: "https://bestinslot.xyz/",
    domo: "https://twitter.com/domodata",
    okx: "https://www.okx.com/",
    ordinalswallet: "https://ordinalswallet.com/",
    oyl: "https://www.oyl.io/",
    gitbook: "https://layer1.gitbook.io/layer1-foundation/foundation/purpose",
    forum: "https://l1f.discourse.group/latest",
    bitcoinwhitepaper: "https://domo-2.gitbook.io/brc-20-experiment/",
    twitter: "https://twitter.com/L1Fxyz",
    opi: "https://opi.network/",
    metashrew: "https://www.sandshrew.io/",
    ordinalsbot: "https://ordinalsbot.com/",
    ordio: "https://www.ord.io/",
    ordiscan: "https://ordiscan.com/",
    strapi: "https://cms.l1f.xyz",
    sandshrew: "https://www.sandshrew.io/",
    chisel: "https://chisel.xyz/",
    allium: "https://www.allium.so/",
    hiro: "https://www.hiro.so/",
    unisat: "https://unisat.io/",
    utxo: "https://www.utxo.management/",
    alex: "https://alexgo.io/",
};

export const INTERNAL_LINKS = {
    home: {
        page: "/",
        overview: "/#overview",
        mission: "/#mission",
        partners: "/#partners",
        governance: "/#governance",
        tools: "/#tools",
        forum: "/#forum",
    },
    brc20: {
        page: "/brc20",
    },
    tools: {
        page: "/tools",
        opi: "/tools#opi",
        metashrew: "/tools#metashrew",
        chisel: "/tools#chisel",
        ordinalsbot: "/tools#ordinalsbot",
        ordiscan: "/tools#ordiscan",
        ordio: "/tools#ordio",
        sandshrew: "/tools#sandshrew",
        oyl: "/tools#oyl",
    },
    donate: {
        page: "/donate",
    },
    blog: {
        page: "/blog",
    },
    resolution: {
        page: "/resolution",
    },
    sop: {
        page: "/sop",
    },
};

export const getIdFromLink = (link: string) => link.split("#")[1];
