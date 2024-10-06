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
    I = n(433355),
    m = n(592125),
    T = n(430824),
    S = n(306680),
    g = n(944486),
    A = n(914010),
    N = n(70956),
    O = n(198620),
    R = n(981631),
    v = n(176505),
    C = n(689938);
function L(e, t, n) {
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
let y = new a.Y('MessageManager');
function D(e) {
    let { guildId: t, channelId: n, messageId: i, forceFetch: a, isPreload: o, jumpType: l, skipLocalFetch: d, logFailures: h } = e;
    if (null == n) {
        h && y.log('Skipping fetch because channelId is null');
        return;
    }
    if ((0, v.AB)(n)) {
        h && y.log('Skipping fetch because channelId is a static route');
        return;
    }
    let p = m.Z.getChannel(n);
    if ((null == p ? void 0 : p.type) === R.d4z.GUILD_STORE || ((null == p ? void 0 : p.type) != null && R.TPd.GUILD_THREADS_ONLY.has(p.type))) {
        h && y.log('Skipping fetch because channel is a forum/store');
        return;
    }
    let I = _.Z.getOrCreate(n);
    I.some(O.k5) && (y.log('Found expired attachment link, clearing messages'), _.Z.clear(n), (I = _.Z.getOrCreate(n))),
        null != I.jumpTargetId &&
            null == i &&
            ((I = I.mutate({
                jumpTargetId: null,
                jumped: !1,
                jumpType: c.SR.ANIMATED
            })),
            _.Z.commit(I)),
        null != I.focusTargetId && null == i && ((I = I.mutate({ focusTargetId: null })), _.Z.commit(I));
    let g = a;
    if ((!o || f.Z.isConnected() || I.loadingMore ? (I.loadingMore || (I.ready && !I.cached) ? (null != i ? (g = !0) : h && y.log('Skipping fetch because no other conditions matched')) : null == t || null != T.Z.getGuild(t) ? (g = !0) : h && y.log('Skipping fetch we are connected and have loaded messages')) : (g = !0), (0, E.Z)(n) && S.ZP.hasUnread(n) && (g = !0), g)) {
        if ((_.Z.commit(I.mutate({ loadingMore: !0 })), null != i))
            u.Z.jumpToMessage({
                channelId: n,
                messageId: i,
                flash: !0,
                isPreload: o,
                skipLocalFetch: d,
                jumpType: l
            });
        else {
            if (
                (null == p ? void 0 : p.isThread()) &&
                (function (e) {
                    if (S.ZP.hasOpenedThread(e)) return !1;
                    if (null == r) {
                        var t;
                        r = null !== (t = s.K.get(M, {})) && void 0 !== t ? t : {};
                    }
                    if (e in r) return !1;
                    r[e] = Date.now();
                    let n = Date.now() - b;
                    for (let e in r) r[e] < n && delete r[e];
                    return s.K.set(M, r), !0;
                })(n)
            )
                return (
                    y.log('Jumping to start of thread '.concat(p.id)),
                    u.Z.fetchMessages({
                        channelId: n,
                        limit: R.AQB,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: o,
                        skipLocalFetch: d
                    })
                );
            if (!((null == p ? void 0 : p.isThread()) && S.ZP.hasTrackedUnread(p.id)) || I.ready)
                return u.Z.fetchMessages({
                    channelId: n,
                    limit: R.AQB,
                    isPreload: o,
                    skipLocalFetch: d,
                    jump: { jumpType: c.SR.ANIMATED }
                });
            else {
                let e = S.ZP.getTrackedAckMessageId(p.id);
                return (
                    y.log('Jumping to most recent message in thread '.concat(p.id, ' - ').concat(e)),
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
                    })
                );
            }
        }
    }
}
let b = 90 * N.Z.Millis.DAY,
    M = 'viewedThreadIds';
