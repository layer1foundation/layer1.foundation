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
    // strapi: "https://cms.layer1.foundation",
    strapi:"http://localhost:1337", //for imgbb testing
    sandshrew: "https://www.sandshrew.io/",
    chisel: "https://chisel.xyz/",
    allium: "https://www.allium.so/",
    hiro: "https://www.hiro.so/",
    unisat: "https://unisat.io/",
    utxo: "https://www.utxo.management/",
    alex: "https://alexgo.io/",
    unisatapilink: "https://docs.unisat.io/dev/unisat-developer-service",
    xverse: "https://www.xverse.app/",
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
        unisat: "/tools#unisat",
        unisatwallet: "/tools#unisat-wallet",
        xverse: "/tools#xverse",
        bestinslot: "/tools#bestinslot",
        logic: "/tools#logic",
        indexer: "/tools#indexer",
        inscriber: "/tools#inscriber",
        explorer: "/tools#explorer",
        wallet: "/tools#wallet",
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
    letter: {
        page: "/letter",
    },
};

export const IMAGES = {
    home: {
        desktop: "https://i.ibb.co/svqH16j/l1f-image-1.png",
        mobile: "https://i.ibb.co/gPk33zJ/l1f-image-1-mobi.png",
    },
    tools: {
        desktop: "https://i.ibb.co/f9krWTk/tools-dt.png",
        mobile: "https://i.ibb.co/sRLKKf7/tools-mobi.png",
    },
    letter: {
        desktop: "https://i.ibb.co/gSPk1Gt/letter-dt.png",
        mobile: "https://i.ibb.co/XWwf21d/letter-mb.png",
    },
    governance: {
        desktop: "https://i.ibb.co/5GyN3x7/governance-dt.png",
        mobile: "https://i.ibb.co/ZXHBgYR/governance-mb.png",
    },
    sop: {
        desktop: "https://i.ibb.co/jkSDBH0/sop-dt.png",
        mobile: "https://i.ibb.co/ZVtwYSG/sop-mb.png",
    },
    brc20: {
        desktop: "https://i.ibb.co/sQ5W7SB/BRC20-dt.png",
        mobile: "https://i.ibb.co/FzBhxHH/BRC20-mobi.png",
    },
};

export const getIdFromLink = (link: string) => link.split("#")[1];
