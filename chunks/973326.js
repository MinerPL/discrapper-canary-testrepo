var e = r(936940),
	i = r(161581).RegExp;
n.exports = e(function () {
	var n = i('.', 's');
	return !(n.dotAll && n.exec('\n') && 's' === n.flags);
});
