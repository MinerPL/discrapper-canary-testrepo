"use strict";
n.r(t), n.d(t, {
  getBenefitKey: function() {
    return l
  },
  formatPlanInterval: function() {
    return a
  },
  formatPlanIntervalDuration: function() {
    return u
  },
  isChannelBenefit: function() {
    return o
  },
  isIntangibleBenefit: function() {
    return c
  }
});
var i = n("677795"),
  s = n("646718"),
  r = n("782340");

function l(e) {
  return "roles" in e ? "emoji-".concat(e.id) : "".concat(e.ref_type, "-").concat(e.emoji_id, "-").concat(e.name, "-").concat(e.ref_id)
}

function a(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  return (function(e) {
    switch (e) {
      case s.SubscriptionIntervalTypes.DAY:
        return r.default.Messages.DAY;
      case s.SubscriptionIntervalTypes.MONTH:
        return r.default.Messages.MONTH;
      case s.SubscriptionIntervalTypes.YEAR:
        return r.default.Messages.YEAR
    }
  })(t).format({
    count: n
  })
}

function u(e) {
  let {
    interval: t,
    interval_count: n
  } = e;
  switch (t) {
    case s.SubscriptionIntervalTypes.DAY:
      if (n > 0 && n % 7 == 0) return r.default.Messages.DURATION_WEEKS_CAPITALIZE.format({
        weeks: n / 7
      });
      return r.default.Messages.DURATION_DAYS_CAPITALIZE.format({
        days: n
      });
    case s.SubscriptionIntervalTypes.MONTH:
      return r.default.Messages.DURATION_MONTHS_CAPITALIZE.format({
        months: n
      });
    case s.SubscriptionIntervalTypes.YEAR:
      return r.default.Messages.DURATION_YEARS_CAPITALIZE.format({
        years: n
      })
  }
}

function o(e) {
  return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.CHANNEL
}

function c(e) {
  return e.ref_type === i.GuildRoleSubscriptionBenefitTypes.INTANGIBLE
}