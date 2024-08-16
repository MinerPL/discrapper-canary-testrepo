var s = n(735250),
    o = n(470079),
    r = n(113434),
    a = n(308069),
    l = n(613087),
    i = n(457153),
    c = n(254197),
    d = n(321025),
    u = n(657213);
t.Z = function (e) {
    var t;
    let { expandedContentRef: n, expansionSpring: p, isExpanded: x, isExpansionAnimationComplete: m, onCtxMenuOpened: g, onCtxMenuClosed: _, onCtxMenuSelection: C, quest: f, useReducedMotion: h, collapsedHeight: E } = e,
        T = o.useRef(null),
        S = o.useRef(null),
        v = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        A = (0, r.Rf)(f);
    return (0, s.jsxs)(l.p, {
        expandedContentRef: n,
        collapsedContentRef: T,
        expansionSpring: p,
        children: [
            (0, s.jsx)(i.Z, {
                ref: T,
                className: u.content,
                expansionSpring: p,
                isExpanded: x,
                isExpansionAnimationComplete: m,
                quest: f,
                useReducedMotion: h,
                taskDetails: A
            }),
            (0, s.jsx)(c.Z, {
                expansionSpring: p,
                className: u.content,
                collapsedHeight: E,
                onCtxMenuOpen: g,
                onCtxMenuClose: _,
                onCtxMenuSelect: C,
                overlayRef: S,
                isExpanded: x,
                isExpansionAnimationComplete: m,
                quest: f,
                useReducedMotion: h,
                ref: n,
                taskDetails: A,
                children: (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(d.Z, {
                            expansionSpring: p,
                            isExpanded: x
                        }),
                        !v &&
                            (0, s.jsx)(a.Z, {
                                quest: f,
                                expansionSpring: p,
                                useReducedMotion: h,
                                isExpanded: x,
                                isExpansionAnimationComplete: m,
                                onCtxMenuOpen: g,
                                onCtxMenuClose: _,
                                onCtxMenuSelect: C
                            })
                    ]
                })
            }),
            (0, s.jsx)('div', {
                ref: S,
                className: u.overlay
            })
        ]
    });
};
