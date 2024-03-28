"use strict";
t.r(n);
var a = t("735250");
t("470079");
var l = t("481060"),
  u = t("493683"),
  s = t("239091"),
  r = t("883385"),
  i = t("108843"),
  d = t("947440"),
  o = t("100527"),
  f = t("299206"),
  c = t("895563"),
  M = t("212205"),
  h = t("62420"),
  _ = t("314897"),
  E = t("858687"),
  m = t("461535"),
  C = t("776568"),
  I = t("981631"),
  v = t("689938");
n.default = (0, i.default)((0, r.default)(function(e) {
  let {
    channel: n,
    selected: r,
    onSelect: i
  } = e, o = n.isOwner(_.default.getId()), I = (0, m.default)(n), A = (0, C.default)(n), g = (0, E.default)(n, r), p = (0, f.default)({
    id: n.id,
    label: v.default.Messages.COPY_ID_CHANNEL
  }), T = (0, d.default)(n), G = (0, c.useAddToFavoritesItem)(n), O = (0, c.useRemoveFromFavoritesItem)(n), F = (0, M.default)(n), N = (0, h.default)(n);
  return null == n || n.isManaged() ? null : (0, a.jsxs)(l.Menu, {
    navId: "gdm-context",
    "aria-label": v.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onClose: s.closeContextMenu,
    onSelect: i,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: I
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [G, F, N]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [o ? (0, a.jsx)(l.MenuItem, {
        id: "instant-invites",
        label: v.default.Messages.INSTANT_INVITES,
        action: () => (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("49237"), t.e("99387"), t.e("6901")]).then(t.bind(t, "892382"));
          return t => (0, a.jsx)(e, {
            channelId: n.id,
            ...t
          })
        })
      }) : null, (0, a.jsx)(l.MenuControlItem, {
        id: "change-icon",
        showDefaultFocus: !0,
        control: (e, t) => (0, a.jsx)(l.MenuImageUploadControl, {
          onChange: t => {
            var a;
            u.default.setIcon(n.id, t), null === (a = e.onClose) || void 0 === a || a.call(e)
          },
          multiple: !1,
          "aria-label": v.default.Messages.CHANGE_ICON,
          ...e,
          ref: t
        }),
        label: v.default.Messages.CHANGE_ICON
      }), null != n.icon ? (0, a.jsx)(l.MenuItem, {
        id: "remove-icon",
        label: v.default.Messages.REMOVE_ICON,
        action: () => u.default.setIcon(n.id, null)
      }) : null]
    }), (0, a.jsx)(l.MenuGroup, {
      children: T
    }), (0, a.jsx)(l.MenuGroup, {
      children: A
    }), (0, a.jsx)(l.MenuGroup, {
      children: g
    }), (0, a.jsx)(l.MenuGroup, {
      children: O
    }), (0, a.jsx)(l.MenuGroup, {
      children: p
    })]
  })
}, {
  object: I.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GROUP_DM_MENU])