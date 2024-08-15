n.d(t, {
	A: function () {
		return _;
	}
});
var i = n(735250);
n(470079);
var a = n(252618),
	s = n(121711),
	r = n(823379),
	l = n(976076),
	o = n(545114),
	c = n(49898),
	d = n(689938),
	u = n(623641);
function _() {
	let e = (0, l.Z)(),
		t = (function (e) {
			switch (e) {
				case c.F$.SERVERS:
					return (0, i.jsx)(o.Z, {});
				case c.F$.QUESTS:
					return (0, i.jsx)(s.Z, {});
				default:
					(0, r.vE)(e);
			}
		})(e);
	return (0, i.jsxs)('section', {
		className: u.container,
		children: [
			(0, i.jsx)(a.yY, {
				location: (function (e) {
					switch (e) {
						case c.F$.SERVERS:
							return d.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
						case c.F$.QUESTS:
							return d.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
						default:
							(0, r.vE)(e);
					}
				})(e)
			}),
			(0, i.jsx)('div', { className: u.dragRegion }),
			t
		]
	});
}
