n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    a = n(239091),
    u = n(765250),
    c = n(393238),
    d = n(358221),
    h = n(933557),
    f = n(352978),
    p = n(27457),
    m = n(796638),
    v = n(592125),
    g = n(944486),
    E = n(906037),
    _ = n(501787),
    C = n(65154),
    S = n(253653);
function x(e) {
    let { context: t = C.Yn.DEFAULT, participants: r, locked: s, widget: u, channel: c, width: d, height: h, containerRef: m } = e,
        v = (e, o) => {
            (0, a.jW)(o, async () => {
                let { default: o } = await Promise.all([n.e('79695'), n.e('69220'), n.e('50261')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(o, {
                        ...n,
                        user: e.user,
                        showMediaItems: !0,
                        mediaEngineContext: t
                    });
            });
        },
        g = r.length > 0 && null != t && null != c && (!s || u.pinned);
    o.useEffect(() => {
        (0, E.m3)(
            {
                locked: s,
                pinned: u.pinned,
                widget: u.type,
                isPreviewingInGame: !1
            },
            g
        );
    }, [s, u, g]);
    let _ = 'boolean' != typeof u.meta.horizontal || u.meta.horizontal;
    return g
        ? (0, i.jsx)('div', {
              ref: m,
              className: l()({
                  [S.videoList]: !0,
                  [S.vertical]: !_
              }),
              style: { opacity: u.opacity },
              children: r.map((e) => {
                  let { user: n } = e;
                  return null == n || null == c || null == t
                      ? null
                      : (0, i.jsx)(
                            p.ZP,
                            {
                                participant: e,
                                width: d,
                                containerStyle: {
                                    width: d,
                                    height: h
                                },
                                fit: f.L.COVER,
                                channel: c,
                                inPopout: !0,
                                inCall: !0,
                                onContextMenu: s ? void 0 : v,
                                forceIdle: s
                            },
                            n.id
                        );
              })
          })
        : null;
}
function Z(e) {
    let t = (0, s.e7)([g.Z, v.Z], () => v.Z.getChannel(g.Z.getVoiceChannelId())),
        n = (0, h.ZP)(t),
        r = (0, s.Wu)([d.Z], () => (null != t ? d.Z.getVideoParticipants(t.id) : [])),
        l = (0, s.e7)([d.Z], () => (null != t ? d.Z.getParticipantsVersion(t.id) : 0)),
        a = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: f, height: p, ref: E } = (0, c.Z)(),
        { visibleParticipants: C, participantTileWidth: S } = (0, m.ZB)(a ? (null != f ? f : e.width) : null != p ? p : e.height, r, {
            tileWidth: _.vZ,
            tileMinWidth: _.mo,
            tileMargin: _.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: l
        }),
        Z = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        I = o.useRef(Z);
    return (
        o.useLayoutEffect(() => void (I.current = Z)),
        o.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = I.current;
            ((a && e.height > e.width) || (!a && e.width > e.height)) &&
                (0, u.nv)({
                    widgetId: t,
                    size: {
                        fixed: !0,
                        width: i,
                        height: n
                    }
                });
        }, [a]),
        (0, i.jsx)(x, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: C,
            participantsVersion: l,
            width: a ? S : null != f ? f : e.width,
            height: a ? (null != p ? p : e.height) : S,
            containerRef: E
        })
    );
}
