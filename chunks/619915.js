"use strict";
n.d(t, {
  QN: function() {
    return d
  },
  ZP: function() {
    return _
  },
  gb: function() {
    return c
  },
  uF: function() {
    return E
  }
}), n(47120), n(653041);
var i = n(470079),
  r = n(442837),
  s = n(835473),
  o = n(158776),
  a = n(594174),
  l = n(823379),
  u = n(317381);

function _(e, t) {
  return c((0, r.Wu)([u.ZP], () => null != e && null != e.id && "" !== e.id ? u.ZP.getEmbeddedActivitiesForChannel(e.id) : u.i6), t)
}

function d(e) {
  let t = c((0, r.e7)([u.ZP], () => null != e ? u.ZP.getEmbeddedActivitiesForGuild(e) : u.i6));
  return i.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      var n;
      let i = t.embeddedActivity.channelId,
        r = null !== (n = e.get(i)) && void 0 !== n ? n : [];
      r.push(t), e.set(i, r)
    }), e
  }, [t])
}

function c(e, t) {
  let n = e.map(e => e.applicationId),
    o = (0, s.Z)(n),
    u = new Set([]);
  for (let t of e)
    for (let e of t.userIds) u.add(e);
  let _ = (0, r.Wu)([a.default], () => {
    let e = [];
    for (let t of u) e.push(a.default.getUser(t));
    return e
  }, [u]);
  return i.useMemo(() => {
    let n = new Map;
    return _.forEach(e => {
      null != e && n.set(e.id, e)
    }), e.map((e, i) => {
      let r = o[i],
        s = [];
      if (null != s)
        for (let i of e.userIds) {
          let e = n.get(i);
          if (null != e && null != t) {
            let n = t(e);
            null != n && s.push(n)
          }
        }
      return null == r ? null : {
        embeddedActivity: e,
        application: r,
        userParticipantAvatarUrls: s
      }
    }).filter(l.lm)
  }, [e, o, _, t])
}

function E(e) {
  return (0, r.e7)([o.Z], () => {
    let t = new Map;
    return e.forEach(e => {
      var n;
      let i = o.Z.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
        var n;
        return t.application_id === (null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id)
      });
      t.set(null == e ? void 0 : null === (n = e.application) || void 0 === n ? void 0 : n.id, {
        ...e,
        presenceActivity: i
      })
    }), t
  }, [e], r.pF)
}