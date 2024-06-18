"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(330726),
  u = n(906411),
  _ = n(438332),
  d = n(806966),
  c = n(434404),
  E = n(675478),
  I = n(151785),
  T = n(819758),
  h = n(392552),
  S = n(784222),
  f = n(926243),
  N = n(149203),
  A = n(981631),
  m = n(689938),
  O = n(687901);
t.Z = e => {
  let {
    emojiDescriptors: t,
    emojiSize: n,
    onSelect: s,
    onInspect: R,
    surrogateCodePoint: C,
    getEmojiItemProps: p,
    getEmojiRowProps: g,
    isScrolling: L,
    isUsingKeyboardNavigation: v,
    rowIndex: D,
    allowAnimatedEmoji: M,
    showEmojiFavoriteTooltip: P,
    channelGuildId: y,
    category: U,
    selectedItemClassName: b,
    messageId: G,
    isBurstReaction: w,
    inNitroLockedSection: k
  } = e, {
    enabled: B
  } = h.Z.useExperiment({
    location: "EmojiPicker"
  }, {
    autoTrackExposure: !1
  }), x = d.kJ.getState(), [V, Z] = r.useState(x.inspectedExpressionPosition), [H, F] = (0, l.Z)(null, 300), Y = r.useRef(null);
  r.useEffect(() => d.kJ.useStore.subscribe(e => Z(e), e => e.inspectedExpressionPosition), []), r.useEffect(() => {
    E.DZ.loadIfNecessary()
  }, []);
  let j = n === N.Su.LARGE,
    W = n === N.Su.MEDIUM,
    K = e => {
      let t = "".concat(e.rowIndex, "c").concat(e.columnIndex);
      switch (e.type) {
        case S.ld.CREATE_EMOJI: {
          let {
            visibleRowIndex: n,
            columnIndex: l
          } = e, u = V.rowIndex === n && V.columnIndex === l, _ = t => {
            t.stopPropagation(), !L.current && !v.current && (s(e, {
              isFinalSelection: !0,
              toggleFavorite: !1
            }), c.Z.open(e.guildId, A.pNK.EMOJI, A.jXE.EMOJI_PICKER_POPOUT))
          }, d = () => {
            !L.current && !v.current && R(e)
          };
          return function() {
            var e;
            let {
              onMouseEnter: n,
              onMouseLeave: s
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
              ref: c,
              tabIndex: E,
              onFocus: T,
              ...h
            } = null !== (e = p(l, D)) && void 0 !== e ? e : {};
            return (0, r.createElement)("li", {
              ...h,
              key: t
            }, (0, i.jsx)(a.FocusRing, {
              children: (0, i.jsx)("button", {
                "aria-label": m.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                ref: c,
                className: o()(O.emojiItem, {
                  [O.emojiItemLarge]: j,
                  [O.emojiItemMedium]: W,
                  [O.emojiItemSelected]: u,
                  [null != b ? b : ""]: u,
                  [O.showPulse]: H === t
                }),
                onFocus: null != T ? T : d,
                onMouseOver: d,
                onMouseEnter: n,
                onMouseLeave: s,
                onClick: _,
                tabIndex: E,
                children: (0, i.jsx)(I.Z, {
                  className: O.icon,
                  foreground: O.icon,
                  width: 24,
                  height: 24
                })
              })
            }))
          }()
        }
        case S.ld.EMOJI: {
          var n;
          let {
            columnIndex: r,
            visibleRowIndex: o
          } = e, a = V.rowIndex === o && V.columnIndex === r;
          return (0, i.jsx)(f.Z, {
            rowIndex: D,
            descriptor: e,
            emojiItemKey: t,
            isInspected: a,
            isScrolling: L,
            isUsingKeyboardNavigation: v,
            surrogateCodePoint: C,
            allowAnimatedEmoji: M,
            selectedItemClassName: b,
            onSelect: s,
            onInspect: R,
            channelGuildId: y,
            getEmojiItemProps: p,
            isMediumSize: W,
            isLargeSize: j,
            pulseItemKey: H,
            setPulseItemKey: F,
            showEmojiFavoriteTooltip: P,
            messageId: G,
            isBurstReaction: w,
            rowPosition: null == Y ? void 0 : null === (n = Y.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
            inNitroLockedSection: k
          }, t)
        }
      }
    },
    z = e => (0, i.jsx)("ul", {
      ...g(D),
      className: o()(O.emojiListRow, {
        [O.emojiListRowLargeSize]: j,
        [O.emojiListRowMediumSize]: W
      }),
      ref: Y,
      children: e.map(K)
    });
  if (U !== N.En.TOP_GUILD_EMOJI) return z(t);
  let q = t.filter(e => !!B && e.type === S.ld.CREATE_EMOJI || e.subCategory === N.t0.TOP_GUILD_EMOJI || e.subCategory === N.t0.NEWLY_ADDED_EMOJI && e.emoji.type === u.B.GUILD && !_.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
    X = t.filter(e => e.subCategory === N.t0.NEWLY_ADDED_EMOJI && e.emoji.type === u.B.GUILD && _.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
  return 0 === X.length ? z(t) : (0, i.jsxs)("div", {
    className: O.topEmojiSectionContainer,
    children: [(0, i.jsx)("div", {
      className: o()(O.topEmojiContainer, {
        [O.noEmojis]: 0 === q.length
      }),
      children: z(q)
    }), (0, i.jsxs)("div", {
      className: O.newlyAddedHighlightContainer,
      children: [(0, i.jsx)("div", {
        className: o()(O.newlyAddedHighlight, {
          [O.oneItem]: 1 === X.length,
          [O.alignRight]: q.length > 0
        }),
        children: z(X)
      }), (0, i.jsxs)("div", {
        className: o()(O.newlyAddedBadge, {
          [O.newlyAddedBadgeLarge]: j,
          [O.newlyAddedBadgeMedium]: W,
          [O.alignRight]: q.length > 0
        }),
        children: [(0, i.jsx)(T.Z, {
          foreground: O.newlyAddedBadgeStar
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "always-white",
          children: m.Z.Messages.NEW
        })]
      })]
    })]
  })
}