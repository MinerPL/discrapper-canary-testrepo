"use strict";
n.d(t, {
  $r: function() {
    return I
  },
  DP: function() {
    return N
  },
  Ly: function() {
    return S
  },
  SG: function() {
    return h
  },
  Wf: function() {
    return T
  },
  ZT: function() {
    return f
  }
});
var i = n(735250);
n(470079);
var r = n(866442),
  s = n(481060),
  o = n(531643),
  a = n(768581),
  l = n(403182),
  u = n(51144),
  _ = n(661543),
  d = n(200299),
  c = n(486324),
  E = n(689938);

function I(e, t, r, o) {
  (0, s.openModalLazy)(async () => {
    let {
      default: s
    } = await Promise.all([n.e("99387"), n.e("89289")]).then(n.bind(n, 28130));
    return n => (0, i.jsx)(s, {
      filters: o,
      maxFileSizeBytes: d.B,
      imageSpecifications: e === c.pC.BANNER && E.Z.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
      onComplete: (n, i) => (0, _.j)({
        imageSrc: n,
        file: i,
        uploadType: e,
        guildId: t,
        isTryItOutFlow: r
      }),
      uploadType: e,
      showUpsellHeader: !0,
      ...n
    })
  })
}

function T() {
  (0, o.openUploadError)({
    title: E.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    help: E.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
      maxSize: (0, l.Ng)(d.B)
    })
  })
}

function h(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (null != e) return e;
  let {
    size: r = 80,
    canAnimate: s = !0
  } = i, o = null === e;
  return o && null == t ? a.ZP.getDefaultAvatarURL(n.id, n.discriminator) : o || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, r, s) : n.getAvatarURL(null == t ? void 0 : t.guildId, r, s)
}

function S(e) {
  var t;
  let {
    pendingNickname: n,
    pendingGlobalName: i,
    user: r,
    guildMember: s
  } = e, o = "" === n ? null : null != n ? n : null == s ? void 0 : s.nick, a = "" === i ? r.username : i;
  return null !== (t = null != o ? o : a) && void 0 !== t ? t : u.ZP.getName(r)
}

function f(e) {
  var t, n;
  let {
    pendingProfileEffectId: i,
    displayProfile: r
  } = e, s = null == r ? void 0 : null === (t = r._userProfile) || void 0 === t ? void 0 : t.profileEffectId, o = null == r ? void 0 : null === (n = r._guildMemberProfile) || void 0 === n ? void 0 : n.profileEffectId, a = null === i;
  return a && null != o ? s : a ? null : null != i ? i : null == r ? void 0 : r.profileEffectId
}

function N(e) {
  return (null != e ? (0, r.Bd)(e) : 1) > .25
}