o.r(t),
    o.d(t, {
        default: function () {
            return _;
        }
    });
var n = o(735250);
o(470079);
var a = o(481060),
    s = o(144535),
    l = o(332664),
    i = o(142497),
    r = o(774378),
    u = o(445102),
    c = o(190378),
    d = o(689938);
function _(e) {
    let { onClose: t, transitionState: _, analyticsData: b } = e,
        m = (0, s.I)('CALL_FEEDBACK_OPTION_OTHER');
    return (0, n.jsx)(l.Z, {
        modalType: 'voice',
        header: d.Z.Messages.CALL_FEEDBACK_SHEET_TITLE,
        body: d.Z.Messages.CALL_FEEDBACK_PROMPT,
        problemTitle: d.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
        problems: (0, r.Z)(!1),
        feedbackProblems: [m],
        onSubmit: function (e) {
            var t, s, l;
            let { rating: _, problem: m, dontShowAgain: E, feedback: h } = e;
            if ((E && (0, i.Kw)(c.v.VOICE_CALL_FEEDBACK), null != _))
                (0, u.Z)(_, ((t = m), null !== (l = null === (s = (0, r.Z)(!1).find((e) => e.label === t)) || void 0 === s ? void 0 : s.code) && void 0 !== l ? l : null), m, h, b),
                    null != m &&
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await o.e('14466').then(o.bind(o, 729328));
                            return (t) =>
                                (0, n.jsx)(e, {
                                    body: d.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                                    ...t
                                });
                        });
        },
        onClose: t,
        transitionState: _,
        otherKey: m
    });
}
