n.d(t, {
    Z: function () {
        return u;
    }
}), n(47120);
var i = n(735250), o = n(470079), a = n(920906), s = n(849146);
let r = () => {
    let e = o.useRef(null), [t, n] = o.useState(0), i = o.useMemo(() => new s.Z(e => {
            let [t] = e;
            return n(t.contentRect.height);
        }), []);
    return o.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]), {
        ref: e,
        height: t
    };
};
function u(e) {
    let {
            show: t,
            children: n,
            top: o = 0,
            bottom: s = 0
        } = e, {
            ref: u,
            height: l
        } = r(), g = (0, a.useSpring)({
            from: {
                height: 0,
                paddingBottom: '0px',
                marginTop: '0px'
            },
            to: {
                height: t ? l : 0,
                paddingBottom: t ? ''.concat(s, 'px') : '0px',
                marginTop: t ? ''.concat(o, 'px') : '0px'
            },
            config: {
                tension: 170,
                friction: 26
            }
        }), d = (0, a.useSpring)({
            from: { opacity: 0 },
            to: { opacity: t ? 1 : 0 },
            config: {
                duration: 200,
                easing: t ? e => e ** 4 : e => e * (2 - e)
            }
        });
    return (0, i.jsx)(a.animated.div, {
        style: {
            overflow: 'hidden',
            height: g.height,
            paddingBottom: g.paddingBottom,
            marginTop: g.marginTop
        },
        children: (0, i.jsx)(a.animated.div, {
            style: { opacity: d.opacity },
            ref: u,
            children: n
        })
    });
}
