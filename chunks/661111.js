"use strict";
n.r(t);
var i = n("544891"),
  r = n("570140"),
  a = n("802098"),
  s = n("695346"),
  o = n("981631"),
  l = n("596401");

function u() {
  let e = new Date().getMinutes();
  return "x=".concat(Math.floor(e / 5))
}
t.default = {
  lockChangeLog(e) {
    r.default.dispatch({
      type: "CHANGE_LOG_LOCK",
      key: e
    })
  },
  unlockChangeLog(e) {
    r.default.dispatch({
      type: "CHANGE_LOG_UNLOCK",
      key: e
    })
  },
  markChangelogAsSeen(e, t) {
    r.default.dispatch({
      type: "CHANGE_LOG_MARK_SEEN",
      changelogId: e,
      changelogDate: t
    }), s.LastReceivedChangelogId.updateSetting(e)
  },
  setChangelogOverride(e) {
    r.default.dispatch({
      type: "CHANGE_LOG_SET_OVERRIDE",
      id: e
    }), null != e && this.sendChangelogMessage(e)
  },
  sendChangelogMessage(e) {
    i.HTTP.post({
      url: o.Endpoints.CHANGELOG_MESSAGES,
      body: {
        changelog_id: e
      }
    })
  },
  fetchChangelogConfig() {
    let e = l.ChangelogPlatforms.DESKTOP;
    return i.HTTP.get({
      url: "https://cdn.discordapp.com/changelogs/config_".concat(e, ".json?").concat(u())
    })
  },
  async fetchChangelog(e, t) {
    if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], null != a.default.getChangelog(e, t)) return null;
    let n = l.ChangelogPlatforms.DESKTOP;
    try {
      let a = await i.HTTP.get({
        url: "https://cdn.discordapp.com/changelogs/".concat(n, "/").concat(e, "/").concat(t, ".json?").concat(u())
      });
      return r.default.dispatch({
        type: "CHANGE_LOG_FETCH_SUCCESS",
        id: e,
        changelog: a.body
      }), a.body
    } catch {
      if (r.default.dispatch({
          type: "CHANGE_LOG_FETCH_FAILED",
          id: e,
          locale: t
        }), "en-US" !== t) return await this.fetchChangelog(e, "en-US");
      return null
    }
  }
}