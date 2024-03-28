"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var l = a("735250"),
  n = a("470079"),
  s = a("481060"),
  i = a("332664"),
  c = a("142497"),
  o = a("626135"),
  d = a("672655"),
  u = a("768015"),
  r = a("701488"),
  f = a("981631"),
  T = a("190378"),
  _ = a("689938");
let I = [r.ActivityFeedbackReasons.OTHER, r.ActivityFeedbackReasons.NOT_FUN];

function A(e) {
  let {
    channel: t,
    activityApplication: A,
    onClose: E,
    transitionState: R,
    analyticsData: m
  } = e;
  return n.useEffect(() => {
    o.default.track(f.AnalyticEvents.OPEN_MODAL, {
      type: "Activity Feedback Modal",
      application_id: A.id,
      application_name: A.name,
      game_id: A.id,
      source: "Activity End"
    })
  }, [A]), (0, l.jsx)(i.default, {
    header: _.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_HEADER.format({
      applicationName: A.name
    }),
    body: _.default.Messages.ACTIVITY_REPORT_ACTIVITY_BODY,
    problemTitle: _.default.Messages.ACTIVITY_REPORT_POST_ACTIVITY_PROBLEM_TITLE,
    problems: (0, d.default)(!0),
    feedbackProblems: I,
    onSubmit: function(e) {
      let {
        rating: n,
        problem: i,
        dontShowAgain: d,
        feedback: r
      } = e;
      if (d && ! function(e) {
          let {
            applicationId: t,
            rating: a
          } = e;
          o.default.track(f.AnalyticEvents.ACTIVITY_REPORT_DONT_SHOW, {
            application_id: t,
            rating: a
          }), (0, c.hideHotspot)(T.HotspotLocations.POST_ACTIVITY_FEEDBACK)
        }({
          rating: n,
          applicationId: A.id
        }), null != n)(0, u.default)({
        problem: i,
        channel: t,
        feedback: r,
        activityApplication: A,
        analyticsData: m,
        location: "Activity End",
        rating: n
      }), null != i && (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("14466")]).then(a.bind(a, "729328"));
        return t => (0, l.jsx)(e, {
          body: _.default.Messages.ACTIVITY_REPORTED_BODY,
          ...t
        })
      })
    },
    onClose: E,
    transitionState: R,
    otherKey: r.ActivityFeedbackReasons.OTHER
  })
}