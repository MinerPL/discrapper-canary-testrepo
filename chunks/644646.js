"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(230711),
  _ = n(607070),
  d = n(507893),
  c = n(810090),
  E = n(617136),
  I = n(918701),
  T = n(566078),
  h = n(78826),
  S = n(981631),
  f = n(689938),
  N = n(680273);
t.Z = function(e) {
  let {
    className: t,
    quest: n,
    autoplay: s = !0,
    learnMoreStyle: A = null
  } = e, m = (0, a.e7)([_.Z], () => _.Z.useReducedMotion), O = (0, I.gO)(n), R = r.useMemo(() => (0, I.nP)(O.name), [O.name]), C = r.useCallback(t => {
    var i;
    (0, E._3)({
      questId: n.id,
      questContent: e.questContent,
      questContentPosition: e.questContentPosition,
      questContentCTA: E.jZ.REWARD_LEARN_MORE
    }), u.Z.open(S.oAB.INVENTORY), null === (i = e.onClick) || void 0 === i || i.call(e, t)
  }, [n.id, e]), p = r.useRef(null), g = r.useRef(s);
  r.useEffect(() => {
    var e, t;
    R && !m && null != p.current && (s && !g.current ? null === (e = p.current) || void 0 === e || e.play() : !s && g.current && (null === (t = p.current) || void 0 === t || t.pause()), g.current = s)
  }, [s, R, m]);
  let L = R ? (0, i.jsx)(h.Fl, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: e => (0, i.jsx)(c.Z, {
      ref: t => {
        e.current = t, p.current = t
      },
      autoPlay: !m && s,
      loop: !0,
      muted: !0,
      playsInline: !0,
      className: N.questRewardTileAsset,
      controls: !1,
      children: (0, i.jsx)("source", {
        src: O.url,
        type: (0, I.mN)(O.url)
      })
    })
  }) : (0, i.jsx)(h.Fl, {
    id: "QuestRewardTile_rewardTileStatic",
    children: e => (0, i.jsx)("img", {
      ref: e,
      alt: T.r.build(n.config).defaultReward.messages.name,
      className: o()(N.questRewardTileAsset, N.questRewardTileAssetStatic),
      src: O.url
    })
  });
  return null == A ? (0, i.jsx)("div", {
    className: o()(N.questRewardTile, t),
    children: L
  }) : (0, i.jsxs)(l.Clickable, {
    className: o()(N.questRewardTile, N.questRewardTileInteractive, t),
    onClick: C,
    children: ["text" === A && (0, i.jsx)(l.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: N.questRewardTileDetailsLearnMore,
      children: f.Z.Messages.QUESTS_LEARN_MORE_STACKED.format()
    }), "icon" === A && (0, i.jsx)("div", {
      className: N.questRewardTileDetailsLearnMore,
      children: (0, i.jsx)(d.Z, {
        color: l.tokens.colors.WHITE.css,
        width: 12,
        height: 12
      })
    }), L]
  })
}