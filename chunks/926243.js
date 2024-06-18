"use strict";
n.d(t, {
  Z: function() {
    return C
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(239091),
  _ = n(607070),
  d = n(339085),
  c = n(906411),
  E = n(633302),
  I = n(691251),
  T = n(536442),
  h = n(912893),
  S = n(430824),
  f = n(358085),
  N = n(288406),
  A = n(689938),
  m = n(687901);
let O = (e, t) => "".concat(e, ":").concat(t),
  R = r.forwardRef(function(e, t) {
    let n, {
        emoji: r,
        isFavorite: s,
        isLargeSize: u,
        isMediumSize: _,
        isInspected: d,
        isDisabled: E,
        showPulse: T,
        columnIndex: h,
        rowIndex: f,
        size: O,
        surrogateCodePoint: R,
        allowAnimatedEmoji: C,
        selectedItemClassName: p,
        inNitroLockedSection: g,
        ...L
      } = e,
      v = (0, a.e7)([S.Z], () => r.type === c.B.GUILD ? S.Z.getGuild(r.guildId) : void 0, [r]);
    return (0, i.jsx)(l.FocusRing, {
      children: (0, i.jsx)("button", {
        ...L,
        className: o()(m.emojiItem, {
          [m.emojiItemLarge]: u,
          [m.emojiItemMedium]: _,
          [m.emojiItemSelected]: d,
          [null != p ? p : ""]: d,
          [m.showPulse]: T
        }),
        "data-type": I.S.EMOJI,
        "data-id": r.id,
        "data-name": r.name,
        ref: t,
        children: (0, i.jsx)(N.Z, {
          "aria-label": (n = r.allNamesString, ((null == v ? void 0 : v.name) != null && (n = A.Z.Messages.EMOJI_FROM_GUILD_LABEL.format({
            names: n,
            guildName: v.name
          })), s) ? A.Z.Messages.EMOJI_NAMES_WITH_FAVORITED.format({
            names: n
          }) : n),
          columnIndex: h,
          rowIndex: f,
          emoji: r,
          size: O,
          surrogateCodePoint: R,
          allowAnimatedEmoji: C,
          isLocked: E && !g
        })
      })
    })
  });

function C(e) {
  let {
    descriptor: t,
    emojiItemKey: s,
    isInspected: o,
    rowIndex: c,
    channelGuildId: I,
    onInspect: S,
    onSelect: N,
    isScrolling: m,
    isUsingKeyboardNavigation: C,
    showEmojiFavoriteTooltip: p,
    surrogateCodePoint: g,
    selectedItemClassName: L,
    getEmojiItemProps: v,
    isMediumSize: D,
    isLargeSize: M,
    pulseItemKey: P,
    allowAnimatedEmoji: y,
    setPulseItemKey: U,
    messageId: b,
    isBurstReaction: G,
    rowPosition: w,
    inNitroLockedSection: k
  } = e, [B, x] = r.useState(""), V = (0, a.e7)([_.Z], () => _.Z.useReducedMotion), Z = (0, a.e7)([d.Z], () => d.Z.getDisambiguatedEmojiContext(I), [I]), H = r.useRef(null), {
    emoji: F,
    size: Y,
    isDisabled: j,
    columnIndex: W
  } = t, K = e => {
    if (e.stopPropagation(), m.current || C.current) return;
    let n = e.altKey;
    n && !d.Z.getDisambiguatedEmojiContext().isFavoriteEmojiWithoutFetchingLatest(F) && U(s), (0, T.Kw)(T.v6.FAVORITE_EMOJI_TOOLTIP), N(t, {
      isFinalSelection: !e.shiftKey,
      toggleFavorite: n
    })
  }, z = () => {
    !m.current && !C.current && S(t)
  }, q = e => {
    (0, u.jW)(e, async () => {
      let {
        default: e
      } = await n.e("39010").then(n.bind(n, 269254));
      return t => (0, i.jsx)(e, {
        ...t
      })
    })
  }, X = function() {
    var e;
    let {
      onMouseEnter: t,
      onMouseLeave: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
      ref: a,
      tabIndex: l,
      onFocus: u,
      ..._
    } = null !== (e = v(W, c)) && void 0 !== e ? e : {};
    return (0, r.createElement)("li", {
      ..._,
      key: s,
      ref: H
    }, B !== O(W, c) && (0, i.jsx)(R, {
      ref: a,
      emoji: F,
      isFavorite: Z.isFavoriteEmojiWithoutFetchingLatest(F),
      isLargeSize: M,
      isMediumSize: D,
      isInspected: o,
      isDisabled: j,
      showPulse: P === s,
      allowAnimatedEmoji: y,
      onFocus: null != u ? u : z,
      onMouseMove: z,
      onMouseEnter: t,
      onMouseLeave: n,
      onClick: e => {
        if (null != H.current && null != w && null != b && !e.shiftKey && null != F.name && G && !V && y) {
          let e = null == F.id ? E.ZP.convertNameToSurrogate(F.name) : F.name,
            t = H.current.getBoundingClientRect();
          t.x = w.x + (W + 1) * Y, x(O(W, c)), (0, h.U)(b, e, F.id, t)
        }
        K(e)
      },
      onContextMenu: q,
      tabIndex: l,
      columnIndex: W,
      rowIndex: c,
      size: Y,
      surrogateCodePoint: g,
      selectedItemClassName: L,
      inNitroLockedSection: k
    }))
  };
  return p ? (0, i.jsx)(l.Tooltip, {
    text: A.Z.Messages.EMOJI_FAVORITE_TOOLTIP.format({
      key: (0, f.isMac)() ? "Opt" : "Alt"
    }),
    position: "top",
    delay: 200,
    children: e => X(e)
  }, s) : X()
}