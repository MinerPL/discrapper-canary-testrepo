t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(442837),
    o = t(218061),
    r = t(481060),
    s = t(361213),
    c = t(778569),
    d = t(213459),
    u = t(835473),
    m = t(541099),
    p = t(827498),
    _ = t(783097),
    C = t(753972),
    h = t(387658),
    f = t(536650),
    A = t(675993),
    E = t(689079),
    N = t(689938),
    x = t(804978),
    v = t(413097);
function I(e) {
    var n;
    let { channel: t, application: s, sectionName: c } = e,
        I = (0, l.e7)([m.Z], () => m.Z.entrypoint()),
        P = null !== (n = (0, u.q)(s.id === E.bi.BUILT_IN ? null : s.id)) && void 0 !== n ? n : s,
        L = (0, _.ye)(P) ? g : A.Z,
        S = a.useRef(null),
        [T, b] = a.useState(!1),
        { iconURL: R, name: M } = a.useMemo(
            () =>
                (0, _.sl)(P, {
                    fakeAppIconURL: v,
                    size: 84
                }),
            [P]
        ),
        j = (0, d.PL)(!0, !0),
        y = (0, d.LD)(t.guild_id, !0),
        O = a.useMemo(() => (0, d.If)(t, P.id), [j, y, t, P.id]),
        Z = !O.isGuildInstalled && !O.isUserInstalled;
    return (
        a.useEffect(() => {
            Z && d.ZP.queryInstallOnDemandApp(P.id, t.id);
        }, [P.id, t.id, Z]),
        (0, i.jsxs)(r.ScrollerNone, {
            className: x.container,
            fade: !0,
            ref: S,
            role: 'region',
            'aria-label': N.Z.Messages.APP_LAUNCHER_SECTION_APPLICATION_DETAILS_ARIA_LABEL.format({ applicationName: M }),
            children: [
                (0, i.jsx)(f.Z, {
                    application: P,
                    name: M,
                    iconURL: R,
                    scrollerRef: S,
                    sectionName: c
                }),
                null != R &&
                    (0, i.jsx)(C.Z, {
                        src: R,
                        className: x.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: 54 }),
                (0, i.jsx)(L, {
                    channel: t,
                    application: P,
                    sectionName: c,
                    hasCommands: T
                }),
                I === p._b.TEXT
                    ? (0, i.jsx)(h.Z, {
                          channel: t,
                          application: P,
                          sectionName: c,
                          installOnDemand: Z,
                          setHasCommands: b
                      })
                    : null
            ]
        })
    );
}
function g(e) {
    let { channel: n, application: t, sectionName: a, hasCommands: l } = e,
        o = (0, c.Z)({
            applicationId: t.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        r = (0, _.yJ)(t),
        d = null != r && null != r.activity_preview_video_asset_id ? (0, s.Z)(t.id, r.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(A.Z, {
        channel: n,
        application: t,
        imageCoverUrl: o.url,
        videoUrl: d,
        sectionName: a,
        hasCommands: l
    });
}
