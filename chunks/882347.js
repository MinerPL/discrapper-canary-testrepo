"use strict";
n.d(t, {
  p: function() {
    return f
  }
}), n(789020);
var i = n(570140),
  r = n(881052),
  s = n(728345),
  o = n(812206),
  a = n(973616),
  l = n(630388),
  u = n(317381),
  _ = n(424291),
  d = n(966434),
  c = n(649591),
  E = n(981631);
async function I(e, t) {
  try {
    var n;
    return null !== (n = o.Z.getApplication(e)) && void 0 !== n ? n : a.Z.createFromServer(await s.Z.fetchApplication(e))
  } catch (n) {
    i.Z.dispatch({
      type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
      applicationId: e,
      guildId: t,
      error: new r.Hx(n)
    })
  }
}
async function T(e) {
  let {
    channel: t,
    currentEmbeddedApplication: n,
    embeddedActivitiesManager: i
  } = e;
  return !!(null == n || await new Promise(e => {
    (0, d.Z)(n, t, () => {
      i.leaveActivity({
        channelId: t.id,
        applicationId: n.id
      }), e(!0)
    }, () => e(!1))
  })) || !1
}
async function h(e) {
  let {
    application: t,
    applicationId: n,
    channel: i,
    user: r
  } = e;
  if (null == r.nsfwAllowed) {
    var s, o;
    let e = null != t ? t : await I(n, i.getGuildId());
    if (null == e || null !== (o = null === (s = e.embeddedActivityConfig) || void 0 === s ? void 0 : s.requires_age_gate) && void 0 !== o && o && !await new Promise(t => {
        (0, _.V)({
          application: e,
          onAgree: () => t(!0),
          onDisagree: () => t(!1)
        })
      })) return !1
  }
  return !0
}
async function S(e) {
  let {
    application: t,
    applicationId: n,
    channel: i
  } = e, r = null != t ? t : await I(n, i.getGuildId());
  return null != r && (!!((0, l.yE)(r.flags, E.udG.EMBEDDED_RELEASED) || u.ZP.hasActivityEverBeenLaunched(n)) || new Promise(e => {
    (0, c.j)({
      application: r,
      onConfirm: () => e(!0),
      onCancel: () => e(!1)
    })
  }))
}
async function f(e) {
  return !!(await T(e) && await h(e) && await S(e)) || !1
}