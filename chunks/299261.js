n.d(t, {
	Z: function () {
		return s;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(397192);
function s(e) {
	let { user: t, guildId: n } = e;
	return (0, r.jsx)('div', {
		className: a.avatarHalo,
		children: (0, r.jsx)(i.Avatar, {
			className: a.avatar,
			size: i.AvatarSizes.SIZE_40,
			src: t.getAvatarURL(n, 40),
			'aria-label': t.username
		})
	});
}
