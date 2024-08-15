n.d(t, {
	Z: function () {
		return m;
	}
});
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(481060),
	l = n(665149),
	r = n(853856),
	o = n(117984),
	c = n(593214),
	u = n(362658),
	d = n(916069),
	h = n(689938);
function m(e) {
	let { channel: t } = e,
		{ isFavoritesPerk: n } = (0, u.z)('ChannelFavoritesHeaderButton'),
		m = (0, d.Z)(),
		{ notifyFavoriteAdded: p } = (0, c.up)(),
		_ = (0, a.e7)([r.Z], () => r.Z.isFavorite(t.id));
	if (!n || m) return null;
	let f = _ ? s.StarIcon : s.StarOutlineIcon,
		E = _ ? h.Z.Messages.UNFAVORITE_CHANNEL : h.Z.Messages.FAVORITE_CHANNEL;
	return (0, i.jsx)(l.ZP.Icon, {
		icon: f,
		tooltip: E,
		'aria-label': E,
		onClick: () => {
			_ ? (0, o.oC)(t.id) : (p(), (0, o.kj)(t.id));
		}
	});
}
