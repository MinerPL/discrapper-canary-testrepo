var r, i, a, s;
function o(e, t) {
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
    };
}
n.d(t, {
    b: function () {
        return o;
    }
}),
    n(47120),
    ((a = r || (r = {}))[(a.SOURCE_0 = 0)] = 'SOURCE_0'),
    (a[(a.SOURCE_1 = 1)] = 'SOURCE_1'),
    ((s = i || (i = {}))[(s.UNSET = 0)] = 'UNSET'),
    (s[(s.SOURCE_1 = 1)] = 'SOURCE_1'),
    (s[(s.SOURCE_2 = 2)] = 'SOURCE_2');
