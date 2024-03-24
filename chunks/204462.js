"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983");
n("884691");
var i = n("414456"),
  l = n.n(i),
  s = n("446674"),
  u = n("77078"),
  r = n("788506"),
  d = n("166257"),
  o = n("432173"),
  c = n("300322"),
  f = n("845579"),
  E = n("957255"),
  m = n("315102"),
  M = n("402671"),
  g = n("49111"),
  p = n("958706"),
  S = n("782340"),
  I = n("755640");
let v = ["slight_smile", "frowning", "smile", "stuck_out_tongue", "wink"];

function h(e) {
  var t;
  let {
    emoji: n,
    isFocused: i
  } = e, {
    animated: s,
    src: r,
    surrogates: d
  } = n;
  return null == r && null != n.id ? r = m.default.getEmojiURL({
    id: n.id,
    animated: !!s,
    size: 20
  }) : null == r && (r = M.default.getURL(d)), (0, a.jsx)(u.Tooltip, {
    text: n.allNamesString,
    hideOnClick: !0,
    spacing: 16,
    forceOpen: i,
    children: e => (0, a.jsx)("div", {
      "aria-label": S.default.Messages.ADD_REACTION_NAMED.format({
        emojiName: n.name
      }),
      className: l(I.button, {
        [I.focused]: i
      }),
      ...e,
      children: null == r || "" === r.trim() ? (0, a.jsx)("span", {
        className: l("emoji", "emoji-text", I.icon),
        ...e,
        children: d
      }) : (0, a.jsx)("img", {
        className: I.icon,
        src: r,
        alt: ""
      })
    })
  }, null !== (t = n.id) && void 0 !== t ? t : n.name)
}

function A(e, t) {
  let n = (0, r.useEmojiInPriorityOrder)(t.guild_id),
    i = n.filter(e => {
      var n;
      return !(e.useSpriteSheet && v.indexOf(null !== (n = e.uniqueName) && void 0 !== n ? n : "") >= 0) && !M.default.isEmojiPremiumLocked({
        emoji: e,
        channel: t,
        intention: p.EmojiIntention.REACTION
      })
    });
  i.length > 4 && (i.length = 4);
  let l = f.RenderReactions.useSetting(),
    m = (0, c.useIsActiveChannelOrUnarchivableThread)(t),
    S = (0, s.useStateFromStores)([E.default], () => l && m && (t.isPrivate() || E.default.can(g.Permissions.ADD_REACTIONS, t)), [t, m, l]),
    A = n => {
      (0, d.addReaction)(t.id, e.id, (0, o.toReactionEmoji)(n), void 0)
    };
  return S && i.length > 0 ? (0, a.jsx)(u.MenuGroup, {
    className: I.wrapper,
    children: i.map((e, t) => {
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
        action: () => A(e),
        dontCloseOnActionIfHoldingShiftKey: !0
      }, t)
    })
  }) : null
}