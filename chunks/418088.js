"use strict";
var i, r, s, o;

function a(e, t) {
  return {
    id: e.id,
    topic: e.topic,
    summShort: e.summ_short,
    people: Array.from(new Set(e.people)),
    startId: e.start_id,
    endId: e.end_id,
    count: e.count,
    channelId: t,
    source: e.source,
    type: e.type
  }
}
n.d(t, {
  b: function() {
    return a
  }
}), n(47120), (s = i || (i = {}))[s.SOURCE_0 = 0] = "SOURCE_0", s[s.SOURCE_1 = 1] = "SOURCE_1", (o = r || (r = {}))[o.UNSET = 0] = "UNSET", o[o.SOURCE_1 = 1] = "SOURCE_1", o[o.SOURCE_2 = 2] = "SOURCE_2"