n.d(t, {
    D$: function () {
        return O;
    },
    N4: function () {
        return D;
    },
    UI: function () {
        return N;
    },
    Uu: function () {
        return g;
    },
    _N: function () {
        return v;
    },
    cS: function () {
        return R;
    },
    cZ: function () {
        return L;
    },
    e1: function () {
        return b;
    },
    eQ: function () {
        return A;
    },
    fw: function () {
        return S;
    },
    uY: function () {
        return C;
    },
    x9: function () {
        return y;
    }
}), n(757143), n(47120), n(724458);
var r = n(392711), i = n.n(r), a = n(772848), o = n(263568), s = n(468194), l = n(442837), u = n(566006), c = n(592125), d = n(542578), _ = n(375954), E = n(496675), f = n(699516), h = n(70956), p = n(5192), m = n(489887), I = n(981631), T = n(689938);
function g() {
    return {
        text: void 0,
        image: void 0,
        localCreationAnswerId: function () {
            return (0, a.Z)();
        }()
    };
}
function S(e) {
    return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, '');
}
function A(e) {
    for (let t of e.reactions)
        if (null == t.me_vote)
            return !0;
    return !1;
}
function N(e) {
    return (0, l.e7)([E.Z], () => !!(null != e && I.TPd.POLLS.has(e.type)) && (!!e.isPrivate() || E.Z.can(I.Plq.SEND_MESSAGES, e) && E.Z.can(I.Plq.SEND_POLLS, e)));
}
function v() {
    return !1;
}
function O(e, t, n) {
    return 0 === e.length && null == t.find(e => R(e, n));
}
function R(e, t) {
    if (t === o.C.IMAGE_ONLY_ANSWERS)
        return null != e.image;
    {
        var n;
        let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return null != t && t.length > 0;
    }
}
function C(e, t) {
    var n;
    let r = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
    return t === o.C.DEFAULT && null != e.image && (null == r || 0 === r.length);
}
function y(e) {
    var t, n;
    if (null == e)
        return;
    let r = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
        var n, r;
        let i = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji, a = {
                ...e.poll_media,
                emoji: null != i ? {
                    id: i.id,
                    name: null !== (r = i.name) && void 0 !== r ? r : ''
                } : void 0
            };
        return {
            ...e,
            answer_id: t + 1,
            poll_media: a
        };
    });
    let i = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * h.Z.Millis.HOUR).toISOString()) : '0';
    return {
        ...e,
        expiry: i,
        answers: r
    };
}
function D(e) {
    let t = function (e, t) {
        var n, r, i, a;
        let o = null !== (a = null === (i = e.embeds[0]) || void 0 === i ? void 0 : null === (r = i.fields) || void 0 === r ? void 0 : null === (n = r.find(e => 'poll_question_text' === e.rawName)) || void 0 === n ? void 0 : n.rawValue) && void 0 !== a ? a : '';
        return null != t ? (0, s.aF)(o, t) : o;
    }(e, m.Dv);
    return T.Z.Messages.POLL_RESULT_REPLY_TEXT.format({ title: t });
}
function L(e) {
    return e.reduce((e, t) => {
        var n, r;
        return e + (null !== (r = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== r ? r : 0);
    }, 0);
}
function b(e, t, n) {
    var r, a;
    let o = _.Z.getMessage(t, e);
    if (null == o)
        return '';
    let s = o.getReaction({
            id: n,
            name: '',
            animated: !1
        }), l = null !== (a = null == s ? void 0 : null === (r = s.count_details) || void 0 === r ? void 0 : r.vote) && void 0 !== a ? a : 0, E = function (e, t) {
            let n = e.getChannelId(), r = d.Z.getReactions(n, e.id, {
                    id: t,
                    name: '',
                    animated: !1
                }, m.$J, u.O.VOTE), a = c.Z.getChannel(n), o = null == a || a.isPrivate() ? null : a.getGuildId();
            return i()(r).reject(e => f.Z.isBlocked(e.id)).take(m.$J).map(e => p.ZP.getName(o, null == a ? void 0 : a.id, e)).value();
        }(o, n);
    return 0 === E.length ? '' : function (e, t) {
        let n = Math.max(0, t - e.length);
        if (1 === e.length)
            return n > 0 ? T.Z.Messages.POLL_VOTES_TOOLTIP_1_N.format({
                a: e[0],
                n: n.toLocaleString()
            }) : e[0];
        if (2 === e.length)
            return n > 0 ? T.Z.Messages.POLL_VOTES_TOOLTIP_2_N.format({
                a: e[0],
                b: e[1],
                n: n.toLocaleString()
            }) : T.Z.Messages.POLL_VOTES_TOOLTIP_2.format({
                a: e[0],
                b: e[1]
            });
        if (3 !== e.length)
            return T.Z.Messages.POLL_VOTES_TOOLTIP_N.format({ n: n.toLocaleString() });
        else
            return n > 0 ? T.Z.Messages.POLL_VOTES_TOOLTIP_3_N.format({
                a: e[0],
                b: e[1],
                c: e[2],
                n: n.toLocaleString()
            }) : T.Z.Messages.POLL_VOTES_TOOLTIP_3.format({
                a: e[0],
                b: e[1],
                c: e[2]
            });
    }(E, l);
}
