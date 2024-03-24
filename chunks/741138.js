"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
});
var l = a("491096"),
  n = a("782340");

function s() {
  return Object.freeze({
    [l.PollDurations.ONE_HOUR]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format({
      num: 1
    }),
    [l.PollDurations.FOUR_HOURS]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format({
      num: 4
    }),
    [l.PollDurations.EIGHT_HOURS]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format({
      num: 8
    }),
    [l.PollDurations.ONE_DAY]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_N_HOURS.format({
      num: 24
    }),
    [l.PollDurations.THREE_DAYS]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_3_DAYS,
    [l.PollDurations.SEVEN_DAYS]: n.default.Messages.CREATE_POLL_DURATION_OPTION_LABEL_7_DAYS
  })
}