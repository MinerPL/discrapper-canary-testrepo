n.r(t),
	n.d(t, {
		default: function () {
			return f;
		}
	});
var s = n(735250),
	o = n(470079),
	a = n(77866),
	r = n(704215),
	l = n(481060),
	i = n(605236),
	c = n(624659),
	u = n(626135),
	E = n(652463),
	d = n(709243),
	_ = n(981631),
	b = n(689938);
let m = [d.U.OTHER];
function f(e) {
	let { transitionState: t, onClose: f, guildId: D } = e,
		x = (0, a.Z)(d.e);
	return (
		o.useEffect(() => {
			u.default.track(_.rMx.OPEN_MODAL, { type: 'Guild Delete Report' });
		}, []),
		(0, s.jsx)(c.Z, {
			header: b.Z.Messages.GUILD_DELETE_FEEDBACK_HEADER,
			body: b.Z.Messages.GUILD_DELETE_FEEDBACK_BODY,
			problems: x,
			feedbackProblems: m,
			onSubmit: function (e) {
				let { problem: t, dontShowAgain: o, feedback: a } = e;
				o && (0, i.EW)(r.z.GUILD_DELETE_FEEDBACK);
				let c = null == t;
				(0, E.Z)(D, t, a, c),
					!c &&
						(0, l.openModalLazy)(async () => {
							let { default: e } = await n.e('14466').then(n.bind(n, 729328));
							return (t) =>
								(0, s.jsx)(e, {
									body: b.Z.Messages.GUILD_DELETE_FEEDBACK_REPORT,
									...t
								});
						});
			},
			onClose: f,
			transitionState: t,
			otherKey: d.U.OTHER
		})
	);
}
