"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var u = t("735250");
t("470079");
var i = t("852229"),
  s = t("481060"),
  r = t("934415"),
  a = t("176505"),
  l = t("689938");

function o(e) {
  return (0, u.jsx)(s.MenuItem, {
    id: "role-subscription-copy-link",
    label: l.default.Messages.COPY_LINK,
    action: () => {
      (0, i.copy)((0, r.getChannelPermalink)(e, a.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
    }
  })
}