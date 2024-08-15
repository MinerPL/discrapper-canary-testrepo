t.d(n, {
	M: function () {
		return a;
	},
	P: function () {
		return E;
	}
});
var i = t(392711),
	l = t.n(i),
	o = t(585483),
	r = t(981631);
let E = {
		binds: ['mod+i'],
		comboKeysBindGlobal: !0,
		action: () => (o.S.dispatch(r.CkL.TOGGLE_INBOX_UNREADS_TAB), !1)
	},
	a = {
		binds: ['mod+shift+e'],
		comboKeysBindGlobal: !0,
		action: l().debounce(
			() => {
				if (o.S.hasSubscribers(r.CkL.MARK_TOP_INBOX_CHANNEL_READ))
					return o.S.dispatch(r.CkL.MARK_TOP_INBOX_CHANNEL_READ), !1;
			},
			100,
			{ leading: !0 }
		)
	};
