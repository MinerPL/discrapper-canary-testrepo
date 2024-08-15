var e = r(936940),
	i = r(161581).RegExp;
n.exports = e(function () {
	var n = i('(?<a>b)', 'g');
	return 'b' !== n.exec('b').groups.a || 'bc' !== 'b'.replace(n, '$<a>c');
});
