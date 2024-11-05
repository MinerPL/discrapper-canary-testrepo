let r, i, a;
n.d(t, {
    At: function () {
        return T;
    },
    DB: function () {
        return N;
    },
    DR: function () {
        return b;
    },
    Wf: function () {
        return A;
    },
    XU: function () {
        return E;
    },
    dL: function () {
        return I;
    },
    eH: function () {
        return R;
    },
    m1: function () {
        return y;
    },
    op: function () {
        return C;
    },
    s1: function () {
        return S;
    },
    uL: function () {
        return g;
    },
    uv: function () {
        return v;
    }
}),
    n(653041),
    n(757143);
var s = n(539528),
    o = n(710845),
    l = n(585483),
    u = n(143816),
    c = n(981631);
let d = new o.Z('Routing/Utils'),
    f = [c.E07.DEVELOPER_PORTAL];
r = __OVERLAY__ ? (0, s.PP)() : (0, s.lX)();
let _ = !1,
    h = r.listen((e, t) => {
        'REPLACE' !== t && ((_ = !0), h());
    });
function p() {
    return !l.S.hasSubscribers(c.CkL.MODAL_CLOSE) && (n(574254).Z.close(), !0);
}
function m(e, t) {
    return !!('string' == typeof e && f.some((t) => e.startsWith(t))) && (d.log(''.concat(t, ' - route to external path ').concat(e)), window.dispatchEvent(new Event('beforeunload')), window.location[t](e), !0);
}
function g(e, t) {
    if (m(e, 'assign')) return;
    d.log('transitionTo - Transitioning to '.concat(e));
    let n = null == t ? void 0 : t.source;
    null == t || delete t.source;
    let s = null == t ? void 0 : t.sourceLocationStack;
    null == t || delete t.sourceLocationStack,
        null == t
            ? r.push(e)
            : r.push({
                  pathname: e,
                  ...t
              }),
        (i = n),
        (a = s);
}
function E(e, t, n, r) {
    d.log(
        'transitionToGuild - Transitioning to '.concat(
            JSON.stringify({
                guildId: e,
                channelId: t,
                messageId: n
            })
        )
    ),
        g(c.Z5c.CHANNEL(e, t, n), r);
}
function v() {
    return null != i && u.H.has(i);
}
function I(e, t, n) {
    !m(e, 'replace') && (d.log('Replacing route with '.concat(e)), 'string' == typeof e ? r.replace(e, t) : r.replace(e), (i = n));
}
function S() {
    return r;
}
function T() {
    return i;
}
function b() {
    return a;
}
function y(e) {
    if (null == e) {
        var t;
        e = null !== (t = r.location.pathname) && void 0 !== t ? t : '';
    }
    return !e.startsWith(c.Z5c.HANDOFF) && !0;
}
function A(e) {
    if (null == e) {
        var t;
        e = null !== (t = r.location.pathname) && void 0 !== t ? t : '';
    }
    if (e.startsWith(c.Z5c.LOGIN)) return c.Usc.LOGIN;
    if (e.startsWith(c.Z5c.REGISTER)) return c.Usc.REGISTER;
    if (e.startsWith(c.Z5c.INVITE(''))) return c.Usc.INVITE;
    else if (e.startsWith(c.Z5c.VERIFY)) return c.Usc.VERIFY;
    else if (e.startsWith(c.Z5c.DISABLE_EMAIL_NOTIFICATIONS)) return c.Usc.DISABLE_EMAIL_NOTIFICATIONS;
    else if (e.startsWith(c.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return c.Usc.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
    else if (e.startsWith(c.Z5c.REJECT_IP)) return c.Usc.REJECT_IP;
    else if (e.startsWith(c.Z5c.REJECT_MFA)) return c.Usc.REJECT_MFA;
    else if (e.startsWith(c.Z5c.AUTHORIZE_IP)) return c.Usc.AUTHORIZE_IP;
    else if (e.startsWith(c.Z5c.AUTHORIZE_PAYMENT)) return c.Usc.AUTHORIZE_PAYMENT;
    else if (e.startsWith(c.Z5c.RESET)) return c.Usc.RESET;
    else if (e.startsWith(c.Z5c.REPORT)) return c.Usc.REPORT;
    else if (e.startsWith(c.Z5c.REPORT_SECOND_LOOK)) return c.Usc.REPORT_SECOND_LOOK;
    else if (e.startsWith(c.Z5c.ACCOUNT_REVERT(''))) return c.Usc.ACCOUNT_REVERT;
    return e;
}
function N() {
    return _;
}
function C() {
    p() && ((i = null), r.goBack());
}
function R() {
    p() && ((i = null), r.goForward());
}
