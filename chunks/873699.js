"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("724458"), n("47120");
var a = n("735250"),
  i = n("470079"),
  l = n("442837"),
  s = n("481060"),
  u = n("668781"),
  r = n("79390"),
  o = n("222677"),
  d = n("665906"),
  c = n("496675"),
  f = n("768581"),
  E = n("176354"),
  M = n("981631"),
  m = n("689938");

function g(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(s.AccessibilityPreferencesContext), g = (0, d.useIsActiveChannelOrUnarchivableThread)(t), S = (0, l.useStateFromStores)([c.default], () => c.default.can(M.Permissions.MANAGE_MESSAGES, t) && g, [t, g]), v = e.reactions.reduce((e, t) => {
    var n;
    return (null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) != null || null != e.find(e => null != e.id && e.id === t.emoji.id || e.name === t.emoji.name) ? e : [...e, t.emoji]
  }, []), p = (n, a) => {
    n.shiftKey ? (0, o.removeEmojiReactions)(t.id, e.id, a) : u.default.show({
      title: m.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_TITLE,
      body: m.default.Messages.REMOVE_EMOJI_REACTIONS_CONFIRM_BODY,
      confirmText: m.default.Messages.YES_TEXT,
      cancelText: m.default.Messages.NO_TEXT,
      onConfirm: () => {
        (0, o.removeEmojiReactions)(t.id, e.id, a)
      }
    })
  };
  return !S || null == e.reactions || 0 === e.reactions.length || e.isPoll() && !(0, r.hasNonVoteReactions)(e) ? null : (0, a.jsx)(s.MenuItem, {
    id: "remove-emoji-reactions",
    label: m.default.Messages.REMOVE_EMOJI_REACTIONS,
    color: "danger",
    children: v.map(e => {
      var t, i;
      return (0, a.jsx)(s.MenuItem, {
        id: "remove-emoji-reactions-".concat(null !== (t = e.name) && void 0 !== t ? t : e.id),
        label: null == e.id ? e.name : ":".concat(e.name, ":"),
        action: t => p(t, e),
        imageUrl: t => {
          var a;
          let {
            isFocused: i
          } = t;
          return null != e.id ? f.default.getEmojiURL({
            id: e.id,
            animated: e.animated && (!n.enabled || i),
            size: 18
          }) : E.default.getURL(null !== (a = e.name) && void 0 !== a ? a : "")
        },
        dontCloseOnActionIfHoldingShiftKey: !0
      }, null !== (i = e.name) && void 0 !== i ? i : e.id)
    })
  })
}