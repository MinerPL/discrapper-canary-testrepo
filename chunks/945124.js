n.d(r, {
	y: function () {
		return i;
	}
});
var e = n(137920);
function i(t, r) {
	let n = 0;
	return null != r.games && (n += 2 * r.games.filter((r) => t.games.includes(r)).length), null != r.playstyle && (r.playstyle === t.playstyle ? (n += 2) : e.J[t.playstyle] === e.J[r.playstyle] && (n += 1)), null != r.traits && (n += 2 * Array.from(r.traits).filter((r) => t.traits.includes(r)).length), n;
}
