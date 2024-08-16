let r;
n(47120);
var i = n(266067),
    a = n(259443),
    s = n(433517),
    o = n(570140),
    l = n(668781),
    u = n(904245),
    c = n(593472),
    d = n(147913),
    _ = n(89892),
    E = n(702321),
    f = n(38618),
    h = n(897473),
    p = n(131704),
    m = n(433355),
    I = n(592125),
    T = n(430824),
    g = n(306680),
    S = n(944486),
    A = n(914010),
    N = n(70956),
    v = n(796798),
    O = n(198620),
    R = n(981631),
    C = n(176505),
    y = n(689938);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let L = new a.Y('MessageManager');
function b(e) {
    let { guildId: t, channelId: n, messageId: i, forceFetch: a, isPreload: o, jumpType: l, skipLocalFetch: d, logFailures: h } = e;
    if (null == n) {
        h && L.log('Skipping fetch because channelId is null');
        return;
    }
    if ((0, C.AB)(n)) {
        h && L.log('Skipping fetch because channelId is a static route');
        return;
    }
    let p = I.Z.getChannel(n);
    if ((null == p ? void 0 : p.type) === R.d4z.GUILD_STORE || ((null == p ? void 0 : p.type) != null && R.TPd.GUILD_THREADS_ONLY.has(p.type))) {
        h && L.log('Skipping fetch because channel is a forum/store');
        return;
    }
    let m = _.Z.getOrCreate(n);
    v.l.getCurrentConfig({ location: 'fetch_messages' }).enabled && m.some(O.k5) && (L.log('Found expired attachment link, clearing messages'), _.Z.clear(n), (m = _.Z.getOrCreate(n))),
        null != m.jumpTargetId &&
            null == i &&
            ((m = m.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: c.SR.ANIMATED
            })),
            _.Z.commit(m)),
        null != m.focusTargetId && null == i && ((m = m.mutate({ focusTargetId: null })), _.Z.commit(m));
    let S = a;
    if ((!o || f.Z.isConnected() || m.loadingMore ? (m.loadingMore || (m.ready && !m.cached) ? (null != i ? (S = !0) : h && L.log('Skipping fetch because no other conditions matched')) : null == t || null != T.Z.getGuild(t) ? (S = !0) : h && L.log('Skipping fetch we are connected and have loaded messages')) : (S = !0), (0, E.Z)(n) && g.ZP.hasUnread(n) && (S = !0), S)) {
        if ((_.Z.commit(m.mutate({ loadingMore: !0 })), null != i))
            u.Z.jumpToMessage({
                channelId: n,
                messageId: i,
                flash: !0,
                isPreload: o,
                skipLocalFetch: d,
                jumpType: l
            });
        else if (
            (null == p ? void 0 : p.isThread()) &&
            (function (e) {
                if (g.ZP.hasOpenedThread(e)) return !1;
                if (null == r) {
                    var t;
                    r = null !== (t = s.K.get(P, {})) && void 0 !== t ? t : {};
                }
                if (e in r) return !1;
                r[e] = Date.now();
                let n = Date.now() - M;
                for (let e in r) r[e] < n && delete r[e];
                return s.K.set(P, r), !0;
            })(n)
        )
            L.log('Jumping to start of thread '.concat(p.id)),
                u.Z.fetchMessages({
                    channelId: n,
                    limit: R.AQB,
                    jump: {
                        messageId: n,
                        flash: !1
                    },
                    isPreload: o,
                    skipLocalFetch: d
                });
        else if ((null == p ? void 0 : p.isThread()) && g.ZP.hasTrackedUnread(p.id) && !m.ready) {
            let e = g.ZP.getTrackedAckMessageId(p.id);
            L.log('Jumping to most recent message in thread '.concat(p.id, ' - ').concat(e)),
                u.Z.fetchMessages({
                    channelId: n,
                    limit: R.AQB,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: o,
                    skipLocalFetch: d
                });
        } else
            u.Z.fetchMessages({
                channelId: n,
                limit: R.AQB,
                isPreload: o,
                skipLocalFetch: d,
                jump: { jumpType: c.SR.ANIMATED }
            });
    }
}
let M = 90 * N.Z.Millis.DAY,
    P = 'viewedThreadIds';
