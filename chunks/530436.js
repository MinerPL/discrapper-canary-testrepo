"use strict";
l.r(t), l.d(t, {
  InviteErrorMessage: function() {
    return c
  }
});
var a = l("735250"),
  n = l("470079"),
  s = l("481060"),
  r = l("434404"),
  i = l("496675"),
  d = l("981631"),
  u = l("689938"),
  o = l("651937");

function c(e) {
  let {
    guild: t,
    error: l,
    onClose: c
  } = e, E = t.id, _ = n.useCallback(() => {
    c(), r.default.open(E, d.GuildSettingsSections.INSTANT_INVITES)
  }, [E, c]), f = n.useCallback(e => (0, a.jsx)(s.Clickable, {
    className: o.errorLink,
    onClick: _,
    children: (0, a.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [_]), T = n.useCallback(e => (0, a.jsx)(s.Anchor, {
    href: d.MarketingURLs.INVITES_HELP,
    target: "_blank",
    children: (0, a.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), h = l.code !== d.AbortCodes.TOO_MANY_INVITES ? l.getAnyErrorMessage() : i.default.can(d.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
    inviteListHook: f,
    inviteHelpHook: T
  }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
  return (0, a.jsx)(s.Text, {
    className: o.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: h
  })
}