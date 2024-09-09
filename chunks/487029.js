n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    l = n(470079),
    r = n(990547),
    a = n(442837),
    s = n(100527),
    o = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    p = n(208049),
    _ = n(763296),
    f = n(242291),
    g = n(174470),
    m = n(549771),
    C = n(964398),
    I = n(409673),
    E = n(710111),
    N = n(827126);
function x(e) {
    let { guildId: t, channel: n, width: x, height: S, keepOpen: v, interactive: Z = !0, analyticsSource: T, onClose: L } = e,
        A = (function (e) {
            let [t, n] = (0, a.Wu)([_.Z], () => [_.Z.getSounds(), _.Z.getFavorites()]);
            return l.useMemo(() => {
                let i = [],
                    l = [...e, E.X8],
                    r = (e, l) => {
                        var r, a;
                        for (let s of null !== (a = null === (r = t.get(e)) || void 0 === r ? void 0 : r.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== a ? a : []) {
                            let e = n.has(s.soundId);
                            ((e && l) || (!e && !l)) && s.available && i.push(s);
                        }
                    };
                return l.forEach((e) => r(e, !0)), l.forEach((e) => r(e, !1)), i;
            }, [t, n, e]);
        })((0, m.h)(n, !0)),
        b = (0, g.j)(),
        M = l.useRef(null),
        [R, O] = l.useState(void 0),
        P = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: y } = (0, o.ZP)(s.Z.SOUNDBOARD_WHEEL),
        j = l.useCallback(
            (e) => {
                (0, f.GN)(e, n.id, y), L();
            },
            [y, n.id, L]
        );
    l.useEffect(() => {
        p.w(), u.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === A.length && 0 === b.length && L();
        }, [A.length, b, L]),
        l.useEffect(
            () => () => {
                let e = M.current;
                !v && null != e && j(e);
            },
            [v, j]
        ),
        (0, c.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: T,
                    guild_id: t,
                    media_session_id: P
                }
            },
            { disableTrack: !Z }
        );
    let D = l.useCallback((e) => {
            (M.current = e), O(null == e ? void 0 : e.soundId);
        }, []),
        w = l.useCallback(
            (e) => {
                if (null == e) {
                    D(null);
                    return;
                }
                let t = A[e];
                if (null != t) D(t);
            },
            [D, A]
        ),
        U = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = A[e];
                if (null != t) j(t);
            },
            [A, j]
        ),
        G = l.useMemo(
            () =>
                A.map((e) =>
                    (0, i.jsx)(
                        I.ZP,
                        {
                            interactive: Z,
                            className: N.soundButton,
                            sound: e,
                            focused: R === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [R, n, Z, A]
        );
    return 0 === A.length
        ? null
        : (0, i.jsx)(o.Gt, {
              value: y,
              children: (0, i.jsx)(C.Z, {
                  wheelWidth: x,
                  wheelHeight: S,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !v,
                  activeItem: R,
                  onItemSelect: w,
                  onItemAction: U,
                  interactive: Z,
                  children: G
              })
          });
}
