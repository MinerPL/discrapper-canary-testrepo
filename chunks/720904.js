"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("735250");
n("470079");
var i = n("803997"),
  l = n.n(i),
  s = n("442837"),
  u = n("481060"),
  r = n("543241"),
  o = n("222677"),
  d = n("995774"),
  c = n("665906"),
  f = n("695346"),
  E = n("496675"),
  M = n("768581"),
  m = n("176354"),
  g = n("981631"),
  S = n("185923"),
  v = n("689938"),
  p = n("961688");
let I = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function h(e) {
  var t;
  let {
    emoji: n,
    isFocused: i
  } = e, {
    animated: s,
    src: r,
    surrogates: o
  } = n;
  return null == r && null != n.id ? r = M.default.getEmojiURL({
    id: n.id,
    animated: !!s,
    size: 20
  }) : null == r && (r = m.default.getURL(o)), (0, a.jsx)(u.Tooltip, {
    text: n.allNamesString,
    hideOnClick: !0,
    spacing: 16,
    forceOpen: i,
    children: e => (0, a.jsx)("div", {
      "aria-label": v.default.Messages.ADD_REACTION_NAMED.format({
        emojiName: n.name
      }),
      className: l()(p.button, {
        [p.focused]: i
      }),
      ...e,
      children: null == r || "" === r.trim() ? (0, a.jsx)("span", {
        className: l()("emoji", "emoji-text", p.icon),
        ...e,
        children: o
      }) : (0, a.jsx)("img", {
        className: p.icon,
        src: r,
        alt: ""
      })
    })
  }, null !== (t = n.id) && void 0 !== t ? t : n.name)
}

function A(e, t) {
  let n = (0, r.useEmojiInPriorityOrder)(t.guild_id).filter(e => {
    var n;
    return !(e.useSpriteSheet && I.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !m.default.isEmojiPremiumLocked({
      emoji: e,
      channel: t,
      intention: S.EmojiIntention.REACTION
    })
  });
  n.length > 4 && (n.length = 4);
  let i = f.RenderReactions.useSetting(),
    l = (0, c.useIsActiveChannelOrUnarchivableThread)(t),
    M = (0, s.useStateFromStores)([E.default], () => i && l && (t.isPrivate() || E.default.can(g.Permissions.ADD_REACTIONS, t)), [t, l, i]),
    v = n => {
      (0, o.addReaction)(t.id, e.id, (0, d.toReactionEmoji)(n), void 0)
    };
  return M && n.length > 0 ? (0, a.jsx)(u.MenuGroup, {
    className: p.wrapper,
    children: n.map((e, t) => {
      var n;
      return (0, a.jsx)(u.MenuItem, {
        id: "quickreact-".concat(null !== (n = e.id) && void 0 !== n ? n : t),
        render: t => {
          let {
            isFocused: n
          } = t;
          return (0, a.jsx)(h, {
            emoji: e,
            isFocused: n
          })
        },
        action: () => v(e),
        dontCloseOnActionIfHoldingShiftKey: !0
      }, t)
    })
  }) : null
}