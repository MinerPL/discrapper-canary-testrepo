"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("852860"),
  r = s("164946"),
  o = s("350327"),
  d = s("18438"),
  u = s("778825"),
  c = s("689938");

function S() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getIsDisableSubmit()),
    t = (0, l.useStateFromStores)([u.default], () => u.default.getGuild()),
    s = (0, l.useStateFromStores)([u.default], () => u.default.getErrors()),
    [S, E] = n.useState(!1),
    T = n.useMemo(() => (null == s ? void 0 : s.message) != null ? null == s ? void 0 : s.message : Object.keys(null != s ? s : {}).length > 0 ? c.default.Messages.GUILD_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null, [s]),
    _ = n.useCallback(async () => {
      var e, s;
      E(!0);
      let a = u.default.getAllPending(),
        n = (0, r.getGuildMemberChangesForUpdateRequest)(a),
        l = (0, r.getProfileChangesForUpdateRequest)(a),
        i = !0;
      if (Object.keys(n).length > 0) {
        let s = await (0, d.saveGuildIdentityChanges)(null == t ? void 0 : t.id, n);
        i = i && null !== (e = null == s ? void 0 : s.ok) && void 0 !== e && e, (null == s ? void 0 : s.ok) && (0, d.resetPendingMemberChanges)()
      }
      if (Object.keys(l).length > 0) {
        let e = await (0, o.saveProfileChanges)(l, null == t ? void 0 : t.id);
        i = i && null !== (s = null == e ? void 0 : e.ok) && void 0 !== s && s, (null == e ? void 0 : e.ok) && (0, d.resetPendingProfileChanges)()
      }
      i && (0, d.clearErrors)(), E(!1)
    }, [null == t ? void 0 : t.id]),
    f = n.useCallback(() => {
      (0, d.resetAllPending)()
    }, []);
  return (0, a.jsx)(i.default, {
    submitting: S,
    onSave: _,
    onReset: f,
    disabled: e,
    errorMessage: null != T ? T : void 0
  })
}