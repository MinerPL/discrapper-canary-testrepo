"use strict";
n.r(t);
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("493683"),
  u = n("239091"),
  s = n("883385"),
  d = n("108843"),
  o = n("947440"),
  r = n("100527"),
  c = n("299206"),
  f = n("895563"),
  I = n("212205"),
  _ = n("62420"),
  p = n("122074"),
  S = n("314897"),
  T = n("858687"),
  E = n("461535"),
  A = n("776568"),
  N = n("981631"),
  m = n("689938");
t.default = (0, d.default)((0, s.default)(function(e) {
  let {
    channel: t,
    selected: s,
    onSelect: d
  } = e, r = t.isOwner(S.default.getId()), C = (0, E.default)(t), v = (0, A.default)(t), M = (0, p.useCustomNotificationSoundDMContextMenuItem)(N.ZERO_STRING_GUILD_ID, t.id, "top"), h = (0, T.default)(t, s), y = (0, c.default)({
    id: t.id,
    label: m.default.Messages.COPY_ID_CHANNEL
  }), O = (0, o.default)(t), g = (0, f.useAddToFavoritesItem)(t), x = (0, f.useRemoveFromFavoritesItem)(t), b = (0, I.default)(t), U = (0, _.default)(t);
  return null == t || t.isManaged() ? null : (0, a.jsxs)(i.Menu, {
    navId: "gdm-context",
    "aria-label": m.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onClose: u.closeContextMenu,
    onSelect: d,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: C
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [g, b, U]
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [r ? (0, a.jsx)(i.MenuItem, {
        id: "instant-invites",
        label: m.default.Messages.INSTANT_INVITES,
        action: () => (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("6901")]).then(n.bind(n, "892382"));
          return n => (0, a.jsx)(e, {
            channelId: t.id,
            ...n
          })
        })
      }) : null, (0, a.jsx)(i.MenuControlItem, {
        id: "change-icon",
        showDefaultFocus: !0,
        control: (e, n) => (0, a.jsx)(i.MenuImageUploadControl, {
          onChange: n => {
            var a;
            l.default.setIcon(t.id, n), null === (a = e.onClose) || void 0 === a || a.call(e)
          },
          multiple: !1,
          "aria-label": m.default.Messages.CHANGE_ICON,
          ...e,
          ref: n
        }),
        label: m.default.Messages.CHANGE_ICON
      }), null != t.icon ? (0, a.jsx)(i.MenuItem, {
        id: "remove-icon",
        label: m.default.Messages.REMOVE_ICON,
        action: () => l.default.setIcon(t.id, null)
      }) : null]
    }), (0, a.jsx)(i.MenuGroup, {
      children: O
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [v, M]
    }), (0, a.jsx)(i.MenuGroup, {
      children: h
    }), (0, a.jsx)(i.MenuGroup, {
      children: x
    }), (0, a.jsx)(i.MenuGroup, {
      children: y
    })]
  })
}, {
  object: N.AnalyticsObjects.CONTEXT_MENU
}), [r.default.CONTEXT_MENU, r.default.GROUP_DM_MENU])