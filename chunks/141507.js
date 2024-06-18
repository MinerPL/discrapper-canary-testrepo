"use strict";
n.d(t, {
  k: function() {
    return v
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(607070),
  l = n(906411),
  u = n(438332),
  _ = n(664437),
  d = n(806966),
  c = n(65029),
  E = n(695346),
  I = n(430824),
  T = n(451478),
  h = n(151785),
  S = n(768581),
  f = n(392552),
  N = n(543241),
  A = n(199257),
  m = n(880949),
  O = n(784222),
  R = n(149203),
  C = n(689938),
  p = n(13450);

function g(e) {
  return "animated" in e
}
let L = e => {
    let {
      inspectedEmoji: t,
      guild: n
    } = e, i = g(t);
    return null != n && i ? C.Z.Messages.EMOJI_FROM_GUILD.format({
      guildName: n.name
    }) : null
  },
  v = r.memo(function(e) {
    let t, {
        className: n,
        emojiGrid: v,
        guildId: D,
        pickerIntention: M,
        channel: P
      } = e,
      {
        enabled: y
      } = f.Z.useExperiment({
        location: "EmojiPicker"
      }, {
        autoTrackExposure: !1
      }),
      U = d.kJ.useStore(e => e.inspectedExpressionPosition),
      b = r.useMemo(() => {
        var e;
        let {
          rowIndex: t,
          columnIndex: n
        } = U;
        return null === (e = v[t]) || void 0 === e ? void 0 : e[n]
      }, [v, U]),
      G = (null == b ? void 0 : b.type) === O.ld.EMOJI ? null == b ? void 0 : b.emoji : {
        type: "CREATE_EMOJI",
        guildId: null == b ? void 0 : b.guildId,
        allNamesString: null == b ? void 0 : b.name
      },
      w = (0, s.e7)([I.Z], () => null !== G && G.type === l.B.GUILD ? I.Z.getGuild(G.guildId) : null, [G]),
      k = (0, s.e7)([T.Z], () => T.Z.isFocused()),
      B = (0, s.e7)([a.Z], () => a.Z.useReducedMotion, []),
      x = E.Yk.useSetting(),
      V = (0, N.C1)(D, g(G) ? G : null),
      {
        newlyAddedEmojis: Z
      } = (0, A.Z)(D, M),
      H = G.id,
      F = (null == b ? void 0 : b.type) === O.ld.EMOJI ? b.subCategory : R.t0.NONE;
    if (r.useEffect(() => {
        let e = Date.now();
        return () => {
          Date.now() - e >= 250 && g(G) && F !== R.t0.NONE && (F === R.t0.NEWLY_ADDED_EMOJI && null !== G && G.type === l.B.GUILD && (0, _.Zg)(G.guildId, Z[0].id), null != U.source && (0, N.Gn)({
            emoji: G,
            subCategory: F,
            position: b.columnIndex + 1,
            newlyAddedHighlight: F === R.t0.NEWLY_ADDED_EMOJI && u.Z.isNewerThanLastSeen(D, H)
          }))
        }
      }), null == G) return null;
    if (g(G)) {
      var Y;
      let e = null != G.id ? S.ZP.getEmojiURL({
        id: G.id,
        animated: x && G.animated,
        size: 28
      }) : G.url;
      t = "" === e ? (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        className: p.glyphEmoji,
        children: "surrogates" in G ? G.surrogates : null
      }) : (0, i.jsx)("img", {
        alt: null !== (Y = G.allNamesString) && void 0 !== Y ? Y : "",
        src: e,
        className: p.emoji
      })
    } else t = (0, i.jsx)(h.Z, {
      className: p.icon,
      foreground: p.icon,
      width: 24,
      height: 24
    });
    let j = null != w ? (0, i.jsx)(m.Z, {
        className: p.__invalid_guildIcon,
        guild: w,
        shouldAnimate: !B && k
      }) : null,
      W = y && "CREATE_EMOJI" === G.type ? C.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE_DESCRIPTION : G.allNamesString,
      K = y && "CREATE_EMOJI" === G.type ? C.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE : L({
        inspectedEmoji: G,
        channel: P,
        guildId: D,
        intention: M,
        guild: w
      });
    return (0, i.jsx)(c.Z, {
      className: n,
      graphicPrimary: t,
      graphicSecondary: j,
      titlePrimary: W,
      titleSecondary: K,
      isFavorite: V,
      emojiSubCategory: F
    })
  })