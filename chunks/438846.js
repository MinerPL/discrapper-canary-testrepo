t.d(n, {
	K: function () {
		return r;
	}
});
var i = t(475468),
	l = t(19780),
	o = t(981631);
let r = {
	binds: ['mod+shift+alt+v'],
	comboKeysBindGlobal: !0,
	action(e) {
		e.preventDefault(), e.stopPropagation();
		let n = l.Z.getGuildId(),
			t = l.Z.getChannelId();
		return null != t && (0, i.K)(null != n ? n : o.ME, t), !1;
	}
};
