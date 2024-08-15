e.exports = function (e, t, n, r, i) {
	this.directMap[e + ':' + n] = t;
	var a,
		s = (e = e.replace(/\s+/g, ' ')).split(' ');
	if (s.length > 1) {
		this.bindSequence(e, s, t, n);
		return;
	}
	(a = this.getKeyInfo(e, n)),
		(this.callbacks[a.key] = this.callbacks[a.key] || []),
		this.getMatches(a.key, a.modifiers, { type: a.action }, r, e, i),
		this.callbacks[a.key][r ? 'unshift' : 'push']({
			callback: t,
			modifiers: a.modifiers,
			action: a.action,
			seq: r,
			level: i,
			combo: e
		});
};
