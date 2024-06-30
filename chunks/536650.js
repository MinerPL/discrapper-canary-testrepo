t.d(n, {
    Z: function () {
        return N;
    }
}), t(47120);
var i = t(735250), l = t(470079), a = t(392711), r = t(780384), s = t(481060), o = t(410030), c = t(220082), u = t(768581), d = t(564334), m = t(302221), p = t(772606), _ = t(863747);
function E(e, n, t) {
    return e + (n - e) * t;
}
function A(e) {
    let [n, t] = l.useState(void 0);
    return l.useEffect(() => {
        null != e.current && t(getComputedStyle(e.current));
    }, [e]), n;
}
function N(e) {
    let {
            application: n,
            scrollerRef: t
        } = e, E = u.ZP.getApplicationIconURL({
            id: n.id,
            icon: n.icon,
            bot: n.bot,
            size: 24
        }), N = (0, r.ap)((0, o.ZP)()), h = l.useRef(null), C = l.useRef(null), f = l.useRef(null), I = (0, s.useToken)(s.tokens.colors.BG_BASE_PRIMARY).hex(), x = (0, c.ZP)('number' == typeof E ? '' : E, null != I ? I : ''), P = l.useMemo(() => {
            var e, n;
            let t = (0, a.compact)([
                d.Z.parseHexString(x),
                d.Z.parseHexString(N ? '#000000' : '#ffffff')
            ]);
            return null !== (n = null === (e = (0, m.k8)({
                colors: t,
                ratio: 5,
                saturationFactor: 0.6
            })) || void 0 === e ? void 0 : e.toHexString()) && void 0 !== n ? n : x;
        }, [
            x,
            N
        ]), v = A(h), g = A(C), T = l.useCallback(() => {
            var e, n, i, l, r, s, o, c, u;
            let d = t.current, m = h.current, p = f.current, _ = parseInt(null !== (e = null == v ? void 0 : v.height) && void 0 !== e ? e : ''), E = parseInt(null !== (n = null == g ? void 0 : g.height) && void 0 !== n ? n : '');
            if (null != d && null != m && null != p && !isNaN(_) && !isNaN(E)) {
                ;
                let e = null !== (i = d.scrollTop) && void 0 !== i ? i : 0, n = 0 !== d.scrollHeight ? d.scrollHeight : E + 20, t = 0 !== d.clientHeight ? d.clientHeight : E + 20, A = E - _, h = (0, a.clamp)(n - t, A + 1, E + 20);
                let C = (l = e, (r = A) === (s = h) ? 1 : (0, a.clamp)((l - r) / (s - r), 0, 1));
                m.style.filter = 'brightness('.concat(1 + ((N ? 1.4 : 0.6) - (o = 1)) * C, ')'), m.style.backgroundColor = 'color-mix(in oklab,'.concat(x, ' ').concat((1 - C) * 100, '%, ').concat(P, ')'), p.style.opacity = ''.concat(0 + (1 - (c = 0)) * C), p.style.transform = 'translateY('.concat((u = _ / 4) + (0 - u) * C, 'px)');
            }
        }, [
            P,
            x,
            null == g ? void 0 : g.height,
            N,
            t,
            null == v ? void 0 : v.height
        ]);
    return l.useEffect(() => {
        T();
    }, [
        T,
        N
    ]), l.useEffect(() => {
        let e = t.current, n = () => {
                T();
            };
        return null == e || e.addEventListener('scroll', n), () => {
            null == e || e.removeEventListener('scroll', n);
        };
    }, [
        t,
        T
    ]), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: _.stickyContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: _.stickyBannerContainer,
                        children: (0, i.jsx)('div', {
                            className: _.stickyBanner,
                            ref: h
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: _.backButtonContainer,
                        children: (0, i.jsx)(p.Z, {})
                    }),
                    (0, i.jsx)('div', {
                        className: _.nameContainer,
                        children: (0, i.jsx)(s.Heading, {
                            ref: f,
                            className: _.textApplicationName,
                            variant: 'heading-md/extrabold',
                            children: n.name
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                ref: C,
                className: _.bannerBackground,
                style: { backgroundColor: x }
            })
        ]
    });
}
