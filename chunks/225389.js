var n = r(33012),
	i = r(379846),
	o = r(70440),
	a = r(235767);
t.exports = function (t) {
	var e = a(
		t,
		function (t) {
			var e = t.getSelection(),
				r = e.getStartOffset(),
				i = e.getStartKey(),
				a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
			return o(t, n.getForward(a).length || 1);
		},
		'forward'
	);
	return e === t.getCurrentContent() ? t : i.push(t, e, 'remove-range');
};
