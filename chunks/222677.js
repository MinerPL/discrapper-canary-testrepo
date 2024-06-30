n.d(t, {
    $E: function () {
        return R;
    },
    T6: function () {
        return v;
    },
    TW: function () {
        return i;
    },
    U0: function () {
        return A;
    },
    Vn: function () {
        return D;
    },
    WO: function () {
        return C;
    },
    rU: function () {
        return N;
    },
    wX: function () {
        return O;
    }
});
var r, i, a = n(544891), o = n(780384), s = n(570140), l = n(668781), u = n(566006), c = n(346479), d = n(314897), _ = n(375954), E = n(585483), f = n(70956), h = n(176354), p = n(563114), m = n(981631), I = n(689938);
function T(e, t, n) {
    let {
        status: r,
        body: i
    } = e;
    if (429 === r)
        return setTimeout(t, e.body.retry_after * f.Z.Millis.SECOND), !1;
    if (403 === r)
        switch (i && i.code) {
        case m.evJ.TOO_MANY_REACTIONS:
            l.Z.show({
                title: I.Z.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                body: I.Z.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                confirmText: I.Z.Messages.OKAY
            });
            break;
        case m.evJ.REACTION_BLOCKED:
            E.S.dispatch(m.CkL.SHAKE_APP, {
                duration: 200,
                intensity: 2
            });
        }
    else if (!n.isRetry)
        return t(), !1;
    return !0;
}
function g(e, t, n, r, i) {
    var a, o;
    s.Z.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: null !== (a = null == i ? void 0 : i.userId) && void 0 !== a ? a : d.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: null !== (o = null == i ? void 0 : i.colors) && void 0 !== o ? o : [],
        reactionType: (null == i ? void 0 : i.burst) ? u.O.BURST : u.O.NORMAL
    });
}
function S(e) {
    let {
            channelId: t,
            messageId: n,
            emoji: r,
            userId: i,
            useTypeEndpoint: a = !1,
            type: o = u.O.NORMAL
        } = e, s = null != r.id ? ''.concat(r.name, ':').concat(r.id) : r.name;
    return null == i ? m.ANM.REACTIONS(t, n, s) : a ? m.ANM.REACTION_WITH_TYPE(t, n, s, i, o) : m.ANM.REACTION(t, n, s, i);
}
(r = i || (i = {})).MESSAGE = 'Message', r.FORUM_TOOLBAR = 'Forum Toolbar', r.MOBILE_MEDIA_VIEWER = 'Mobile Media Viewer';
async function A(e) {
    let {
            channelId: t,
            messageId: n,
            emoji: r,
            limit: i,
            after: o,
            type: l
        } = e, c = l === u.O.VOTE ? function (e, t, n) {
            var r;
            let i = null !== (r = n.id) && void 0 !== r ? r : n.name;
            return m.ANM.POLL_ANSWER_VOTERS(e, t, i);
        }(t, n, r) : S({
            channelId: t,
            messageId: n,
            emoji: r
        }), d = await a.tn.get({
            url: c,
            query: {
                limit: i,
                after: o,
                type: l
            },
            oldFormErrors: !0
        }), _ = l === u.O.VOTE ? d.body.users : d.body;
    return s.Z.dispatch({
        type: 'MESSAGE_REACTION_ADD_USERS',
        channelId: t,
        messageId: n,
        users: _,
        emoji: r,
        reactionType: l
    }), _;
}
async function N(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'Message', i = arguments.length > 4 ? arguments[4] : void 0, s = null != i && !!i.burst, d = null != i && !!i.isRetry;
    if (!d && function (e, t, n, r) {
            let i = _.Z.getMessage(e, t);
            return null != i && i.userHasReactedWithEmoji(n, r);
        }(e, t, n, s)) {
        l.Z.show({
            title: I.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
            body: I.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
            confirmText: I.Z.Messages.GOT_IT
        });
        return;
    }
    let E = await y(n, s);
    return g('MESSAGE_REACTION_ADD', e, t, n, {
        burst: s,
        colors: E
    }), await c.Z.unarchiveThreadIfNecessary(e), a.tn.put({
        url: S({
            channelId: e,
            messageId: t,
            emoji: n,
            userId: '@me'
        }),
        query: {
            location: r,
            type: s ? u.O.BURST : u.O.NORMAL
        },
        oldFormErrors: !0
    }).then(() => {
        s ? (o.uv.announce(I.Z.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({ name: n.name })), p.Z.triggerFullscreenAnimation({
            channelId: e,
            messageId: t,
            emoji: {
                ...n,
                animated: !1
            }
        })) : o.uv.announce(I.Z.Messages.REACTION_ADD_SUCCESS_A11Y.format({ name: n.name }));
    }).catch(i => {
        T(i, () => N(e, t, n, r, {
            burst: s,
            isRetry: !0
        }), { isRetry: d }) && (g('MESSAGE_REACTION_REMOVE', e, t, n, { burst: s }), s ? o.uv.announce(I.Z.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({ name: n.name })) : o.uv.announce(I.Z.Messages.REACTION_ADD_ERROR_A11Y.format({ name: n.name })));
    });
}
function v(e) {
    let {
        channelId: t,
        messageId: n,
        emoji: r,
        key: i
    } = e;
    s.Z.dispatch({
        type: 'BURST_REACTION_EFFECT_PLAY',
        channelId: t,
        messageId: n,
        emoji: r,
        key: i
    });
}
async function O(e, t, n) {
    let r = null != n && !!n.isRetry;
    await c.Z.unarchiveThreadIfNecessary(e), a.tn.del({
        url: m.ANM.REMOVE_REACTIONS(e, t),
        oldFormErrors: !0
    }).catch(n => {
        T(n, () => O(e, t, { isRetry: !0 }), { isRetry: r });
    });
}
async function R(e, t, n, r) {
    let i = null != r && !!r.isRetry;
    await c.Z.unarchiveThreadIfNecessary(e);
    let o = null === n.id ? n.name : ''.concat(n.name, ':').concat(n.id);
    a.tn.del({
        url: m.ANM.REMOVE_EMOJI_REACTIONS(e, t, o),
        oldFormErrors: !0
    }).catch(r => {
        T(r, () => R(e, t, n, { isRetry: !0 }), { isRetry: i });
    });
}
async function C(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'Message', s = arguments.length > 5 ? arguments[5] : void 0, l = null != s && !!s.burst, d = null != s && !!s.isRetry;
    g('MESSAGE_REACTION_REMOVE', e, t, n, {
        userId: r,
        burst: l
    }), await c.Z.unarchiveThreadIfNecessary(e), a.tn.del({
        url: S({
            channelId: e,
            messageId: t,
            emoji: n,
            userId: null != r ? r : '@me',
            type: l ? u.O.BURST : u.O.NORMAL,
            useTypeEndpoint: !0
        }),
        query: {
            location: i,
            burst: l
        },
        oldFormErrors: !0
    }).then(() => {
        (null == s ? void 0 : s.burst) ? o.uv.announce(I.Z.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({ name: n.name })) : o.uv.announce(I.Z.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({ name: n.name }));
    }).catch(async a => {
        if (T(a, () => C(e, t, n, r, i, {
                burst: l,
                isRetry: !0
            }), { isRetry: d })) {
            let i = await y(n, l);
            g('MESSAGE_REACTION_ADD', e, t, n, {
                userId: r,
                burst: l,
                colors: i
            }), (null == s ? void 0 : s.burst) ? o.uv.announce(I.Z.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({ name: n.name })) : o.uv.announce(I.Z.Messages.REACTION_REMOVE_ERROR_A11Y.format({ name: n.name }));
        }
    });
}
async function y(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, h.B6)(e);
        } catch {
        }
    return n;
}
function D(e) {
    let {
        channelId: t,
        messageId: n,
        emoji: r,
        reactionType: i,
        userId: a,
        location: o
    } = e;
    C(t, n, r, a, o, { burst: i === u.O.BURST });
}
