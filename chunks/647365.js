var s = n(735250);
n(470079);
var o = n(453217),
	a = n(100805),
	r = n(988953);
t.Z = function (e) {
	let {
		collapsedHeight: t,
		expandedContentRef: n,
		expansionSpring: l,
		isExpanded: i,
		isExpansionAnimationComplete: c,
		onCtxMenuOpened: d,
		onCtxMenuClosed: u,
		onCtxMenuSelection: p,
		quest: x,
		useReducedMotion: m
	} = e;
	return (0, s.jsx)(a.Z, {
		expansionSpring: l,
		className: r.content,
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
			className: r.content,
			expansionSpring: l,
			isExpanded: i,
			isExpansionAnimationComplete: c,
			quest: x,
			useReducedMotion: m
		})
	});
};
