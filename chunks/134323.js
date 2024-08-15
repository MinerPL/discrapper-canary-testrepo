t.d(n, {
	Z: function () {
		return o;
	}
});
var i = t(735250);
t(470079);
var s = t(481060),
	l = t(280845),
	a = t(996861),
	r = t(689938);
function o(e, n) {
	return (0, l.U)(n, e)
		? (0, i.jsx)(s.MenuItem, {
				id: 'reply',
				label: r.Z.Messages.MESSAGE_ACTION_REPLY,
				icon: s.ArrowAngleLeftUpIcon,
				action: (t) => {
					(0, a.HH)(n, e, t);
				}
			})
		: null;
}
