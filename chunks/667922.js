t.d(n, {
  Z: function() {
return Z;
  }
});
var i = t(735250),
  a = t(470079),
  r = t(442837),
  l = t(481060),
  o = t(543241),
  s = t(222677),
  u = t(995774),
  c = t(665906),
  d = t(695346),
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
  } = a.useContext(l.AccessibilityPreferencesContext), Z = (0, c.$R)(n), S = (0, r.e7)([E.Z], () => (n.isPrivate() || E.Z.can(_.Plq.ADD_REACTIONS, n)) && Z, [
n,
Z
  ]), v = (0, o.MZ)(n.getGuildId());
  if (!d.nc.getSetting() || !S || e.type === _.uaV.GUILD_INVITE_REMINDER)
return null;
  let A = v.filter(e => !m.ZP.isEmojiFilteredOrLocked({
emoji: e,
channel: n,
intention: g.Hz.REACTION
  })).slice(0, 12).map((a, r) => {
var o, c;
return (0, i.jsx)(l.MenuItem, {
  color: 'default',
  id: null !== (c = null !== (o = a.id) && void 0 !== o ? o : a.optionallyDiverseSequence) && void 0 !== c ? c : a.name,
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
    (0, s.rU)(n.id, e.id, (0, u.g1)(a), void 0);
  },
  dontCloseOnActionIfHoldingShiftKey: !0
}, r);
  });
  return (0, i.jsx)(l.MenuItem, {
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
    A,
    (0, i.jsx)(l.MenuSeparator, {}),
    (0, i.jsx)(l.MenuItem, {
      color: 'default',
      id: 'other-reactions',
      label: f.Z.Messages.VIEW_MORE,
      icon: l.ReactionIcon,
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