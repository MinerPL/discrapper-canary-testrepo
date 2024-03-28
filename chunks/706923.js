"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var l = s("735250");
s("470079");
var n = s("399606"),
  a = s("481060"),
  o = s("904245"),
  i = s("434404"),
  r = s("592125"),
  u = s("812545"),
  d = s("981631"),
  c = s("689938"),
  f = s("131865");

function S(e) {
  let {
    channelId: t,
    messageId: s,
    transitionState: S,
    onClose: _
  } = e, g = (0, n.useStateFromStores)([r.default], () => r.default.getChannel(t)), [F, E] = (0, u.default)(t), C = null == g ? void 0 : g.guild_id;
  return (0, l.jsx)(a.ConfirmModal, {
    header: c.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
    confirmText: c.default.Messages.CONFIRM,
    cancelText: c.default.Messages.CANCEL,
    confirmButtonColor: a.Button.Colors.BRAND,
    onConfirm: () => o.default.crosspostMessage(t, s),
    transitionState: S,
    onClose: _,
    children: (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      className: f.spacing,
      children: E ? (0, l.jsx)(a.Spinner, {}) : null != F && null != F.guildsFollowing && F.guildsFollowing > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.Text, {
          className: f.spacing,
          variant: "text-sm/normal",
          children: c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY_REACH.format({
            numGuildsFollowing: F.guildsFollowing
          })
        }), (0, l.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY_SETTINGS_INSIGHTS.format({
            onClick: () => {
              null != C && null != _ && (_(), i.default.open(C, d.GuildSettingsSections.ANALYTICS))
            }
          })
        })]
      }) : c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY
    })
  })
}