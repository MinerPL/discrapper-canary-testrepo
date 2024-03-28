"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var n = a("735250"),
  l = a("470079"),
  s = a("481060"),
  r = a("375964"),
  o = a.n(r),
  u = a("332664"),
  i = a("142497"),
  c = a("626135"),
  d = a("798733"),
  f = a("559187"),
  E = a("981631"),
  _ = a("190378"),
  m = a("689938");
let h = [o().CALL_FEEDBACK_OPTION_OTHER];

function g(e) {
  let {
    reportId: t,
    reportType: r,
    ...g
  } = e;
  return l.useEffect(() => {
    c.default.track(E.AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, {
      report_id: t,
      report_type: r
    })
  }, [t, r]), (0, n.jsx)(u.default, {
    header: m.default.Messages.IAR_FEEDBACK_TITLE,
    body: m.default.Messages.IAR_FEEDBACK_PROMPT,
    problemTitle: m.default.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
    problems: (0, d.default)(),
    feedbackProblems: h,
    onSubmit: function(e) {
      let {
        rating: l,
        problem: o,
        dontShowAgain: u,
        feedback: c
      } = e;
      u && (0, i.hideHotspot)(_.HotspotLocations.IN_APP_REPORTS_FEEDBACK), (0, f.default)({
        rating: l,
        problem: o,
        feedback: c,
        reportId: t,
        reportType: r,
        dontShowAgain: u
      }), null != l && null != o && (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("14466")]).then(a.bind(a, "729328"));
        return t => (0, n.jsx)(e, {
          body: m.default.Messages.CALL_FEEDBACK_CONFIRMATION,
          ...t
        })
      })
    },
    otherKey: o().CALL_FEEDBACK_OPTION_OTHER,
    ...g
  })
}