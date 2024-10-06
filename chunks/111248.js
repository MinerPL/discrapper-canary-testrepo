n.d(t, {
    Z: function () {
        return C;
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
    p = n(981631),
    m = n(354459),
    _ = n(824872),
    f = n(852401);
let E = 'CameraPreviewPosition';
function g(e, t) {
    return e * t + 8 * (t - 1);
}
function C(e) {
    var t;
    let { width: n, onContextMenuParticipant: a, height: g, channel: C, participants: I } = e,
        [T, x] = (function () {
            let [e, t] = s.useState(() => o.K.get(E, p.VD2.BOTTOM_RIGHT));
            return [
                e,
                s.useCallback((e) => {
                    o.K.set(E, e), t(e);
                }, [])
            ];
        })(),
        S = s.useRef(null),
        v = null == C.getGuildId() ? 70 : 50,
        N = (0, r.e7)([d.Z], () => d.Z.pipWidth(m.cL.CAMERA_PREVIEW)),
        A = I.length;
    let Z = N * (t = A) + 8 * (t - 1),
        M = s.useMemo(() => {
            var e, t, n, i;
            return {
                minWidth: ((e = m.Rv[m.cL.CAMERA_PREVIEW]), e * (t = A) + 8 * (t - 1)),
                maxWidth: ((n = m.$i[m.cL.CAMERA_PREVIEW]), n * (i = A) + 8 * (i - 1))
            };
        }, [A]);
    s.useLayoutEffect(() => {
        var e;
        null === (e = S.current) || void 0 === e || e.ensureIsInPosition();
    }, [I.length]);
    let b = s.useCallback(
            (e) => {
                var t, n;
                let i = ((t = e), 0 === (n = A) ? t : (t - 8 * (n - 1)) / n);
                c.d7(i, m.cL.CAMERA_PREVIEW);
            },
            [A]
        ),
        R = s.useCallback(
            (e, t) => {
                x(t);
            },
            [x]
        );
    return (0, i.jsx)('div', {
        className: _.container,
        children: (0, i.jsx)(u._, {
            position: T,
            id: 0,
            width: Z,
            ref: S,
            onMove: R,
            onResize: b,
            maxX: n,
            maxY: g,
            edgeOffsetTop: v,
            edgeOffsetBottom: 70,
            edgeOffsetLeft: 16,
            edgeOffsetRight: 16,
            resizeConfig: M,
            children: (0, i.jsx)('div', {
                className: _.tileContainer,
                children: I.map((e) =>
                    (0, i.jsx)(
                        h.ZP,
                        {
                            participant: e,
                            channel: C,
                            onContextMenu: a,
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
    });
}
