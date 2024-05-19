"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("470079"),
  l = n("442837"),
  s = n("661111"),
  i = n("706454"),
  r = n("306680"),
  o = n("626135"),
  u = n("802098"),
  d = n("193701"),
  c = n("702321"),
  f = n("981631");

function h(e) {
  let t = (0, d.default)(e),
    n = (0, l.useStateFromStores)([i.default], () => i.default.locale),
    h = (0, l.useStateFromStores)([u.default], () => u.default.getChangelog(null != t ? t : "", n), [t, n]),
    m = (0, c.default)(e),
    p = a.useRef(m ? Date.now() : null),
    E = (0, l.useStateFromStores)([r.default], () => r.default.getUnreadCount(e), [e]);
  a.useEffect(() => {
    p.current = Date.now()
  }, [m]), a.useEffect(() => {
    m && null != t && s.default.fetchChangelog(t, n, !0)
  }, [t, n, m]), a.useEffect(() => {
    m && null != h && o.default.track(f.AnalyticEvents.CHANGE_LOG_OPENED, {
      change_log_id: "".concat(h.date, ":").concat(h.revision),
      unread_count: E
    })
  }, [m, h]), a.useEffect(() => {
    let e = p.current;
    return () => {
      m && null != h && null != e && (o.default.track(f.AnalyticEvents.CHANGE_LOG_CLOSED, {
        seconds_open: Math.round((Date.now() - e) / 1e3),
        change_log_id: "".concat(h.date, ":").concat(h.revision),
        unread_count: E
      }), p.current = 0)
    }
  }, [m, h])
}