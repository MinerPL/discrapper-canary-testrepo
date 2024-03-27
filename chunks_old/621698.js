"use strict";
n.r(t), n.d(t, {
  MessageReactionsGroupWrapper: function() {
    return m
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("509043"),
  o = n("430568"),
  u = n("811425"),
  d = n("102873"),
  c = n("738107"),
  E = n("875978"),
  f = n("350134"),
  _ = n("159441"),
  T = n("450076");
let I = a.memo(function(e) {
    let t, n, {
        useChatFontScaling: a,
        hideEmoji: l,
        emoji: u,
        className: I,
        count: m,
        me: N,
        me_burst: p,
        burst_count: S,
        burst_colors: C,
        readOnly: A,
        isLurking: h,
        isGuest: g,
        isPendingMember: M,
        type: O
      } = e,
      R = O === E.ReactionTypes.BURST,
      L = (0, f.isMeReaction)(N, p, O),
      v = (0, d.useEmojiColorPalette)(R && null != C ? C : []),
      P = a ? T : _,
      D = R ? S : m,
      x = (0, c.getMinCounterWidth)(D, f.REACTION_MIN_WIDTH_DIGITS),
      y = {};
    if (R && null != v) {
      var U;
      let {
        accentColor: e,
        backgroundColor: s,
        opacity: a
      } = v, l = null !== (U = (0, r.hex2rgb)(null != s ? s : "", a)) && void 0 !== U ? U : "";
      L && (y.borderColor = s), y.background = l, t = e, n = e
    }
    let j = {
      minWidth: x,
      color: t,
      borderColor: n
    };
    return (0, s.jsxs)("div", {
      className: i(P.reaction, P.reactionInner, I, {
        [P.reactionMe]: L,
        [P.reactionReadOnly]: A && !h && !M && !g
      }),
      style: y,
      children: [(0, s.jsx)(o.default, {
        className: i({
          [P.hideEmoji]: l
        }),
        emojiId: u.id,
        emojiName: u.name,
        size: "reaction",
        animated: R && u.animated
      }), (0, s.jsx)("div", {
        className: P.reactionCount,
        style: j,
        children: D
      })]
    })
  }),
  m = a.memo(function(e) {
    let {
      showImmediate: t,
      reactions: n,
      ...l
    } = e, [i, r] = a.useState(!1), [o, d] = a.useTransition(), c = a.useCallback(e => {
      e && !i && !o && d(() => {
        r(!0)
      })
    }, [i, o]), _ = (0, u.useIsVisible)(c), T = (!i || o) && !t, m = T ? I : f.Reaction;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        ref: _
      }), n.map(e => {
        var t, n;
        return (0, s.jsx)(m, {
          ...l,
          ...e
        }, (t = e, "".concat(t.type === E.ReactionTypes.BURST ? "burst:" : "").concat(null !== (n = t.emoji.id) && void 0 !== n ? n : 0, ":").concat(t.emoji.name)))
      })]
    })
  })