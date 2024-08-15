t.d(n, {
	$c: function () {
		return c;
	},
	Nx: function () {
		return C;
	},
	On: function () {
		return I;
	},
	tQ: function () {
		return d;
	},
	x5: function () {
		return _;
	}
});
var i = t(140492),
	l = t(475468),
	o = t(703656),
	r = t(769654),
	E = t(944486),
	a = t(914010),
	u = t(358085),
	s = t(981631);
let d = {
		binds: ['alt+down'],
		comboKeysBindGlobal: !0,
		action: () => ((0, i.Z)(), !1)
	},
	_ = {
		binds: ['alt+up'],
		comboKeysBindGlobal: !0,
		action: () => ((0, i.Z)(-1), !1)
	},
	c = {
		binds: ['mod+alt+right'],
		comboKeysBindGlobal: !0,
		action() {
			let e;
			if (null != a.Z.getGuildId()) e = s.ME;
			else {
				let n = a.Z.getLastSelectedGuildId();
				null != n && ((e = n), (0, l.K)(n, E.Z.getChannelId(n)));
			}
			return null != e && (0, r.X)(e), !1;
		}
	},
	C = {
		binds: (0, u.isMac)() ? ['mod+['] : ['alt+left'],
		comboKeysBindGlobal: !0,
		action: () => ((0, o.op)(), !1)
	},
	I = {
		binds: (0, u.isMac)() ? ['mod+]'] : ['alt+right'],
		comboKeysBindGlobal: !0,
		action: () => ((0, o.eH)(), !1)
	};
