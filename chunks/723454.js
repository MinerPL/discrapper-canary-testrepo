var r = n(302454),
	i = n.n(r);
let a = /\n$/,
	s = {
		...i().defaultRules.heading,
		requiredFirstCharacters: [' ', '#'],
		match: (e, t, n) => (t.allowHeading ? (null == n || '' === n || null != n.match(a) ? (0, r.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null) : null)
	};
t.Z = s;
