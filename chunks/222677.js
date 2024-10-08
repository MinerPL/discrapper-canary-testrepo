n.d(t, {
    $E: function () {
        return v;
    },
    T6: function () {
        return O;
    },
    TW: function () {
        return i;
    },
    U0: function () {
        return A;
    },
    WO: function () {
        return C;
    },
    rU: function () {
        return N;
    },
    wX: function () {
        return R;
    }
});
var r,
    i,
    a = n(544891),
    s = n(780384),
    o = n(570140),
    l = n(668781),
    u = n(566006),
    c = n(346479),
    d = n(314897),
    _ = n(375954),
    E = n(585483),
    f = n(70956),
    h = n(176354),
    p = n(563114),
    I = n(981631),
    m = n(689938);
function T(e, t, n) {
    let { headers: r, status: i, body: a } = e;
    if (429 === i) {
        let e = parseInt(r['retry-after']);
        return !isNaN(e) && setTimeout(t, e * f.Z.Millis.SECOND), !1;
    }
    if (403 === i)
        switch (a && a.code) {
            case I.evJ.TOO_MANY_REACTIONS:
                l.Z.show({
                    title: m.Z.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                    body: m.Z.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                    confirmText: m.Z.Messages.OKAY
                });
                break;
            case I.evJ.REACTION_BLOCKED:
                E.S.dispatch(I.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2
                });
        }
    else if (!n.isRetry) return t(), !1;
    return !0;
}
function S(e, t, n, r, i) {
    var a, s;
    o.Z.dispatch({
        type: e,
        channelId: t,
        messageId: n,
        userId: null !== (a = null == i ? void 0 : i.userId) && void 0 !== a ? a : d.default.getId(),
        emoji: r,
        optimistic: !0,
        colors: null !== (s = null == i ? void 0 : i.colors) && void 0 !== s ? s : [],
        reactionType: (null == i ? void 0 : i.burst) ? u.O.BURST : u.O.NORMAL
    });
}
function g(e) {
    let { channelId: t, messageId: n, emoji: r, userId: i, useTypeEndpoint: a = !1, type: s = u.O.NORMAL } = e,
        o = null != r.id ? ''.concat(r.name, ':').concat(r.id) : r.name;
    return null == i ? I.ANM.REACTIONS(t, n, o) : a ? I.ANM.REACTION_WITH_TYPE(t, n, o, i, s) : I.ANM.REACTION(t, n, o, i);
}
((r = i || (i = {})).MESSAGE = 'Message'), (r.FORUM_TOOLBAR = 'Forum Toolbar'), (r.MOBILE_MEDIA_VIEWER = 'Mobile Media Viewer'), (r.MESSAGE_HOVER_BAR = 'Message Hover Bar'), (r.MESSAGE_INLINE_BUTTON = 'Message Inline Button'), (r.MESSAGE_CONTEXT_MENU = 'Message Context Menu'), (r.MESSAGE_REACTION_PICKER = 'Message Reaction Picker');
async function A(e) {
    let { channelId: t, messageId: n, emoji: r, limit: i, after: s, type: l } = e,
        c =
            l === u.O.VOTE
                ? (function (e, t, n) {
                      var r;
                      let i = null !== (r = n.id) && void 0 !== r ? r : n.name;
                      return I.ANM.POLL_ANSWER_VOTERS(e, t, i);
                  })(t, n, r)
                : g({
                      channelId: t,
                      messageId: n,
                      emoji: r
                  }),
        d = await a.tn.get({
            url: c,
            query: {
                limit: i,
                after: s,
                type: l
            },
            oldFormErrors: !0
        }),
        _ = l === u.O.VOTE ? d.body.users : d.body;
    return (
        o.Z.dispatch({
            type: 'MESSAGE_REACTION_ADD_USERS',
            channelId: t,
            messageId: n,
            users: _,
            emoji: r,
            reactionType: l
        }),
        _
    );
}
async function N(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'Message',
        i = arguments.length > 4 ? arguments[4] : void 0,
        o = null != i && !!i.burst,
        d = null != i && !!i.isRetry;
    if (
        !d &&
        (function (e, t, n, r) {
            let i = _.Z.getMessage(e, t);
            return null != i && i.userHasReactedWithEmoji(n, r);
        })(e, t, n, o)
    ) {
        l.Z.show({
            title: m.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
            body: m.Z.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
            confirmText: m.Z.Messages.GOT_IT
        });
        return;
    }
    let E = await y(n, o);
    return (
        S('MESSAGE_REACTION_ADD', e, t, n, {
            burst: o,
            colors: E
        }),
        await c.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .put({
                url: g({
                    channelId: e,
                    messageId: t,
                    emoji: n,
                    userId: '@me'
                }),
                query: {
                    location: r,
                    type: o ? u.O.BURST : u.O.NORMAL
                },
                oldFormErrors: !0
            })
            .then(() => {
                o
                    ? (s.uv.announce(m.Z.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({ name: n.name })),
                      p.Z.triggerFullscreenAnimation({
                          channelId: e,
                          messageId: t,
                          emoji: {
                              ...n,
                              animated: !1
                          }
                      }))
                    : s.uv.announce(m.Z.Messages.REACTION_ADD_SUCCESS_A11Y.format({ name: n.name }));
            })
            .catch((i) => {
                T(
                    i,
                    () =>
                        N(e, t, n, r, {
                            burst: o,
                            isRetry: !0
                        }),
                    { isRetry: d }
                ) && (S('MESSAGE_REACTION_REMOVE', e, t, n, { burst: o }), o ? s.uv.announce(m.Z.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({ name: n.name })) : s.uv.announce(m.Z.Messages.REACTION_ADD_ERROR_A11Y.format({ name: n.name })));
            })
    );
}
function O(e) {
    let { channelId: t, messageId: n, emoji: r, key: i } = e;
    o.Z.dispatch({
        type: 'BURST_REACTION_EFFECT_PLAY',
        channelId: t,
        messageId: n,
        emoji: r,
        key: i
    });
}
async function R(e, t, n) {
    let r = null != n && !!n.isRetry;
    await c.Z.unarchiveThreadIfNecessary(e),
        a.tn
            .del({
                url: I.ANM.REMOVE_REACTIONS(e, t),
                oldFormErrors: !0
            })
            .catch((n) => {
                T(n, () => R(e, t, { isRetry: !0 }), { isRetry: r });
            });
}
async function v(e, t, n, r) {
    let i = null != r && !!r.isRetry;
    await c.Z.unarchiveThreadIfNecessary(e);
    let s = null === n.id ? n.name : ''.concat(n.name, ':').concat(n.id);
    a.tn
        .del({
            url: I.ANM.REMOVE_EMOJI_REACTIONS(e, t, s),
            oldFormErrors: !0
        })
        .catch((r) => {
            T(r, () => v(e, t, n, { isRetry: !0 }), { isRetry: i });
        });
}
async function C(e) {
    let { channelId: t, messageId: n, emoji: r, location: i = 'Message', userId: o, options: l } = e,
        d = null != l && !!l.burst,
        _ = null != l && !!l.isRetry;
    S('MESSAGE_REACTION_REMOVE', t, n, r, {
        userId: o,
        burst: d
    }),
        await c.Z.unarchiveThreadIfNecessary(t),
        a.tn
            .del({
                url: g({
                    channelId: t,
                    messageId: n,
                    emoji: r,
                    userId: null != o ? o : '@me',
                    type: d ? u.O.BURST : u.O.NORMAL,
                    useTypeEndpoint: !0
                }),
                query: {
                    location: i,
                    burst: d
                },
                oldFormErrors: !0
            })
            .then(() => {
                (null == l ? void 0 : l.burst) ? s.uv.announce(m.Z.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({ name: r.name })) : s.uv.announce(m.Z.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({ name: r.name }));
            })
            .catch(async (e) => {
                if (
                    T(
                        e,
                        () =>
                            C({
                                channelId: t,
                                messageId: n,
                                emoji: r,
                                location: i,
                                userId: o,
                                options: {
                                    burst: d,
                                    isRetry: !0
                                }
                            }),
                        { isRetry: _ }
                    )
                ) {
                    let e = await y(r, d);
                    S('MESSAGE_REACTION_ADD', t, n, r, {
                        userId: o,
                        burst: d,
                        colors: e
                    }),
                        (null == l ? void 0 : l.burst) ? s.uv.announce(m.Z.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({ name: r.name })) : s.uv.announce(m.Z.Messages.REACTION_REMOVE_ERROR_A11Y.format({ name: r.name }));
                }
            });
}
async function y(e, t) {
    let n = [];
    if (t)
        try {
            n = await (0, h.B6)(e);
        } catch {}
    return n;
}
