n.d(t, {
	P: function () {
		return o;
	}
});
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(442837),
	c = n(570140);
((r = o || (o = {}))[(r.NOT_STARTED = 0)] = 'NOT_STARTED'), (r[(r.IN_PROGRESS = 1)] = 'IN_PROGRESS'), (r[(r.FAILED = 2)] = 'FAILED'), (r[(r.SKIPPED = 3)] = 'SKIPPED');
let d = 0;
class _ extends (l = u.ZP.Store) {
	getMigrationStatus() {
		return d;
	}
}
(s = 'DomainMigrationStore'),
	(a = 'displayName') in (i = _)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new _(c.Z, {
		DOMAIN_MIGRATION_START: function () {
			d = 1;
		},
		DOMAIN_MIGRATION_FAILURE: function () {
			d = 2;
		},
		DOMAIN_MIGRATION_SKIP: function () {
			d = 3;
		}
	}));
