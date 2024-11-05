n.d(t, {
    c4: function () {
        return g;
    },
    st: function () {
        return E;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(931609),
    l = n(442837),
    u = n(481060),
    c = n(292419),
    d = n(282397),
    f = n(188597),
    _ = n(981631),
    h = n(388032),
    p = n(875418);
function m(e) {
    return {
        text: e,
        icon: (0, r.jsx)(u.Dots, {
            className: p.icon,
            dotRadius: 3.5,
            themed: !0
        })
    };
}
function g(e) {
    return {
        text: null != e ? e : h.intl.string(h.t.VCsUJi),
        color: 'text-danger',
        icon: (0, r.jsx)(u.CircleWarningIcon, {
            size: 'xs',
            color: 'currentColor',
            className: s()(p.icon, p.errorIcon)
        })
    };
}
function E(e) {
    let { className: t, icon: n, text: i, color: a } = e;
    return (0, r.jsxs)('div', {
        className: s()(p.wrapper, t),
        children: [
            n,
            (0, r.jsx)(u.Text, {
                variant: 'text-md/normal',
                color: a,
                scaleFontToUserSetting: !0,
                children: i
            })
        ]
    });
}
t.ZP = i.memo(function (e) {
    let { message: t, className: n, component: a } = e,
        s = (0, o.Z)(),
        u = (0, l.e7)([d.ZP], () => d.ZP.getInteraction(t), [t]);
    i.useEffect(() => {
        let e = null;
        if (t.hasFlag(_.iLy.LOADING) && null != u) {
            let n = (0, f.ow)(t.id) - Date.now();
            n > 0 && (e = setTimeout(() => s(), 1000 + n));
        }
        return () => {
            clearTimeout(e);
        };
    }, [s, u, t]);
    let p = null;
    if (null == a)
        p = (function (e, t) {
            switch ((0, f.t$)(t, e)) {
                case f.rQ.SENDING:
                    return m(h.intl.string(h.t.RiLfBQ));
                case f.rQ.CREATED:
                    return m(h.intl.formatToPlainString(h.t['7ePV4u'], { applicationName: t.author.username }));
                case f.rQ.TIMED_OUT:
                    return g(h.intl.string(h.t.h8hzPT));
                case f.rQ.FAILED:
                    return g(t.interactionError);
            }
        })(u, t);
    else {
        let e = (0, c.SD)(u, t, a);
        null != e && (p = g(e));
    }
    if (null == p) return null;
    let { text: v, icon: I, color: S } = p;
    return (0, r.jsx)(E, {
        icon: I,
        text: v,
        className: n,
        color: S
    });
});
