"use strict";
a.r(t), a.d(t, {
  VideoBackgroundIssue: function() {
    return s
  },
  default: function() {
    return _
  }
});
var l, s, n = a("735250"),
  r = a("470079"),
  i = a("481060"),
  u = a("332664"),
  o = a("142497"),
  c = a("626135"),
  d = a("981631"),
  E = a("190378"),
  f = a("689938");
(l = s || (s = {})).BAD_OUTLINE = "BAD_OUTLINE", l.BACKGROUND_DETECTION_ACCURACY = "BACKGROUND_DETECTION_ACCURACY", l.FLICKERING = "FLICKERING", l.BACKGROUND_DETECTION_LAG = "BACKGROUND_DETECTION_LAG", l.OTHER = "OTHER";
let C = ["OTHER"];

function _(e) {
  let {
    analyticsData: t,
    transitionState: l,
    onClose: s
  } = e;
  return r.useEffect(() => {
    c.default.track(d.AnalyticEvents.OPEN_MODAL, {
      type: "Video Background Feedback"
    })
  }, []), (0, n.jsx)(u.default, {
    header: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_HEADER,
    body: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_BODY,
    problemTitle: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_PROBLEM_TITLE,
    problems: [{
      value: "BAD_OUTLINE",
      label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BAD_OUTLINE
    }, {
      value: "BACKGROUND_DETECTION_ACCURACY",
      label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_ACCURACY
    }, {
      value: "FLICKERING",
      label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_FLICKERING
    }, {
      value: "BACKGROUND_DETECTION_LAG",
      label: f.default.Messages.VIDEO_BACKGROUND_FEEDBACK_OPTION_BACKGROUND_DETECTION_LAG
    }, {
      value: "OTHER",
      label: f.default.Messages.CALL_FEEDBACK_OPTION_OTHER
    }],
    feedbackProblems: C,
    onSubmit: function(e) {
      var l, s, r, u;
      let {
        rating: C,
        problem: _,
        dontShowAgain: O,
        feedback: N
      } = e;
      if (O && (0, o.hideHotspot)(E.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK), null != C) l = C, s = _, r = N, u = t, c.default.track(d.AnalyticEvents.VIDEO_BACKGROUND_FEEDBACK, {
        ...u,
        reason: s,
        rating: l,
        feedback: r
      }), null != _ && (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("14466")]).then(a.bind(a, "729328"));
        return t => (0, n.jsx)(e, {
          body: f.default.Messages.VIDEO_BACKGROUND_ISSUE_REPORTED_BODY,
          ...t
        })
      })
    },
    onClose: s,
    transitionState: l,
    otherKey: "OTHER"
  })
}