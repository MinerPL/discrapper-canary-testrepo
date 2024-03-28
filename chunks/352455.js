"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("481060"),
  r = n("409700"),
  o = n("230711"),
  u = n("446753"),
  d = n("981631"),
  c = n("921944"),
  f = n("689938"),
  E = n("149695");

function h(e) {
  let {
    className: t,
    markAsDismissed: n
  } = e;
  return (0, a.jsxs)(u.default, {
    className: l()(E.card, t),
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      className: E.header,
      children: f.default.Messages.NOW_PLAYING_GDPR_HEADER
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: f.default.Messages.NOW_PLAYING_GDPR_BODY.format({
        onPrivacyClick: () => o.default.open(d.UserSettingsSections.PRIVACY_AND_SAFETY)
      })
    }), (0, a.jsxs)("div", {
      className: E.buttonContainer,
      children: [(0, a.jsx)(i.Button, {
        size: i.Button.Sizes.SMALL,
        onClick: () => (0, r.setConsents)([d.Consents.PERSONALIZATION], []),
        children: f.default.Messages.ACTIVITY_FEED_CARD_GDPR_BUTTON_YES
      }), (0, a.jsx)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        size: i.Button.Sizes.SMALL,
        onClick: () => n(c.ContentDismissActionType.DISMISS),
        look: i.Button.Looks.LINK,
        children: f.default.Messages.NO_THANKS
      })]
    })]
  })
}