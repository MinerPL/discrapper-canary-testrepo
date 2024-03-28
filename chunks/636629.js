"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("913527"),
  l = n.n(a),
  i = n("644766"),
  r = n("730417"),
  o = n("921944"),
  u = n("689938"),
  d = n("50928");
let c = (e, t) => ({
  bodyText: u.default.Messages.DROPS_BANNER_NOTICE.format({
    gameName: e.title,
    endDate: l()(e.endDate, "YYYY-MM-DD HH:mm").format("MMM Do"),
    streamLengthRequirement: t
  }),
  articleUrl: e.articleUrl
});
t.default = e => {
  let {
    noticeType: t,
    markAsDismissed: n,
    partnerGame: a
  } = e, l = (0, r.useDropsExperiment)(a);
  if (null == l) return null;
  let {
    bodyText: f,
    articleUrl: E
  } = c(l.drop, l.config.streamLengthRequirement);
  return (0, s.jsxs)(i.default, {
    className: d.colorGuildBlue,
    children: [f, (0, s.jsx)(i.NoticeButtonAnchor, {
      href: E,
      target: "_blank",
      onClick: () => {
        n(o.ContentDismissActionType.PRIMARY)
      },
      children: u.default.Messages.LEARN_MORE
    }), (0, s.jsx)(i.NoticeCloseButton, {
      onClick: () => {
        n(o.ContentDismissActionType.DISMISS)
      },
      noticeType: t
    })]
  })
}