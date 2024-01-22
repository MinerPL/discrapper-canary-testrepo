"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007"), n("702976"), n("860677");
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("95410"),
  o = n("913144"),
  l = n("370999"),
  u = n("568734"),
  d = n("964889"),
  c = n("271938"),
  f = n("49111");
let _ = "LibraryApplicationStore";

function h() {
  var e;
  return null !== (e = a.default.get(_)) && void 0 !== e ? e : {}
}
let g = !1,
  m = {},
  E = {},
  p = new Set,
  v = {},
  S = {},
  T = !1;

function I() {
  a.default.set(_, {
    ...h(),
    activeLaunchOptionIds: S
  })
}

function C() {
  a.default.set(_, {
    ...h(),
    activeLibraryApplicationBranchIds: v
  })
}

function A(e) {
  for (let t of e) {
    let e = l.default.createFromServer(t),
      n = (0, d.getComboId)(e.id, e.branchId);
    m[n] = e
  }
}

function y(e) {
  let {
    libraryApplication: t
  } = e, n = l.default.createFromServer(t), i = (0, d.getComboId)(n.id, n.branchId);
  m[i] = n, p.delete(i)
}

function N(e, t) {
  var n;
  let i = (0, d.getComboId)(e, t);
  return null !== (n = m[i]) && void 0 !== n ? n : E[i]
}

function R() {
  return {
    ...E,
    ...m
  }
}
class O extends r.default.Store {
  initialize() {
    this.waitFor(c.default);
    let e = a.default.get(_);
    null != e && (null == e.activeLaunchOptionIds ? I() : S = e.activeLaunchOptionIds, null == e.activeLibraryApplicationBranchIds ? C() : v = e.activeLibraryApplicationBranchIds)
  }
  get libraryApplications() {
    return function(e) {
      let t = R();
      return Object.keys(t).forEach(n => {
        !e(t[n]) && delete t[n]
      }), t
    }(e => !e.isHidden())
  }
  getAllLibraryApplications() {
    return R()
  }
  hasLibraryApplication() {
    return Object.keys(R()).length > 0
  }
  hasApplication(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = N(e, t);
    return !(null == i || !n && i.isHidden()) && (0, d.isUserEntitledToLibraryApplication)(i)
  }
  getLibraryApplication(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = N(e, t);
    return n && null != i ? (0, d.isUserEntitledToLibraryApplication)(i) ? i : null : i
  }
  getActiveLibraryApplication(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = v[e];
    if (null != n) {
      var i;
      let s = (0, d.getComboId)(e, n),
        r = null !== (i = m[s]) && void 0 !== i ? i : E[s];
      if (null != r && (0, d.isUserEntitledToLibraryApplication)(r) && (t || !r.isHidden())) return r
    }
    let s = R();
    for (let n in s)
      if (s[n].id === e) {
        let e = s[n];
        if ((0, d.isUserEntitledToLibraryApplication)(e) && (t || !e.isHidden())) return e
      }
  }
  isUpdatingFlags(e, t) {
    return p.has((0, d.getComboId)(e, t))
  }
  getActiveLaunchOptionId(e, t) {
    return S[(0, d.getComboId)(e, t)]
  }
  get fetched() {
    return g
  }
  get entitledBranchIds() {
    return s(R()).values().filter(e => (0, d.isUserEntitledToLibraryApplication)(e)).map(e => e.branchId).value()
  }
  get hasRemovedLibraryApplicationThisSession() {
    return T
  }
  whenInitialized(e) {
    this.addConditionalChangeListener(() => {
      if (g) return setImmediate(e), !1
    })
  }
}
O.displayName = "LibraryApplicationStore";
var D = new O(o.default, {
  LOGOUT: function() {
    g = !1
  },
  LIBRARY_FETCH_SUCCESS: function(e) {
    let {
      libraryApplications: t
    } = e;
    m = {}, A(t), g = !0
  },
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      libraryApplications: t
    } = e;
    A(t)
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_START: function(e) {
    let {
      applicationId: t,
      branchId: n,
      flags: i
    } = e, s = (0, d.getComboId)(t, n), r = N(t, n);
    null != r && !r.isHidden() && u.hasFlag(i, f.LibraryApplicationFlags.HIDDEN) && (T = !0), p.add(s)
  },
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: y,
  LIBRARY_APPLICATION_UPDATE: y,
  LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n,
      launchOptionId: i
    } = e;
    S[(0, d.getComboId)(t, n)] = i, I()
  },
  LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    if (v[t] === n) return !1;
    v[t] = n, C()
  },
  LIBRARY_APPLICATIONS_TEST_MODE_ENABLED: function(e) {
    let {
      libraryApplications: t
    } = e;
    for (let e of t) {
      let t = (0, d.getComboId)(e.id, e.branchId);
      E[t] = e
    }
  },
  DEVELOPER_TEST_MODE_RESET: function() {
    E = {}
  }
})