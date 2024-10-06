var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(374470),
    l = n(442837),
    u = n(481060),
    c = n(607070),
    d = n(70097),
    _ = n(617136),
    E = n(302245),
    f = n(475595),
    h = n(566078),
    p = n(78826),
    I = n(341907),
    m = n(46140),
    T = n(689938),
    S = n(141533);
t.Z = function (e) {
    let { className: t, quest: n, autoplay: a = !0, learnMoreStyle: g = null } = e,
        A = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        N = i.useMemo(() => (0, f.fh)(n, f.Bd.REWARD), [n]),
        O = i.useCallback(
            (t) => {
                var r;
                (0, o.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(),
                    (0, _._3)({
                        questId: n.id,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentCTA: _.jZ.REWARD_LEARN_MORE
                    }),
                    (0, I.navigateToQuestHome)(e.location, e.questContent, n.id),
                    null === (r = e.onClick) || void 0 === r || r.call(e, t);
            },
            [n.id, e]
        ),
        R = (0, E.vI)(n, m.dr.QUESTS_BAR),
        v = i.useRef(null),
        C = i.useRef(a);
    i.useEffect(() => {
        if (null != v.current) {
            if (!N.isAnimated || A) {
                (v.current.currentTime = 0), v.current.pause();
                return;
            }
            a && !C.current ? v.current.play() : !a && C.current && ((v.current.currentTime = 0), v.current.pause()), (C.current = a);
        }
    }, [a, N, A]);
    let L = N.isAnimated
        ? (0, r.jsx)(p.Fl, {
              id: 'QuestRewardTile_rewardTileAnimated',
              children: (e) => {
                  var t;
                  return (0, r.jsx)(d.Z, {
                      ref: (t) => {
                          (e.current = t), (v.current = t);
                      },
                      autoPlay: !A && a,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: S.questRewardTileAsset,
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: N.url,
                          type: null !== (t = N.mimetype) && void 0 !== t ? t : void 0
                      })
                  });
              }
          })
        : (0, r.jsx)(p.Fl, {
              id: 'QuestRewardTile_rewardTileStatic',
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: e,
                      alt: h.r.build(n.config).defaultReward.messages.name,
                      className: s()(S.questRewardTileAsset, S.questRewardTileAssetStatic),
                      src: N.url
                  })
          });
    return null == g
        ? (0, r.jsx)('div', {
              className: s()(S.questRewardTile, t),
              children: L
          })
        : (0, r.jsxs)(u.Clickable, {
              className: s()(
                  S.questRewardTileInteractive,
                  S.questRewardTile,
                  {
                      [S.rewardHighlight]: R,
                      [S.borderOverlay]: !R
                  },
                  t
              ),
              onClick: O,
              children: [
                  L,
                  R &&
                      (0, r.jsx)(u.Shine, {
                          className: S.shine,
                          shineSize: u.ShineSizes.SMALL
                      }),
                  'text' === g &&
                      (0, r.jsx)(u.Text, {
                          color: 'always-white',
                          variant: 'text-xs/normal',
                          className: S.questRewardTileDetailsLearnMore,
                          children: T.Z.Messages.QUESTS_LEARN_MORE_STACKED.format()
                      }),
                  'icon' === g &&
                      (0, r.jsx)('div', {
                          className: S.questRewardTileDetailsLearnMore,
                          children: (0, r.jsx)(u.CircleInformationIcon, {
                              size: 'xxs',
                              color: u.tokens.colors.WHITE.css
                          })
                      })
              ]
          });
};
