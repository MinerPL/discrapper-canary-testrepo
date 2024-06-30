n(47120);
var r = n(913527), i = n.n(r), a = n(570140), o = n(661111), s = n(493683), l = n(904245), u = n(232567), c = n(147913), d = n(3148), _ = n(960412), E = n(706454), f = n(695346), h = n(375954), p = n(306680), m = n(709054), I = n(839627), T = n(802098), g = n(128014), S = n(163379), A = n(596401), N = n(981631), v = n(930441);
function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
async function R(e, t) {
    let n = f.l4.getSetting(), r = m.default.extractTimestamp(e);
    if ((n >= e || i()().diff(r, 'days') > 30) && !t)
        return;
    let a = await (0, _.Y7)();
    if (!(null == a ? void 0 : a.categories[v.$Z.UPDATES_AND_ANNOUNCEMENTS]))
        return;
    let o = await s.Z.getOrEnsurePrivateChannel(A.sP);
    if (null == o)
        return;
    await l.Z.fetchMessages({
        channelId: o,
        limit: 1
    });
    let u = h.Z.getLastMessage(o), c = p.ZP.getOldestUnreadMessageId(o), E = p.ZP.hasUnread(o);
    if (null == u || null == c || E || u.id > c)
        return;
    let I = (0, d.ZP)({
        ...u,
        channelId: o,
        messageReference: void 0,
        poll: void 0,
        changelogId: u.changelogId
    });
    l.Z.receiveMessage(o, {
        ...I,
        state: N.yb.SENT,
        channel_id: o
    }, !0, {});
}
class C extends c.Z {
    constructor(...e) {
        super(...e), O(this, 'actions', { POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e) }), O(this, 'handleConnectionOpen', async e => {
            let {
                    canReceiveMessage: t,
                    canReceiveUnpublishedMessages: n
                } = I.Z.getCurrentConfig({ location: 'changelog_manager' }, { autoTrackExposure: !1 }), r = await o.Z.fetchChangelogConfig(), i = r.body, s = function (e, t) {
                    let n = 0, r = null;
                    for (var [i, {min_version: a}] of Object.entries(e))
                        a <= t && a > n && (n = a, r = i);
                    return r;
                }(i, (0, g.b)());
            if (a.Z.dispatch({
                    type: 'CHANGE_LOG_SET_CONFIG',
                    config: r.body,
                    latestChangelogId: s
                }), null == s)
                return;
            if (t) {
                (0, u.PR)(A.sP), R(s, n);
                return;
            }
            if (!0 !== i[s].show_on_startup)
                return;
            let l = T.Z.lastSeenChangelogId(), c = T.Z.lastSeenChangelogDate();
            if (null != l && 0 >= m.default.compare(s, l))
                return;
            let d = await o.Z.fetchChangelog(s, E.default.locale);
            if (null != d) {
                if (null == c || null == T.Z.lastSeenChangelogDate()) {
                    o.Z.markChangelogAsSeen(s, d.date);
                    return;
                }
                !T.Z.isLocked() && new Date(d.date) > new Date(c) && (0, S.Z)();
            }
        });
    }
}
t.Z = new C();
