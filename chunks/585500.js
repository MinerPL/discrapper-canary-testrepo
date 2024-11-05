n.d(t, {
    D: function () {
        return _;
    }
}),
    n(47120);
var r = n(113434),
    i = n(918701),
    a = n(5881),
    s = n(665430),
    o = n(566078),
    l = n(46140),
    u = n(388032);
let c = (0, a.T)({});
function d(e, t, n) {
    return n ? u.intl.formatToParts(e, t) : u.intl.formatToPlainString(e, t);
}
let f = (e) => {
    try {
        let t = '';
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
            for (let n of e) t += f(n.content);
            return t;
        }
        return f(e.content);
    } catch (e) {
        return c.error('Failed to convert ASTNode to string', e), '';
    }
};
function _(e) {
    let { quest: t, location: n, questContent: a } = e,
        c = (0, s.pF)({ location: n }),
        _ = (0, r.uA)({
            quest: t,
            questContent: a
        });
    return (function (e) {
        let t = (function (e) {
            let { quest: t, taskDetails: n, isEligibleForMobileGA: r, useV2Variants: a = !1, connectedConsoleLinkOnClick: s, thirdPartyTaskDetails: c, withoutMarkdown: f } = e,
                _ = t.config.messages.gameTitle,
                h = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                { targetMinutes: p } = n,
                m = (0, i.zK)(t, l.S7.IN_HOUSE_CONSOLE_QUEST),
                g = (0, i.Kr)(t.config),
                E = (0, i.$J)(t) && (0, i.$H)(t);
            if (m && null != g)
                return (function (e) {
                    var t;
                    let { quest: n, taskDetails: r, withoutMarkdown: a } = e,
                        s = o.r.build(n.config).defaultReward.messages.nameWithArticle,
                        l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
                        c = (0, i.Kr)(n.config),
                        { targetMinutes: f } = r;
                    return d(
                        l ? u.t.Pu5eyM : u.t['AVC/hY'],
                        {
                            targetMinutes: f,
                            rewardNameWithArticle: s,
                            reward: s,
                            duration: c
                        },
                        a
                    );
                })({
                    quest: t,
                    taskDetails: n,
                    withoutMarkdown: f
                });
            if (E)
                return (function (e) {
                    var t;
                    let { quest: n, taskDetails: r, connectedConsoleLinkOnClick: a, withoutMarkdown: s, isEligibleForMobileGA: l } = e,
                        c = o.r.build(n.config).defaultReward.messages.nameWithArticle,
                        f = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
                        _ = (0, i.Kr)(n.config),
                        { targetMinutes: h } = r,
                        p = n.config.messages.gameTitle;
                    return d(
                        null != _ ? (f && !l ? u.t.TZT3Oj : u.t.Ta44ur) : u.t.NIimTk,
                        {
                            gameTitle: p,
                            reward: c,
                            streamingDurationRequirement: h,
                            rewardNameWithArticle: c,
                            targetMinutes: h,
                            onClick: a,
                            duration: _
                        },
                        s
                    );
                })({
                    quest: t,
                    taskDetails: n,
                    connectedConsoleLinkOnClick: s,
                    withoutMarkdown: f,
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
                        null != s ? u.t.Ta44ur : u.t.NIimTk,
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
                    withoutMarkdown: f
                });
            else if ((0, i.$H)(t))
                return (function (e) {
                    let { quest: t, taskDetails: n, withoutMarkdown: r } = e,
                        a = o.r.build(t.config).defaultReward.messages.nameWithArticle,
                        s = (0, i.Kr)(t.config),
                        { targetMinutes: l } = n,
                        c = t.config.messages.gameTitle;
                    return d(
                        null != s ? u.t.AwuMRU : u.t.FZL5Q0,
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
                    withoutMarkdown: f
                });
            else if ((0, i.oo)({ quest: t }))
                return (function (e) {
                    let { useV2Variants: t, quest: n, taskDetails: r, withoutMarkdown: i } = e,
                        { targetMinutes: a } = r,
                        s = n.config.messages.gameTitle;
                    return d(
                        t ? u.t['a/ia7O'] : u.t.OVMlGx,
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
                    withoutMarkdown: f
                });
            else if ((0, i.cr)(t))
                return (function (e, t) {
                    var n;
                    let r = o.r.build(e.config).defaultReward.messages.nameWithArticle,
                        i = null === (n = e.config.videoMetadata) || void 0 === n ? void 0 : n.messages.videoTitle;
                    return null == i
                        ? d(u.t['g+InPD'], { rewardNameWithArticle: r }, t)
                        : d(
                              u.t.yMsQ7e,
                              {
                                  videoTitle: i,
                                  rewardNameWithArticle: r
                              },
                              t
                          );
                })(t, f);
            return null != c
                ? c.description
                : d(
                      null != g ? u.t.BLyDvL : a ? u.t['hkJ+Gh'] : u.t.j9iEPD,
                      {
                          gameTitle: _,
                          streamingDurationRequirement: p,
                          questReward: h,
                          duration: g
                      },
                      f
                  );
        })(e);
        return e.withoutMarkdown ? f(t) : t;
    })({
        ...e,
        isEligibleForMobileGA: c,
        connectedConsoleLinkOnClick: _,
        withoutMarkdown: !1
    });
}
