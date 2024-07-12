t.d(n, {
  Z: function() {
return _;
  }
}), t(724458), t(47120);
var i = t(735250),
  a = t(470079),
  r = t(442837),
  l = t(481060),
  o = t(668781),
  s = t(79390),
  u = t(222677),
  c = t(665906),
  d = t(496675),
  E = t(768581),
  M = t(176354),
  I = t(981631),
  m = t(689938);

function _(e, n) {
  let {
reducedMotion: t
  } = a.useContext(l.AccessibilityPreferencesContext), _ = (0, c.$R)(n), g = (0, r.e7)([d.Z], () => d.Z.can(I.Plq.MANAGE_MESSAGES, n) && _, [
n,
_
  ]), f = e.reactions.reduce((e, n) => {
var t;
return (null === (t = n.count_details) || void 0 === t ? void 0 : t.vote) != null || null != e.find(e => null != e.id && e.id === n.emoji.id || e.name === n.emoji.name) ? e : [
  ...e,
  n.emoji
];
  }, []), Z = (t, i) => {
t.shiftKey ? (0, u.$E)(n.id, e.id, i) : o.Z.show({
  title: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
  body: m.Z.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
  confirmText: m.Z.Messages.YES_TEXT,
  cancelText: m.Z.Messages.NO_TEXT,
  onConfirm: () => {
    (0, u.$E)(n.id, e.id, i);
  }
});
  };
  return !g || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, s.eQ)(e) ? null : (0, i.jsx)(l.MenuItem, {
id: 'remove-emoji-reactions',
label: m.Z.Messages.REMOVE_EMOJI_REACTIONS,
color: 'danger',
children: f.map(e => {
  var n, a;
  return (0, i.jsx)(l.MenuItem, {
    id: 'remove-emoji-reactions-'.concat(null !== (n = e.name) && void 0 !== n ? n : e.id),
    label: null == e.id ? e.name : ':'.concat(e.name, ':'),
    action: n => Z(n, e),
    imageUrl: n => {
      var i;
      let {
        isFocused: a
      } = n;
      return null != e.id ? E.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated && (!t.enabled || a),
        size: 18
      }) : M.ZP.getURL(null !== (i = e.name) && void 0 !== i ? i : '');
    },
    dontCloseOnActionIfHoldingShiftKey: !0
  }, null !== (a = e.name) && void 0 !== a ? a : e.id);
})
  });
}