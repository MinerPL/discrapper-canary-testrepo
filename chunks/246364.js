var r, i, a, o, s, l, u, c;
n.d(t, {
  J: function() {
return E;
  },
  Nw: function() {
return a;
  },
  QJ: function() {
return r;
  },
  hW: function() {
return _;
  },
  tB: function() {
return d;
  },
  wB: function() {
return o;
  }
});
let d = 25,
  _ = 4;

function E(e) {
  return null != e && 'TERMS' === e.field_type;
}
(s = r || (r = {})).TERMS = 'TERMS', s.TEXT_INPUT = 'TEXT_INPUT', s.PARAGRAPH = 'PARAGRAPH', s.MULTIPLE_CHOICE = 'MULTIPLE_CHOICE', s.VERIFICATION = 'VERIFICATION', (l = i || (i = {})).EMAIL = 'email', l.PHONE = 'phone', (u = a || (a = {})).TIMESTAMP_DESC = 'NEWEST', u.TIMESTAMP_ASC = 'OLDEST', (c = o || (o = {})).STARTED = 'STARTED', c.SUBMITTED = 'SUBMITTED', c.REJECTED = 'REJECTED', c.APPROVED = 'APPROVED';