function U() {
    let e = S.Z.getChannelId();
    if (null != e) {
        let n = I.Z.getChannel(e);
        if (null != n) {
            var t;
            let e = (0, i.LX)(location.pathname, {
                path: R.Z5c.CHANNEL(':guild', ':channel', ':message'),
                exact: !0
            });
            b({
                guildId: n.getGuildId(),
                channelId: n.id,
                messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
            }),
                k(n.getGuildId(), n.id);
        }
    }
}
function w() {
    let { isPreload: e, skipLocalFetch: t, logFailures: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = S.Z.getChannelId();
    if (null != r) {
        let i = I.Z.getChannel(r);
        null != i
            ? ((0, p.Qm)(i.type)
                  ? b({
                        guildId: i.getGuildId(),
                        channelId: i.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    })
                  : n && L.log('Skipping fetch because the selected channel is not a text channel'),
              k(i.getGuildId(), i.id))
            : n && L.log('Skipping fetch because channel is null');
    } else n && L.log('Skipping fetch because there is no selected channel');
}
function x(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    b({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i
    }),
        k(t, n);
}
function G(e) {
    let { guildId: t, channelId: n } = e;
    b({
        guildId: t,
        channelId: n
    });
}
function k(e, t) {
    let n = m.ZP.getCurrentSidebarChannelId(t);
    if (null != n)
        b({
            guildId: e,
            channelId: n,
            messageId: m.ZP.getCurrentSidebarMessageId(t)
        });
}
function B() {
    let e = S.Z.getChannelId(),
        t = A.Z.getGuildId();
    if (null == t || null == e) return;
    let n = m.ZP.getSidebarState(e);
    if ((null == n ? void 0 : n.type) !== h.tI.VIEW_CHANNEL) k(t, e);
}
function F(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === R.e3s &&
        (b({
            guildId: t,
            channelId: n
        }),
        k(t, n));
}
function V(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r &&
        S.Z.getChannelId(r) === t.id &&
        b({
            guildId: r,
            channelId: t.id,
            messageId: n
        });
}
function H(e) {
    let { channelId: t } = e;
    u.Z.fetchMessages({
        channelId: t,
        limit: R.AQB
    });
}
function Z(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === R.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.Z.show({
                title: y.Z.Messages.RATE_LIMITED,
                body: y.Z.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({ retryAfterMinutes: Math.ceil(e / 60) })
            });
    }
}
let Y = {};
function j(e) {
    var t;
    let { channelId: n, jump: r, isStale: i, isPreview: a = !1 } = e;
    if (a) return;
    let s = null !== (t = Y[n]) && void 0 !== t ? t : 0;
    if (Date.now() - s < 10 * N.Z.Millis.SECOND) return;
    Y[n] = Date.now();
    let o = S.Z.getChannelId(),
        l = m.ZP.getCurrentSidebarChannelId(o),
        c = n === o || n === l;
    i &&
        f.Z.isConnected() &&
        c &&
        u.Z.fetchMessages({
            channelId: n,
            limit: R.AQB,
            jump: r
        });
}
function W(e) {
    let { channelId: t, messageRecord: n, reason: r } = e;
    null != n &&
        o.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            channelId: t,
            messageId: n.id,
            reason: null != r ? r : null
        });
}
function K(e) {
    let { state: t } = e;
    if ('active' !== t) return !1;
    let n = S.Z.getChannelId();
    if (null == n) return !1;
    u.Z.fetchNewLocalMessages(n, R.AQB);
}
class z extends d.Z {
    _initialize() {
        o.Z.subscribe('CONNECTION_OPEN', U);
    }
    _terminate() {
        o.Z.unsubscribe('CONNECTION_OPEN', U);
    }
    constructor(...e) {
        super(...e),
            D(this, 'fetchMessages', b),
            D(this, 'loadSelectedChannelIfNecessary', w),
            D(this, 'stores', new Map().set(m.ZP, B)),
            D(this, 'actions', {
                APP_STATE_UPDATE: K,
                OVERLAY_INITIALIZE: U,
                CHANNEL_SELECT: x,
                VOICE_CHANNEL_SELECT: G,
                THREAD_CREATE: V,
                THREAD_LIST_SYNC: () => w(),
                CHANNEL_CREATE: V,
                CHANNEL_PRELOAD: F,
                THREAD_CREATE_LOCAL: H,
                GUILD_CREATE: () => w(),
                MESSAGE_END_EDIT: Z,
                LOAD_MESSAGES_SUCCESS: j,
                UPLOAD_FAIL: W,
                CHANNEL_DELETE: () => w(),
                THREAD_DELETE: () => w()
            });
    }
}
t.Z = new z();
