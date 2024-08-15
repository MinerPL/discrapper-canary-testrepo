var r, i, a, s, o, l, u;
n(653041),
	n(411104),
	(r = n.g),
	(i = Date.now ? Date.now() : +new Date()),
	(a = r.performance || {}),
	(s = []),
	(o = {}),
	(l = function (e, t) {
		for (var n = 0, r = s.length, i = []; n < r; n++) s[n][e] == t && i.push(s[n]);
		return i;
	}),
	(u = function (e, t) {
		for (var n, r = s.length; r--; ) (n = s[r]).entryType == e && (void 0 === t || n.name == t) && s.splice(r, 1);
	}),
	a.now ||
		(a.now =
			a.webkitNow ||
			a.mozNow ||
			a.msNow ||
			function () {
				return (Date.now ? Date.now() : +new Date()) - i;
			}),
	a.mark ||
		(a.mark =
			a.webkitMark ||
			function (e) {
				var t = {
					name: e,
					entryType: 'mark',
					startTime: a.now(),
					duration: 0
				};
				s.push(t), (o[e] = t);
			}),
	a.measure ||
		(a.measure =
			a.webkitMeasure ||
			function (e, t, n) {
				var r, i;
				if (void 0 !== n && void 0 === o[n]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.");
				if (void 0 !== t && void 0 === o[t]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
				(r = o[t] ? o[t].startTime : 0),
					(i = o[n] ? o[n].startTime : a.now()),
					s.push({
						name: e,
						entryType: 'measure',
						startTime: r,
						duration: i - r
					});
			}),
	a.getEntriesByType ||
		(a.getEntriesByType =
			a.webkitGetEntriesByType ||
			function (e) {
				return l('entryType', e);
			}),
	a.getEntriesByName ||
		(a.getEntriesByName =
			a.webkitGetEntriesByName ||
			function (e) {
				return l('name', e);
			}),
	a.clearMarks ||
		(a.clearMarks =
			a.webkitClearMarks ||
			function (e) {
				u('mark', e);
			}),
	a.clearMeasures ||
		(a.clearMeasures =
			a.webkitClearMeasures ||
			function (e) {
				u('measure', e);
			}),
	(r.performance = a),
	'function' == typeof define &&
		(define.amd || define.ajs) &&
		define('performance', [], function () {
			return a;
		});
