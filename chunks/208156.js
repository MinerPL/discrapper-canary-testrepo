n.d(t, {
    J: function () {
        return g;
    }
}),
    n(47120),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(482033),
    l = n(772848),
    u = n(442837),
    c = n(928518),
    d = n(631467),
    _ = n(210887),
    E = n(585483),
    f = n(53289),
    h = n(953101),
    p = n(701488),
    m = n(981631),
    I = n(654892);
function T(e) {
    let { url: t, className: n, style: a, onLoad: s, shouldRefocus: I, queryParams: T, allowPopups: g = !1, referrerPolicy: S = 'origin' } = e,
        A = (0, u.e7)([c.Z], () => c.Z.getWindow(m.KJ3.CHANNEL_CALL_POPOUT)),
        N = (0, o.useMemoOne)(() => (0, l.Z)(), [t]),
        v = i.useRef(null),
        O = (0, f.Z)(v, I, null == A ? window : A),
        R = {
            ...T,
            frame_id: N,
            platform: p.S4.DESKTOP
        },
        [C, y] = i.useState(!1),
        D = _.Z.theme,
        L = { ...a };
    return (
        D === m.BRd.LIGHT ? (L.colorScheme = 'light') : (L.colorScheme = 'dark'),
        i.useEffect(
            () => (
                E.S.dispatch(m.CkL.IFRAME_MOUNT, { id: N }),
                () => {
                    E.S.dispatch(m.CkL.IFRAME_UNMOUNT, { id: N });
                }
            ),
            [N]
        ),
        i.useEffect(() => {
            let e = (e) => {
                let { resizing: t } = e;
                y(t);
            };
            return (
                E.S.subscribe(m.CkL.MANUAL_IFRAME_RESIZING, e),
                () => {
                    E.S.unsubscribe(m.CkL.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        C && (L.pointerEvents = 'none'),
        null != t
            ? (0, r.jsx)('iframe', {
                  style: L,
                  allow: 'autoplay; encrypted-media',
                  referrerPolicy: S,
                  onLoad: function (e) {
                      var n;
                      null == s || s(e.target), (v.current = e.target), O(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([d.Z.HELLO, R], null != t ? t : '');
                  },
                  sandbox: (0, h.Z)({ allowPopups: g }),
                  className: n,
                  src: ''.concat(t, '?').concat(new URLSearchParams(R))
              })
            : null
    );
}
function g(e) {
    let { onLoad: t } = e,
        [n, a] = i.useState(!1),
        o = i.useCallback(
            (e) => {
                a(!0), null == t || t(e);
            },
            [t]
        );
    return (0, r.jsxs)('div', {
        className: I.fillParent,
        children: [
            !n && (0, r.jsx)('div', { className: s()(I.fillParent, I.iframePlaceholder) }),
            (0, r.jsx)('div', {
                className: s()(I.fillParent, n ? void 0 : I.hiddenIframeContainer),
                children: (0, r.jsx)(T, {
                    ...e,
                    onLoad: o
                })
            })
        ]
    });
}
