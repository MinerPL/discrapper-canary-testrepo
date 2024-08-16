n.d(t, {
    EO: function () {
        return T;
    },
    Fc: function () {
        return I;
    },
    Ft: function () {
        return A;
    },
    W5: function () {
        return S;
    },
    _T: function () {
        return f;
    },
    oY: function () {
        return E;
    },
    u5: function () {
        return p;
    }
}),
    n(411104);
var r = n(442837),
    i = n(246946),
    a = n(594174),
    s = n(981631),
    o = n(689938);
let l = (e) => ''.concat(e[0], '...'),
    u = (e) => '@'.concat(e),
    c = {
        mode: 'full',
        decoration: 'never',
        identifiable: 'auto',
        forcePomelo: !1
    };
function d(e) {
    return !!(null != e && e.length > 0);
}
function _(e) {
    if (d(e.global_name)) return e.global_name;
    if (d(e.globalName)) return e.globalName;
    if (d(e.username)) return e.username;
    else return '???';
}
function E(e) {
    var t;
    if (null == e) return;
    let n = i.Z.hidePersonalInformation,
        r = _(e);
    return n && r.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (r = l(r)), r;
}
function f(e) {
    var t;
    let n = (0, r.e7)([i.Z], () => i.Z.hidePersonalInformation);
    if (null == e) return;
    let a = _(e);
    return n && a.toLocaleLowerCase() === (null === (t = e.username) || void 0 === t ? void 0 : t.toLocaleLowerCase()) && '0' === e.discriminator && (a = l(a)), a;
}
function h(e) {
    if (null != e) {
        if (d(e.globalName)) return e.globalName;
        else if (d(e.global_name)) return e.global_name;
        else return;
    }
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case s.Skl.ONLINE:
            return t ? o.Z.Messages.STATUS_ONLINE_MOBILE : o.Z.Messages.STATUS_ONLINE;
        case s.Skl.OFFLINE:
            return o.Z.Messages.STATUS_OFFLINE;
        case s.Skl.IDLE:
            return o.Z.Messages.STATUS_IDLE;
        case s.Skl.DND:
            return o.Z.Messages.STATUS_DND;
        case s.Skl.INVISIBLE:
            return o.Z.Messages.STATUS_INVISIBLE;
        case s.Skl.STREAMING:
            return o.Z.Messages.STATUS_STREAMING;
        case s.Skl.UNKNOWN:
        default:
            return null;
    }
}
function m(e, t) {
    let { maxDaysOld: n, minDaysOld: r = 0 } = t;
    if (null == e) return !1;
    let i = Date.now() - e.createdAt.getTime();
    return ((null == n || !!(i <= 86400000 * n)) && !!(i >= 86400000 * r)) || !1;
}
function I(e) {
    return !m(e, {
        minDaysOld: 0,
        maxDaysOld: 30
    });
}
function T(e) {
    return m(e, {
        minDaysOld: 0,
        maxDaysOld: 7
    });
}
function g(e, t, n) {
    if (null == e) return o.Z.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER;
    if (!d(e.username)) return '???';
    let r = n;
    if (('always' === t.identifiable ? (r = !1) : 'never' === t.identifiable && (r = !0), '0' !== e.discriminator && e.discriminator !== s.fo$ && !t.forcePomelo)) return 'username' === t.mode ? e.username : r ? e.username : ''.concat(e.username, '#').concat(e.discriminator);
    let i = r ? l(e.username) : e.username;
    return 'never' !== t.decoration ? u(i) : i;
}
function S(e, t) {
    let n = {
            ...c,
            ...t
        },
        r = 'auto' !== n.identifiable || i.Z.hidePersonalInformation;
    return g(e, n, r);
}
function A(e) {
    return (0, r.e7)([a.default], () => {
        if (null != e) return e.isPrivate() && e.isDM() ? a.default.getUser(e.getRecipientId()) : null;
    });
}
t.ZP = {
    getName: E,
    useName: f,
    getUserTag: S,
    useUserTag: function (e, t) {
        let n = {
            ...c,
            ...t
        };
        return g(
            e,
            n,
            (0, r.e7)([i.Z], () => i.Z.hidePersonalInformation)
        );
    },
    getFormattedName: function (e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return '???';
        let r = h(e),
            i = n ? S(e) : null !== (t = e.username) && void 0 !== t ? t : '???';
        return r === i ? r : null != r ? ''.concat(r, ' (').concat(i, ')') : i;
    },
    getGlobalName: h,
    humanizeStatus: p,
    useDirectMessageRecipient: A
};
