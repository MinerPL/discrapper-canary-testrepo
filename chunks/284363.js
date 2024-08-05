n.d(t, {
  Q: function() {
return i;
  },
  i: function() {
return s;
  }
});
var r, i, a = n(854218);

function s(e) {
  return e.staff ? 5 : e.verified && e.partnered ? 2 : e.verified ? 1 : e.partnered ? 0 : e.community && e.visibility === a.PZ.PUBLIC ? 4 : e.clan ? 6 : e.community ? 3 : 7;
}
(r = i || (i = {}))[r.PARTNERED = 0] = 'PARTNERED', r[r.VERIFIED = 1] = 'VERIFIED', r[r.VERIFIED_AND_PARTNERED = 2] = 'VERIFIED_AND_PARTNERED', r[r.COMMUNITY = 3] = 'COMMUNITY', r[r.DISCOVERABLE = 4] = 'DISCOVERABLE', r[r.STAFF = 5] = 'STAFF', r[r.CLAN = 6] = 'CLAN', r[r.NONE = 7] = 'NONE';