n.d(t, {
  Z: function() {
return _;
  }
});
var r = n(470079),
  i = n(719711),
  a = n(433517),
  s = n(579806),
  o = n(626135),
  l = n(998502),
  u = n(286035),
  c = n(981631);

function d(e) {
  var t;
  return null == e ? void 0 : null === (t = e._state) || void 0 === t ? void 0 : t.lastTestTimestamp;
}

function _() {
  return r.useEffect(() => {
window.location.origin === window.GLOBAL_ENV.MIGRATION_DESTINATION_ORIGIN && !0 !== a.K.get(i.SV) && l.ZP.supportsFeature(c.eRX.USER_DATA_CACHE) && (u.Te(), s.Z.userDataCache.getCached().then(e => {
  if (null == e) {
    u.kb(), o.default.track(c.rMx.DOMAIN_MIGRATED, {
      success: !1,
      has_data: !1
    }, {
      flush: !0
    });
    return;
  }
  let t = Object.keys(e),
    n = 0 !== t.length,
    r = null != e.token,
    l = null == e.RTCRegionStore ? null : JSON.parse(e.RTCRegionStore),
    _ = null == l || null == d(l) || d(l) <= d(a.K.get('RTCRegionStore'));
  n && r && !_ && (a.K.clear(), t.forEach(t => {
    let n = e[t];
    try {
      a.K.set(t, JSON.parse(n));
    } catch (e) {}
  })), o.default.track(c.rMx.DOMAIN_MIGRATED, {
    success: !0,
    current_is_newer: _,
    has_data: n
  }, {
    flush: !0
  }), a.K.set(i.SV, !0), s.Z.userDataCache.deleteCache(), u.Pg();
}));
  }, []), null;
}