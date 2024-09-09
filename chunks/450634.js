n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    });
var a = n(735250),
    s = n(470079),
    l = n(481060),
    i = n(332664),
    o = n(142497),
    r = n(626135),
    c = n(672655),
    d = n(768015),
    u = n(701488),
    _ = n(981631),
    T = n(190378),
    I = n(689938);
let b = [u.K8.OTHER, u.K8.ADS, u.K8.NOT_FUN];
function m(e) {
    var t;
    let { channel: m, activityApplication: f, onClose: p, transitionState: A, analyticsData: C } = e;
    s.useEffect(() => {
        r.default.track(_.rMx.OPEN_MODAL, {
            type: 'Activity Feedback Modal',
            application_id: f.id,
            application_name: f.name,
            game_id: f.id,
            source: 'Activity End'
        });
    }, [f]);
    let E = (null === (t = f.embeddedActivityConfig) || void 0 === t ? void 0 : t.displays_advertisements) === !0;
    return (0, a.jsx)(i.Z, {
        modalType: 'activity',
        header: I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({ applicationName: f.name }),
        body: I.Z.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
        problemTitle: I.Z.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
        problems: (0, c.Z)(!0, E),
        feedbackProblems: b,
        onSubmit: function (e) {
            let { rating: t, problem: s, dontShowAgain: i, feedback: c } = e;
            if (
                (i &&
                    !(function (e) {
                        let { applicationId: t, rating: n } = e;
                        r.default.track(_.rMx.ACTIVITY_REPORT_DONT_SHOW, {
                            application_id: t,
                            rating: n
                        }),
                            (0, o.Kw)(T.v.POST_ACTIVITY_FEEDBACK);
                    })({
                        rating: t,
                        applicationId: f.id
                    }),
                null != t)
            )
                (0, d.Z)({
                    problem: s,
                    channel: m,
                    feedback: c,
                    activityApplication: f,
                    analyticsData: C,
                    location: 'Activity End',
                    rating: t
                }),
                    null != s &&
                        (0, l.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    body: I.Z.Messages.ACTIVITY_REPORTED_BODY,
                                    ...t
                                });
                        });
        },
        onClose: p,
        transitionState: A,
        otherKey: u.K8.OTHER
    });
}
