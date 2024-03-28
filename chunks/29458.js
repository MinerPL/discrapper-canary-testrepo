"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("594174"),
  i = n("644766"),
  r = n("853197"),
  o = n("921944"),
  u = n("689938"),
  d = n("364264");
t.default = e => {
  var t;
  let {
    noticeType: n,
    markAsDismissed: c,
    partnerGame: f
  } = e, E = (0, a.useStateFromStores)([l.default], () => l.default.getCurrentUser());
  if (null == f) return null;
  let _ = (0, r.getDrop)(f);
  if (null == _) return null;
  let T = "https://survey.alchemer.com/s3/7043057/Drops-NPS?user_id=".concat(null !== (t = null == E ? void 0 : E.id) && void 0 !== t ? t : "");
  return (0, s.jsxs)(i.default, {
    className: d.colorGuildBlue,
    children: [u.default.Messages.DROPS_BANNER_ENDED_INCOMPLETE.format({
      gameTitle: _.title
    }), (0, s.jsx)(i.NoticeButtonAnchor, {
      href: T,
      target: "_blank",
      onClick: () => {
        c(o.ContentDismissActionType.PRIMARY)
      },
      children: u.default.Messages.DROPS_FEEDBACK_SURVEY
    }), (0, s.jsx)(i.NoticeCloseButton, {
      onClick: () => {
        c(o.ContentDismissActionType.DISMISS)
      },
      noticeType: n
    })]
  })
}