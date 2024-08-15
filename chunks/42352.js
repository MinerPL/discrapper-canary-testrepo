n.d(t, {
	Z: function () {
		return a;
	}
});
var r = n(75060),
	i = n(991240);
async function a() {
	let e = null;
	try {
		e = await r.Z.getThermalState();
	} catch (e) {
		if (e.message === i.n) return Promise.resolve(null);
		throw e;
	}
	return Promise.resolve(e);
}
