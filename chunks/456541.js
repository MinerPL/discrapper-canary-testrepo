"use strict";
n.r(t), n.d(t, {
  useTrackNewBroadcastDetected: function() {
    return f
  }
}), n("47120");
var l = n("470079"),
  a = n("392711"),
  s = n.n(a),
  i = n("367907"),
  r = n("770471"),
  o = n("158631"),
  u = n("143614"),
  d = n("981631");
let c = (e, t) => [...t].filter(t => !e.has(t)),
  f = () => {
    let e = (0, u.default)(),
      t = (0, o.default)(),
      {
        canViewBroadcasts: n
      } = r.default.useExperiment({
        location: "Home Button"
      }, {
        autoTrackExposure: !1
      }),
      a = l.useRef(t),
      f = l.useRef(new Set);
    l.useEffect(() => {
      let l = new Set(e.map(e => e.channelId)),
        r = !s().isEqual(f.current, l);
      if (n && r) {
        let n = c(f.current, l);
        i.default.trackWithMetadata(d.AnalyticEvents.NEW_BROADCAST_DETECTED, {
          active_broadcast_highlight: e.length > 0,
          num_active_broadcasts: e.length,
          is_broadcasting: t,
          prev_is_broadcasting: a.current,
          prev_num_active_broadcasts: f.current.size,
          new_broadcast_channel_ids: n,
          broadcast_channel_ids: [...l]
        }), f.current = l, a.current = t
      }
    }, [e, t, n])
  }