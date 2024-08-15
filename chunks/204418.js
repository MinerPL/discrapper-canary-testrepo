var r = n(735250);
n(470079);
var i = n(481060),
	a = n(204197),
	s = n(998502),
	o = n(689938);
let l = s.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;
t.Z = (e) => {
	let {
			user: t,
			guildId: n,
			avatarDecorationOverride: s,
			status: u,
			avatarSize: c = i.AvatarSizes.SIZE_120,
			'aria-hidden': d = !1,
			className: _,
			animateOnHover: E = !1
		} = e,
		{
			avatarDecorationSrc: f,
			avatarSrc: h,
			eventHandlers: p
		} = (0, a.Z)({
			user: t,
			guildId: n,
			size: c,
			showPending: !0,
			avatarDecorationOverride: s,
			animateOnHover: E
		});
	return (0, r.jsx)(l, {
		avatarDecoration: f,
		src: h,
		size: c,
		status: u,
		'aria-label': d ? void 0 : o.Z.Messages.USER_SETTINGS_AVATAR,
		'aria-hidden': d,
		className: _,
		...p
	});
};
