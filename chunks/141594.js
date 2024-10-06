n(47120);
var i = n(470079),
    a = n(115434),
    s = n(264181),
    r = n(442837),
    l = n(704215),
    o = n(243778),
    c = n(594174),
    d = n(51144),
    u = n(874703),
    _ = n(105622),
    E = n(302800),
    h = n(921944);
t.Z = () => {
    var e, t, n, m, I, p, g;
    let T = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, _.J)('useCollectiblesShopTabNewBadge'),
        S = (0, r.e7)([u.Z], () => u.Z.getMarketingBySurface(a.K.DESKTOP_SHOP_BUTTON)),
        C = (null == S ? void 0 : S.dismissibleContent) === l.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        N = i.useMemo(() => ((0, d.Fc)(T) && f && null != S && !C ? [S.dismissibleContent] : []), [T, f, S, C]),
        [A, v] = (0, o.US)(N, void 0, !0),
        [Z, L] = (0, o.XR)(C && (null == S ? void 0 : S.type) === s.Z.COACHTIP ? l.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null !== (e = null == S ? void 0 : S.version) && void 0 !== e ? e : 0, void 0, !0),
        R = null;
    if ((null != A || null != Z) && f && null != S && S.type === s.Z.COACHTIP) {
        R = {
            type: E.k2.COACHTIP,
            title: () => S.title,
            body: () => S.body,
            imageSrc: S.avatar,
            assetIds: S.decorations,
            entrypointBackgroundStyle: null === (t = S.refTargetBackground) || void 0 === t ? void 0 : t.style
        };
        let e = null === (n = S.refTargetBackground) || void 0 === n ? void 0 : n.asset;
        null != e &&
            (R.entryPointBackgroundAssets = {
                srcDark: null === (m = e.resting) || void 0 === m ? void 0 : m.dark,
                srcLight: null === (I = e.resting) || void 0 === I ? void 0 : I.light,
                srcDarkHovered: null === (p = e.hovered) || void 0 === p ? void 0 : p.dark,
                srcLightHovered: null === (g = e.hovered) || void 0 === g ? void 0 : g.light
            });
    }
    return {
        collectiblesShopTabNewBadgeDisplayOptions: R,
        dismissCollectiblesShopTabNewBadge: () => {
            let e = C ? L : v;
            null != R && e(h.L.AUTO);
        }
    };
};