function P() {
    let e = g.Z.getChannelId();
    if (null != e) {
        let n = m.Z.getChannel(e);
        if (null != n) {
            var t;
            let e = (0, i.LX)(location.pathname, {
                path: R.Z5c.CHANNEL(':guild', ':channel', ':message'),
                exact: !0
            });
            D({
                guildId: n.getGuildId(),
                channelId: n.id,
                messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
            }),
                G(n.getGuildId(), n.id);
        }
    }
}
function U() {
    let { isPreload: e, skipLocalFetch: t, logFailures: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = g.Z.getChannelId();
    if (null != r) {
        let i = m.Z.getChannel(r);
        null != i
            ? ((0, p.Qm)(i.type)
                  ? D({
                        guildId: i.getGuildId(),
                        channelId: i.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    })
                  : n && y.log('Skipping fetch because the selected channel is not a text channel'),
              G(i.getGuildId(), i.id))
            : n && y.log('Skipping fetch because channel is null');
    } else n && y.log('Skipping fetch because there is no selected channel');
}
function w(e) {
    let { guildId: t, channelId: n, messageId: r, jumpType: i } = e;
    D({
        guildId: t,
        channelId: n,
        messageId: r,
        jumpType: i
    }),
        G(t, n);
}
function x(e) {
    let { guildId: t, channelId: n } = e;
    D({
        guildId: t,
        channelId: n
    });
}
function G(e, t) {
    let n = I.ZP.getCurrentSidebarChannelId(t);
    if (null != n)
        D({
            guildId: e,
            channelId: n,
            messageId: I.ZP.getCurrentSidebarMessageId(t)
        });
}
function k() {
    let e = g.Z.getChannelId(),
        t = A.Z.getGuildId();
    if (null == t || null == e) return;
    let n = I.ZP.getSidebarState(e);
    if ((null == n ? void 0 : n.type) !== h.tI.VIEW_CHANNEL) G(t, e);
}
function B(e) {
    let { guildId: t, channelId: n, context: r } = e;
    r === R.e3s &&
        (D({
            guildId: t,
            channelId: n
        }),
        G(t, n));
}
function F(e) {
    let { channel: t, messageId: n } = e,
        r = t.guild_id;
    null != r &&
        g.Z.getChannelId(r) === t.id &&
        D({
            guildId: r,
            channelId: t.id,
            messageId: n
        });
}
function V(e) {
    let { channelId: t } = e;
    u.Z.fetchMessages({
        channelId: t,
        limit: R.AQB
    });
}
function H(e) {
    let { response: t } = e;
    if (null == t || null == t.body) return null;
    if (t.body.code === R.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
        let e = t.body.retry_after;
        null != e &&
            l.Z.show({
                title: C.Z.Messages.RATE_LIMITED,
                body: C.Z.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({ retryAfterMinutes: Math.ceil(e / 60) })
            });
    }
}
let Z = {};
function Y(e) {
    var t;
    let { channelId: n, jump: r, isStale: i, isPreview: a = !1 } = e;
    if (a) return;
    let s = null !== (t = Z[n]) && void 0 !== t ? t : 0;
    if (Date.now() - s < 10 * N.Z.Millis.SECOND) return;
    Z[n] = Date.now();
    let o = g.Z.getChannelId(),
        l = I.ZP.getCurrentSidebarChannelId(o),
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
function j(e) {
    let { channelId: t, messageRecord: n, reason: r } = e;
    null != n &&
        o.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            channelId: t,
            messageId: n.id,
            reason: null != r ? r : null,
            shouldNotify: !1
        });
}
function W(e) {
    let { state: t } = e;
    if ('active' !== t) return !1;
    let n = g.Z.getChannelId();
    if (null == n) return !1;
    u.Z.fetchNewLocalMessages(n, R.AQB);
}
class K extends d.Z {
    _initialize() {
        o.Z.subscribe('CONNECTION_OPEN', P);
    }
    _terminate() {
        o.Z.unsubscribe('CONNECTION_OPEN', P);
    }
    constructor(...e) {
        super(...e),
            L(this, 'fetchMessages', D),
            L(this, 'loadSelectedChannelIfNecessary', U),
            L(this, 'stores', new Map().set(I.ZP, k)),
            L(this, 'actions', {
                APP_STATE_UPDATE: W,
                OVERLAY_INITIALIZE: P,
                CHANNEL_SELECT: w,
                VOICE_CHANNEL_SELECT: x,
                THREAD_CREATE: F,
                THREAD_LIST_SYNC: () => U(),
                CHANNEL_CREATE: F,
                CHANNEL_PRELOAD: B,
                THREAD_CREATE_LOCAL: V,
                GUILD_CREATE: () => U(),
                MESSAGE_END_EDIT: H,
                LOAD_MESSAGES_SUCCESS: Y,
                UPLOAD_FAIL: j,
                CHANNEL_DELETE: () => U(),
                THREAD_DELETE: () => U()
            });
    }
}
t.Z = new K();
