let r;
n.d(t, {
    Sz: function () {
        return D;
    },
    Vg: function () {
        return v;
    },
    an: function () {
        return M;
    },
    bm: function () {
        return i;
    },
    rh: function () {
        return R;
    }
}),
    n(653041),
    n(47120);
var i,
    s,
    I = n(317381),
    u = n(592125),
    a = n(271383),
    _ = n(306680),
    l = n(699516),
    o = n(594174),
    E = n(55589),
    S = n(483360),
    N = n(981631),
    O = n(245335),
    f = n(689938);
(r = n(603617)), ((s = i || (i = {})).GROUP_DM = 'GROUP_DM'), (s.DM = 'DM'), (s.FRIEND = 'FRIEND'), (s.CHANNEL = 'CHANNEL');
let T = (e, t) => null != e && a.ZP.isMember(e, t),
    c = (e) => {
        let { omitUserIds: t, suggestedUserIds: n, maxRowsWithoutQuery: r, omitGuildId: i, shownUserIds: s, rows: I, counts: u } = e;
        if (null != n)
            for (let e of n) {
                if (null != r && r > 0 && I.length >= r) break;
                if (t.has(e) || s.has(e)) continue;
                let n = o.default.getUser(e);
                !(null == n || T(i, n.id)) &&
                    (s.add(n.id),
                    I.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !0
                    }),
                    u.numFriends++);
            }
    },
    d = (e) => {
        let { suggestedChannelIds: t, maxRowsWithoutQuery: n, rows: r, counts: i } = e;
        if (null != t)
            for (let e of t) {
                if (null != n && n > 0 && r.length >= n) break;
                let t = u.Z.getChannel(e);
                null != t &&
                    (r.push({
                        type: 'CHANNEL',
                        item: t,
                        isSuggested: !0
                    }),
                    i.numChannels++);
            }
    },
    m = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: r, shownUserIds: i, rows: s, counts: I, includeGroupDms: a, limit: l } = e,
            S = 0;
        for (let e of E.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && s.length >= n) || (null != l && S >= l)) break;
            let E = u.Z.getChannel(e);
            if (null == E || !E.isPrivate()) continue;
            if (a && E.type === N.d4z.GROUP_DM) {
                s.push({
                    type: 'GROUP_DM',
                    item: E,
                    isSuggested: !1
                }),
                    I.numGroupDms++,
                    S++;
                continue;
            }
            if (null == _.ZP.lastMessageId(E.id)) continue;
            let O = E.getRecipientId();
            if (null != O && !t.has(O) && !i.has(O)) {
                let e = o.default.getUser(O);
                if (null == e || e.bot || T(r, e.id)) continue;
                i.add(e.id),
                    s.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    I.numDms++,
                    S++;
            }
        }
    },
    A = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: r, shownUserIds: i, rows: s, counts: I } = e;
        for (let e of l.Z.getFriendIDs()) {
            if (null != n && n > 0 && s.length >= n) break;
            if (t.has(e) || i.has(e)) continue;
            let u = o.default.getUser(e);
            !(null == u || T(r, u.id)) &&
                (s.push({
                    type: 'FRIEND',
                    item: u,
                    isSuggested: !1
                }),
                I.numFriends++);
        }
    },
    P = (e) => {
        let { query: t, rows: n, counts: r, inviteTargetType: i } = e;
        i === O.Iq.EMBEDDED_APPLICATION &&
            S.ZP.queryChannels({
                query: t,
                limit: 3,
                guildId: void 0
            }).forEach((e) => {
                let { record: t } = e;
                n.push({
                    type: 'CHANNEL',
                    item: t,
                    isSuggested: !1
                }),
                    r.numChannels++;
            });
    },
    U = (e) => {
        let { query: t, omitUserIds: n, shownUserIds: r, rows: i, counts: s } = e;
        S.ZP.queryDMUsers({
            query: t,
            limit: 50
        }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let I = u.Z.getDMFromUserId(t.id);
            if (null != I && null != _.ZP.lastMessageId(I))
                r.add(t.id),
                    i.push({
                        type: 'DM',
                        item: t,
                        isSuggested: !1
                    }),
                    s.numDms++;
        });
    },
    h = (e) => {
        let { query: t, rows: n, counts: r } = e;
        S.ZP.queryGroupDMs({
            query: t,
            limit: 50,
            fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            n.push({
                type: 'GROUP_DM',
                item: t,
                isSuggested: !1
            }),
                r.numGroupDms++;
        });
    },
    g = (e) => {
        let { query: t, rows: n, counts: r, omitUserIds: i, shownUserIds: s } = e;
        S.ZP.queryFriends({
            query: t,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            if (!(i.has(t.id) || s.has(t.id)))
                s.add(t.id),
                    n.push({
                        type: 'FRIEND',
                        item: t,
                        isSuggested: !1
                    }),
                    r.numFriends++;
        });
    };
