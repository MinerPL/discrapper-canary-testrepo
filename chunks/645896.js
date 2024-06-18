"use strict";
n.d(t, {
  Cc: function() {
    return _
  },
  E8: function() {
    return d
  },
  L_: function() {
    return E
  },
  _S: function() {
    return c
  }
}), n(47120);
var i = n(470079),
  r = n(652874),
  s = n(143927),
  o = n(881052),
  a = n(931240);
let l = {},
  u = (0, r.Z)((e, t) => ({
    clans: {},
    fetching: !1,
    error: null,
    fetchClanInfo: async n => {
      if (!! function(e) {
          var t;
          let n = Date.now(),
            i = null !== (t = l[e]) && void 0 !== t ? t : 0;
          return n - i > 6e4
        }(n)) {
        l[n] = Date.now();
        try {
          e({
            fetching: !0
          });
          let i = await (0, a.WJ)(n),
            r = t().clans;
          e({
            clans: {
              ...r,
              [n]: i
            },
            error: null
          })
        } catch (t) {
          e({
            error: new o.Hx(t)
          })
        } finally {
          e({
            fetching: !1
          })
        }
      }
    }
  }));

function _(e) {
  return u(t => null != e ? t.clans[e] : null)
}

function d() {
  return u(e => e.fetching)
}
async function c(e) {
  if (null == e) return;
  let {
    fetching: t,
    fetchClanInfo: n
  } = u.getState();
  !t && await n(e)
}

function E(e) {
  let [t, n] = i.useState(!1), [r, o] = u(e => [e.fetchClanInfo, e.fetching], s.Z);
  return [t, i.useCallback(async () => {
    if (!o && null != e) try {
      n(!0), await r(e)
    } finally {
      n(!1)
    }
  }, [e, o, r])]
}