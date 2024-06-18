"use strict";
var i = n(442837),
  r = n(481060),
  s = n(38618),
  o = n(272423),
  a = n(823385),
  l = n(819640),
  u = n(725568);
t.Z = () => {
  let e = (0, i.e7)([l.Z], () => l.Z.hasLayers()),
    t = (0, u.QP)(e => e.fullScreenLayers.length > 0),
    n = (0, o.EV)(),
    _ = (0, r.useModalsStore)(r.hasAnyModalOpen),
    d = (0, i.e7)([s.Z], () => s.Z.isConnected()),
    c = (0, i.e7)([a.Z], () => a.Z.isOpen());
  return e || t || _ || n || !d || c
}