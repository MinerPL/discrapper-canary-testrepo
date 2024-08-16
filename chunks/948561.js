n.d(t, {
    b2: function () {
        return y;
    }
}),
    n(47120),
    n(724458);
var r = n(952639),
    i = n.n(r),
    a = n(605906),
    s = n.n(a),
    o = n(286379),
    l = n(570140),
    u = n(147913),
    c = n(786761),
    d = n(797614),
    _ = n(869765),
    E = n(314897),
    f = n(433355),
    h = n(592125),
    p = n(375954),
    m = n(944486),
    I = n(914010),
    T = n(709054),
    g = n(93735),
    S = n(522664),
    A = n(651530),
    N = n(163268),
    v = n(735020),
    O = n(774863),
    R = n(981631),
    C = n(526761);
let y = 3000,
    D = {};
function L(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function b() {
    Object.values(D).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (D = {});
}
function M(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = L(e);
    if (null != D[n]) {
        let { timeout: r } = D[n];
        return (
            clearTimeout(r),
            (function (e, t) {
                let { setAt: n } = D[L(e)];
                if (t === N.Pq.UPDATE) {
                    var r, i;
                    let t = null !== (r = e.attachments) && void 0 !== r ? r : [],
                        n = null !== (i = e.embeds) && void 0 !== i ? i : [],
                        a = t.filter((e) =>
                            (0, N.KP)(
                                {
                                    type: N.lJ.Attachment,
                                    media: e
                                },
                                !0
                            )
                        ),
                        s = n.filter((e) =>
                            (0, N.KP)(
                                {
                                    type: N.lJ.Embed,
                                    media: e
                                },
                                !0
                            )
                        );
                    (0, N.xx)({
                        messageId: e.id,
                        channelId: e.channel_id,
                        numOfAttachments: t.length,
                        numOfEmbeds: n.length,
                        numOfExplicitAttachments: a.length,
                        numOfExplicitEmbeds: s.length
                    });
                }
                (0, N.OP)(n, t);
            })(e, t),
            delete D[n],
            !0
        );
    }
    return !1;
}
let P = (e, t) => {
    if (0 !== e.length) {
        if (t) {
            (0, S.gx)(e);
            return;
        }
        (0, S.qO)(
            e[0].channel_id,
            e.map((e) => e.id)
        );
    }
};
function U(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = null != t ? t : {},
        i = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(g.N7) : e;
    i.forEach((e) => {
        let t = L(e);
        null == D[t] &&
            (d.Z.increment({ name: o.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (D[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    !(function (e) {
                        if (M(e, N.Pq.TIMEOUT)) {
                            let t = p.Z.getMessage(e.channel_id, e.id),
                                { attachmentIds: n, embedIds: r } = (0, g.ZW)(t);
                            (0, N.Hc)({
                                channelId: e.channel_id,
                                messageId: e.id,
                                attachmentIds: n,
                                embedIds: r
                            }),
                                l.Z.dispatch({
                                    type: 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT',
                                    messageId: e.id,
                                    channelId: e.channel_id
                                });
                        }
                    })(e);
                }, y)
            }));
    });
    let a = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              P(
                  i.filter((e) => null != D[L(e)]),
                  a
              );
          }, 800 * Math.random())
        : P(i, a);
}
function w(e) {
    let t = O.Z.validContentScanVersion;
    return e.reduce((e, n) => {
        var r, i, a, s, o, l, u, c;
        null == e[n.channel_id] &&
            (e[n.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
        let d = e[n.channel_id];
        return (
            (d.numOfAttachments += null !== (o = null === (r = n.attachments) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0),
            (d.numOfEmbeds += null !== (l = null === (i = n.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== l ? l : 0),
            (d.numOfAttachmentsPendingScan += null !== (u = null === (a = n.attachments) || void 0 === a ? void 0 : a.filter((e) => (0, g.CN)(e, t)).length) && void 0 !== u ? u : 0),
            (d.numOfEmbedsPendingScan += null !== (c = null == n ? void 0 : null === (s = n.embeds) || void 0 === s ? void 0 : s.filter((e) => (0, g.fj)(e, t)).length) && void 0 !== c ? c : 0),
            {
                ...e,
                [n.channel_id]: d
            }
        );
    }, {});
}
function x(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r } = (function (e) {
        let t = e.filter((e) => (0, g.qP)(e) && (0, N.HH)(e)),
            n = e
                .map((e) => {
                    if (null != e && 'referenced_message' in e && null != e.referenced_message && (0, g.qP)(e.referenced_message) && (0, N.HH)(e.referenced_message)) return e.referenced_message;
                })
                .filter(function (e) {
                    return null != e;
                });
        n.length > 0 && (t = [...t, ...n]);
        let r = s()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
        return {
            messagesPendingScan: r.filter((e) => (0, g.xG)(e)),
            attributesByChannelId: w(r)
        };
    })(e);
    return (
        T.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, N.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        !!(n.length > 0) && (U(n, t), !0)
    );
}
function G(e) {
    var t, n, r, i, a, s;
    let { message: o } = e;
    if (!(0, A.Kh)() || null == o.channel_id || null == o.id || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === E.default.getId() || (null == o.embeds && null == o.attachments) || ((null === (n = o.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (r = o.attachments) || void 0 === r ? void 0 : r.length) === 0)) return !1;
    if (!(0, g.N7)(o)) {
        let e = null !== (s = null !== (a = p.Z.getMessage(o.channel_id, o.id)) && void 0 !== a ? a : v.Z.getMessage(o.id, o.channel_id)) && void 0 !== s ? s : null === (i = _.Z.getMessage(o.channel_id, o.id)) || void 0 === i ? void 0 : i.message;
        null != e && !(0, g.N7)((0, c.wi)(e, o)) && M(e, N.Pq.UPDATE);
    }
    let l = m.Z.getChannelId(),
        u = f.ZP.getCurrentSidebarChannelId(l);
    if (!(o.channel_id === l || o.channel_id === u)) return !1;
    let d = p.Z.getMessage(o.channel_id, o.id);
    return null != d && x([d], { isMessageUpdate: !0 });
}
function k(e) {
    var t, n;
    let { channelId: r, message: i, optimistic: a, isPushNotification: s } = e;
    if (!(0, A.Kh)() || a || s || null == r || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === E.default.getId()) return !1;
    let o = m.Z.getChannelId(),
        l = f.ZP.getCurrentSidebarChannelId(o),
        u = r === o || r === l,
        c = h.Z.getChannel(r);
    if (!u) return !1;
    let d = null === (n = null == c ? void 0 : c.isPrivate()) || void 0 === n || n,
        _ = (null == c ? void 0 : c.memberCount) == null || (null == c ? void 0 : c.memberCount) > 100;
    return x([i], { jitter: d && _ });
}
function B(e) {
    let { channelId: t, messages: n } = e;
    if (!(0, A.Kh)() || null == t || null == n) return !1;
    let r = m.Z.getChannelId(),
        i = f.ZP.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && x(n);
}
function F(e) {
    let { messages: t } = e;
    if (!(0, A.Kh)() || null == t) return !1;
    let n = i()(t);
    return x(s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id));
}
function V(e) {
    let { guildId: t, threads: n } = e;
    return !!(null != n && (0, A.Kh)()) && I.Z.getGuildId() === t && x(T.default.keys(n).map((e) => n[e].first_message));
}
function H(e) {
    let { guildId: t, firstMessages: n } = e;
    return !!(null != n && (0, A.Kh)()) && I.Z.getGuildId() === t && x(n, { forceBatchScan: !0 });
}
function Z(e) {
    let { channelId: t } = e;
    return !!(null != t && (0, A.Kh)()) && t === m.Z.getChannelId() && W(t);
}
function Y(e) {
    let { settings: t, local: n } = e;
    if (!(0, A.Kh)() || !n || t.type !== C.yP.PRELOADED_USER_SETTINGS) return !1;
    let r = m.Z.getChannelId();
    return null != r && W(r);
}
function j(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!(0, A.Kh)() && !!n && W(t);
}
function W(e) {
    let t = p.Z.getMessages(e);
    return (
        0 !== t.length &&
        (function (e) {
            let { messagesPendingScan: t, attributesByChannelId: n } = (function (e) {
                let t = e.filter((e) => (0, g.qP)(e) && (0, N.HH)(e)),
                    n = e
                        .map((e) => {
                            if (R.OBS.has(e.type) && null != e.messageReference) {
                                let t = _.Z.getMessageByReference(e.messageReference);
                                if (t.state === _.Y.LOADED && null != t.message && (0, g.qP)(t.message) && (0, N.HH)(t.message)) return t.message;
                            }
                        })
                        .filter(function (e) {
                            return null != e;
                        });
                n.length > 0 && (t = [...t, ...n]);
                let r = s()(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
                return {
                    messagesPendingScan: r.filter((e) => (0, g.xG)(e)),
                    attributesByChannelId: w(r)
                };
            })(e);
            return (
                T.default.entries(n).forEach((e) => {
                    let [t, n] = e;
                    (0, N.IV)({
                        channelId: t,
                        numOfAttachments: n.numOfAttachments,
                        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                        numOfEmbeds: n.numOfEmbeds,
                        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                    });
                }),
                !!(t.length > 0) && (U(t), !0)
            );
        })(t)
    );
}
class K extends u.Z {
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                LOAD_MESSAGES_SUCCESS: B,
                LOAD_FORUM_POSTS: V,
                LOAD_THREADS_SUCCESS: H,
                LOAD_ARCHIVED_THREADS_SUCCESS: H,
                MESSAGE_CREATE: k,
                MESSAGE_UPDATE: G,
                LOGOUT: b,
                SEARCH_FINISH: F,
                MOD_VIEW_SEARCH_FINISH: F,
                CHANNEL_SELECT: Z,
                LOAD_PINNED_MESSAGES_SUCCESS: F,
                USER_SETTINGS_PROTO_UPDATE: Y,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: j
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.ZP = new K();
