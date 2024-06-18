"use strict";
n.d(t, {
  i: function() {
    return _
  },
  l: function() {
    return d
  }
}), n(47120);
var i = n(652874),
  r = n(143927),
  s = n(12336),
  o = n(433517),
  a = n(590433);
let l = (0, s.Z)((e, t) => {
    var n;
    return {
      notificationDismissedInGuilds: new Set(null !== (n = o.K.get(a.hL)) && void 0 !== n ? n : []),
      dismissNotification: n => {
        let i = t().notificationDismissedInGuilds;
        i.add(n), o.K.set(a.hL, i), e({
          notificationDismissedInGuilds: i
        })
      },
      resetNotification: n => {
        let i = t().notificationDismissedInGuilds;
        i.has(n) && (i.delete(n), o.K.set(a.hL, i), e({
          notificationDismissedInGuilds: i
        }))
      }
    }
  }),
  u = (0, i.Z)(l);

function _(e) {
  let [t, n] = u(e => [e.notificationDismissedInGuilds, e.dismissNotification], r.Z);
  return [!t.has(e), n]
}

function d(e) {
  return l.getState().resetNotification(e)
}