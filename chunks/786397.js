n.d(t, {
  B: function() {
return u;
  },
  w: function() {
return c;
  }
}), n(47120);
var r = n(470079),
  i = n(442837),
  a = n(846519),
  o = n(594174),
  s = n(295226),
  l = n(74538);

function u(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at);
}

function c(e) {
  let t = (0, i.e7)([s.Z], () => s.Z.getUserTrialOffer(e)),
[n, c] = r.useState(u(t)),
d = (0, i.e7)([o.default], () => (0, l.I5)(o.default.getCurrentUser()));
  return r.useEffect(() => {
if (null != t && null != t.expires_at) {
  let e = new a.V7(),
    r = () => {
      let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
      null == e || e.start(i, () => {
        !n && u(t) ? c(!0) : r();
      });
    };
  return r(), () => e.stop();
}
  }, [
n,
t
  ]), n || d ? null : t;
}