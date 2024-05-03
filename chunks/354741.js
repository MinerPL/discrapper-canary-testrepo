"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  u = n("493683"),
  i = n("239091"),
  s = n("883385"),
  o = n("108843"),
  r = n("947440"),
  d = n("100527"),
  c = n("299206"),
  f = n("895563"),
  M = n("212205"),
  _ = n("62420"),
  C = n("122074"),
  I = n("314897"),
  m = n("858687"),
  h = n("461535"),
  E = n("776568"),
  N = n("981631"),
  S = n("689938");
t.default = (0, o.default)((0, s.default)(function(e) {
  let {
    channel: t,
    selected: s,
    onSelect: o
  } = e, d = t.isOwner(I.default.getId()), T = (0, h.default)(t), v = (0, E.default)(t), A = (0, C.default)(N.ZERO_STRING_GUILD_ID, t.id), O = (0, m.default)(t, s), g = (0, c.default)({
    id: t.id,
    label: S.default.Messages.COPY_ID_CHANNEL
  }), p = (0, r.default)(t), x = (0, f.useAddToFavoritesItem)(t), U = (0, f.useRemoveFromFavoritesItem)(t), G = (0, M.default)(t), F = (0, _.default)(t);
  return null == t || t.isManaged() ? null : (0, a.jsxs)(l.Menu, {
    navId: "gdm-context",
    "aria-label": S.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onClose: i.closeContextMenu,
    onSelect: o,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: T
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [x, G, F]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [d ? (0, a.jsx)(l.MenuItem, {
        id: "instant-invites",
        label: S.default.Messages.INSTANT_INVITES,
        action: () => (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("6901")]).then(n.bind(n, "892382"));
          return n => (0, a.jsx)(e, {
            channelId: t.id,
            ...n
          })
        })
      }) : null, (0, a.jsx)(l.MenuControlItem, {
        id: "change-icon",
        showDefaultFocus: !0,
        control: (e, n) => (0, a.jsx)(l.MenuImageUploadControl, {
          onChange: n => {
            var a;
            u.default.setIcon(t.id, n), null === (a = e.onClose) || void 0 === a || a.call(e)
          },
          multiple: !1,
          "aria-label": S.default.Messages.CHANGE_ICON,
          ...e,
          ref: n
        }),
        label: S.default.Messages.CHANGE_ICON
      }), null != t.icon ? (0, a.jsx)(l.MenuItem, {
        id: "remove-icon",
        label: S.default.Messages.REMOVE_ICON,
        action: () => u.default.setIcon(t.id, null)
      }) : null]
    }), (0, a.jsx)(l.MenuGroup, {
      children: p
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [v, A]
    }), (0, a.jsx)(l.MenuGroup, {
      children: O
    }), (0, a.jsx)(l.MenuGroup, {
      children: U
    }), (0, a.jsx)(l.MenuGroup, {
      children: g
    })]
  })
}, {
  object: N.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.GROUP_DM_MENU])