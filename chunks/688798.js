"use strict";
n.r(t), n("47120");
var i = n("570140"),
  r = n("661111"),
  a = n("147913"),
  s = n("706454"),
  o = n("709054"),
  l = n("839627"),
  u = n("802098"),
  d = n("128014"),
  _ = n("163379");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends a.default {
  constructor(...e) {
    super(...e), c(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), c(this, "handleConnectionOpen", async e => {
      let {
        canReceiveMessage: t
      } = l.default.getCurrentConfig({
        location: "changelog_manager"
      }, {
        autoTrackExposure: !1
      });
      if (t) return;
      let n = await r.default.fetchChangelogConfig(),
        a = n.body,
        c = function(e, t) {
          let n = 0,
            i = null;
          for (var [r, {
              min_version: a
            }] of Object.entries(e)) a <= t && a > n && (n = a, i = r);
          return i
        }(a, (0, d.getClientVersionForChangelog)());
      if (i.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: n.body,
          latestChangelogId: c
        }), null == c || !0 !== a[c].show_on_startup) return;
      let E = u.default.lastSeenChangelogId(),
        I = u.default.lastSeenChangelogDate();
      if (null != E && 0 >= o.default.compare(c, E)) return;
      let T = await r.default.fetchChangelog(c, s.default.locale);
      if (null != T) {
        if (null == I || null == u.default.lastSeenChangelogDate()) {
          r.default.markChangelogAsSeen(c, T.date);
          return
        }!u.default.isLocked() && new Date(T.date) > new Date(I) && (0, _.openChangelog)()
      }
    })
  }
}
t.default = new E