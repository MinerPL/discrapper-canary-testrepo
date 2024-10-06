n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    });
var a = n(735250),
    o = n(470079),
    s = n(481060),
    l = n(144535),
    r = n(332664),
    i = n(142497),
    c = n(626135),
    u = n(798733),
    d = n(559187),
    b = n(981631),
    f = n(190378),
    _ = n(689938);
function m(e) {
    let { reportId: t, reportType: m, ...E } = e;
    o.useEffect(() => {
        c.default.track(b.rMx.IAR_FEEDBACK_MODAL_VIEWED, {
            report_id: t,
            report_type: m
        });
    }, [t, m]);
    let h = (0, l.I)('CALL_FEEDBACK_OPTION_OTHER');
    return (0, a.jsx)(r.Z, {
        modalType: 'in_app_report',
        header: _.Z.Messages.IAR_FEEDBACK_TITLE,
        body: _.Z.Messages.IAR_FEEDBACK_PROMPT,
        problemTitle: _.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
        problems: (0, u.Z)(),
        feedbackProblems: [h],
        onSubmit: function (e) {
            let { rating: o, problem: l, dontShowAgain: r, feedback: c } = e;
            if (
                (r && (0, i.Kw)(f.v.IN_APP_REPORTS_FEEDBACK),
                (0, d.Z)({
                    rating: o,
                    problem: l,
                    feedback: c,
                    reportId: t,
                    reportType: m,
                    dontShowAgain: r
                }),
                null != o && null != l)
            )
                (0, s.openModalLazy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, a.jsx)(e, {
                            body: _.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                            ...t
                        });
                });
        },
        otherKey: h,
        ...E
    });
}
