n.d(t, {
  k: function() {
return C;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(442837),
  o = n(481060),
  s = n(607070),
  l = n(906411),
  u = n(438332),
  c = n(664437),
  d = n(806966),
  _ = n(65029),
  E = n(695346),
  f = n(430824),
  h = n(451478),
  p = n(768581),
  m = n(392552),
  I = n(543241),
  T = n(199257),
  g = n(880949),
  S = n(784222),
  A = n(149203),
  N = n(689938),
  v = n(785355);

function O(e) {
  return 'animated' in e;
}
let R = e => {
let {
  inspectedEmoji: t,
  guild: n
} = e, r = O(t);
return null != n && r ? N.Z.Messages.EMOJI_FROM_GUILD.format({
  guildName: n.name
}) : null;
  },
  C = i.memo(function(e) {
let t, {
    className: n,
    emojiGrid: C,
    guildId: y,
    pickerIntention: D,
    channel: L
  } = e,
  {
    enabled: b
  } = m.Z.useExperiment({
    location: 'EmojiPicker'
  }, {
    autoTrackExposure: !1
  }),
  M = d.kJ.useStore(e => e.inspectedExpressionPosition),
  P = i.useMemo(() => {
    var e;
    let {
      rowIndex: t,
      columnIndex: n
    } = M;
    return null === (e = C[t]) || void 0 === e ? void 0 : e[n];
  }, [
    C,
    M
  ]),
  U = (null == P ? void 0 : P.type) === S.ld.EMOJI ? null == P ? void 0 : P.emoji : {
    type: 'CREATE_EMOJI',
    guildId: null == P ? void 0 : P.guildId,
    allNamesString: null == P ? void 0 : P.name
  },
  w = (0, a.e7)([f.Z], () => null !== U && U.type === l.B.GUILD ? f.Z.getGuild(U.guildId) : null, [U]),
  x = (0, a.e7)([h.Z], () => h.Z.isFocused()),
  G = (0, a.e7)([s.Z], () => s.Z.useReducedMotion, []),
  k = E.Yk.useSetting(),
  B = (0, I.C1)(y, O(U) ? U : null),
  {
    newlyAddedEmojis: F
  } = (0, T.Z)(y, D),
  V = U.id,
  H = (null == P ? void 0 : P.type) === S.ld.EMOJI ? P.subCategory : A.t0.NONE;
if (i.useEffect(() => {
    let e = Date.now();
    return () => {
      Date.now() - e >= 250 && O(U) && H !== A.t0.NONE && (H === A.t0.NEWLY_ADDED_EMOJI && null !== U && U.type === l.B.GUILD && (0, c.Zg)(U.guildId, F[0].id), null != M.source && (0, I.Gn)({
        emoji: U,
        subCategory: H,
        position: P.columnIndex + 1,
        newlyAddedHighlight: H === A.t0.NEWLY_ADDED_EMOJI && u.Z.isNewerThanLastSeen(y, V)
      }));
    };
  }), null == U)
  return null;
if (O(U)) {
  var Z;
  let e = null != U.id ? p.ZP.getEmojiURL({
    id: U.id,
    animated: k && U.animated,
    size: 28
  }) : U.url;
  t = '' === e ? (0, r.jsx)(o.Text, {
    variant: 'text-md/normal',
    className: v.glyphEmoji,
    children: 'surrogates' in U ? U.surrogates : null
  }) : (0, r.jsx)('img', {
    alt: null !== (Z = U.allNamesString) && void 0 !== Z ? Z : '',
    src: e,
    className: v.emoji
  });
} else
  t = (0, r.jsx)(o.CirclePlusIcon, {
    size: 'md',
    color: 'currentColor',
    className: v.icon,
    colorClass: v.icon
  });
let Y = null != w ? (0, r.jsx)(g.Z, {
    className: v.__invalid_guildIcon,
    guild: w,
    shouldAnimate: !G && x
  }) : null,
  j = b && 'CREATE_EMOJI' === U.type ? N.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION : U.allNamesString,
  W = b && 'CREATE_EMOJI' === U.type ? N.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE : R({
    inspectedEmoji: U,
    channel: L,
    guildId: y,
    intention: D,
    guild: w
  });
return (0, r.jsx)(_.Z, {
  className: n,
  graphicPrimary: t,
  graphicSecondary: Y,
  titlePrimary: j,
  titleSecondary: W,
  isFavorite: B,
  emojiSubCategory: H
});
  });