t.d(n, {
	f: function () {
		return r;
	}
});
var i = t(121254),
	l = t(585483),
	o = t(981631);
let r = {
	binds: ['mod+l'],
	comboKeysBindGlobal: !0,
	action() {
		if (i.Z.getCurrentConfig({ location: 'keybinds' }, { autoTrackExposure: !1 }).enabled) return l.S.dispatch(o.CkL.TOGGLE_FOR_LATER), !1;
	}
};
