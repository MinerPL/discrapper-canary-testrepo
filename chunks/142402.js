n.r(a),
	n.d(a, {
		default: function () {
			return b;
		}
	});
var t = n(735250),
	s = n(470079),
	l = n(481060),
	r = n(332664),
	o = n(538211),
	i = n(698066),
	c = n(142497),
	u = n(626135),
	_ = n(981631),
	d = n(70722),
	E = n(190378),
	R = n(689938);
let m = [d.kr.OTHER];
function b(e) {
	let { isStreamer: a, stream: b, streamApplication: T, onClose: S, transitionState: M, analyticsData: O } = e,
		f = a ? R.Z.Messages.STREAM_REPORT_RATING_BODY_STREAMER : R.Z.Messages.STREAM_REPORT_RATING_BODY;
	return (
		s.useEffect(() => {
			u.default.track(_.rMx.OPEN_MODAL, {
				type: 'Stream Problem Report',
				other_user_id: b.ownerId,
				application_id: null != T ? T.id : null,
				application_name: null != T ? T.name : null,
				game_id: null != T ? T.id : null,
				source: 'Stream End'
			});
		}, [b.ownerId, T]),
		(0, t.jsx)(r.Z, {
			header: R.Z.Messages.STREAM_REPORT_A_PROBLEM_POST_STREAM,
			body: f,
			problemTitle: R.Z.Messages.STREAM_REPORT_LABEL,
			problems: (0, o.Z)(a, !0),
			feedbackProblems: m,
			onSubmit: function (e) {
				let { rating: a, problem: s, dontShowAgain: r, feedback: o } = e;
				if ((r && (0, c.Kw)(E.v.REPORT_PROBLEM_POST_STREAM), null != a))
					(0, i.Z)({
						problem: s,
						stream: b,
						feedback: o,
						streamApplication: T,
						analyticsData: O,
						location: 'Stream End',
						rating: a
					}),
						null != s &&
							(0, l.openModalLazy)(async () => {
								let { default: e } = await n.e('14466').then(n.bind(n, 729328));
								return (a) =>
									(0, t.jsx)(e, {
										body: R.Z.Messages.STREAM_REPORTED_BODY,
										...a
									});
							});
			},
			onClose: S,
			transitionState: M,
			otherKey: d.kr.OTHER
		})
	);
}
