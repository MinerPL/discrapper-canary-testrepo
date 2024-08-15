n.d(t, {
	$P: function () {
		return l;
	},
	P1: function () {
		return c;
	},
	TY: function () {
		return u;
	},
	Tx: function () {
		return s;
	},
	VR: function () {
		return d;
	},
	W6: function () {
		return o;
	},
	wx: function () {
		return a.wx;
	}
});
var r = n(924301),
	i = n(131704),
	a = n(245335);
function s(e) {
	let t = e.guild_scheduled_event;
	return null != t && (0, r.Ld)(t);
}
function o(e) {
	return e.target_type === a.Iq.ROLE_SUBSCRIPTIONS_PURCHASE;
}
function l(e) {
	return null != e.channel && null != e.stage_instance;
}
function u(e) {
	return e.target_type === a.Iq.STREAM && null != e.target_user;
}
function c(e) {
	return e.target_type === a.Iq.EMBEDDED_APPLICATION;
}
function d(e) {
	var t, n;
	if ('number' == typeof e.type) return e.type;
	if ((t = e).type === a.wx.GROUP_DM || (null != t.channel && (0, i.bc)(t.channel.type))) return a.wx.GROUP_DM;
	return (n = e).type === a.wx.FRIEND || (null == n.guild && null != n.inviter) ? a.wx.FRIEND : a.wx.GUILD;
}
