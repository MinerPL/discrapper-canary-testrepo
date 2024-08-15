var r, i, a, s, o, l, u, c;
function d(e) {
	return e.includes('LEGITIMATE_ACTIVITY') ? 'LEGITIMATE_ACTIVITY' : e.includes('DM_SPAM') ? 'DM_SPAM' : e.includes('JOIN_RAID') ? 'JOIN_RAID' : 'OTHER';
}
n.d(t, {
	$l: function () {
		return a;
	},
	C2: function () {
		return s;
	},
	J$: function () {
		return d;
	},
	wR: function () {
		return i;
	},
	x2: function () {
		return r;
	}
}),
	n(689938),
	((o = r || (r = {})).BUG = 'BUG'),
	(o.ALLOWED = 'ALLOWED'),
	(o.MENTION_RAID_REMOVE_RESTRICTION = 'MENTION_RAID_REMOVE_RESTRICTION'),
	((l = i || (i = {})).JOIN_RAID = 'JOIN_RAID'),
	(l.MENTION_RAID = 'MENTION_RAID'),
	((u = a || (a = {})).LEGITIMATE_ACTIVITY = 'LEGITIMATE_ACTIVITY'),
	(u.LEGITIMATE_ACCOUNTS = 'LEGITIMATE_ACCOUNTS'),
	(u.LEGITIMATE_DMS = 'LEGITIMATE_DMS'),
	(u.DM_SPAM = 'DM_SPAM'),
	(u.JOIN_RAID = 'JOIN_RAID'),
	(u.OTHER = 'OTHER'),
	((c = s || (s = {})).DM_SPAM = 'DM_SPAM'),
	(c.MENTION_SPAM = 'MENTION_SPAM'),
	(c.CHANNEL_SPAM = 'CHANNEL_SPAM'),
	(c.SUS_NEW_MEMBERS = 'SUS_NEW_MEMBERS'),
	(c.CHANGING_SETTINGS = 'CHANGING_SETTINGS'),
	(c.OTHER = 'OTHER');
