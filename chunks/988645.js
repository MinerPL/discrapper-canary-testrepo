o.r(t),
    o.d(t, {
        default: function () {
            return E;
        }
    });
var n = o(735250);
o(470079);
var a = o(481060),
    s = o(375964),
    l = o.n(s),
    i = o(332664),
    r = o(142497),
    c = o(774378),
    u = o(445102),
    d = o(190378),
    _ = o(689938);
let b = [l().CALL_FEEDBACK_OPTION_OTHER];
function E(e) {
    let { onClose: t, transitionState: s, analyticsData: E } = e;
    return (0, n.jsx)(i.Z, {
        header: _.Z.Messages.CALL_FEEDBACK_SHEET_TITLE,
        body: _.Z.Messages.CALL_FEEDBACK_PROMPT,
        problemTitle: _.Z.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
        problems: (0, c.Z)(!1),
        feedbackProblems: b,
        onSubmit: function (e) {
            var t, s, l;
            let { rating: i, problem: b, dontShowAgain: m, feedback: O } = e;
            if ((m && (0, r.Kw)(d.v.VOICE_CALL_FEEDBACK), null != i))
                (0, u.Z)(i, ((t = b), null !== (l = null === (s = (0, c.Z)(!1).find((e) => e.label === t)) || void 0 === s ? void 0 : s.code) && void 0 !== l ? l : null), b, O, E),
                    null != b &&
                        (0, a.openModalLazy)(async () => {
                            let { default: e } = await o.e('14466').then(o.bind(o, 729328));
                            return (t) =>
                                (0, n.jsx)(e, {
                                    body: _.Z.Messages.CALL_FEEDBACK_CONFIRMATION,
                                    ...t
                                });
                        });
        },
        onClose: t,
        transitionState: s,
        otherKey: l().CALL_FEEDBACK_OPTION_OTHER
    });
}
