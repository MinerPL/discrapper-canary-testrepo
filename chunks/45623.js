var n = r(660610);
t.exports = function (t) {
	return !!t && !!t.ownerDocument && n(t) && 'BR' === t.nodeName;
};
