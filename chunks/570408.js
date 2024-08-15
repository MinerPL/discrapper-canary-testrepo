t.d(n, {
	I: function () {
		return o;
	}
});
var i = t(585483),
	l = t(981631);
let o = {
	binds: ['mod+f'],
	comboKeysBindGlobal: !0,
	action(e) {
		e.preventDefault(), e.stopPropagation(), i.S.dispatch(l.CkL.FOCUS_SEARCH, { prefillCurrentChannel: !0 });
	}
};
