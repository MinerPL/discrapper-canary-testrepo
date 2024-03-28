"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var s = a("735250"),
  l = a("470079"),
  n = a("481060"),
  r = a("332664"),
  u = a("538211"),
  o = a("698066"),
  i = a("142497"),
  d = a("626135"),
  c = a("981631"),
  R = a("70722"),
  E = a("190378"),
  f = a("689938");
let _ = [R.StreamIssueReportReasons.OTHER];

function m(e) {
  let {
    isStreamer: t,
    stream: m,
    streamApplication: S,
    onClose: T,
    transitionState: O,
    analyticsData: M
  } = e, A = t ? f.default.Messages.STREAM_REPORT_RATING_BODY_STREAMER : f.default.Messages.STREAM_REPORT_RATING_BODY;
  return l.useEffect(() => {
    d.default.track(c.AnalyticEvents.OPEN_MODAL, {
      type: "Stream Problem Report",
      other_user_id: m.ownerId,
      application_id: null != S ? S.id : null,
      application_name: null != S ? S.name : null,
      game_id: null != S ? S.id : null,
      source: "Stream End"
    })
  }, [m.ownerId, S]), (0, s.jsx)(r.default, {
    header: f.default.Messages.STREAM_REPORT_A_PROBLEM_POST_STREAM,
    body: A,
    problemTitle: f.default.Messages.STREAM_REPORT_LABEL,
    problems: (0, u.default)(t, !0),
    feedbackProblems: _,
    onSubmit: function(e) {
      let {
        rating: t,
        problem: l,
        dontShowAgain: r,
        feedback: u
      } = e;
      if (r && (0, i.hideHotspot)(E.HotspotLocations.REPORT_PROBLEM_POST_STREAM), null != t)(0, o.default)({
        problem: l,
        stream: m,
        feedback: u,
        streamApplication: S,
        analyticsData: M,
        location: "Stream End",
        rating: t
      }), null != l && (0, n.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("14466")]).then(a.bind(a, "729328"));
        return t => (0, s.jsx)(e, {
          body: f.default.Messages.STREAM_REPORTED_BODY,
          ...t
        })
      })
    },
    onClose: T,
    transitionState: O,
    otherKey: R.StreamIssueReportReasons.OTHER
  })
}