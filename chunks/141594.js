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
    _ = n(636357),
    E = n(105622),
    h = n(302800),
    m = n(921944);
let I = 'useCollectiblesShopTabNewBadge';
t.Z = () => {
    var e, t, n, g, p, T, S;
    let C = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, E.J)(I),
        N = (0, _.n)(I),
        A = (0, r.e7)([u.Z], () => u.Z.getMarketingBySurface(a.K.DESKTOP_SHOP_BUTTON)),
        v = i.useMemo(() => ((0, d.Fc)(C) && f && null != A && !N ? [A.dismissibleContent] : []), [C, f, A, N]),
        [L, Z] = (0, o.US)(v, void 0, !0),
        [R, O] = (0, o.XR)(N && (null == A ? void 0 : A.type) === s.Z.COACHTIP ? l.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null !== (e = null == A ? void 0 : A.version) && void 0 !== e ? e : 0, void 0, !0),
        x = null;
    if ((null != L || null != R) && f && null != A && A.type === s.Z.COACHTIP) {
        x = {
            type: h.k2.COACHTIP,
            title: () => A.title,
            body: () => A.body,
            imageSrc: A.avatar,
            assetIds: A.decorations,
            entrypointBackgroundStyle: null === (t = A.refTargetBackground) || void 0 === t ? void 0 : t.style
        };
        let e = null === (n = A.refTargetBackground) || void 0 === n ? void 0 : n.asset;
        null != e &&
            (x.entryPointBackgroundAssets = {
                srcDark: null === (g = e.resting) || void 0 === g ? void 0 : g.dark,
                srcLight: null === (p = e.resting) || void 0 === p ? void 0 : p.light,
                srcDarkHovered: null === (T = e.hovered) || void 0 === T ? void 0 : T.dark,
                srcLightHovered: null === (S = e.hovered) || void 0 === S ? void 0 : S.light
            });
    }
    return {
        collectiblesShopTabNewBadgeDisplayOptions: x,
        dismissCollectiblesShopTabNewBadge: () => {
            let e = N ? O : Z;
            null != x && e(m.L.AUTO);
        }
    };
};
