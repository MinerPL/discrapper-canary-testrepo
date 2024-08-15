t.d(n, {
	l: function () {
		return d;
	}
});
var i = t(904245),
	l = t(181945),
	o = t(888369),
	r = t(375954),
	E = t(944486),
	a = t(914010),
	u = t(585483),
	s = t(981631);
let d = {
	binds: ['shift+esc'],
	comboKeysBindGlobal: !0,
	action() {
		let e = a.Z.getGuildId();
		if (null == e || !o.default.getGuildHasUnreadIgnoreMuted(e)) return;
		(0, l.Z)([e]);
		let n = E.Z.getChannelId(e);
		if (null != n) r.Z.getMessages(n).hasMoreAfter ? i.Z.jumpToPresent(n, s.AQB) : u.S.dispatch(s.CkL.SCROLLTO_PRESENT);
	}
};
