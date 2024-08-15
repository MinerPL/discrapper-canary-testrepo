var r, i, a, s, o, l, u, c;
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
return s;
  }
});
let d = 25,
  _ = 4;

function E(e) {
  return null != e && 'TERMS' === e.field_type;
}
(o = r || (r = {})).TERMS = 'TERMS', o.TEXT_INPUT = 'TEXT_INPUT', o.PARAGRAPH = 'PARAGRAPH', o.MULTIPLE_CHOICE = 'MULTIPLE_CHOICE', o.VERIFICATION = 'VERIFICATION', (l = i || (i = {})).EMAIL = 'email', l.PHONE = 'phone', (u = a || (a = {})).TIMESTAMP_DESC = 'NEWEST', u.TIMESTAMP_ASC = 'OLDEST', (c = s || (s = {})).STARTED = 'STARTED', c.SUBMITTED = 'SUBMITTED', c.REJECTED = 'REJECTED', c.APPROVED = 'APPROVED';