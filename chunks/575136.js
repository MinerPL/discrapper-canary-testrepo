"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  },
  useEmbeddedAppsByChannel: function() {
    return s
  },
  useEmbeddedApps: function() {
    return f
  },
  useEmbeddedAppsWithPresence: function() {
    return p
  }
}), i("222007"), i("424973");
var l = i("884691"),
  n = i("446674"),
  a = i("442939"),
  d = i("824563"),
  u = i("697218"),
  r = i("449008"),
  o = i("191225");

function c(e, t) {
  let i = (0, n.useStateFromStoresArray)([o.default], () => null != e && null != e.id && "" !== e.id ? o.default.getEmbeddedActivitiesForChannel(e.id) : o.NO_ACTIVITIES),
    l = f(i, t);
  return l
}

function s(e) {
  let t = (0, n.useStateFromStores)([o.default], () => null != e ? o.default.getEmbeddedActivitiesForGuild(e) : o.NO_ACTIVITIES),
    i = f(t),
    a = l.useMemo(() => {
      let e = new Map;
      return i.forEach(t => {
        var i;
        let l = t.embeddedActivity.channelId,
          n = null !== (i = e.get(l)) && void 0 !== i ? i : [];
        n.push(t), e.set(l, n)
      }), e
    }, [i]);
  return a
}

function f(e, t) {
  let i = e.map(e => e.applicationId),
    d = (0, a.default)(i),
    o = new Set([]);
  for (let t of e)
    for (let e of t.userIds) o.add(e);
  let c = (0, n.useStateFromStoresArray)([u.default], () => {
      let e = [];
      for (let t of o) e.push(u.default.getUser(t));
      return e
    }, [o]),
    s = l.useMemo(() => {
      let i = new Map;
      c.forEach(e => {
        null != e && i.set(e.id, e)
      });
      let l = e.map((e, l) => {
        let n = d[l],
          a = [];
        if (null != a)
          for (let l of e.userIds) {
            let e = i.get(l);
            if (null != e && null != t) {
              let i = t(e);
              null != i && a.push(i)
            }
          }
        return null == n ? null : {
          embeddedActivity: e,
          application: n,
          userParticipantAvatarUrls: a
        }
      }).filter(r.isNotNullish);
      return l
    }, [e, d, c, t]);
  return s
}

function p(e) {
  let t = (0, n.useStateFromStores)([d.default], () => {
    let t = new Map;
    return e.forEach(e => {
      var i;
      let l = d.default.findActivity(null == e ? void 0 : e.embeddedActivity.userIds.values().next().value, t => {
        var i;
        return t.application_id === (null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id)
      });
      t.set(null == e ? void 0 : null === (i = e.application) || void 0 === i ? void 0 : i.id, {
        ...e,
        presenceActivity: l
      })
    }), t
  }, [e], n.statesWillNeverBeEqual);
  return t
}