"use strict";
n.d(t, {
  B: function() {
    return u
  },
  w: function() {
    return _
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(846519),
  o = n(594174),
  a = n(295226),
  l = n(74538);

function u(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}

function _(e) {
  let t = (0, r.e7)([a.Z], () => a.Z.getUserTrialOffer(e)),
    [n, _] = i.useState(u(t)),
    d = (0, r.e7)([o.default], () => (0, l.I5)(o.default.getCurrentUser()));
  return i.useEffect(() => {
    if (null != t && null != t.expires_at) {
      let e = new s.V7,
        i = () => {
          let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
          null == e || e.start(r, () => {
            !n && u(t) ? _(!0) : i()
          })
        };
      return i(), () => e.stop()
    }
  }, [n, t]), n || d ? null : t
}