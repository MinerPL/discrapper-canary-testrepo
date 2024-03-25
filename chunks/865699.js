"use strict";
n.r(t), n.d(t, {
  InviteErrorMessage: function() {
    return c
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("592407"),
  r = n("957255"),
  u = n("49111"),
  o = n("782340"),
  d = n("696862");

function c(e) {
  let {
    guild: t,
    error: n,
    onClose: c
  } = e, h = t.id, f = a.useCallback(() => {
    c(), i.default.open(h, u.GuildSettingsSections.INSTANT_INVITES)
  }, [h, c]), I = a.useCallback(e => (0, l.jsx)(s.Clickable, {
    className: d.errorLink,
    onClick: f,
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [f]), g = a.useCallback(e => (0, l.jsx)(s.Anchor, {
    href: u.MarketingURLs.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), E = n.code !== u.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : r.default.can(u.Permissions.MANAGE_GUILD, t) ? o.default.Messages.TOO_MANY_INVITES_ERROR.format({
    inviteListHook: I,
    inviteHelpHook: g
  }) : o.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
  return (0, l.jsx)(s.Text, {
    className: d.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: E
  })
}