n.d(t, {
  $r: function() {
return _;
  },
  DP: function() {
return p;
  },
  Ly: function() {
return f;
  },
  SG: function() {
return E;
  },
  ZT: function() {
return h;
  }
});
var r = n(735250);
n(470079);
var i = n(866442),
  a = n(481060);
n(531643);
var o = n(768581);
n(403182);
var s = n(51144),
  l = n(661543),
  u = n(200299),
  c = n(486324),
  d = n(689938);

function _(e, t, i, o) {
  (0, a.openModalLazy)(async () => {
let {
  default: a
} = await n.e('82634').then(n.bind(n, 28130));
return n => (0, r.jsx)(a, {
  filters: o,
  maxFileSizeBytes: u.B,
  imageSpecifications: e === c.pC.BANNER && d.Z.Messages.USER_SETTINGS_PROFILE_THEMES_BANNER_MODAL_SPECS,
  onComplete: (n, r) => (0, l.j)({
    imageSrc: n,
    file: r,
    uploadType: e,
    guildId: t,
    isTryItOutFlow: i
  }),
  uploadType: e,
  showUpsellHeader: !0,
  ...n
});
  });
}

function E(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (null != e)
return e;
  let {
size: i = 80,
canAnimate: a = !0
  } = r, s = null === e;
  return s && null == t ? o.ZP.getDefaultAvatarURL(n.id, n.discriminator) : s || (null == t ? void 0 : t.avatar) == null ? n.getAvatarURL(void 0, i, a) : n.getAvatarURL(null == t ? void 0 : t.guildId, i, a);
}

function f(e) {
  var t;
  let {
pendingNickname: n,
pendingGlobalName: r,
user: i,
guildMember: a
  } = e, o = '' === n ? null : null != n ? n : null == a ? void 0 : a.nick, l = '' === r ? i.username : r;
  return null !== (t = null != o ? o : l) && void 0 !== t ? t : s.ZP.getName(i);
}

function h(e) {
  var t, n;
  let {
pendingProfileEffectId: r,
displayProfile: i
  } = e, a = null == i ? void 0 : null === (t = i._userProfile) || void 0 === t ? void 0 : t.profileEffectId, o = null == i ? void 0 : null === (n = i._guildMemberProfile) || void 0 === n ? void 0 : n.profileEffectId, s = null === r;
  return s && null != o ? a : s ? null : null != r ? r : null == i ? void 0 : i.profileEffectId;
}

function p(e) {
  return (null != e ? (0, i.Bd)(e) : 1) > 0.25;
}