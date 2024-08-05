n.d(t, {
  p: function() {
return I;
  }
}), n(789020);
var r = n(570140),
  i = n(881052),
  a = n(728345),
  s = n(812206),
  o = n(973616),
  l = n(630388),
  u = n(317381),
  c = n(424291),
  d = n(966434),
  _ = n(649591),
  E = n(981631);
async function f(e, t) {
  try {
var n;
return null !== (n = s.Z.getApplication(e)) && void 0 !== n ? n : o.Z.createFromServer(await a.Z.fetchApplication(e));
  } catch (n) {
r.Z.dispatch({
  type: 'EMBEDDED_ACTIVITY_LAUNCH_FAIL',
  applicationId: e,
  guildId: t,
  error: new i.Hx(n)
});
  }
}
async function h(e) {
  let {
channel: t,
currentEmbeddedApplication: n,
embeddedActivitiesManager: r
  } = e;
  return !!(null == n || await new Promise(e => {
(0, d.Z)(n, t, () => {
  r.leaveActivity({
    channelId: t.id,
    applicationId: n.id
  }), e(!0);
}, () => e(!1));
  })) || !1;
}
async function p(e) {
  let {
application: t,
applicationId: n,
channel: r,
user: i
  } = e;
  if (null == i.nsfwAllowed) {
var a, s;
let e = null != t ? t : await f(n, r.getGuildId());
if (null == e || null !== (s = null === (a = e.embeddedActivityConfig) || void 0 === a ? void 0 : a.requires_age_gate) && void 0 !== s && s && !await new Promise(t => {
    (0, c.V)({
      application: e,
      onAgree: () => t(!0),
      onDisagree: () => t(!1)
    });
  }))
  return !1;
  }
  return !0;
}
async function m(e) {
  let {
application: t,
applicationId: n,
channel: r
  } = e, i = null != t ? t : await f(n, r.getGuildId());
  return null != i && (!!((0, l.yE)(i.flags, E.udG.EMBEDDED_RELEASED) || u.ZP.hasActivityEverBeenLaunched(n)) || new Promise(e => {
(0, _.j)({
  application: i,
  onConfirm: () => e(!0),
  onCancel: () => e(!1)
});
  }));
}
async function I(e) {
  return !!(await h(e) && await p(e) && await m(e)) || !1;
}