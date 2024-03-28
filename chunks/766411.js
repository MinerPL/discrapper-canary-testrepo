"use strict";
a.r(t), a.d(t, {
  useCurrentChangelog: function() {
    return u
  }
});
var n = a("470079"),
  l = a("399606"),
  s = a("661111"),
  r = a("706454"),
  o = a("802098"),
  i = a("596401");

function c(e, t) {
  let {
    changelog: a,
    loadState: r,
    defaultChangelog: c,
    defaultLoadState: u
  } = (0, l.useStateFromStoresObject)([o.default], () => {
    let a = null != e ? o.default.getChangelog(e, t) : null,
      n = null != e ? o.default.getChangelog(e, "en-US") : null,
      l = null != e && o.default.getChangelogLoadStatus(e, "en-US");
    return {
      changelog: a,
      loadState: null != e && o.default.getChangelogLoadStatus(e, t),
      defaultChangelog: n,
      defaultLoadState: l
    }
  }, [e, t]);
  return (n.useEffect(() => {
    null != e && null == a && r === i.ChangelogLoadState.NOT_LOADED && s.default.fetchChangelog(e, t)
  }, [e, a, r, t]), null == e) ? {
    id: e,
    changelog: null,
    loaded: !1
  } : null == a && r === i.ChangelogLoadState.LOADED_FAILURE ? {
    id: e,
    changelog: c,
    loaded: u !== i.ChangelogLoadState.NOT_LOADED
  } : {
    id: e,
    changelog: a,
    loaded: r !== i.ChangelogLoadState.NOT_LOADED
  }
}

function u() {
  let e = (0, l.useStateFromStores)([r.default], () => r.default.locale),
    t = (0, l.useStateFromStores)([o.default], () => o.default.latestChangelogId()),
    a = (0, l.useStateFromStores)([o.default], () => o.default.getConfig()),
    n = null != a && 0 === Object.keys(a).length,
    s = null != a && Object.keys(a).length > 0 && null == t,
    i = (0, l.useStateFromStores)([o.default], () => o.default.overrideId()),
    {
      changelog: u,
      loaded: d
    } = c(t, e),
    {
      changelog: h,
      loaded: p
    } = c(i, e);
  return null == i || null == h && p ? {
    id: t,
    changelog: u,
    loaded: !!n || d,
    clientTooOld: s
  } : {
    id: i,
    changelog: h,
    loaded: p,
    clientTooOld: !1
  }
}