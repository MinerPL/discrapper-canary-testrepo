n.d(t, {
    Ft: function () {
        return I;
    },
    ML: function () {
        return A;
    },
    ZJ: function () {
        return S;
    },
    mF: function () {
        return r;
    }
}), n(47120);
var r, i, a = n(512722), o = n.n(a), s = n(373793), l = n(149765), u = n(911969), c = n(399860), d = n(131704), _ = n(430824), E = n(895924), f = n(581364), h = n(807169), p = n(689079), m = n(981631);
function I(e, t, n) {
    var r;
    let {
            context: i,
            commandType: a,
            allowNsfw: c,
            computedPermissions: I,
            userId: T,
            roleIds: g,
            isImpersonating: N,
            hasBaseAccessPermissions: v
        } = t, {
            applicationAllowedForUser: O,
            applicationAllowedForChannel: R,
            isGuildInstalled: C,
            isUserInstalled: y,
            commandBotId: D
        } = n;
    if (e.type !== a)
        return 2;
    if (e.nsfw && !c)
        return 1;
    let L = (0, h.Vh)(i, D);
    if (null != e.contexts) {
        if (!e.contexts.includes(L))
            return 4;
    } else if (e.inputType === E.iw.BOT && (!1 === e.dmPermission && L === u.D.BOT_DM || L === u.D.PRIVATE_CHANNEL))
        return 4;
    if (null != e.predicate && i instanceof d.Sf) {
        let t = _.Z.getGuild(i.guild_id);
        if (!e.predicate({
                channel: i,
                guild: t
            }))
            return 3;
    }
    if (e.applicationId === p.bi.BUILT_IN)
        return 0;
    let b = (0, h.ny)(i);
    if (null == b || l.e$(I, m.Plq.ADMINISTRATOR) || y && (null === (r = e.integration_types) || void 0 === r ? void 0 : r.includes(s.Y.USER_INSTALL)))
        return 0;
    if (!v && C && (null == e.integration_types || e.integration_types.includes(s.Y.GUILD_INSTALL)))
        return 5;
    if (i instanceof d.Sf) {
        o()(void 0 !== R, 'missing applicationAllowedForChannel');
        let t = S(e.permissions, i, b);
        if (function (e) {
                return !1 === e;
            }(t) || !function (e) {
                return !0 === e;
            }(t) && function (e) {
                return !1 === e;
            }(R))
            return 6;
    }
    let M = A(e.permissions, b, T, g, N);
    return function (e) {
        return !0 === e;
    }(M) ? 0 : function (e) {
        return !1 === e;
    }(M) ? 7 : function (e) {
        return !1 === e;
    }(O) || null != e.defaultMemberPermissions && !(!l.fS(e.defaultMemberPermissions, f.BO) && l.e$(I, e.defaultMemberPermissions)) ? 7 : 0;
}
function T(e) {
    return !0 === e;
}
function g(e) {
    return !1 === e;
}
function S(e, t, n) {
    if (null == e)
        return null;
    let r = t.id;
    if (t.isThread()) {
        var i;
        r = null !== (i = t.parent_id) && void 0 !== i ? i : t.id;
    }
    let a = e[(0, c.rE)(r, E.Kw.CHANNEL)];
    if (null != a)
        return a.permission;
    let o = e[(0, c.rE)((0, f.bD)(n), E.Kw.CHANNEL)];
    return null != o ? o.permission : null;
}
function A(e, t, n, r, i) {
    if (null == e)
        return null;
    if (!i) {
        let t = e[(0, c.rE)(n, E.Kw.USER)];
        if (null != t)
            return t.permission;
    }
    let a = !1;
    for (let t of r) {
        let n = e[(0, c.rE)(t, E.Kw.ROLE)];
        if (null != n) {
            if (n.permission)
                return !0;
            a = !0;
        }
    }
    if (a)
        return !1;
    let o = e[(0, c.rE)(t, E.Kw.ROLE)];
    return null != o ? o.permission : null;
}
(i = r || (r = {}))[i.ALLOWED = 0] = 'ALLOWED', i[i.NSFW_NOT_ALLOWED = 1] = 'NSFW_NOT_ALLOWED', i[i.WRONG_COMMAND_TYPE = 2] = 'WRONG_COMMAND_TYPE', i[i.PREDICATE_FAILED = 3] = 'PREDICATE_FAILED', i[i.CONTEXT_NOT_ALLOWED = 4] = 'CONTEXT_NOT_ALLOWED', i[i.MISSING_BASE_PERMISSIONS = 5] = 'MISSING_BASE_PERMISSIONS', i[i.CHANNEL_DENIED = 6] = 'CHANNEL_DENIED', i[i.USER_DENIED = 7] = 'USER_DENIED';
