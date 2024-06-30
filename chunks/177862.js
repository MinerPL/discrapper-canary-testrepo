var l, a, i, r, u, o, s, d;
function c(e) {
    return e.includes('LEGITIMATE_ACTIVITY') ? 'LEGITIMATE_ACTIVITY' : e.includes('DM_SPAM') ? 'DM_SPAM' : e.includes('JOIN_RAID') ? 'JOIN_RAID' : 'OTHER';
}
t.d(n, {
    $l: function () {
        return i;
    },
    C2: function () {
        return r;
    },
    J$: function () {
        return c;
    },
    wR: function () {
        return a;
    },
    x2: function () {
        return l;
    }
}), t(689938), (u = l || (l = {})).BUG = 'BUG', u.ALLOWED = 'ALLOWED', u.MENTION_RAID_REMOVE_RESTRICTION = 'MENTION_RAID_REMOVE_RESTRICTION', (o = a || (a = {})).JOIN_RAID = 'JOIN_RAID', o.MENTION_RAID = 'MENTION_RAID', (s = i || (i = {})).LEGITIMATE_ACTIVITY = 'LEGITIMATE_ACTIVITY', s.LEGITIMATE_ACCOUNTS = 'LEGITIMATE_ACCOUNTS', s.LEGITIMATE_DMS = 'LEGITIMATE_DMS', s.DM_SPAM = 'DM_SPAM', s.JOIN_RAID = 'JOIN_RAID', s.OTHER = 'OTHER', (d = r || (r = {})).DM_SPAM = 'DM_SPAM', d.MENTION_SPAM = 'MENTION_SPAM', d.CHANNEL_SPAM = 'CHANNEL_SPAM', d.SUS_NEW_MEMBERS = 'SUS_NEW_MEMBERS', d.CHANGING_SETTINGS = 'CHANGING_SETTINGS', d.OTHER = 'OTHER';
