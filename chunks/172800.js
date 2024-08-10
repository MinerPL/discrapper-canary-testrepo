n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(780384),
  l = n(481060),
  u = n(330726),
  c = n(410030),
  d = n(906411),
  _ = n(438332),
  E = n(806966),
  f = n(434404),
  h = n(675478),
  p = n(819758),
  m = n(392552),
  I = n(784222),
  T = n(926243),
  g = n(149203),
  S = n(981631),
  A = n(689938),
  N = n(531784);
let v = n(137321),
  O = n(233892);
t.Z = e => {
  let {
emojiDescriptors: t,
emojiSize: n,
onSelect: a,
onInspect: R,
surrogateCodePoint: C,
getEmojiItemProps: y,
getEmojiRowProps: D,
isScrolling: L,
isUsingKeyboardNavigation: b,
rowIndex: M,
allowAnimatedEmoji: P,
showEmojiFavoriteTooltip: U,
channelGuildId: w,
category: x,
selectedItemClassName: G,
messageId: k,
isBurstReaction: B,
inNitroLockedSection: F
  } = e, {
enabled: V
  } = m.Z.useExperiment({
location: 'EmojiPicker'
  }, {
autoTrackExposure: !1
  }), H = (0, c.ZP)(), Z = E.kJ.getState(), [Y, j] = i.useState(Z.inspectedExpressionPosition), [W, K] = (0, u.Z)(null, 300), z = i.useRef(null);
  i.useEffect(() => E.kJ.useStore.subscribe(e => j(e), e => e.inspectedExpressionPosition), []), i.useEffect(() => {
h.DZ.loadIfNecessary();
  }, []);
  let q = n === g.Su.LARGE,
Q = n === g.Su.MEDIUM,
X = e => {
  let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex);
  switch (e.type) {
    case I.ld.EXPAND_EMOJIS:
    case I.ld.COLLAPSE_EMOJIS:
    case I.ld.CREATE_EMOJI: {
      let {
        visibleRowIndex: n,
        columnIndex: u
      } = e, c = Y.rowIndex === n && Y.columnIndex === u, d = (0, o.wj)(H) ? v : O, _ = t => {
        t.stopPropagation(), !L.current && !b.current && (a(e, {
          isFinalSelection: !0,
          toggleFavorite: !1
        }), e.type === I.ld.CREATE_EMOJI && f.Z.open(e.guildId, S.pNK.EMOJI, S.jXE.EMOJI_PICKER_POPOUT));
      }, E = () => {
        !L.current && !b.current && R(e);
      };
      return function() {
        var n;
        let a, o, {
            onMouseEnter: f,
            onMouseLeave: h
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            ref: p,
            tabIndex: m,
            onFocus: T,
            ...g
          } = null !== (n = y(u, M)) && void 0 !== n ? n : {};
        return e.type === I.ld.CREATE_EMOJI ? (o = (0, r.jsx)(l.CirclePlusIcon, {
          size: 'md',
          color: 'currentColor',
          className: N.icon,
          colorClass: N.icon
        }), a = A.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE) : e.type === I.ld.EXPAND_EMOJIS ? (o = (0, r.jsx)('img', {
          className: N.icon,
          src: d,
          alt: ''
        }), a = A.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION) : (o = (0, r.jsx)('img', {
          className: N.icon,
          src: d,
          alt: ''
        }), a = A.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION), (0, i.createElement)('li', {
          ...g,
          key: t
        }, (0, r.jsx)(l.FocusRing, {
          children: (0, r.jsx)('button', {
            'aria-label': a,
            ref: p,
            className: s()(N.emojiItem, {
              [N.emojiItemLarge]: q,
              [N.emojiItemMedium]: Q,
              [N.emojiItemSelected]: c,
              [null != G ? G : '']: c,
              [N.showPulse]: W === t
            }),
            onFocus: null != T ? T : E,
            onMouseOver: E,
            onMouseEnter: f,
            onMouseLeave: h,
            onClick: _,
            tabIndex: m,
            children: o
          })
        }));
      }();
    }
    case I.ld.EMOJI: {
      var n;
      let {
        columnIndex: i,
        visibleRowIndex: s
      } = e, o = Y.rowIndex === s && Y.columnIndex === i;
      return (0, r.jsx)(T.Z, {
        rowIndex: M,
        descriptor: e,
        emojiItemKey: t,
        isInspected: o,
        isScrolling: L,
        isUsingKeyboardNavigation: b,
        surrogateCodePoint: C,
        allowAnimatedEmoji: P,
        selectedItemClassName: G,
        onSelect: a,
        onInspect: R,
        channelGuildId: w,
        getEmojiItemProps: y,
        isMediumSize: Q,
        isLargeSize: q,
        pulseItemKey: W,
        setPulseItemKey: K,
        showEmojiFavoriteTooltip: U,
        messageId: k,
        isBurstReaction: B,
        rowPosition: null == z ? void 0 : null === (n = z.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
        inNitroLockedSection: F
      }, t);
    }
  }
},
$ = e => (0, r.jsx)('ul', {
  ...D(M),
  className: s()(N.emojiListRow, {
    [N.emojiListRowLargeSize]: q,
    [N.emojiListRowMediumSize]: Q
  }),
  ref: z,
  children: e.map(X)
});
  if (x !== g.En.TOP_GUILD_EMOJI)
return $(t);
  let J = t.filter(e => !!V && e.type === I.ld.CREATE_EMOJI || e.subCategory === g.t0.TOP_GUILD_EMOJI || e.subCategory === g.t0.NEWLY_ADDED_EMOJI && e.emoji.type === d.B.GUILD && !_.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id)),
ee = t.filter(e => e.subCategory === g.t0.NEWLY_ADDED_EMOJI && e.emoji.type === d.B.GUILD && _.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
  return 0 === ee.length ? $(t) : (0, r.jsxs)('div', {
className: N.topEmojiSectionContainer,
children: [
  (0, r.jsx)('div', {
    className: s()(N.topEmojiContainer, {
      [N.noEmojis]: 0 === J.length
    }),
    children: $(J)
  }),
  (0, r.jsxs)('div', {
    className: N.newlyAddedHighlightContainer,
    children: [
      (0, r.jsx)('div', {
        className: s()(N.newlyAddedHighlight, {
          [N.oneItem]: 1 === ee.length,
          [N.alignRight]: J.length > 0
        }),
        children: $(ee)
      }),
      (0, r.jsxs)('div', {
        className: s()(N.newlyAddedBadge, {
          [N.newlyAddedBadgeLarge]: q,
          [N.newlyAddedBadgeMedium]: Q,
          [N.alignRight]: J.length > 0
        }),
        children: [
          (0, r.jsx)(p.Z, {
            foreground: N.newlyAddedBadgeStar
          }),
          (0, r.jsx)(l.Text, {
            variant: 'text-xs/semibold',
            color: 'always-white',
            children: A.Z.Messages.NEW
          })
        ]
      })
    ]
  })
]
  });
};