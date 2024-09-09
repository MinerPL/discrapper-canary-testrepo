n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    });
var a = n(735250),
    s = n(470079),
    l = n(481060),
    o = n(332664),
    r = n(538211),
    i = n(698066),
    c = n(142497),
    u = n(626135),
    d = n(981631),
    _ = n(70722),
    E = n(190378),
    R = n(689938);
let b = [_.kr.OTHER];
function m(e) {
    let { isStreamer: t, stream: m, streamApplication: S, onClose: T, transitionState: M, analyticsData: O } = e,
        f = t ? R.Z.Messages.STREAM_REPORT_RATING_BODY_STREAMER : R.Z.Messages.STREAM_REPORT_RATING_BODY;
    return (
        s.useEffect(() => {
            u.default.track(d.rMx.OPEN_MODAL, {
                type: 'Stream Problem Report',
                other_user_id: m.ownerId,
                application_id: null != S ? S.id : null,
                application_name: null != S ? S.name : null,
                game_id: null != S ? S.id : null,
                source: 'Stream End'
            });
        }, [m.ownerId, S]),
        (0, a.jsx)(o.Z, {
            modalType: 'stream',
            header: R.Z.Messages.STREAM_REPORT_A_PROBLEM_POST_STREAM,
            body: f,
            problemTitle: R.Z.Messages.STREAM_REPORT_LABEL,
            problems: (0, r.Z)(t, !0),
            feedbackProblems: b,
            onSubmit: function (e) {
                let { rating: t, problem: s, dontShowAgain: o, feedback: r } = e;
                if ((o && (0, c.Kw)(E.v.REPORT_PROBLEM_POST_STREAM), null != t))
                    (0, i.Z)({
                        problem: s,
                        stream: m,
                        feedback: r,
                        streamApplication: S,
                        analyticsData: O,
                        location: 'Stream End',
                        rating: t
                    }),
                        null != s &&
                            (0, l.openModalLazy)(async () => {
                                let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                                return (t) =>
                                    (0, a.jsx)(e, {
                                        body: R.Z.Messages.STREAM_REPORTED_BODY,
                                        ...t
                                    });
                            });
            },
            onClose: T,
            transitionState: M,
            otherKey: _.kr.OTHER
        })
    );
}
