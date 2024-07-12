n.d(t, {
  Dw: function() {
return _;
  },
  I: function() {
return s;
  },
  UG: function() {
return l;
  },
  fv: function() {
return d;
  },
  jq: function() {
return i;
  }
});
var r, i, a = n(814391),
  o = n(689938);
let s = {
month: 'short',
day: 'numeric',
year: 'numeric',
hour: 'numeric',
minute: '2-digit'
  },
  l = {
month: 'short',
day: 'numeric',
year: 'numeric',
hour: 'numeric',
minute: '2-digit'
  };
(r = i || (i = {}))[r.JOINED_AT = 0] = 'JOINED_AT', r[r.ACCOUNT_AGE = 1] = 'ACCOUNT_AGE';
let u = () => ({
seconds: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
minutes: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
hours: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
days: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
months: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
years: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
  }),
  c = () => ({
hours: o.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
days: o.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
months: o.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
years: o.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
  }),
  d = (e, t) => {
var n;
let r = 0 === (n = t) ? u : 1 === n ? c : void 0;
return (0, a.Z)(e, r, !1);
  },
  _ = e => (null != e ? new Date(e) : new Date()).getTime();