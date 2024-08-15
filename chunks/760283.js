e.exports = function (e, t, r) {
	var i,
		a,
		s,
		o,
		l = {},
		u = 0,
		c = !1;
	for (a = 0, i = this.getMatches(e, t, r); a < i.length; ++a) i[a].seq && (u = Math.max(u, i[a].level));
	for (a = 0; a < i.length; ++a) {
		if (i[a].seq) {
			if (i[a].level !== u) continue;
			(c = !0), (l[i[a].seq] = 1), this.fireCallback(i[a].callback, r, i[a].combo, i[a].seq);
			continue;
		}
		!c && this.fireCallback(i[a].callback, r, i[a].combo);
	}
	(o = 'keypress' === r.type && this.ignoreNextKeypress), (s = n(64000)), r.type === this.nextExpectedAction && !s(e) && !o && this.resetSequences(l), (this.ignoreNextKeypress = c && 'keydown' === r.type);
};
