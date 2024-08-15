var e = r(24033);
n.exports = function () {
	var n = e(this),
		t = '';
	return (
		n.hasIndices && (t += 'd'),
		n.global && (t += 'g'),
		n.ignoreCase && (t += 'i'),
		n.multiline && (t += 'm'),
		n.dotAll && (t += 's'),
		n.unicode && (t += 'u'),
		n.unicodeSets && (t += 'v'),
		n.sticky && (t += 'y'),
		t
	);
};
