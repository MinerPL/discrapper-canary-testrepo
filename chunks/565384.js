n.d(t, {
	Ez: function () {
		return E;
	},
	Ps: function () {
		return l;
	},
	Xo: function () {
		return d;
	},
	dT: function () {
		return c;
	},
	dw: function () {
		return u;
	},
	k$: function () {
		return _;
	}
}),
	n(47120);
var r = n(652874),
	i = n(990547),
	a = n(731965);
let s = Object.freeze({
		debugTrackedData: null,
		impressions: []
	}),
	o = (0, r.Z)((e) => s),
	l = (e) => {
		(0, a.j)(() => {
			o.setState((t) => ({
				impressions: [...t.impressions, e]
			}));
		});
	},
	u = (e) => {
		(0, a.j)(() => {
			o.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
		});
	},
	c = (e, t) => {
		(0, a.j)(() => {
			o.setState(() => ({
				debugTrackedData: {
					name: e,
					...t
				}
			}));
		});
	},
	d = o;
function _() {
	let e = {};
	return (
		o.getState().impressions.forEach((t) => {
			t.type === i.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
		}),
		e
	);
}
function E() {
	return o.getState().impressions;
}
