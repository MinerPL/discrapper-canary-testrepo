var s = n(735250);
n(470079);
var o = n(453217),
    r = n(100805),
    a = n(988953);
t.Z = function (e) {
    let { collapsedHeight: t, expandedContentRef: n, expansionSpring: l, isExpanded: i, isExpansionAnimationComplete: c, onCtxMenuOpened: d, onCtxMenuClosed: u, onCtxMenuSelection: p, quest: x, useReducedMotion: m } = e;
    return (0, s.jsx)(r.Z, {
        expansionSpring: l,
        className: a.content,
        collapsedHeight: t,
        onCtxMenuOpen: d,
        onCtxMenuClose: u,
        onCtxMenuSelect: p,
        isExpanded: i,
        isExpansionAnimationComplete: c,
        quest: x,
        useReducedMotion: m,
        ref: n,
        children: (0, s.jsx)(o.Z, {
            className: a.content,
            expansionSpring: l,
            isExpanded: i,
            isExpansionAnimationComplete: c,
            quest: x,
            useReducedMotion: m
        })
    });
};
