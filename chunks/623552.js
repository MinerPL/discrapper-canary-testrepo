n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(410030), u = n(718582), c = n(981631), d = n(573277);
let _ = [
    [
        {
            translateY: 0,
            translateX: 0,
            scale: 1.2
        },
        {
            translateY: 0,
            translateX: 0,
            scale: 0
        },
        {
            translateY: 0,
            translateX: 0,
            scale: 0
        },
        {
            translateY: 0,
            translateX: 0,
            scale: 0
        }
    ],
    [
        {
            translateY: -14,
            translateX: -14,
            scale: 0.7058823529411765
        },
        {
            translateY: 12,
            translateX: 12,
            scale: 0.8235294117647058
        },
        {
            translateY: 0,
            translateX: 0,
            scale: 0
        },
        {
            translateY: 0,
            translateX: 0,
            scale: 0
        }
    ],
    [
        {
            translateY: -4,
            translateX: 16,
            scale: 0.7058823529411765
        },
        {
            translateY: 14,
            translateX: -14,
            scale: 0.8235294117647058
        },
        {
            translateY: -18,
            translateX: -12,
            scale: 0.5882352941176471
        },
        {
            translateY: 0,
            translateX: 0,
            scale: 0
        }
    ],
    [
        {
            translateY: -13,
            translateX: -13,
            scale: 0.8235294117647058
        },
        {
            translateY: 13,
            translateX: 13,
            scale: 0.8235294117647058
        },
        {
            translateY: -18,
            translateX: 18,
            scale: 0.5882352941176471
        },
        {
            translateY: 18,
            translateX: -18,
            scale: 0.5882352941176471
        }
    ]
];
function E(e) {
    let {
            users: t,
            guildId: n
        } = e, a = (0, u.fd)(t), s = (0, l.ZP)(), E = i.useRef(!1);
    i.useEffect(() => {
        E.current = !0;
    }, []);
    let p = Math.min(_.length - 1, a.length - 1), m = _[Math.max(0, p)], I = a.length > 4, T = a.length - 3, g = T >= 10 ? 1 : 2, S = m.map((e, t) => {
            let i = a[t];
            if (null == i)
                return null;
            let s = I && t === g;
            return (0, r.jsx)('div', {
                className: o()(d.avatarContainer),
                style: {
                    opacity: 1,
                    transform: 'translateX('.concat(e.translateX, 'px) translateY(').concat(e.translateY, 'px) scale(').concat(e.scale, ')')
                },
                children: s ? (0, r.jsx)(f, { count: T }) : (0, r.jsx)(h, {
                    guildId: n,
                    user: i
                })
            }, i.id);
        });
    return (0, r.jsx)('div', {
        className: s === c.BRd.DARK ? d.gradientContainerDark : d.gradientContainer,
        children: (0, r.jsx)('div', {
            className: d.groupContainer,
            children: S
        })
    });
}
function f(e) {
    let {count: t} = e;
    return (0, r.jsx)('div', {
        className: d.avatarWrapper,
        children: (0, r.jsx)('div', {
            className: d.overflowCount,
            children: (0, r.jsxs)(s.Text, {
                variant: 'text-sm/semibold',
                children: [
                    '+',
                    t
                ]
            })
        })
    });
}
function h(e) {
    let {
        guildId: t,
        user: n
    } = e;
    return null == i.useMemo(() => null == n ? void 0 : n.getAvatarSource(t, !1, 30), [
        t,
        n
    ]) ? null : (0, r.jsx)('div', {
        className: d.avatarWrapper,
        children: (0, r.jsx)('img', {
            className: d.avatar,
            src: null == n ? void 0 : n.getAvatarURL(t, 80),
            alt: ''
        })
    });
}
