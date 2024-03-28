"use strict";
n.r(t), n.d(t, {
  UserSafetyEducationReportingCoachmark: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var s = n("399606"),
  l = n("607070"),
  i = n("970731"),
  r = n("810090"),
  o = n("111653"),
  u = n("921944"),
  d = n("689938"),
  c = n("538292");
let f = e => {
  let {
    markAsDismissed: t
  } = e, n = (0, s.useStateFromStores)([l.default], () => l.default.useReducedMotion);
  return (0, o.useCanSeeSafetyEducationReportingCoachmark)() ? (0, a.jsx)(i.default, {
    asset: (0, a.jsx)(r.default, {
      src: "https://cdn.discordapp.com/attachments/1063579271815245944/1095089224421740695/CEC_Reporting_Animation_v03_EN_1x1_Music_1.mp4",
      loop: !0,
      autoPlay: !n,
      className: c.video,
      width: "100%"
    }),
    header: d.default.Messages.SAFETY_CONSUMER_EDUCATION_REPORTING_HEADER,
    content: d.default.Messages.SAFETY_CONSUMER_EDUCATION_REPORTING_CONTENT,
    buttonCTA: d.default.Messages.GOT_IT,
    onClick: e => {
      e.stopPropagation(), t(u.ContentDismissActionType.UNKNOWN)
    },
    markAsDismissed: t,
    caretPosition: i.CaretPosition.BOTTOM_CENTER,
    headerClassName: c.header
  }) : null
}