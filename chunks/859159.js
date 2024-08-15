r.r(e),
	r.d(e, {
		SKELETON_TYPE: function () {
			return a.aV;
		},
		TYPE: function () {
			return a.wD;
		},
		_Parser: function () {
			return u;
		},
		createLiteralElement: function () {
			return a.mD;
		},
		createNumberElement: function () {
			return a.qx;
		},
		isArgumentElement: function () {
			return a.VG;
		},
		isDateElement: function () {
			return a.rp;
		},
		isDateTimeSkeleton: function () {
			return a.Ii;
		},
		isLiteralElement: function () {
			return a.O4;
		},
		isNumberElement: function () {
			return a.uf;
		},
		isNumberSkeleton: function () {
			return a.Wh;
		},
		isPluralElement: function () {
			return a.Jo;
		},
		isPoundElement: function () {
			return a.yx;
		},
		isSelectElement: function () {
			return a.Wi;
		},
		isTagElement: function () {
			return a.HI;
		},
		isTimeElement: function () {
			return a.pe;
		},
		parse: function () {
			return s;
		}
	});
var n = r(146150),
	i = r(827671),
	o = r(596771),
	a = r(928125);
function s(t, e) {
	void 0 === e && (e = {}),
		(e = (0, n.pi)(
			{
				shouldParseSkeletons: !0,
				requiresOtherClause: !0
			},
			e
		));
	var r = new o._(t, e).parse();
	if (r.err) {
		var s = SyntaxError(i.o[r.err.kind]);
		throw ((s.location = r.err.location), (s.originalMessage = r.err.message), s);
	}
	return (
		!(null == e ? void 0 : e.captureLocation) &&
			!(function t(e) {
				e.forEach(function (e) {
					if ((delete e.location, (0, a.Wi)(e) || (0, a.Jo)(e))) for (var r in e.options) delete e.options[r].location, t(e.options[r].value);
					else (0, a.uf)(e) && (0, a.Wh)(e.style) ? delete e.style.location : ((0, a.rp)(e) || (0, a.pe)(e)) && (0, a.Ii)(e.style) ? delete e.style.location : (0, a.HI)(e) && t(e.children);
				});
			})(r.val),
		r.val
	);
}
var u = o._;
