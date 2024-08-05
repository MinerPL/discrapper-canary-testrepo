s.d(t, {
  Z: function() {
return N;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(481060),
  l = s(906732),
  c = s(864106),
  d = s(1585),
  _ = s(580747),
  E = s(345861),
  u = s(150039),
  T = s(993413),
  I = s(689938),
  S = s(566091);

function N(e) {
  let {
user: t,
guild: s,
className: i,
sectionTitle: E,
forcedDivider: N = !1,
withTutorial: m = !1,
isTryItOutFlow: A = !1
  } = e, {
analyticsLocations: g
  } = (0, l.ZP)(), h = null != s, {
userAvatarDecoration: O,
guildAvatarDecoration: p,
pendingAvatarDecoration: R,
pendingErrors: x
  } = (0, u.$U)(t, s), M = (0, _.Z)('enable_avatar_decoration_uploads'), f = a.useCallback(() => (0, d.ps)({
analyticsLocations: g,
isTryItOutFlow: A,
guild: s
  }), [
g,
A,
s
  ]), D = A || void 0 !== R ? null != R : (h ? p : O) != null, P = m ? o.ShinyButton : o.Button;
  return (0, n.jsxs)(T.Z, {
className: i,
forcedDivider: N,
hasBackground: !0,
title: E,
errors: x,
children: [
  (0, n.jsxs)('div', {
    className: S.buttonsContainer,
    children: [
      (0, n.jsx)(P, {
        size: o.Button.Sizes.SMALL,
        onClick: f,
        className: r()({
          [S.buttonHighlighted]: m
        }),
        children: I.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }),
      D && (0, n.jsx)(o.Button, {
        className: S.removeButton,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        size: o.Button.Sizes.SMALL,
        onClick: function() {
          (0, u.PO)(null == s ? void 0 : s.id, null);
        },
        children: (0, c.ad)(t, s) ? I.Z.Messages.USER_SETTINGS_REMOVE_PER_GUILD_AVATAR_DECORATION : I.Z.Messages.USER_SETTINGS_REMOVE_AVATAR_DECORATION
      })
    ]
  }),
  t.isStaff() && M && (0, n.jsx)(C, {
    user: t
  })
]
  });
}
let C = e => {
  let {
user: t
  } = e;
  return (0, n.jsxs)('div', {
className: S.overrideButtonsContainer,
children: [
  (0, n.jsx)(o.Text, {
    variant: 'text-xs/bold',
    children: 'STAFF ONLY and Experimental. Upload a decoration to view throughout the app.'
  }),
  (0, n.jsx)(E.Z, {
    onChange: e => {
      null != e && (t.avatarDecoration = {
        asset: e,
        skuID: 'PALUE000000001'
      });
    },
    buttonCTA: 'Upload Override'
  })
]
  });
};