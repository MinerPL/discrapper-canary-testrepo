"use strict";
n.d(t, {
  Cl: function() {
    return E
  },
  GN: function() {
    return I
  },
  L9: function() {
    return l
  },
  UK: function() {
    return r
  },
  av: function() {
    return c
  },
  cu: function() {
    return _
  },
  hL: function() {
    return d
  },
  tr: function() {
    return u
  }
});
var i, r, s = n(63063),
  o = n(981631),
  a = n(689938);

function l(e) {
  switch (e) {
    case 60:
      return a.Z.Messages.DURATION_SECS.format({
        secs: 60
      });
    case 300:
      return a.Z.Messages.DURATION_MINS.format({
        mins: 5
      });
    case 600:
      return a.Z.Messages.DURATION_MINS.format({
        mins: 10
      });
    case 3600:
      return a.Z.Messages.DURATION_HOURS.format({
        hours: 1
      });
    case 86400:
      return a.Z.Messages.DURATION_DAYS.format({
        days: 1
      });
    case 604800:
      return a.Z.Messages.DURATION_WEEKS.format({
        weeks: 1
      });
    default:
      return
  }
}(i = r || (r = {}))[i.DURATION_60_SEC = 60] = "DURATION_60_SEC", i[i.DURATION_5_MIN = 300] = "DURATION_5_MIN", i[i.DURATION_10_MIN = 600] = "DURATION_10_MIN", i[i.DURATION_1_HOUR = 3600] = "DURATION_1_HOUR", i[i.DURATION_1_DAY = 86400] = "DURATION_1_DAY", i[i.DURATION_1_WEEK = 604800] = "DURATION_1_WEEK";
let u = () => Object.keys(r).filter(e => isNaN(Number(e))).map(e => {
    var t;
    return {
      label: null !== (t = l(r[e])) && void 0 !== t ? t : "",
      value: r[e]
    }
  }),
  _ = s.Z.getArticleURL(o.BhN.DISABLE_GUILD_COMMUNICATION),
  d = "GuildCommunicationDisabledDismissedGuilds",
  c = "Set Communication Disabled Modal",
  E = "Clear Communication Disabled Modal",
  I = 512