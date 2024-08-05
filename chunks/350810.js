var r = n(442837),
  i = n(481060),
  a = n(38618),
  s = n(272423),
  o = n(823385),
  l = n(819640),
  u = n(725568);
t.Z = () => {
  let e = (0, r.e7)([l.Z], () => l.Z.hasLayers()),
t = (0, u.QP)(e => e.fullScreenLayers.length > 0),
n = (0, s.EV)(),
c = (0, i.useModalsStore)(i.hasAnyModalOpen),
d = (0, r.e7)([a.Z], () => a.Z.isConnected()),
_ = (0, r.e7)([o.Z], () => o.Z.isOpen());
  return e || t || c || n || !d || _;
};