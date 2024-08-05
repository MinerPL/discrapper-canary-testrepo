t.d(n, {
  Z: function() {
return T;
  }
}), t(47120), t(733860);
var i = t(718528),
  l = t(931261),
  o = t(355298),
  r = t(333984),
  E = t(905423),
  a = t(695346),
  u = t(283595),
  s = t(923834),
  d = t(55589),
  _ = t(823379),
  c = t(475468),
  C = t(981631),
  I = t(176505);
let A = () => {
  let e = o.Z.getMessageRequestsCount() > 0 || r.Z.getSpamChannelsCount() > 0;
  return [
C.Z5c.FRIENDS,
u.Z.hasLibraryApplication() && !a.bm.getSetting() ? C.Z5c.APPLICATION_LIBRARY : null,
C.Z5c.APPLICATION_STORE,
e ? C.Z5c.MESSAGE_REQUESTS : null,
C.Z5c.COLLECTIBLES_SHOP,
a.Ex.getSetting() ? C.Z5c.FAMILY_CENTER : null
  ].filter(_.lm);
};

function S(e, n) {
  (0, c.K)(e, n);
}

function T() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
n = E.Z.getState().guildId;
  null == n ? ! function(e) {
var n, t, i;
let {
  channelId: l,
  path: o,
  basePath: r
} = E.Z.getState(), a = d.Z.getPrivateChannelIds(), u = __OVERLAY__ ? a : [
  ...A(),
  ...a
];
let _ = (null == l ? (n = null != o ? o : r, A().findIndex(e => n.startsWith(e))) : null != l ? u.indexOf(l) : 0) + e;
_ >= u.length ? _ = 0 : _ < 0 && (_ = u.length - 1);
let I = u[_];
if (A().includes(I))
  ! function(e) {
    let n = s.Z.getCurrentRoute();
    e === C.Z5c.APPLICATION_STORE && null != n ? (0, c.z)(n) : (0, c.z)(e);
  }(I);
else {
  ;
  t = C.ME, i = I, (0, c.K)(t, i);
}
  }(e) : ! function(e, n) {
var t, o, r, a;
let u = E.Z.getState().channelId,
  s = (0, i.Z)(n, {
    withCurrentVoiceChannel: !0
  }).map(e => e.id);
(0, l.s)(n) && s.unshift(I.oC.GUILD_HOME);
let d = (t = (null != u ? s.indexOf(u) : -1) + e, o = s.length, t < 0 ? o - 1 : t >= o ? 0 : t);
r = n, a = s[d], (0, c.K)(r, a);
  }(e, n);
}