"use strict";
n.d(t, {
  R: function() {
    return I
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(544891),
  s = n(433517),
  o = n(481060),
  a = n(147913),
  l = n(480294),
  u = n(9156),
  _ = n(312400),
  d = n(115345),
  c = n(981631);
class E extends a.Z {
  handlePostConnectionOpen() {
    if (!s.K.get("turnedOffNewNotifications")) {
      if (l.Z.hasConsented(c.pjP.PERSONALIZATION)) {
        if (!_.xT.getCurrentConfig({
            location: "NotificationMigrationManager"
          }, {
            autoTrackExposure: !1
          }).enabled || u.ZP.useNewNotifications) return;
        this.checkOldUserExperiment(), this.checkNewUserExperiment()
      }
    }
  }
  async checkOldUserExperiment() {
    let {
      logExposure: e,
      autoOpen: t
    } = _.fs.getCurrentConfig({
      location: "NotificationMigrationManager"
    }, {
      autoTrackExposure: !1
    });
    if (!e) return;
    let {
      body: {
        guild_noise: s,
        usage: a
      }
    } = await r.tn.get("/users/@me/notification-migration-data2"), l = (0, d._Y)(a), {
      default: u
    } = await Promise.all([n.e("99387"), n.e("53512")]).then(n.bind(n, 753521));
    if ((0, o.hasAnyModalOpen)()) return;
    if (_.fs.trackExposure({
        location: "NotificationMigrationManager"
      }), !!t)(0, d.cG)(s, l) ? (0, o.openModal)(e => (0, i.jsx)(u, {
      ...e,
      dismissable: !1,
      guildPain: s,
      myUsage: l
    }), {
      onCloseRequest: () => {}
    }) : (0, d.ly)()
  }
  checkNewUserExperiment() {
    let {
      logExposure: e,
      enabled: t
    } = _.ad.getCurrentConfig({
      location: "NotificationMigrationManager"
    }, {
      autoTrackExposure: !1
    });
    if (!!e) _.ad.trackExposure({
      location: "NotificationMigrationManager"
    }), t && (0, d.ly)()
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
async function I(e) {
  let {
    body: {
      guild_noise: t,
      usage: s
    }
  } = await r.tn.get("/users/@me/notification-migration-data2"), a = (0, d._Y)(s);
  (0, o.openModalLazy)(async () => {
    let {
      default: r
    } = await Promise.all([n.e("99387"), n.e("53512")]).then(n.bind(n, 753521));
    return n => (0, i.jsx)(r, {
      ...n,
      dismissable: e,
      guildPain: t,
      myUsage: a
    })
  })
}
t.Z = new E