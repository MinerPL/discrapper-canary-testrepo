n(47120), n(789020), n(653041);
var r, i, a, o, s = n(442837), l = n(570140), u = n(630388), c = n(709054), d = n(271383), _ = n(430824), E = n(594174), f = n(981631), h = n(372897);
let p = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        canChat: !0
    }, m = new Set(), I = {};
function T(e) {
    let t;
    g(e), m.add(e);
    let n = _.Z.getGuild(e), r = E.default.getCurrentUser();
    if (null == n || n.verificationLevel === f.sFg.NONE || null == r || n.isOwner(r) || r.isPhoneVerified())
        return;
    let i = d.ZP.getMember(n.id, r.id);
    if (null != i) {
        var a;
        if ((0, u.yE)(null !== (a = i.flags) && void 0 !== a ? a : 0, h.q.BYPASSES_VERIFICATION))
            return;
        let e = new Set();
        for (let t of i.roles) {
            let r = _.Z.getRole(n.id, t);
            null != r && !r.managed && e.add(t);
        }
        let t = new Date('2022-12-02 00:00:00'), r = null == i.joinedAt || new Date(i.joinedAt) < t;
        if (!(n.hasFeature(f.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0)
            return;
    }
    let o = +r.createdAt + 60000 * f.YeM.ACCOUNT_AGE - Date.now(), s = +n.joinedAt + 60000 * f.YeM.MEMBER_AGE - Date.now(), c = n.verificationLevel >= f.sFg.LOW && !r.isClaimed(), p = !1, T = !1, S = !1, A = !1;
    !r.isPhoneVerified() && !r.isStaff() && (p = n.verificationLevel >= f.sFg.LOW && !r.verified, T = n.verificationLevel >= f.sFg.VERY_HIGH, S = n.verificationLevel >= f.sFg.MEDIUM && o > 0, A = n.verificationLevel >= f.sFg.HIGH && s > 0);
    let N = [];
    A && N.push(s), S && N.push(o), N.length > 0 && (t = setTimeout(() => l.Z.dispatch({
        type: 'GUILD_VERIFICATION_CHECK',
        guildId: e
    }), Math.max(...N))), I[e] = {
        notClaimed: c,
        notEmailVerified: p,
        notPhoneVerified: T,
        newAccount: S,
        newMember: A,
        canChat: !(c || p || T || S || A),
        accountDeadline: new Date(Date.now() + o),
        memberDeadline: new Date(Date.now() + s),
        timeoutRef: t
    };
}
function g(e) {
    let t = I[e];
    null != t && clearTimeout(t.timeoutRef), delete I[e];
}
function S(e) {
    m.delete(e.guild.id), T(e.guild.id);
}
class A extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, E.default);
    }
    getCheck(e) {
        var t;
        return !m.has(e) && T(e), null !== (t = I[e]) && void 0 !== t ? t : p;
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
o = 'GuildVerificationStore', (a = 'displayName') in (i = A) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new A(l.Z, {
    CONNECTION_OPEN: function () {
        for (let e in (m.clear(), I))
            g(e);
    },
    CONNECTION_CLOSED: function () {
        c.default.keys(I).forEach(g);
    },
    CURRENT_USER_UPDATE: function () {
        m.clear();
    },
    GUILD_CREATE: S,
    GUILD_UPDATE: S,
    GUILD_DELETE: function (e) {
        let {guild: t} = e;
        g(t.id);
    },
    GUILD_MEMBER_UPDATE: function (e) {
        var t;
        let {
            guildId: n,
            user: r
        } = e;
        if (r.id !== (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id))
            return !1;
        m.delete(n);
    },
    GUILD_VERIFICATION_CHECK: function (e) {
        let {guildId: t} = e;
        T(t);
    }
});
