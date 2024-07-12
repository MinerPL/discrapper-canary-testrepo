n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  o = n(569545),
  s = n(687516),
  l = n(314897),
  u = n(959457),
  c = n(689938);

function d(e, t, d) {
  var _;
  let E = (0, s.Cf)(e),
f = (0, i.e7)([l.default], () => l.default.getId()),
h = null != e ? (0, o.V9)(e) : u.Z.getActiveStreamKey(),
p = null !== (_ = u.Z.getVideoStats(h)) && void 0 !== _ ? _ : {},
m = {
  media_session_id: u.Z.getMediaSessionId(h),
  rtc_connection_id: u.Z.getRtcConnectionId(h),
  stream_region: u.Z.getRegion(h),
  max_viewers: u.Z.getMaxViewers(h),
  ...p
};
  return null == e ? null : (0, r.jsx)(a.MenuItem, {
id: 'report-stream-problem',
label: c.Z.Messages.STREAM_REPORT_PROBLEM_MENU_ITEM,
action: () => {
  null == d || d(), null != e && (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e('18912').then(n.bind(n, 340140));
    return n => (0, r.jsx)(t, {
      stream: e,
      streamApplication: E,
      isStreamer: f === (null == e ? void 0 : e.ownerId),
      analyticsData: m,
      ...n
    });
  });
}
  });
}