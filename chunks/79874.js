"use strict";
n.d(t, {
  Kq: function() {
    return u
  },
  ZP: function() {
    return a
  },
  zI: function() {
    return l
  }
});
var i = n(442837),
  r = n(924301),
  s = n(894017),
  o = n(854698);

function a(e, t) {
  t = null != t ? t : (0, o.DK)(e);
  let n = (0, s.Z)(t, e.id);
  return _(e, n, t)
}

function l(e, t) {
  let n = (0, i.e7)([r.ZP], () => r.ZP.getGuildScheduledEvent(e));
  t = null != t ? t : (0, o.DK)(n);
  let a = (0, s.Z)(t, null == n ? void 0 : n.id);
  return null == n ? null : _(n, a, t)
}

function u(e, t) {
  let n = (0, s.c)(t, e.id);
  return _(e, n, t)
}

function _(e, t, n) {
  if (null == e.recurrence_rule || null == n) return {
    startTime: new Date(e.scheduled_start_time),
    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
  };
  let i = (0, o.iA)(n, e),
    {
      startDate: r,
      endDate: s
    } = (0, o.x6)(i, t);
  return {
    startTime: r.toDate(),
    endTime: null == s ? void 0 : s.toDate()
  }
}