function M(e) {
    let { query: t, inviteTargetType: n, omitUserIds: r, suggestedUserIds: i, suggestedChannelIds: s, maxRowsWithoutQuery: I, omitGuildId: u } = e,
        a = new Set(),
        _ = [],
        l = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0
        };
    if ('' === t) {
        let e = {
            omitUserIds: r,
            maxRowsWithoutQuery: I,
            omitGuildId: u,
            shownUserIds: a,
            rows: _,
            counts: l
        };
        n === O.Iq.EMBEDDED_APPLICATION &&
            (m({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            d({
                ...e,
                suggestedChannelIds: s
            })),
            c({
                ...e,
                suggestedUserIds: i
            }),
            m({
                ...e,
                includeGroupDms: !0
            }),
            A(e);
    } else {
        let e = {
            query: t,
            rows: _,
            counts: l
        };
        n === O.Iq.EMBEDDED_APPLICATION &&
            P({
                ...e,
                inviteTargetType: n
            }),
            U({
                ...e,
                omitUserIds: r,
                shownUserIds: a
            }),
            h(e),
            g({
                ...e,
                omitUserIds: r,
                shownUserIds: a
            });
    }
    return {
        rows: _,
        counts: l
    };
}
function R(e, t) {
    for (let n of E.Z.getPrivateChannelIds()) {
        let r = u.Z.getChannel(n);
        if (null == r || !r.isDM() || null == _.ZP.lastMessageId(r.id)) continue;
        let i = r.getRecipientId();
        if (null != i && !e.has(i)) {
            let e = o.default.getUser(i);
            if (null == e || e.bot || T(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function D(e) {
    let { channel: t, inviteTargetType: n, applicationId: r } = e;
    if (n === O.Iq.EMBEDDED_APPLICATION) {
        if (null != t) {
            for (let e of I.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === r) return new Set(e.userIds);
        }
    }
    return new Set();
}
let p = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    V = {
        [r.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: p.MINUTES
        },
        [r.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: p.HOURS
        },
        [r.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: p.HOURS
        },
        [r.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: p.HOURS
        },
        [r.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: p.DAYS
        },
        [r.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: p.DAYS
        },
        [r.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: p.NEVER
        }
    };
function v(e, t) {
    let n = parseInt(t, 10),
        r = 0 === n,
        i = V[e].value;
    switch (V[e].type) {
        case p.MINUTES:
            if (r) return f.Z.Messages.INVITE_EXPIRES_MINUTES;
            return f.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({ numUses: n });
        case p.HOURS:
            if (r) return f.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: i });
            return f.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                numHours: i,
                numUses: n
            });
        case p.DAYS:
            if (r) return f.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({ numDays: i });
            return f.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                numDays: i,
                numUses: n
            });
        case p.NEVER:
            if (r) return f.Z.Messages.INVITE_EXPIRES_NEVER;
            return f.Z.Messages.INVITE_EXPIRES_USES.format({ numUses: n });
        default:
            return '';
    }
}
t.ZP = {
    getMaxAgeOptions: r.MAX_AGE_OPTIONS,
    getMaxUsesOptions: r.MAX_USES_OPTIONS,
    INVITE_OPTIONS_FOREVER: r.INVITE_OPTIONS_FOREVER,
    INVITE_OPTIONS_1_DAY: r.INVITE_OPTIONS_1_DAY,
    INVITE_OPTIONS_7_DAYS: r.INVITE_OPTIONS_7_DAYS,
    INVITE_OPTIONS_12_HOURS: r.INVITE_OPTIONS_12_HOURS,
    INVITE_OPTIONS_6_HOURS: r.INVITE_OPTIONS_6_HOURS,
    INVITE_OPTIONS_1_HOUR: r.INVITE_OPTIONS_1_HOUR,
    INVITE_OPTIONS_30_MINUTES: r.INVITE_OPTIONS_30_MINUTES,
    INVITE_OPTIONS_UNLIMITED: r.INVITE_OPTIONS_UNLIMITED,
    INVITE_OPTIONS_ONCE: r.INVITE_OPTIONS_ONCE,
    INVITE_OPTIONS_5_TIMES: r.INVITE_OPTIONS_5_TIMES,
    INVITE_OPTIONS_10_TIMES: r.INVITE_OPTIONS_10_TIMES,
    INVITE_OPTIONS_25_TIMES: r.INVITE_OPTIONS_25_TIMES,
    INVITE_OPTIONS_50_TIMES: r.INVITE_OPTIONS_50_TIMES,
    INVITE_OPTIONS_100_TIMES: r.INVITE_OPTIONS_100_TIMES
};
