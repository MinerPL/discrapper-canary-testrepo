n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250), s = n(470079), a = n(481060), r = n(113434), l = n(497505), o = n(918701), c = n(566078), d = n(472144), u = n(644646), _ = n(69439), E = n(689938), h = n(444745);
function I(e) {
    let {
            quest: t,
            questContent: n
        } = e, I = c.r.build(t.config).defaultReward.messages.name, m = (0, r.Rf)(t), p = m.percentComplete > 0, g = (0, o.pG)({
            quest: t,
            useV2Variants: !0,
            taskDetails: m
        }), T = !(0, o.zi)(t), S = s.useCallback(() => (0, i.jsx)(a.Text, {
            variant: 'text-md/semibold',
            color: 'text-brand',
            tag: 'span',
            className: h.header,
            children: I
        }), [I]);
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsxs)('div', {
                className: h.rewardDescriptionContainer,
                children: [
                    p ? (0, i.jsx)('div', {
                        className: h.progressWrapper,
                        children: (0, i.jsx)(d.Z, {
                            quest: t,
                            size: 76,
                            percentComplete: m.percentComplete,
                            children: (0, i.jsx)('div', {
                                className: h.circularRewardTileWrapper,
                                children: (0, i.jsx)(u.Z, {
                                    quest: t,
                                    questContent: n,
                                    className: h.circularQuestRewardTileAsset
                                })
                            })
                        })
                    }) : (0, i.jsx)(u.Z, {
                        quest: t,
                        questContent: l.jn.QUEST_HOME_DESKTOP,
                        className: h.questRewardTileAsset
                    }),
                    (0, i.jsxs)('div', {
                        className: h.textContainer,
                        children: [
                            (0, i.jsx)('span', {
                                className: h.headerSpan,
                                children: (0, i.jsx)(a.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    className: h.header,
                                    children: E.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({ rewardHook: S })
                                })
                            }),
                            null != g ? (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                color: 'text-muted',
                                className: h.description,
                                children: g
                            }) : null
                        ]
                    })
                ]
            }),
            T ? (0, i.jsx)(_.Z, { quest: t }) : null
        ]
    });
}
