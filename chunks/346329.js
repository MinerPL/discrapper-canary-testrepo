"use strict";
n.r(e), n.d(e, {
  installApplication: function() {
    return p
  },
  performDefaultLibraryApplicationAction: function() {
    return h
  },
  playApplication: function() {
    return a.playApplication
  },
  repairApplication: function() {
    return C
  },
  updateApplication: function() {
    return f
  }
});
var l = n("51025"),
  a = n("696748"),
  i = n("812206"),
  o = n("173747"),
  s = n("7956"),
  r = n("417363"),
  c = n("941128"),
  u = n("702523"),
  d = n("981631");

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