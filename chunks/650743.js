n.d(t, {
  Z: function() {
return A;
  }
});
var r = n(735250);
n(470079);
var i = n(399606),
  a = n(704215),
  o = n(481060),
  s = n(596454),
  l = n(607070),
  u = n(605236),
  c = n(880949),
  d = n(28546),
  _ = n(65029),
  E = n(430824),
  f = n(556296),
  h = n(451478),
  p = n(358085),
  m = n(13140),
  I = n(763296),
  T = n(981631),
  g = n(689938),
  S = n(996293);

function A(e) {
  let {
soundboardSound: t,
closePicker: A
  } = e, N = (0, d.Iu)(e => e.searchQuery), v = (0, i.e7)([I.Z], () => null != t && I.Z.isFavoriteSound(t.soundId)), O = (0, i.e7)([E.Z], () => E.Z.getGuild(null == t ? void 0 : t.guildId)), R = (0, i.e7)([l.Z], () => l.Z.useReducedMotion, []), C = (0, i.e7)([h.Z], () => h.Z.isFocused()), y = (0, i.e7)([f.Z], () => f.Z.getKeybindForAction(T.kg4.SOUNDBOARD_HOLD));
  if (null != t && N.length > 0)
return (0, r.jsx)(_.Z, {
  graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, r.jsx)(s.Z, {
    emojiId: t.emojiId,
    emojiName: t.emojiName,
    className: S.emoji
  }) : (0, r.jsx)(o.ImageIcon, {
    size: 'md',
    color: 'currentColor',
    className: S.emoji
  }),
  graphicSecondary: null != O ? (0, r.jsx)(c.Z, {
    guild: O,
    shouldAnimate: !R && C
  }) : null,
  titlePrimary: t.name,
  titleSecondary: null == O ? void 0 : O.name,
  isFavorite: v
});
  let D = () => {
  A(), (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e('5551').then(n.bind(n, 355453));
    return t => (0, r.jsx)(e, {
      ...t
    });
  });
},
L = (0, u.un)(a.z.SOUNDBOARD_KEYBIND_TIP),
b = null != y && (0, p.isWindows)() && !L ? g.Z.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
  keybind: (0, m.BB)(y.shortcut, !0),
  openSettingsHook: (e, t) => (0, r.jsx)(o.Anchor, {
    onClick: D,
    children: e
  }, t)
}) : null;
  return null == b ? null : (0, r.jsxs)('div', {
className: S.keybindHint,
children: [
  (0, r.jsx)(o.CircleExclamationPointIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    color: 'currentColor',
    className: S.warningIcon
  }),
  (0, r.jsx)(o.Text, {
    variant: 'text-sm/medium',
    color: 'text-normal',
    className: S.keybindHintText,
    children: b
  }),
  (0, r.jsx)(o.Clickable, {
    className: S.closeButton,
    onClick: () => (0, u.EW)(a.z.SOUNDBOARD_KEYBIND_TIP),
    children: (0, r.jsx)(o.CloseSmallIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  })
]
  });
}