n.d(t, {
	BF: function () {
		return d;
	},
	QA: function () {
		return c;
	},
	cp: function () {
		return u;
	}
});
var r = n(367907),
	i = n(368859),
	a = n(626135),
	s = n(135899),
	o = n(981631),
	l = n(943702);
function u(e) {
	return ((0, i.Z)(e) && e.messageReference.guild_id === s.M_) || (null != e.author && e.author.id === s.c9);
}
function c() {
	return l;
}
let d = (e) => {
	a.default.track(o.rMx.USER_FLOW_TRANSITION, {
		flow_type: s.tA,
		from_step: e.fromStep,
		to_step: e.toStep,
		...(0, r.hH)(e.guildId)
	});
};
