var r, i, a, s;
n.d(t, {
	SV: function () {
		return o;
	}
}),
	((a = r || (r = {}))[(a.SKIP_MIGRATION = 0)] = 'SKIP_MIGRATION'),
	(a[(a.SEND_DATA = 1)] = 'SEND_DATA'),
	(a[(a.DATA_MIGRATED = 2)] = 'DATA_MIGRATED'),
	(a[(a.DATA_MIGRATED_CONFIRMED = 3)] = 'DATA_MIGRATED_CONFIRMED'),
	((s = i || (i = {}))[(s.MIGRATION_SOURCE_DOMAIN = 0)] = 'MIGRATION_SOURCE_DOMAIN'),
	(s[(s.MIGRATION_DESTINATION_DOMAIN = 1)] = 'MIGRATION_DESTINATION_DOMAIN');
let o = 'domainMigrationSuccess';
