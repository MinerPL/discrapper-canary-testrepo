n.d(t, {
    Q: function () {
        return I;
    }
});
var i, a, l = n(735250), s = n(470079), r = n(500923), o = n.n(r), c = n(442837), u = n(704215), d = n(607070), h = n(605236), p = n(175355), m = n(160683), _ = n(921944), f = n(627952);
function E(e) {
    let t = (0, c.e7)([d.Z], () => d.Z.useReducedMotion), n = s.useRef(null);
    return s.useEffect(() => {
        let i;
        return null != n.current && (i = o().loadAnimation({
            container: n.current,
            renderer: 'svg',
            loop: !0,
            autoplay: !t,
            animationData: JSON.parse(JSON.stringify(e))
        })), () => {
            null == i || i.destroy();
        };
    }, [
        n,
        t,
        e
    ]), n;
}
function C() {
    return (0, l.jsx)('div', {
        ref: E(i || (i = n.t(p, 2))),
        className: f.glow
    });
}
function g() {
    return (0, l.jsx)('div', {
        ref: E(a || (a = n.t(m, 2))),
        className: f.trinkets
    });
}
let I = e => {
    let {children: t} = e;
    return s.useEffect(() => {
        setTimeout(() => (0, h.EW)(u.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: _.L.AUTO_DISMISS }), 10000);
    }, []), (0, l.jsxs)('div', {
        className: f.animation,
        children: [
            (0, l.jsx)(C, {}),
            (0, l.jsx)('div', { className: f.circleLayer }),
            (0, l.jsx)('div', {
                className: f.omniButton,
                children: t
            }),
            (0, l.jsx)(g, {})
        ]
    });
};
