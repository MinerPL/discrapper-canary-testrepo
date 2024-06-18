"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(569545),
  a = n(687516),
  l = n(314897),
  u = n(959457),
  _ = n(689938);

function d(e, t, d) {
  var c;
  let E = (0, a.Cf)(e),
    I = (0, r.e7)([l.default], () => l.default.getId()),
    T = null != e ? (0, o.V9)(e) : u.Z.getActiveStreamKey(),
    h = null !== (c = u.Z.getVideoStats(T)) && void 0 !== c ? c : {},
    S = {
      media_session_id: u.Z.getMediaSessionId(T),
      rtc_connection_id: u.Z.getRtcConnectionId(T),
      stream_region: u.Z.getRegion(T),
      max_viewers: u.Z.getMaxViewers(T),
      ...h
    };
  return null == e ? null : (0, i.jsx)(s.MenuItem, {
    id: "report-stream-problem",
    label: _.Z.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
    action: () => {
      null == d || d(), null != e && (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("99387"), n.e("75994")]).then(n.bind(n, 340140));
        return n => (0, i.jsx)(t, {
          stream: e,
          streamApplication: E,
          isStreamer: I === (null == e ? void 0 : e.ownerId),
          analyticsData: S,
          ...n
        })
      })
    }
  })
}