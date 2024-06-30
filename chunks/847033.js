n.d(t, {
    Z: function () {
        return O;
    },
    m: function () {
        return x;
    }
}), n(653041), n(47120);
var i = n(735250), a = n(470079), s = n(512722), l = n.n(s), r = n(399606), o = n(704215), c = n(367907), d = n(605236), u = n(584825), _ = n(994592), E = n(160404), m = n(703656), I = n(984933), T = n(430824), h = n(626135), N = n(652515), f = n(550951), p = n(544978), C = n(333866), g = n(629481), S = n(981631);
let A = a.createContext(void 0);
function x() {
    let e = a.useContext(A);
    return l()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function O(e) {
    var t;
    let {
            children: n,
            initialTab: s,
            guildId: l
        } = e, x = (0, r.e7)([T.Z], () => T.Z.getGuild(l)), O = (0, r.e7)([E.Z], () => E.Z.isViewingServerShop(l)), R = (0, f.g)(x, 'guild_shop_page'), M = (0, N.RF)(l, 'guild_shop_page'), v = (null == x ? void 0 : x.hasFeature(S.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, L = (0, _.mY)(null == x ? void 0 : x.id), Z = null === (t = (0, u.YB)(l)) || void 0 === t ? void 0 : t.server_shop_tab_order, P = [], b = p.y.GUILD_SHOP_FULL_PREVIEW;
    O || v && L ? (P.push(Z === C.a3.PRODUCTS_FIRST ? p.y.GUILD_PRODUCTS : p.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(Z === C.a3.PRODUCTS_FIRST ? p.y.GUILD_ROLE_SUBSCRIPTIONS : p.y.GUILD_PRODUCTS), b = P[0]) : v && !L ? (P.push(p.y.GUILD_PRODUCTS), b = p.y.GUILD_PRODUCTS) : !v && L && (P.push(p.y.GUILD_ROLE_SUBSCRIPTIONS), b = p.y.GUILD_ROLE_SUBSCRIPTIONS, R && P.push(p.y.GUILD_PRODUCTS_PREVIEW)), s = null != s ? s : b;
    let [D, j] = a.useState(s), U = R && !(L && M) || D === p.y.GUILD_PRODUCTS_PREVIEW;
    return a.useEffect(() => {
        j(s);
    }, [s]), (0, i.jsx)(A.Provider, {
        value: {
            selectedTab: D,
            setSelectedTab: j,
            categoryTabs: P,
            isPhantomPreview: U,
            handlePreviewDismiss: e => {
                (0, d.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
                let t = { ...(0, c.hH)(l) };
                if (D === p.y.GUILD_PRODUCTS_PREVIEW)
                    e.stopPropagation(), j(p.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = g.mz.DISMISS_TAB_PREVIEW;
                else {
                    var n;
                    (0, m.dL)(S.Z5c.CHANNEL(l, null === (n = I.ZP.getDefaultChannel(l)) || void 0 === n ? void 0 : n.id)), t.action_taken = g.mz.DISMISS_FULL_PREVIEW;
                }
                h.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
            }
        },
        children: n
    });
}
