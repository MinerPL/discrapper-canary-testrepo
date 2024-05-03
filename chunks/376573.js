"use strict";
t.r(n), t.d(n, {
  default: function() {
    return h
  }
});
var a = t("735250");
t("470079");
var i = t("852229"),
  o = t("399606"),
  l = t("481060"),
  s = t("239091"),
  c = t("367907"),
  u = t("496675"),
  r = t("626135"),
  d = t("934415"),
  _ = t("629481"),
  p = t("981631"),
  C = t("176505"),
  I = t("689938");

function h(e) {
  let {
    guild: n,
    onSelect: t
  } = e, h = (0, o.useStateFromStores)([u.default], () => null != n && u.default.can(p.Permissions.ADMINISTRATOR, n));
  return (0, a.jsx)(l.Menu, {
    navId: "guild-shop-context",
    "aria-label": I.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
    onClose: s.closeContextMenu,
    onSelect: t,
    children: (0, a.jsx)(l.MenuGroup, {
      children: (0, a.jsx)(l.MenuItem, {
        id: "role-subscription-copy-link",
        label: I.default.Messages.COPY_LINK,
        action: () => {
          r.default.track(p.AnalyticEvents.GUILD_SHOP_COPY_LINK, {
            ...(0, c.collectGuildAnalyticsMetadata)(n.id),
            is_admin_or_owner: h,
            copy_location: _.GuildShopCopyLinkLocations.CHANNEL_ROW_CONTEXT_MENU
          }), (0, i.copy)((0, d.getChannelPermalink)(n.id, C.StaticChannelRoute.GUILD_SHOP))
        }
      })
    })
  })
}