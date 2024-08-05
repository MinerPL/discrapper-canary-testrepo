n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(399606),
  l = n(110924),
  r = n(595519),
  o = n(566620),
  c = n(317381),
  u = n(917107),
  d = n(9145),
  h = n(918559);

function p(e) {
  let {
maxHeight: t,
renderExternalHeader: n
  } = e, {
connectedChannelId: p,
connectedActivity: m,
activityPanelMode: _
  } = (0, s.cj)([c.ZP], () => {
var e;
let t = c.ZP.getConnectedActivityChannelId();
return {
  connectedChannelId: t,
  connectedActivity: null != t && null !== (e = c.ZP.getSelfEmbeddedActivityForChannel(t)) && void 0 !== e ? e : void 0,
  activityPanelMode: c.ZP.getActivityPanelMode()
};
  }), f = (0, r.NX)(p, !1), E = (0, l.Z)(p);
  if (a.useEffect(() => {
  null != p && null == E && (0, o.gC)(h.MI.RESIZABLE);
}, [
  p,
  E
]), !f)
return null;
  let g = null == m ? void 0 : m.applicationId;
  return _ !== h.Ez.PANEL || null == g ? null : null == p || null == m || (0, u.Z)(p) || null == g ? null : (0, i.jsx)(d.Z, {
maxHeight: t,
connectedChannelId: p,
renderExternalHeader: n
  });
}