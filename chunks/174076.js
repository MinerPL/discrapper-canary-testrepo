var n = r(310176),
	i = r(379846);
t.exports = function (t) {
	var e = n.splitBlock(t.getCurrentContent(), t.getSelection());
	return i.push(t, e, 'split-block');
};
