"use strict";
n.d(t, {
  Dw: function() {
    return c
  },
  I: function() {
    return a
  },
  UG: function() {
    return l
  },
  fv: function() {
    return d
  },
  jq: function() {
    return r
  }
});
var i, r, s = n(814391),
  o = n(689938);
let a = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  },
  l = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  };
(i = r || (r = {}))[i.JOINED_AT = 0] = "JOINED_AT", i[i.ACCOUNT_AGE = 1] = "ACCOUNT_AGE";
let u = () => ({
    seconds: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_SECONDS,
    minutes: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MINUTES,
    hours: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_HOURS,
    days: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_DAYS,
    months: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_MONTH,
    years: o.Z.Messages.MEMBERS_TABLE_JOINED_AT_TIMESTAMP_MORE_THAN_YEAR
  }),
  _ = () => ({
    hours: o.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_HOURS,
    days: o.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_DAYS,
    months: o.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_MONTH,
    years: o.Z.Messages.MEMBERS_TABLE_ACCOUNT_AGE_TIMESTAMP_MORE_THAN_YEAR
  }),
  d = (e, t) => {
    var n;
    let i = 0 === (n = t) ? u : 1 === n ? _ : void 0;
    return (0, s.Z)(e, i, !1)
  },
  c = e => (null != e ? new Date(e) : new Date).getTime()