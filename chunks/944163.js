n.d(t, {
    t: function () {
        return _;
    }
});
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(246364);
let _ = {
        version: '',
        description: '',
        formFields: []
    },
    E = {};
class f extends (s = u.ZP.Store) {
    get(e) {
        if (null != e) return E[e];
    }
    getRulesPrompt(e) {
        var t;
        return l().find(null === (t = E[e]) || void 0 === t ? void 0 : t.formFields, d.J);
    }
}
(a = 'MemberVerificationFormStore'),
    (i = 'displayName') in (r = f)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new f(c.Z, {
        INVITE_ACCEPT_SUCCESS: function (e) {
            let { invite: t } = e,
                { member_verification_form: n } = t,
                { guild: r } = t;
            if (null != r && null != n) {
                var i;
                return (
                    (E[r.id] = {
                        version: n.version,
                        description: null !== (i = n.description) && void 0 !== i ? i : '',
                        formFields: n.form_fields,
                        guild: r
                    }),
                    !0
                );
            }
            return !1;
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
            let { form: t, guildId: n } = e;
            if (null == t) E[n] = _;
            else {
                var r;
                let e = null !== (r = E[n]) && void 0 !== r ? r : _;
                E[n] = {
                    ...e,
                    ...t
                };
            }
        },
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: function (e) {
            var t;
            let { guildId: n } = e;
            E[n] = null !== (t = E[n]) && void 0 !== t ? t : _;
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete E[null == t ? void 0 : t.id];
        }
    }));
