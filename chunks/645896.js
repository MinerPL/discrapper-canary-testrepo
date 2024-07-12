n.d(t, {
  Cc: function() {
return c;
  },
  E8: function() {
return d;
  },
  L_: function() {
return E;
  },
  _S: function() {
return _;
  }
}), n(47120);
var r = n(470079),
  i = n(652874),
  a = n(143927),
  o = n(881052),
  s = n(931240);
let l = {},
  u = (0, i.Z)((e, t) => ({
clans: {},
isFetchingGuild: e => null != t().fetchPromises[e],
error: null,
fetchPromises: {},
fetchClanInfo: async n => {
  let r = t().fetchPromises[n];
  if (! function(e) {
      var t;
      let n = Date.now(),
        r = null !== (t = l[e]) && void 0 !== t ? t : 0;
      return n - r > 60000;
    }(n)) {
    var i;
    return null != r ? await r : Promise.resolve(null !== (i = t().clans[n]) && void 0 !== i ? i : null);
  }
  l[n] = Date.now();
  try {
    if (null != r)
      return await r;
    {
      let r = (async () => {
        let r = await (0, s.WJ)(n),
          i = t().clans,
          a = t().fetchPromises;
        return null == a[n] ? r : (delete a[n], e({
          clans: {
            ...i,
            [n]: r
          },
          error: null,
          fetchPromises: a
        }), r);
      })();
      return e({
        fetchPromises: {
          ...t().fetchPromises,
          [n]: r
        }
      }), await r;
    }
  } catch (a) {
    let r = new o.Hx(a),
      i = t().fetchPromises;
    null != i[n] && delete i[n], e({
      error: r,
      fetchPromises: i
    });
  }
  return null;
}
  }));

function c(e) {
  return u(t => null != e ? t.clans[e] : null);
}

function d(e) {
  return u(t => null != e && t.isFetchingGuild(e));
}
async function _(e) {
  var t;
  if (null == e)
return Promise.resolve(null);
  let {
isFetchingGuild: n,
fetchClanInfo: r,
clans: i
  } = u.getState();
  return n(e) ? null !== (t = i[e]) && void 0 !== t ? t : null : await r(e);
}

function E(e) {
  let [t, n] = u(e => [
e.fetchClanInfo,
e.isFetchingGuild
  ], a.Z), i = null != e && n(e), o = c(e), s = r.useCallback(async () => {
if (i || null == e)
  return o;
try {
  return await t(e);
} catch (e) {
  return null;
}
  }, [
i,
e,
o,
t
  ]);
  return [
i,
s
  ];
}