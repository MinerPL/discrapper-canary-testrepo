"use strict";
n.d(t, {
  A1: function() {
    return p
  },
  LO: function() {
    return N
  },
  S1: function() {
    return S
  },
  Wx: function() {
    return v
  },
  XT: function() {
    return D
  },
  al: function() {
    return g
  },
  cG: function() {
    return A
  },
  li: function() {
    return m
  },
  ob: function() {
    return f
  },
  pC: function() {
    return O
  },
  v4: function() {
    return R
  },
  wO: function() {
    return C
  },
  wi: function() {
    return L
  }
}), n(411104);
var i = n(544891),
  r = n(570140),
  s = n(812206),
  o = n(594190),
  a = n(703656),
  l = n(695346),
  u = n(391690),
  _ = n(626135),
  d = n(129542),
  c = n(877481),
  E = n(830168),
  I = n(57513),
  T = n(981631),
  h = n(689938);

function S(e, t) {
  E.Z.init({
    userToken: e,
    userId: t,
    installPaths: u.Z.installationPaths,
    platform: (0, d.D)(),
    stateCallback: e => {
      r.Z.dispatch({
        type: "DISPATCH_APPLICATION_STATE_UPDATE",
        state: e
      })
    },
    errorCallback: e => {
      r.Z.dispatch({
        type: "DISPATCH_APPLICATION_ERROR",
        error: e
      })
    }
  })
}

function f() {
  E.Z.destroy()
}

function N(e) {
  let {
    application: t,
    branchId: n,
    buildId: i,
    manifestIds: s,
    installationPath: o,
    analyticsLocation: a
  } = e;
  E.Z.setTargetManifest({
    applicationId: t.id,
    applicationName: t.name,
    applicationIcon: t.icon,
    branchId: n,
    buildId: i,
    manifestIds: s,
    installationPath: o
  }), r.Z.dispatch({
    type: "DISPATCH_APPLICATION_INSTALL",
    applicationId: t.id,
    branchId: n,
    installationPath: o
  }), _.default.track(T.rMx.LIBRARY_INSTALL_INITIATED, {
    application_id: t.id,
    application_name: t.name,
    sku_id: t.primarySkuId,
    location: a
  })
}

function A(e, t, n) {
  (0, I.l)(e.id, t).then(() => {
    r.Z.dispatch({
      type: "DISPATCH_APPLICATION_REPAIR",
      applicationId: e.id,
      branchId: t
    })
  }), _.default.track(T.rMx.LIBRARY_REPAIR_INITIATED, {
    application_id: e.id,
    application_name: e.name,
    sku_id: e.primarySkuId,
    location: n
  })
}

function m(e, t, n, i) {
  let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  ! function(e, t, n, i) {
    if (o.ZP.getRunningDiscordApplicationIds().includes(e.id)) return;
    let r = u.Z.getInstallationPath(e.id, t);
    if (null == r) throw Error("Missing installation path for application: ".concat(e.id, " ").concat(t));
    E.Z.setTargetManifest({
      applicationId: e.id,
      applicationName: e.name,
      applicationIcon: e.icon,
      branchId: t,
      buildId: n,
      manifestIds: i,
      installationPath: r
    })
  }(e, t, n, i), r.Z.dispatch({
    type: "DISPATCH_APPLICATION_UPDATE",
    applicationId: e.id,
    branchId: t,
    automatic: s
  })
}

function O(e, t, n) {
  let i = s.Z.getApplication(e);
  null != i && (c.Z.removeShortcuts(i.name), _.default.track(T.rMx.LIBRARY_UNINSTALL_INITIATED, {
    application_id: i.id,
    application_name: i.name,
    sku_id: i.primarySkuId,
    location: n
  })), E.Z.uninstall(e, t), r.Z.dispatch({
    type: "DISPATCH_APPLICATION_UNINSTALL",
    applicationId: e,
    branchId: t
  })
}

function R() {
  E.Z.resume()
}

function C() {
  E.Z.pause()
}

function p(e, t) {
  r.Z.dispatch({
    type: "DISPATCH_APPLICATION_MOVE_UP",
    applicationId: e,
    branchId: t
  })
}

function g(e, t) {
  E.Z.cancel(e, t), r.Z.dispatch({
    type: "DISPATCH_APPLICATION_CANCEL",
    applicationId: e,
    branchId: t
  })
}

function L(e, t) {
  r.Z.dispatch({
    type: "DISPATCH_APPLICATION_REMOVE_FINISHED",
    applicationId: e,
    branchId: t
  })
}

function v(e, t) {
  let n = s.Z.getApplication(e);
  null != n && c.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), n.name, n.id, t.installPath)
}

function D(e, t) {
  let r = s.Z.getApplication(e);
  i.tn.post({
    url: T.ANM.LIBRARY_APPLICATION_INSTALLED(e, e),
    oldFormErrors: !0
  }), null != r && (c.Z.createShortcuts(l.Xc.getSetting(), l.Pe.getSetting(), r.name, r.id, t.installPath), Promise.resolve().then(n.bind(n, 292556)).then(e => {
    let {
      default: t
    } = e;
    t.showNotification(r.getIconURL(64), h.Z.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_TITLE, h.Z.Messages.GAME_LIBRARY_NOTIFICATION_GAME_INSTALLED_BODY.format({
      name: r.name
    }), {
      notif_type: "Game Library Game Installed"
    }, {
      onClick: () => (0, a.uL)(T.Z5c.APPLICATION_LIBRARY),
      omitViewTracking: !0
    })
  }))
}