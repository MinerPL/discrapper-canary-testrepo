s.d(t, {
    Z: function () {
        return M;
    }
});
var n = s(735250), a = s(470079), i = s(512722), r = s.n(i), o = s(442837), l = s(570140), c = s(232567), d = s(809206), _ = s(497321), E = s(634894), u = s(100527), T = s(906732), I = s(475977), S = s(957730), N = s(296810), C = s(921813), m = s(935147), A = s(246946), h = s(25990), g = s(594174), O = s(74538), p = s(695346), R = s(265159), x = s(532495);
function M() {
    let e = (0, o.e7)([g.default], () => {
        let e = g.default.getCurrentUser();
        return r()(null != e, 'UserSettingsProfileCustomization: user cannot be undefined'), e;
    });
    a.useEffect(() => {
        (0, c.In)(e.id);
    }, [e.id]);
    let t = (0, o.e7)([A.Z], () => A.Z.hidePersonalInformation), {
            pendingBio: s,
            ...i
        } = (0, o.cj)([h.Z], () => h.Z.getAllPending()), M = p.dN.useSetting() && null != s ? S.ZP.parse(void 0, s).content : s, D = O.ZP.canUsePremiumProfileCustomization(e), {analyticsLocations: f} = (0, T.ZP)(u.Z.PROFILE);
    a.useEffect(() => () => l.Z.wait(d.W3), []);
    let P = 'UserSettingsProfileCustomization';
    return ((0, E.j)({
        location: P + ' auto on',
        autoTrackExposure: !0
    }), (0, E.j)({
        location: P + ' auto off',
        autoTrackExposure: !1
    }), t) ? (0, n.jsx)(_.Z, {}) : (0, n.jsxs)(T.Gt, {
        value: f,
        children: [
            (0, n.jsx)(I.Z, {}),
            (0, n.jsx)(N.Z, {
                profilePreview: (0, n.jsx)(C.Z, {
                    user: e,
                    canUsePremiumCustomization: D,
                    onUpsellClick: R.Z,
                    pendingBio: M,
                    ...i
                }),
                children: (0, n.jsx)(x.Z, {})
            }),
            !D && (0, n.jsx)(m.Z, { user: e })
        ]
    });
}
