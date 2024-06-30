var s = n(735250), o = n(470079), r = n(308069), a = n(613087), i = n(457153), l = n(254197), c = n(321025), d = n(11281);
t.Z = function (e) {
    var t;
    let {
            expandedContentRef: n,
            expansionSpring: u,
            isExpanded: p,
            isExpansionAnimationComplete: x,
            onCtxMenuOpened: m,
            onCtxMenuClosed: g,
            onCtxMenuSelection: C,
            quest: f,
            useReducedMotion: h
        } = e, _ = o.useRef(null), E = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
    return (0, s.jsxs)(a.p, {
        expandedContentRef: n,
        collapsedContentRef: _,
        expansionSpring: u,
        isExpansionAnimationComplete: x,
        children: [
            !E && (0, s.jsx)(r.Z, {
                quest: f,
                expansionSpring: u,
                useReducedMotion: h,
                isExpanded: p,
                isExpansionAnimationComplete: x,
                onCtxMenuOpen: m,
                onCtxMenuClose: g,
                onCtxMenuSelect: C
            }),
            (0, s.jsx)(i.Z, {
                ref: _,
                className: d.content,
                expansionSpring: u,
                isExpanded: p,
                isExpansionAnimationComplete: x,
                quest: f,
                useReducedMotion: h
            }),
            (0, s.jsx)(l.Z, {
                expansionSpring: u,
                className: d.content,
                onCtxMenuOpen: m,
                onCtxMenuClose: g,
                onCtxMenuSelect: C,
                isExpanded: p,
                isExpansionAnimationComplete: x,
                quest: f,
                useReducedMotion: h,
                ref: n
            }),
            (0, s.jsx)(c.Z, {
                expansionSpring: u,
                isExpanded: p
            })
        ]
    });
};
