"use strict";
n(47120);
var i = n(913527),
  r = n.n(i),
  s = n(570140),
  o = n(661111),
  a = n(493683),
  l = n(904245),
  u = n(232567),
  _ = n(147913),
  d = n(3148),
  c = n(960412),
  E = n(706454),
  I = n(695346),
  T = n(375954),
  h = n(306680),
  S = n(709054),
  f = n(839627),
  N = n(802098),
  A = n(128014),
  m = n(163379),
  O = n(596401),
  R = n(981631),
  C = n(930441);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
async function g(e, t) {
  let n = I.l4.getSetting(),
    i = S.default.extractTimestamp(e);
  if ((n >= e || r()().diff(i, "days") > 30) && !t) return;
  let s = await (0, c.Y7)();
  if (!(null == s ? void 0 : s.categories[C.$Z.UPDATES_AND_ANNOUNCEMENTS])) return;
  let o = await a.Z.getOrEnsurePrivateChannel(O.sP);
  if (null == o) return;
  await l.Z.fetchMessages({
    channelId: o,
    limit: 1
  });
  let u = T.Z.getLastMessage(o),
    _ = h.ZP.getOldestUnreadMessageId(o),
    E = h.ZP.hasUnread(o);
  if (null == u || null == _ || E || u.id > _) return;
  let f = (0, d.ZP)({
    ...u,
    channelId: o,
    messageReference: void 0,
    poll: void 0,
    changelogId: u.changelogId
  });
  l.Z.receiveMessage(o, {
    ...f,
    state: R.yb.SENT,
    channel_id: o
  }, !0, {})
}
class L extends _.Z {
  constructor(...e) {
    super(...e), p(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e)
    }), p(this, "handleConnectionOpen", async e => {
      let {
        canReceiveMessage: t,
        canReceiveUnpublishedMessages: n
      } = f.Z.getCurrentConfig({
        location: "changelog_manager"
      }, {
        autoTrackExposure: !1
      }), i = await o.Z.fetchChangelogConfig(), r = i.body, a = function(e, t) {
        let n = 0,
          i = null;
        for (var [r, {
            min_version: s
          }] of Object.entries(e)) s <= t && s > n && (n = s, i = r);
        return i
      }(r, (0, A.b)());
      if (s.Z.dispatch({
          type: "CHANGE_LOG_SET_CONFIG",
          config: i.body,
          latestChangelogId: a
        }), null == a) return;
      if (t) {
        (0, u.PR)(O.sP), g(a, n);
        return
      }
      if (!0 !== r[a].show_on_startup) return;
      let l = N.Z.lastSeenChangelogId(),
        _ = N.Z.lastSeenChangelogDate();
      if (null != l && 0 >= S.default.compare(a, l)) return;
      let d = await o.Z.fetchChangelog(a, E.default.locale);
      if (null != d) {
        if (null == _ || null == N.Z.lastSeenChangelogDate()) {
          o.Z.markChangelogAsSeen(a, d.date);
          return
        }!N.Z.isLocked() && new Date(d.date) > new Date(_) && (0, m.Z)()
      }
    })
  }
}
t.Z = new L