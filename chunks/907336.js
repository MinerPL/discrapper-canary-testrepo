n.d(t, {
	E: function () {
		return l;
	}
});
var i = n(442837),
	a = n(150192),
	s = n(731455),
	r = n(689938);
function l(e) {
	let { categoryId: t } = e;
	return (0, i.e7)([a.Z], () =>
		t === s.Hk ? r.Z.Messages.GUILD_DISCOVERY_ALL_CATEGORY_FILTER : a.Z.getCategoryName(t)
	);
}
