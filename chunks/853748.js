n.d(t, {
    $: function () {
        return _;
    }
}), n(653041);
var s = n(735250), r = n(470079), a = n(120356), o = n.n(a), i = n(920906), l = n(873546), c = n(399606), d = n(481060), u = n(774078), p = n(607070), g = n(689938), f = n(698032), C = n(493978), m = n(932135);
function h(e) {
    let {endDate: t} = e, {
            days: n,
            hours: r,
            minutes: a,
            seconds: o
        } = (0, u.Z)(t), i = function (e, t, n, s) {
            let r = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t), a = [];
            return e > 0 && a.push(r(e, g.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || a.length > 0) && a.push(r(t, g.Z.Messages.COUNTDOWN_UNITS_HOURS)), (n > 0 || a.length > 0) && a.push(r(n, g.Z.Messages.COUNTDOWN_UNITS_MINUTES)), a.push(r(s, g.Z.Messages.COUNTDOWN_UNITS_SECONDS)), a.join(':');
        }(n, r, a, o);
    return (0, s.jsx)(d.Text, {
        variant: 'heading-md/medium',
        className: f.countdown,
        tag: 'div',
        children: (0, s.jsx)('div', {
            role: 'timer',
            'aria-relevant': 'all',
            children: i
        })
    });
}
let _ = r.memo(function (e) {
    let {
            unpublishedAt: t,
            isVisible: n,
            displayOptions: r,
            isFullScreen: a
        } = e, u = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), g = (0, i.useSpring)({
            transform: 'translateX(-50%) '.concat(n ? 'translateY(-75%)' : 'translateY(0%)'),
            opacity: n ? 1 : 0,
            config: {
                tension: 120,
                friction: 12
            },
            immediate: u
        });
    return (0, s.jsxs)(i.animated.div, {
        className: o()([
            f.countDownWrapper,
            a && f.fullScreenWrapper,
            l.tq && f.mobileWrapper
        ]),
        role: 'status',
        style: {
            ...r.style,
            ...g
        },
        children: [
            (0, s.jsx)(d.Text, {
                variant: 'text-md/medium',
                className: f.countdownLabel,
                children: r.label()
            }),
            null != r.iconSrc && (0, s.jsx)('img', {
                src: r.iconSrc,
                className: f.countdownIcon,
                alt: '',
                'aria-hidden': !0
            }),
            (0, s.jsx)(h, { endDate: t }),
            (0, s.jsx)('img', {
                src: C,
                className: o()(f.sparkles, f.left),
                alt: '',
                'aria-hidden': !0
            }),
            (0, s.jsx)('img', {
                src: m,
                className: o()(f.sparkles, f.right),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
});
