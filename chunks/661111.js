"use strict";
var i = n(544891),
  r = n(570140),
  s = n(802098),
  o = n(695346),
  a = n(981631),
  l = n(596401);

function u() {
  let e = new Date().getMinutes();
  return "x=".concat(Math.floor(e / 5))
}
t.Z = {
  lockChangeLog(e) {
    r.Z.dispatch({
      type: "CHANGE_LOG_LOCK",
      key: e
    })
  },
  unlockChangeLog(e) {
    r.Z.dispatch({
      type: "CHANGE_LOG_UNLOCK",
      key: e
    })
  },
  markChangelogAsSeen(e, t) {
    r.Z.dispatch({
      type: "CHANGE_LOG_MARK_SEEN",
      changelogId: e,
      changelogDate: t
    }), o.l4.updateSetting(e)
  },
  setChangelogOverride(e) {
    r.Z.dispatch({
      type: "CHANGE_LOG_SET_OVERRIDE",
      id: e
    }), null != e && this.sendChangelogMessage(e)
  },
  sendChangelogMessage(e) {
    i.tn.post({
      url: a.ANM.CHANGELOG_MESSAGES,
      body: {
        changelog_id: e
      }
    })
  },
  fetchChangelogConfig() {
    let e = l.Vw.DESKTOP;
    return i.tn.get({
      url: "https://cdn.discordapp.com/changelogs/config_".concat(e, ".json?").concat(u())
    })
  },
  async fetchChangelog(e, t) {
    if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], null != s.Z.getChangelog(e, t)) return null;
    let n = l.Vw.DESKTOP;
    try {
      let s = await i.tn.get({
        url: "https://cdn.discordapp.com/changelogs/".concat(n, "/").concat(e, "/").concat(t, ".json?").concat(u())
      });
      return r.Z.dispatch({
        type: "CHANGE_LOG_FETCH_SUCCESS",
        id: e,
        changelog: s.body
      }), s.body
    } catch {
      if (r.Z.dispatch({
          type: "CHANGE_LOG_FETCH_FAILED",
          id: e,
          locale: t
        }), "en-US" !== t) return await this.fetchChangelog(e, "en-US");
      return null
    }
  }
}