r.d(t, {
    $6: function () {
        return b;
    },
    YK: function () {
        return u;
    },
    _o: function () {
        return m;
    },
    ac: function () {
        return f;
    },
    bL: function () {
        return p;
    },
    g0: function () {
        return n;
    },
    gl: function () {
        return h;
    },
    rr: function () {
        return g;
    },
    xH: function () {
        return y;
    }
});
var a, n, i = r(695346), o = r(486472), l = r(430824);
r(626135);
var c = r(981631), s = r(689938);
let d = 86400000 * c.eBq;
function u() {
    let e = i.h2.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), e;
}
function h() {
    let e = i.zA.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), e;
}
function m() {
    let e = i.SE.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), e;
}
function g() {
    let e = i.iH.getSetting();
    return 0 === o.Z.totalUnavailableGuilds && (e = e.filter(e => null != l.Z.getGuild(e))), e;
}
function p(e) {
    return (e & c.HGf) === c.HGf ? {
        all: !0,
        mutualFriends: !0,
        mutualGuilds: !0
    } : {
        all: !1,
        mutualFriends: (e & c.SOq.MUTUAL_FRIENDS) === c.SOq.MUTUAL_FRIENDS,
        mutualGuilds: (e & c.SOq.MUTUAL_GUILDS) === c.SOq.MUTUAL_GUILDS
    };
}
function b(e, t) {
    return !t.verified || null != e && d > Date.now() - new Date(e.created_at).getTime();
}
(a = n || (n = {}))[a.UNDECIDED = 0] = 'UNDECIDED', a[a.OPTIN = 1] = 'OPTIN', a[a.OPTOUT = 2] = 'OPTOUT';
let f = {
    0: void 0,
    1: !0,
    2: !1
};
function y() {
    return [
        {
            name: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_HEADER,
            desc: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_IN_DESC,
            value: 1
        },
        {
            name: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_HEADER,
            desc: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_OPT_OUT_DESC,
            value: 2
        },
        {
            name: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_HEADER,
            desc: s.Z.Messages.PRIVACY_SETTINGS_NON_SPAM_RETRAINING_SETTING_UNSET_DESC,
            value: 0
        }
    ];
}
