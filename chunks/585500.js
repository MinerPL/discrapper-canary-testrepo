n.d(t, {
    D: function () {
        return E;
    }
}),
    n(47120);
var r = n(113434),
    i = n(918701),
    a = n(5881),
    s = n(665430),
    o = n(566078),
    l = n(46140),
    u = n(689938);
let c = (0, a.T)({});
function d(e, t, n) {
    return n ? e.astFormat(t) : e.format(t);
}
let _ = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += _(n.content);
            return t;
        }
        return _(e.content);
    } catch (e) {
        return c.error('Failed to convert ASTNode to string', e), '';
    }
};
function E(e) {
    let { quest: t, location: n, questContent: a } = e,
        c = (0, s.pF)({ location: n }),
        E = (0, r.uA)({
            quest: t,
            questContent: a
        });
    return (function (e) {
        let t = (function (e) {
            let { quest: t, taskDetails: n, isEligibleForMobileGA: r, useV2Variants: a = !1, connectedConsoleLinkOnClick: s, thirdPartyTaskDetails: c, withoutMarkdown: _ } = e,
                E = t.config.messages.gameTitle,
                f = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                { targetMinutes: h } = n,
                p = (0, i.zK)(t, l.S7.IN_HOUSE_CONSOLE_QUEST),
                I = (0, i.Kr)(t.config),
                m = (0, i.$J)(t) && (0, i.$H)(t);
            if (p && null != I)
                return (function (e) {
                    var t;
                    let { quest: n, taskDetails: r, withoutMarkdown: a } = e,
                        s = o.r.build(n.config).defaultReward.messages.nameWithArticle,
                        l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
                        c = (0, i.Kr)(n.config),
                        { targetMinutes: _ } = r;
                    return d(
                        l ? u.Z.Messages.QUEST_REWARD_WITH_EXPIRATION : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE,
                        {
                            targetMinutes: _,
                            rewardNameWithArticle: s,
                            reward: s,
                            duration: c
                        },
                        a
                    );
                })({
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: _
                });
            if (m)
                return (function (e) {
                    var t;
                    let { quest: n, taskDetails: r, connectedConsoleLinkOnClick: a, withoutMarkdown: s, isEligibleForMobileGA: l } = e,
                        c = o.r.build(n.config).defaultReward.messages.nameWithArticle,
                        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
                        E = (0, i.Kr)(n.config),
                        { targetMinutes: f } = r,
                        h = n.config.messages.gameTitle;
                    return d(
                        null != E ? (_ && !l ? u.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD) : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME,
                        {
                            gameTitle: h,
                            reward: c,
                            streamingDurationRequirement: f,
                            rewardNameWithArticle: c,
                            targetMinutes: f,
                            onClick: a,
                            duration: E
                        },
                        s
                    );
                })({
                    quest: t,
                    taskDetails: n,
                    connectedConsoleLinkOnClick: s,
                    withoutMarkdown: _,
                    isEligibleForMobileGA: r
                });
            if ((0, i.$J)(t))
                return (function (e) {
                    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
                        a = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                        s = (0, i.Kr)(t.config),
                        { targetMinutes: l } = n,
                        c = t.config.messages.gameTitle;
                    return d(
                        null != s ? u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD : u.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME,
                        {
                            gameTitle: c,
                            targetMinutes: l,
                            rewardNameWithArticle: a,
                            duration: s
                        },
                        r
                    );
                })({
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: _
                });
            else if ((0, i.$H)(t))
                return (function (e) {
                    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
                        a = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                        s = (0, i.Kr)(t.config),
                        { targetMinutes: l } = n,
                        c = t.config.messages.gameTitle;
                    return d(
                        null != s ? u.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD : u.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD,
                        {
                            gameTitle: c,
                            streamingDurationRequirement: l,
                            rewardNameWithArticle: a,
                            duration: s,
                            questReward: a
                        },
                        r
                    );
                })({
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: _
                });
            else if ((0, i.oo)({ quest: t }))
                return (function (e) {
                    let { useV2Variants: t, quest: n, taskDetails: r, withoutMarkdown: i } = e,
                        { targetMinutes: a } = r,
                        s = n.config.messages.gameTitle;
                    return d(
                        t ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED,
                        {
                            gameTitle: s,
                            streamingDurationRequirement: a
                        },
                        i
                    );
                })({
                    useV2Variants: a,
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: _
                });
            return null != c
                ? c.description
                : d(
                      null != I ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD : a ? u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : u.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD,
                      {
                          gameTitle: E,
                          streamingDurationRequirement: h,
                          questReward: f,
                          duration: I
                      },
                      _
                  );
        })(e);
        return e.withoutMarkdown ? _(t) : t;
    })({
        ...e,
        isEligibleForMobileGA: c,
        connectedConsoleLinkOnClick: E,
        withoutMarkdown: !1
    });
}
