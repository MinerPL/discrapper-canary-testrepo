n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(735250),
    o = n(470079),
    a = n(338545),
    s = n(849146),
    r = n(481060);
let u = () => {
    let e = o.useRef(null),
        [t, n] = o.useState(0),
        i = o.useMemo(
            () =>
                new s.Z((e) => {
                    let [t] = e;
                    return n(t.contentRect.height);
                }),
            []
        );
    return (
        o.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
        {
            ref: e,
            height: t
        }
    );
};
function l(e) {
    let { show: t, children: n, top: o = 0, bottom: s = 0 } = e,
        { ref: l, height: g } = u(),
        d = (0, r.useSpring)({
            from: {
                height: 0,
                paddingBottom: '0px',
                marginTop: '0px'
            },
            to: {
                height: t ? g : 0,
                paddingBottom: t ? ''.concat(s, 'px') : '0px',
                marginTop: t ? ''.concat(o, 'px') : '0px'
            },
            config: {
                tension: 170,
                friction: 26
            }
        }),
        c = (0, r.useSpring)({
            from: { opacity: 0 },
            to: { opacity: t ? 1 : 0 },
            config: {
                duration: 200,
                easing: t ? (e) => e ** 4 : (e) => e * (2 - e)
            }
        });
    return (0, i.jsx)(a.animated.div, {
        style: {
            overflow: 'hidden',
            height: d.height,
            paddingBottom: d.paddingBottom,
            marginTop: d.marginTop
        },
        children: (0, i.jsx)(a.animated.div, {
            style: { opacity: c.opacity },
            ref: l,
            children: n
        })
    });
}
