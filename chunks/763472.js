"use strict";
n.d(t, {
  Z_: function() {
    return l
  },
  hY: function() {
    return u
  },
  sd: function() {
    return _
  }
}), n(411104);
var i = n(544891),
  r = n(570140),
  s = n(647162),
  o = n(158776),
  a = n(981631);

function l(e, t) {
  r.Z.dispatch({
    type: "ACTIVITY_SYNC",
    activity: e,
    userId: t
  })
}

function u(e, t) {
  (0, s.iy)(e, t).then(n => r.Z.dispatch({
    type: "ACTIVITY_PLAY",
    activity: e,
    userId: t,
    metadata: n
  })).catch(() => r.Z.dispatch({
    type: "ACTIVITY_PLAY",
    activity: e,
    userId: t
  }))
}
async function _(e, t) {
  let n = e.metadata;
  if (null != n) return n;
  let s = o.Z.getActivityMetadata(t);
  if (null != s) return s;
  if (null == e.session_id) throw Error("null/undefined session_id");
  let {
    body: l
  } = await i.tn.get({
    url: a.ANM.USER_ACTIVITY_METADATA(t, e.session_id, e.application_id),
    oldFormErrors: !0
  });
  return r.Z.dispatch({
    type: "ACTIVITY_METADATA_UPDATE",
    metadata: l,
    userId: t
  }), l
}