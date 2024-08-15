n.d(t, {
	r: function () {
		return d;
	}
});
var s = n(735250);
n(470079);
var a = n(481060),
	r = n(204197),
	i = n(998502),
	l = n(689938),
	o = n(132588);
let c = i.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar,
	d = (e) => {
		let { user: t, avatarSize: n = a.AvatarSizes.SIZE_48 } = e,
			{
				avatarSrc: i,
				avatarDecorationSrc: d,
				eventHandlers: _
			} = (0, r.Z)({
				user: t,
				size: n
			});
		return (0, s.jsx)('div', {
			..._,
			children: (0, s.jsx)(c, {
				className: o.__invalid_avatar,
				src: i,
				avatarDecoration: d,
				size: n,
				'aria-label': l.Z.Messages.FAMILY_CENTER_AVATAR_ARIA.format({ name: t.username })
			})
		});
	};
t.Z = (e) => {
	let { currentUser: t, otherUser: n, children: a } = e;
	return (0, s.jsx)('div', {
		className: o.avatarPairContainer,
		children: (0, s.jsxs)('div', {
			className: o.avatarPair,
			children: [(0, s.jsx)(d, { user: t }), a, (0, s.jsx)(d, { user: n })]
		})
	});
};
