var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(230711), c = n(607070), d = n(810090), _ = n(617136), E = n(918701), f = n(566078), h = n(78826), p = n(981631), m = n(689938), I = n(834664);
t.Z = function (e) {
    let {
            className: t,
            quest: n,
            autoplay: a = !0,
            learnMoreStyle: T = null
        } = e, g = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), S = (0, E.gO)(n), A = i.useMemo(() => (0, E.nP)(S.name), [S.name]), N = i.useCallback(t => {
            var r;
            (0, _._3)({
                questId: n.id,
                questContent: e.questContent,
                questContentPosition: e.questContentPosition,
                questContentCTA: _.jZ.REWARD_LEARN_MORE
            }), u.Z.open(p.oAB.INVENTORY), null === (r = e.onClick) || void 0 === r || r.call(e, t);
        }, [
            n.id,
            e
        ]), v = i.useRef(null), O = i.useRef(a);
    i.useEffect(() => {
        var e, t;
        A && !g && null != v.current && (a && !O.current ? null === (e = v.current) || void 0 === e || e.play() : !a && O.current && (null === (t = v.current) || void 0 === t || t.pause()), O.current = a);
    }, [
        a,
        A,
        g
    ]);
    let R = A ? (0, r.jsx)(h.Fl, {
        id: 'QuestRewardTile_rewardTileAnimated',
        children: e => (0, r.jsx)(d.Z, {
            ref: t => {
                e.current = t, v.current = t;
            },
            autoPlay: !g && a,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: I.questRewardTileAsset,
            controls: !1,
            children: (0, r.jsx)('source', {
                src: S.url,
                type: (0, E.mN)(S.url)
            })
        })
    }) : (0, r.jsx)(h.Fl, {
        id: 'QuestRewardTile_rewardTileStatic',
        children: e => (0, r.jsx)('img', {
            ref: e,
            alt: f.r.build(n.config).defaultReward.messages.name,
            className: o()(I.questRewardTileAsset, I.questRewardTileAssetStatic),
            src: S.url
        })
    });
    return null == T ? (0, r.jsx)('div', {
        className: o()(I.questRewardTile, t),
        children: R
    }) : (0, r.jsxs)(l.Clickable, {
        className: o()(I.questRewardTile, I.questRewardTileInteractive, t),
        onClick: N,
        children: [
            'text' === T && (0, r.jsx)(l.Text, {
                color: 'always-white',
                variant: 'text-xs/normal',
                className: I.questRewardTileDetailsLearnMore,
                children: m.Z.Messages.QUESTS_LEARN_MORE_STACKED.format()
            }),
            'icon' === T && (0, r.jsx)('div', {
                className: I.questRewardTileDetailsLearnMore,
                children: (0, r.jsx)(l.CircleInformationIcon, {
                    size: 'xxs',
                    color: l.tokens.colors.WHITE.css
                })
            }),
            R
        ]
    });
};
