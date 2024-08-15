n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(780384),
  l = n(481060),
  u = n(330726),
  c = n(410030),
  d = n(255963),
  _ = n(906411),
  E = n(438332),
  f = n(806966),
  h = n(434404),
  p = n(675478),
  m = n(819758),
  I = n(392552),
  T = n(784222),
  g = n(926243),
  S = n(149203),
  A = n(981631),
  N = n(689938),
  v = n(269003);
let O = n(137321),
  R = n(233892),
  C = n(942315),
  y = n(636626);
t.Z = e => {
  let {
emojiDescriptors: t,
emojiSize: n,
onSelect: a,
onInspect: D,
surrogateCodePoint: L,
getEmojiItemProps: b,
getEmojiRowProps: M,
isScrolling: P,
isUsingKeyboardNavigation: U,
rowIndex: w,
allowAnimatedEmoji: x,
showEmojiFavoriteTooltip: G,
channelGuildId: k,
category: B,
selectedItemClassName: F,
messageId: V,
isBurstReaction: H,
inNitroLockedSection: Z
  } = e, {
enabled: Y
  } = I.Z.useExperiment({
location: 'EmojiPicker'
  }, {
autoTrackExposure: !1
  }), j = (0, c.ZP)(), W = f.kJ.getState(), [K, z] = i.useState(W.inspectedExpressionPosition), [q, Q] = (0, u.Z)(null, 300), X = i.useRef(null);
  i.useEffect(() => f.kJ.useStore.subscribe(e => z(e), e => e.inspectedExpressionPosition), []), i.useEffect(() => {
p.DZ.loadIfNecessary();
  }, []);
  let $ = n === S.Su.LARGE,
J = n === S.Su.MEDIUM,
ee = e => {
  let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
    n = function() {
      var n;
      let {
        onMouseEnter: a,
        onMouseLeave: o,
        handleSelect: u,
        icon: c,
        ariaLabel: d
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
        visibleRowIndex: _,
        columnIndex: E
      } = e, {
        ref: f,
        tabIndex: h,
        onFocus: p,
        ...m
      } = null !== (n = b(E, w)) && void 0 !== n ? n : {}, I = K.rowIndex === _ && K.columnIndex === E, T = () => {
        !P.current && !U.current && D(e);
      };
      return (0, i.createElement)('li', {
        ...m,
        key: t
      }, (0, r.jsx)(l.FocusRing, {
        children: (0, r.jsx)('button', {
          'aria-label': d,
          ref: f,
          className: s()(v.emojiItem, {
            [v.emojiItemLarge]: $,
            [v.emojiItemMedium]: J,
            [v.emojiItemSelected]: I,
            [null != F ? F : '']: I,
            [v.showPulse]: q === t
          }),
          onFocus: null != p ? p : T,
          onMouseOver: T,
          onMouseEnter: a,
          onMouseLeave: o,
          onClick: u,
          tabIndex: h,
          children: c
        })
      }));
    };
  switch (e.type) {
    case T.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
      let t, i;
      return e.sectionCollapsedToThreeRows ? (i = (0, r.jsx)('img', {
        className: v.icon,
        src: (0, o.wj)(j) ? O : R,
        alt: ''
      }), t = N.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION) : (i = (0, r.jsx)('img', {
        className: v.icon,
        src: (0, o.wj)(j) ? C : y,
        alt: ''
      }), t = N.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION), n({
        handleSelect: t => {
          t.stopPropagation(), !P.current && !U.current && (a(e, {
            isFinalSelection: !0,
            toggleFavorite: !1
          }), (0, d.D)(e.guildId));
        },
        icon: i,
        ariaLabel: t
      });
    }
    case T.ld.CREATE_EMOJI: {
      let t = (0, r.jsx)(l.CirclePlusIcon, {
        size: 'md',
        color: 'currentColor',
        className: v.icon,
        colorClass: v.icon
      });
      return n({
        handleSelect: t => {
          t.stopPropagation(), !P.current && !U.current && (a(e, {
            isFinalSelection: !0,
            toggleFavorite: !1
          }), h.Z.open(e.guildId, A.pNK.EMOJI, A.jXE.EMOJI_PICKER_POPOUT));
        },
        icon: t,
        ariaLabel: N.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE
      });
    }
    case T.ld.EMOJI: {
      var u;
      let {
        columnIndex: n,
        visibleRowIndex: i
      } = e, s = K.rowIndex === i && K.columnIndex === n;
      return (0, r.jsx)(g.Z, {
        rowIndex: w,
        descriptor: e,
        emojiItemKey: t,
        isInspected: s,
        isScrolling: P,
        isUsingKeyboardNavigation: U,
        surrogateCodePoint: L,
        allowAnimatedEmoji: x,
        selectedItemClassName: F,
        onSelect: a,
        onInspect: D,
        channelGuildId: k,
        getEmojiItemProps: b,
        isMediumSize: J,
        isLargeSize: $,
        pulseItemKey: q,
        setPulseItemKey: Q,
        showEmojiFavoriteTooltip: G,
        messageId: V,
        isBurstReaction: H,
        rowPosition: null == X ? void 0 : null === (u = X.current) || void 0 === u ? void 0 : u.getBoundingClientRect(),
        inNitroLockedSection: Z
      }, t);
    }
  }
},
et = e => (0, r.jsx)('ul', {
  ...M(w),
  className: s()(v.emojiListRow, {
    [v.emojiListRowLargeSize]: $,
    [v.emojiListRowMediumSize]: J
  }),
  ref: X,
  children: e.map(ee)
});
  if (B !== S.En.TOP_GUILD_EMOJI)
return et(t);
  let en = t.filter(e => !!Y && e.type === T.ld.CREATE_EMOJI || e.subCategory === S.t0.TOP_GUILD_EMOJI || e.subCategory === S.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && !E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
er = t.filter(e => e.subCategory === S.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
  return 0 === er.length ? et(t) : (0, r.jsxs)('div', {
className: v.topEmojiSectionContainer,
children: [
  (0, r.jsx)('div', {
    className: s()(v.topEmojiContainer, {
      [v.noEmojis]: 0 === en.length
    }),
    children: et(en)
  }),
  (0, r.jsxs)('div', {
    className: v.newlyAddedHighlightContainer,
    children: [
      (0, r.jsx)('div', {
        className: s()(v.newlyAddedHighlight, {
          [v.oneItem]: 1 === er.length,
          [v.alignRight]: en.length > 0
        }),
        children: et(er)
      }),
      (0, r.jsxs)('div', {
        className: s()(v.newlyAddedBadge, {
          [v.newlyAddedBadgeLarge]: $,
          [v.newlyAddedBadgeMedium]: J,
          [v.alignRight]: en.length > 0
        }),
        children: [
          (0, r.jsx)(m.Z, {
            foreground: v.newlyAddedBadgeStar
          }),
          (0, r.jsx)(l.Text, {
            variant: 'text-xs/semibold',
            color: 'always-white',
            children: N.Z.Messages.NEW
          })
        ]
      })
    ]
  })
]
  });
};