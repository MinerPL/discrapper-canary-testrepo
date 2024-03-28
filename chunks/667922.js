"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("735250"),
  i = n("470079"),
  l = n("442837"),
  s = n("481060"),
  u = n("543241"),
  r = n("222677"),
  o = n("995774"),
  d = n("665906"),
  c = n("695346"),
  f = n("496675"),
  E = n("250690"),
  M = n("768581"),
  m = n("585483"),
  g = n("176354"),
  S = n("981631"),
  v = n("185923"),
  p = n("689938");

function I(e, t) {
  let {
    reducedMotion: n
  } = i.useContext(s.AccessibilityPreferencesContext), I = (0, d.useIsActiveChannelOrUnarchivableThread)(t), h = (0, l.useStateFromStores)([f.default], () => (t.isPrivate() || f.default.can(S.Permissions.ADD_REACTIONS, t)) && I, [t, I]), A = (0, u.useEmojiInPriorityOrder)(t.getGuildId());
  if (!c.RenderReactions.getSetting() || !h || e.type === S.MessageTypes.GUILD_INVITE_REMINDER) return null;
  let _ = A.filter(e => !g.default.isEmojiFilteredOrLocked({
    emoji: e,
    channel: t,
    intention: v.EmojiIntention.REACTION
  })).slice(0, 12).map((i, l) => {
    var u, d, c;
    return (0, a.jsx)(s.MenuItem, {
      color: "default",
      id: null !== (c = null !== (d = null !== (u = i.id) && void 0 !== u ? u : i.optionallyDiverseSequence) && void 0 !== d ? d : i.name) && void 0 !== c ? c : ":".concat(i.name, ":"),
      label: null == i.id ? i.name : ":".concat(i.name, ":"),
      imageUrl: e => {
        var t;
        let {
          isFocused: a
        } = e;
        return null != i.id ? M.default.getEmojiURL({
          id: i.id,
          animated: i.animated && (!n.enabled || a),
          size: 18
        }) : g.default.getURL(null !== (t = i.optionallyDiverseSequence) && void 0 !== t ? t : "")
      },
      action: () => {
        (0, r.addReaction)(t.id, e.id, (0, o.toReactionEmoji)(i), void 0)
      },
      dontCloseOnActionIfHoldingShiftKey: !0
    }, l)
  });
  return (0, a.jsx)(s.MenuItem, {
    id: "add-reaction",
    label: p.default.Messages.ADD_REACTION,
    action: () => {
      m.ComponentDispatch.dispatchKeyed(S.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
        emojiPicker: !0
      })
    },
    color: "default",
    children: (0, a.jsxs)(a.Fragment, {
      children: [_, (0, a.jsx)(s.MenuSeparator, {}), (0, a.jsx)(s.MenuItem, {
        color: "default",
        id: "other-reactions",
        label: p.default.Messages.VIEW_MORE,
        icon: E.default,
        action: () => {
          m.ComponentDispatch.dispatchKeyed(S.ComponentActionsKeyed.TOGGLE_REACTION_POPOUT, e.id, {
            emojiPicker: !0
          })
        }
      })]
    })
  })
}