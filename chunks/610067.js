var r = {}.propertyIsEnumerable,
	e = Object.getOwnPropertyDescriptor,
	o = e && !r.call({ 1: 2 }, 1);
n.f = o
	? function (t) {
			var n = e(this, t);
			return !!n && n.enumerable;
		}
	: r;
