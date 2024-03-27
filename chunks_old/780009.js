"use strict";
n.r(e), n.d(e, {
  playApplication: function() {
    return a.playApplication
  },
  installApplication: function() {
    return p
  },
  updateApplication: function() {
    return f
  },
  repairApplication: function() {
    return C
  },
  performDefaultLibraryApplicationAction: function() {
    return h
  }
});
var l = n("190017"),
  a = n("596169"),
  i = n("299285"),
  o = n("677225"),
  s = n("9377"),
  r = n("535974"),
  c = n("352326"),
  u = n("551994"),
  d = n("49111");

function p(t, e, n) {
  let l = i.default.getApplication(t);
  if (null == l) return;
  let a = o.default.getTargetBuildId(l.id, e),
    s = o.default.getTargetManifests(l.id, e);
  null != a && null != s && null != u.installApplication && (0, u.installApplication)(l, e, a, s, n)
}

function f(t, e) {
  let n = i.default.getApplication(t);
  if (null != n) return l.updateApplication(n, e, o.default.getTargetBuildId(n.id, e), o.default.getTargetManifests(n.id, e))
}

function C(t, e, n) {
  let a = i.default.getApplication(t);
  if (null != a) return l.repairApplication(a, e, n)
}

function h(t, e) {
  let n = (0, s.getDefaultLibraryApplicationAction)(t, r.default, c.default),
    {
      analyticsParams: l
    } = e;
  switch (n) {
    case d.LibraryApplicationActions.PLAY:
      return (0, a.playApplication)(t.id, t, {
        analyticsParams: l
      });
    case d.LibraryApplicationActions.INSTALL:
      return p(t.id, t.branchId, l.source);
    case d.LibraryApplicationActions.UPDATE:
      return f(t.id, t.branchId)
  }
}