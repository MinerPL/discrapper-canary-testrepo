n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(433517),
    c = n(519938),
    u = n(241915),
    d = n(366050),
    h = n(27457),
    m = n(981631),
    p = n(354459),
    _ = n(310402),
    f = n(256507);
let E = 'CameraPreviewPosition';
function g(e) {
    let { width: t, onContextMenuParticipant: n, height: a, channel: g, participants: C } = e,
        [I, x] = (function () {
            let [e, t] = s.useState(() => o.K.get(E, m.VD2.BOTTOM_RIGHT));
            return [
                e,
                s.useCallback((e) => {
                    o.K.set(E, e), t(e);
                }, [])
            ];
        })(),
        T = s.useRef(null),
        v = null == g.getGuildId() ? 70 : 50,
        S = (0, r.e7)([d.Z], () => d.Z.pipWidth(p.cL.CAMERA_PREVIEW));
    return (
        s.useLayoutEffect(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.ensureIsInPosition();
        }, [C.length]),
        (0, i.jsx)('div', {
            className: _.container,
            children: (0, i.jsx)(u._, {
                position: I,
                id: 0,
                type: p.cL.CAMERA_PREVIEW,
                width: S,
                ref: T,
                onMove: (e, t) => x(t),
                onResize: (e) => c.d7(e, p.cL.CAMERA_PREVIEW),
                maxX: t,
                maxY: a,
                edgeOffsetTop: v,
                edgeOffsetBottom: 70,
                edgeOffsetLeft: 16,
                edgeOffsetRight: 16,
                isResizable: !0,
                children: (0, i.jsx)('div', {
                    className: _.tileContainer,
                    children: C.map((e) =>
                        (0, i.jsx)(
                            h.ZP,
                            {
                                participant: e,
                                channel: g,
                                onContextMenu: n,
                                className: l()(_.tile, f.elevationHigh),
                                fit: h.BP.COVER,
                                inCall: !0,
                                inPopout: !1,
                                width: 160
                            },
                            e.id
                        )
                    )
                })
            })
        })
    );
}
