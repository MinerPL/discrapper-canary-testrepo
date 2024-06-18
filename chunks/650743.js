"use strict";
n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var r = n(399606),
  s = n(704215),
  o = n(481060),
  a = n(596454),
  l = n(607070),
  u = n(605236),
  _ = n(880949),
  d = n(28546),
  c = n(65029),
  E = n(430824),
  I = n(556296),
  T = n(451478),
  h = n(465670),
  S = n(84017),
  f = n(759231),
  N = n(358085),
  A = n(13140),
  m = n(763296),
  O = n(981631),
  R = n(689938),
  C = n(144270);

function p(e) {
  let {
    soundboardSound: t,
    closePicker: p
  } = e, g = (0, d.Iu)(e => e.searchQuery), L = (0, r.e7)([m.Z], () => null != t && m.Z.isFavoriteSound(t.soundId)), v = (0, r.e7)([E.Z], () => E.Z.getGuild(null == t ? void 0 : t.guildId)), D = (0, r.e7)([l.Z], () => l.Z.useReducedMotion, []), M = (0, r.e7)([T.Z], () => T.Z.isFocused()), P = (0, r.e7)([I.Z], () => I.Z.getKeybindForAction(O.kg4.SOUNDBOARD_HOLD));
  if (null != t && g.length > 0) return (0, i.jsx)(c.Z, {
    graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, i.jsx)(a.Z, {
      emojiId: t.emojiId,
      emojiName: t.emojiName,
      className: C.emoji
    }) : (0, i.jsx)(S.Z, {
      className: C.emoji
    }),
    graphicSecondary: null != v ? (0, i.jsx)(_.Z, {
      guild: v,
      shouldAnimate: !D && M
    }) : null,
    titlePrimary: t.name,
    titleSecondary: null == v ? void 0 : v.name,
    isFavorite: L
  });
  let y = () => {
      p(), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("54626")]).then(n.bind(n, 355453));
        return t => (0, i.jsx)(e, {
          ...t
        })
      })
    },
    U = (0, u.un)(s.z.SOUNDBOARD_KEYBIND_TIP),
    b = null != P && (0, N.isWindows)() && !U ? R.Z.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
      keybind: (0, A.BB)(P.shortcut, !0),
      openSettingsHook: (e, t) => (0, i.jsx)(o.Anchor, {
        onClick: y,
        children: e
      }, t)
    }) : null;
  return null == b ? null : (0, i.jsxs)("div", {
    className: C.keybindHint,
    children: [(0, i.jsx)(f.Z, {
      className: C.warningIcon
    }), (0, i.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-normal",
      className: C.keybindHintText,
      children: b
    }), (0, i.jsx)(o.Clickable, {
      className: C.closeButton,
      onClick: () => (0, u.EW)(s.z.SOUNDBOARD_KEYBIND_TIP),
      children: (0, i.jsx)(h.Z, {
        width: 16,
        height: 16
      })
    })]
  })
}