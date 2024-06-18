"use strict";
n.d(t, {
  t: function() {
    return c
  }
});
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(246364);
let c = {
    version: "",
    description: "",
    formFields: []
  },
  E = {};
class I extends(o = u.ZP.Store) {
  get(e) {
    if (null != e) return E[e]
  }
  getRulesPrompt(e) {
    var t;
    return l().find(null === (t = E[e]) || void 0 === t ? void 0 : t.formFields, d.J)
  }
}
s = "MemberVerificationFormStore", (r = "displayName") in(i = I) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new I(_.Z, {
  INVITE_ACCEPT_SUCCESS: function(e) {
    let {
      invite: t
    } = e, {
      member_verification_form: n
    } = t, {
      guild: i
    } = t;
    if (null != i && null != n) {
      var r;
      return E[i.id] = {
        version: n.version,
        description: null !== (r = n.description) && void 0 !== r ? r : "",
        formFields: n.form_fields,
        guild: i
      }, !0
    }
    return !1
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: t,
      guildId: n
    } = e;
    if (null == t) E[n] = c;
    else {
      var i;
      let e = null !== (i = E[n]) && void 0 !== i ? i : c;
      E[n] = {
        ...e,
        ...t
      }
    }
  },
  MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
    var t;
    let {
      guildId: n
    } = e;
    E[n] = null !== (t = E[n]) && void 0 !== t ? t : c
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete E[null == t ? void 0 : t.id]
  }
})