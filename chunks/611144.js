n.d(t, {
	Z: function () {
		return l;
	},
	s: function () {
		return i;
	}
});
var r,
	i,
	a = n(536895);
function s(e, t) {
	return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.max(e, t);
}
function o(e, t) {
	return Number.isNaN(e) ? t : Number.isNaN(t) ? e : Math.min(e, t);
}
((r = i || (i = {})).UPDATE_COLUMN_COUNTS = 'UPDATE_COLUMN_COUNTS'), (r.SET_FOCUSED_POSITION = 'SET_FOCUSED_POSITION');
function l(e, t) {
	var n, r, i, l;
	switch (t.type) {
		case a.Us.NAVIGATE_UP:
			return (function (e, t) {
				let n = s(0, e.focusedY - 1);
				return {
					...e,
					focusedX: o(e.columnCounts[n] - 1, e.focusedX),
					focusedY: n
				};
			})(e, 0);
		case a.Us.NAVIGATE_DOWN:
			return (function (e, t) {
				let n = o(e.focusedY + 1, e.columnCounts.length - 1);
				return {
					...e,
					focusedX: o(e.columnCounts[n] - 1, e.focusedX),
					focusedY: n
				};
			})(e, 0);
		case a.Us.NAVIGATE_RIGHT:
			return (function (e, t) {
				let n = e.focusedY !== e.columnCounts.length - 1 && e.focusedX + 1 === e.columnCounts[e.focusedY],
					r = n ? 0 : o(e.focusedX + 1, e.columnCounts[e.focusedY] - 1),
					i = n ? e.focusedY + 1 : e.focusedY;
				return {
					...e,
					focusedX: r,
					focusedY: i
				};
			})(e, 0);
		case a.Us.NAVIGATE_LEFT:
			return (function (e, t) {
				let n = 0 !== e.focusedY && 0 === e.focusedX,
					r = n ? e.focusedY - 1 : e.focusedY,
					i = n ? e.columnCounts[r] - 1 : s(0, e.focusedX - 1);
				return {
					...e,
					focusedX: i,
					focusedY: r
				};
			})(e, 0);
		case a.Us.NAVIGATE_INLINE_START:
			return (
				(n = 0),
				{
					...e,
					focusedX: 0
				}
			);
		case a.Us.NAVIGATE_INLINE_END:
			return (
				(i = 0),
				{
					...(r = e),
					focusedX: r.columnCounts[r.focusedY] - 1
				}
			);
		case a.Us.NAVIGATE_START:
			return (
				(l = 0),
				{
					...e,
					focusedX: 0,
					focusedY: 0
				}
			);
		case a.Us.NAVIGATE_END:
			return (function (e, t) {
				let n = e.columnCounts.length - 1;
				return {
					...e,
					focusedX: e.columnCounts[n] - 1,
					focusedY: n
				};
			})(e, 0);
		case 'UPDATE_COLUMN_COUNTS':
			return (function (e, t) {
				let { columnCounts: n } = t,
					r = o(s(0, n.length - 1), e.focusedY);
				return {
					...e,
					columnCounts: n,
					focusedX: o(null == n[r] ? 0 : n[r] - 1, e.focusedX),
					focusedY: r
				};
			})(e, t);
		case 'SET_FOCUSED_POSITION':
			return (function (e, t) {
				let { x: n, y: r } = t,
					i = s(0, o(r, e.columnCounts.length - 1));
				return {
					...e,
					focusedX: s(0, o(n, e.columnCounts[i] - 1)),
					focusedY: i
				};
			})(e, t);
		case a.Us.SELECT_FOCUSED_ITEM:
			break;
		default:
			console.warn('Grid navigator was given an unhandled action '.concat(t.type));
	}
	return e;
}
