n.d(t, {
	Z: function () {
		return _;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(692547),
	s = n(981729),
	o = n(481060),
	l = n(621853),
	u = n(228168),
	c = n(689938),
	d = n(507714);
function _(e) {
	let { userId: t } = e;
	return (0, i.e7)([l.Z], () => {
		var e, n;
		return (
			null !== (n = null === (e = l.Z.getUserProfile(t)) || void 0 === e ? void 0 : e.profileFetchFailed) &&
			void 0 !== n &&
			n
		);
	})
		? (0, r.jsx)(s.DY, {
				className: d.container,
				text: c.Z.Messages.USER_PROFILE_LOAD_ERROR,
				delay: u.vB,
				children: (0, r.jsx)(o.CircleWarningIcon, {
					size: 'xs',
					color: a.Z.colors.STATUS_WARNING.css
				})
			})
		: null;
}
