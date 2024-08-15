var e = r(325008),
	o = r(740362),
	i = Function.prototype,
	u = e && Object.getOwnPropertyDescriptor,
	c = o(i, 'name'),
	f = c && (!e || (e && u(i, 'name').configurable));
t.exports = {
	EXISTS: c,
	PROPER: c && 'something' === function () {}.name,
	CONFIGURABLE: f
};
