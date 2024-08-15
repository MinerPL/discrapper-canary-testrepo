n.d(t, {
	MT: function () {
		return a;
	},
	TG: function () {
		return o;
	},
	wB: function () {
		return s;
	}
});
var r = n(149765),
	i = n(981631);
function a(e) {
	return r.e$(e.permissions, i.Plq.VIEW_CHANNEL);
}
function s(e, t) {
	return null != t && (!!r.e$(t.deny, i.Plq.VIEW_CHANNEL) || (e.isGuildVocal() && r.e$(t.deny, i.Plq.CONNECT)));
}
function o(e, t) {
	return !(null == t || s(e, t)) && !!r.e$(t.allow, i.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || r.e$(t.allow, i.Plq.CONNECT));
}
