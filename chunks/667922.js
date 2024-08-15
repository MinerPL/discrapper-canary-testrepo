t.d(n, {
  Z: function() {
return Z;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(442837),
  r = t(481060),
  s = t(543241),
  o = t(222677),
  u = t(995774),
  d = t(665906),
  c = t(695346),
  E = t(496675),
  M = t(768581),
  I = t(585483),
  m = t(176354),
  _ = t(981631),
  g = t(185923),
  f = t(689938);

function Z(e, n) {
  let {
reducedMotion: t
  } = a.useContext(r.AccessibilityPreferencesContext), Z = (0, d.$R)(n), S = (0, l.e7)([E.Z], () => (n.isPrivate() || E.Z.can(_.Plq.ADD_REACTIONS, n)) && Z, [
n,
Z
  ]), T = (0, s.MZ)(n.getGuildId());
  if (!c.nc.getSetting() || !S || e.type === _.uaV.GUILD_INVITE_REMINDER)
return null;
  let v = T.filter(e => !m.ZP.isEmojiFilteredOrLocked({
emoji: e,
channel: n,
intention: g.Hz.REACTION
  })).slice(0, 12).map((a, l) => {
var s, d;
return (0, i.jsx)(r.MenuItem, {
  color: 'default',
  id: null !== (d = null !== (s = a.id) && void 0 !== s ? s : a.optionallyDiverseSequence) && void 0 !== d ? d : a.name,
  label: ':'.concat(a.name, ':'),
  imageUrl: e => {
    var n;
    let {
      isFocused: i
    } = e;
    return null != a.id ? M.ZP.getEmojiURL({
      id: a.id,
      animated: a.animated && (!t.enabled || i),
      size: 18
    }) : m.ZP.getURL(null !== (n = a.optionallyDiverseSequence) && void 0 !== n ? n : '');
  },
  action: () => {
    (0, o.rU)(n.id, e.id, (0, u.g1)(a), o.TW.MESSAGE_CONTEXT_MENU);
  },
  dontCloseOnActionIfHoldingShiftKey: !0
}, l);
  });
  return (0, i.jsx)(r.MenuItem, {
id: 'add-reaction',
label: f.Z.Messages.ADD_REACTION,
action: () => {
  I.S.dispatchKeyed(_.LPv.TOGGLE_REACTION_POPOUT, e.id, {
    emojiPicker: !0
  });
},
color: 'default',
children: (0, i.jsxs)(i.Fragment, {
  children: [
    v,
    (0, i.jsx)(r.MenuSeparator, {}),
    (0, i.jsx)(r.MenuItem, {
      color: 'default',
      id: 'other-reactions',
      label: f.Z.Messages.VIEW_MORE,
      icon: r.ReactionIcon,
      action: () => {
        I.S.dispatchKeyed(_.LPv.TOGGLE_REACTION_POPOUT, e.id, {
          emojiPicker: !0
        });
      }
    })
  ]
})
  });
}