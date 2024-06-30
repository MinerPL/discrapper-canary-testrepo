t(47120);
var a = t(735250), r = t(470079), i = t(120356), s = t.n(i), o = t(920906), l = t(442837), c = t(481060), d = t(393238), u = t(607070), m = t(689938), f = t(62531);
n.Z = r.memo(function (e) {
    let {
            renderHeader: n,
            children: t,
            isExpanded: i,
            isStuck: C,
            onExpand: _,
            disableAnimation: h,
            disableBackground: x
        } = e, g = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), [p, T] = r.useState(!0), [I, E] = r.useState(!1), {
            ref: b,
            height: N = 0
        } = (0, d.Z)(), {
            ref: v,
            height: y = 0
        } = (0, d.Z)(), [S, A] = r.useState(i), M = (0, o.useSpring)({
            height: S ? y + N : N,
            immediate: p || g || h,
            config: {
                ...o.config.stiff,
                clamp: !0
            },
            onStart: () => {
                E(!1);
            },
            onRest: () => {
                E(!0);
            }
        });
    return r.useLayoutEffect(() => {
        E(!1), A(i);
    }, [i]), r.useLayoutEffect(() => {
        let e = setTimeout(() => {
            T(!1);
        }, 100);
        return () => clearTimeout(e);
    }, []), (0, a.jsx)(c.Clickable, {
        className: s()(f.editCard, {
            [f.toggled]: i,
            [f.noBackground]: x
        }),
        children: (0, a.jsxs)(o.animated.div, {
            className: s()(f.contentExpandContainer, { [f.showOverflow]: i && I }),
            style: M,
            children: [
                (0, a.jsx)(c.Clickable, {
                    innerRef: b,
                    onClick: C ? void 0 : _,
                    className: s()(f.innerHeader, { [f.toggled]: i && C }),
                    'aria-label': m.Z.Messages.EXPAND,
                    children: n
                }),
                (0, a.jsx)('div', {
                    ref: v,
                    children: t
                })
            ]
        })
    });
});
