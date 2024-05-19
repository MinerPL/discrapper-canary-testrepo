"use strict";
n.r(t), n.d(t, {
  fetchClanInfo: function() {
    return c
  },
  useClanInfo: function() {
    return d
  },
  useFetchClanInfo: function() {
    return E
  },
  useIsFetchingClanInfo: function() {
    return _
  }
}), n("47120");
var i = n("470079"),
  r = n("652874"),
  a = n("143927"),
  s = n("881052"),
  o = n("931240");
let l = {},
  u = (0, r.default)((e, t) => ({
    clans: {},
    fetching: !1,
    error: null,
    fetchClanInfo: async n => {
      if (function(e) {
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
          let i = await (0, o.getClanInfo)(n),
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
            error: new s.APIError(t)
          })
        } finally {
          e({
            fetching: !1
          })
        }
      }
    }
  }));

function d(e) {
  return u(t => null != e ? t.clans[e] : null)
}

function _() {
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
  let [t, n] = i.useState(!1), [r, s] = u(e => [e.fetchClanInfo, e.fetching], a.default);
  return [t, i.useCallback(async () => {
    if (!s && null != e) try {
      n(!0), await r(e)
    } finally {
      n(!1)
    }
  }, [e, s, r])]
}