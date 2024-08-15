n.d(t, {
	P0: function () {
		return l;
	},
	nb: function () {
		return c;
	},
	pz: function () {
		return o;
	},
	wx: function () {
		return s;
	}
});
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(119585);
function c(e) {
	var t, n, r, i;
	return (e.localName = null !== (t = e.localName) && void 0 !== t ? t : (0, u.c)(e.name)), (e.jsonName = null !== (n = e.jsonName) && void 0 !== n ? n : (0, u.c)(e.name)), (e.repeat = null !== (r = e.repeat) && void 0 !== r ? r : l.NO), (e.opt = null !== (i = e.opt) && void 0 !== i ? i : !e.repeat && !e.oneof && 'message' == e.kind), e;
}
((r = s || (s = {}))[(r.DOUBLE = 1)] = 'DOUBLE'), (r[(r.FLOAT = 2)] = 'FLOAT'), (r[(r.INT64 = 3)] = 'INT64'), (r[(r.UINT64 = 4)] = 'UINT64'), (r[(r.INT32 = 5)] = 'INT32'), (r[(r.FIXED64 = 6)] = 'FIXED64'), (r[(r.FIXED32 = 7)] = 'FIXED32'), (r[(r.BOOL = 8)] = 'BOOL'), (r[(r.STRING = 9)] = 'STRING'), (r[(r.BYTES = 12)] = 'BYTES'), (r[(r.UINT32 = 13)] = 'UINT32'), (r[(r.SFIXED32 = 15)] = 'SFIXED32'), (r[(r.SFIXED64 = 16)] = 'SFIXED64'), (r[(r.SINT32 = 17)] = 'SINT32'), (r[(r.SINT64 = 18)] = 'SINT64'), ((i = o || (o = {}))[(i.BIGINT = 0)] = 'BIGINT'), (i[(i.STRING = 1)] = 'STRING'), (i[(i.NUMBER = 2)] = 'NUMBER'), ((a = l || (l = {}))[(a.NO = 0)] = 'NO'), (a[(a.PACKED = 1)] = 'PACKED'), (a[(a.UNPACKED = 2)] = 'UNPACKED');
