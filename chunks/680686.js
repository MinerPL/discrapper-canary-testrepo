n.d(t, {
	Z: function () {
		return l;
	}
});
var r = n(626135),
	i = n(647162),
	a = n(616922),
	s = n(981631);
let o = [a.kG.USER_ACTIVITY_SYNC, a.kG.EMBED_SYNC];
function l(e, t, n, a) {
	r.default.track(s.rMx.SPOTIFY_BUTTON_CLICKED, {
		type: e,
		source: a,
		is_premium: (0, i.Wo)(),
		party_id: o.includes(e) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
		other_user_id: t.id
	});
}
