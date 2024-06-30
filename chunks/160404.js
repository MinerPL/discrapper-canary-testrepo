n(47120), n(789020), n(724458);
var r, i, a, o, s = n(442837), l = n(570140), u = n(430824), c = n(630388), d = n(709054), _ = n(225675), E = n(981631), f = n(526761);
let h = {};
class p extends (r = s.ZP.Store) {
    hasViewingRoles() {
        return Object.keys(h).length > 0;
    }
    isViewingRoles(e) {
        return null != e && null != h[e];
    }
    getViewingRoles(e) {
        var t;
        return null === (t = h[e]) || void 0 === t ? void 0 : t.roles;
    }
    getViewingRolesTimestamp(e) {
        var t;
        return null != e ? null === (t = h[e]) || void 0 === t ? void 0 : t.timestamp : null;
    }
    getData(e) {
        return h[e];
    }
    isFullServerPreview(e) {
        var t;
        return (null === (t = h[e]) || void 0 === t ? void 0 : t.type) === _.z.NEW_MEMBER;
    }
    isOptInEnabled(e) {
        let t = h[e];
        return null != t && t.type === _.z.NEW_MEMBER && t.optInEnabled;
    }
    isOnboardingEnabled(e) {
        let t = h[e];
        return null != t && t.type === _.z.NEW_MEMBER && t.onboardingEnabled;
    }
    getViewingChannels(e) {
        let t = h[e];
        return null == t || t.type !== _.z.NEW_MEMBER ? null : t.optInChannels;
    }
    getOnboardingResponses(e) {
        let t = h[e];
        return null == t || t.type !== _.z.NEW_MEMBER ? null : t.onboardingResponses;
    }
    getMemberOptions(e) {
        let t = h[e];
        return null == t || t.type !== _.z.NEW_MEMBER ? null : t.memberOptions;
    }
    isChannelOptedIn(e, t) {
        let n = this.getViewingChannels(e);
        return null != n && n.has(t);
    }
    isViewingServerShop(e) {
        var t;
        return null != e && (null === (t = h[e]) || void 0 === t ? void 0 : t.type) === _.z.SERVER_SHOP;
    }
    getImpersonateType(e) {
        if (null == e)
            return null;
        let t = h[e];
        return null == t ? null : t.type;
    }
    getBackNavigationSection(e) {
        if (null == e)
            return E.pNK.ROLES;
        let t = h[e];
        if (null == t)
            return E.pNK.ROLES;
        switch (t.type) {
        case _.z.ROLES:
        case _.z.SERVER_SHOP:
            return t.returnToSection;
        case _.z.NEW_MEMBER:
            return E.pNK.ONBOARDING;
        default:
            return E.pNK.ROLES;
        }
    }
}
o = 'ImpersonateStore', (a = 'displayName') in (i = p) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new p(l.Z, {
    IMPERSONATE_UPDATE: function (e) {
        let {
            guildId: t,
            data: n
        } = e;
        delete n.roles[d.default.castGuildIdAsEveryoneGuildRoleId(t)], h[t] = {
            ...n,
            timestamp: Date.now()
        };
    },
    IMPERSONATE_STOP: function (e) {
        let {guildId: t} = e;
        if (null == h[t])
            return !1;
        delete h[t];
    },
    GUILD_ROLE_DELETE: function (e) {
        let {
            guildId: t,
            roleId: n
        } = e;
        if (null == h[t])
            return !1;
        delete h[t].roles[n];
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
        var t;
        let {
            guildId: n,
            overrides: r
        } = e;
        if (null == n || null == h[n])
            return !1;
        let i = h[n];
        if (null == i || i.type !== _.z.NEW_MEMBER)
            return !1;
        let a = null !== (t = i.optInChannels) && void 0 !== t ? t : new Set();
        return d.default.keys(r).forEach(e => {
            var t;
            let n = r[e];
            c.yE(null !== (t = n.flags) && void 0 !== t ? t : 0, f.ic.OPT_IN_ENABLED) ? a.add(e) : a.delete(e);
        }), i.optInChannels = a, !0;
    },
    GUILD_ONBOARDING_SELECT_OPTION: function (e) {
        var t;
        let {
            guildId: n,
            optionId: r,
            selected: i,
            removedOptionIds: a
        } = e;
        if (null == n || null == h[n])
            return !1;
        let o = h[n];
        if (null == o || o.type !== _.z.NEW_MEMBER)
            return !1;
        let s = null !== (t = o.onboardingResponses) && void 0 !== t ? t : new Set();
        return null != a && a.length > 0 && a.forEach(e => s.delete(e)), i ? s.add(r) : s.delete(r), o.onboardingResponses = s, !0;
    },
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let {
            guildId: t,
            roles: n,
            flags: r
        } = e;
        if (null == t)
            return !1;
        let i = h[t];
        return null != i && (null != n && (i.roles = n.reduce((e, n) => {
            let r = u.Z.getRole(t, n);
            return null != r && (e[n] = r), e;
        }, {})), null != r && i.type === _.z.NEW_MEMBER && (i.memberOptions.flags = r), !0);
    }
});
