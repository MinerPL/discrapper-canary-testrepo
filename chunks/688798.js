"use strict";
n.r(t), n("47120");
var i = n("570140"),
  r = n("661111"),
  a = n("493683"),
  s = n("904245"),
  o = n("147913"),
  l = n("3148"),
  u = n("706454"),
  d = n("695346"),
  _ = n("375954"),
  c = n("709054"),
  E = n("839627"),
  I = n("802098"),
  T = n("128014"),
  f = n("163379"),
  S = n("596401"),
  h = n("981631");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
async function m(e) {
  if (d.LastReceivedChangelogId.getSetting() >= e) return;
  let t = await a.default.getOrEnsurePrivateChannel(S.SYSTEM_UPDATES_USER_ID);
  if (null == t) return;
  await s.default.fetchMessages({
    channelId: t,
    limit: 1
  });
  let n = _.default.getLastMessage(t);
  if (null == n) return;
  let i = (0, l.default)({
    ...n,
    channelId: t,
    messageReference: void 0,
    poll: void 0,
    changelogId: n.changelogId
  });
  s.default.receiveMessage(t, {
    ...i,
    state: h.MessageStates.SENT,
    channel_id: t
  }, !0, {})
}
class N extends o.default {
  constructor(...e) {
    super(...e), A(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), A(this, "handleConnectionOpen", async e => {
      let {
        canReceiveMessage: t
      } = E.default.getCurrentConfig({
        location: "changelog_manager"
      }, {
        autoTrackExposure: !1
      }), n = await r.default.fetchChangelogConfig(), a = n.body, s = function(e, t) {
        let n = 0,
          i = null;
        for (var [r, {
            min_version: a
          }] of Object.entries(e)) a <= t && a > n && (n = a, i = r);
        return i
      }(a, (0, T.getClientVersionForChangelog)());
      if (i.default.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: n.body,
          latestChangelogId: s
        }), null == s) return;
      if (t) {
        m(s);
        return
      }
      if (!0 !== a[s].show_on_startup) return;
      let o = I.default.lastSeenChangelogId(),
        l = I.default.lastSeenChangelogDate();
      if (null != o && 0 >= c.default.compare(s, o)) return;
      let d = await r.default.fetchChangelog(s, u.default.locale);
      if (null != d) {
        if (null == l || null == I.default.lastSeenChangelogDate()) {
          r.default.markChangelogAsSeen(s, d.date);
          return
        }!I.default.isLocked() && new Date(d.date) > new Date(l) && (0, f.openChangelog)()
      }
    })
  }
}
t.default = new N