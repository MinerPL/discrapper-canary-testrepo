var e = r(106295),
	o = r(936940),
	i = r(161581).String;
t.exports =
	!!Object.getOwnPropertySymbols &&
	!o(function () {
		var t = Symbol('symbol detection');
		return !i(t) || !(Object(t) instanceof Symbol) || (!Symbol.sham && e && e < 41);
	});
