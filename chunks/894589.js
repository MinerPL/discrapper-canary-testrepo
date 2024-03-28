"use strict";
a.r(t);
var i = {
  lastWeek: function(e) {
    if (6 === e.getUTCDay()) return "'το προηγούμενο' eeee 'στις' p";
    return "'την προηγούμενη' eeee 'στις' p"
  },
  yesterday: "'χθες στις' p",
  today: "'σήμερα στις' p",
  tomorrow: "'αύριο στις' p",
  nextWeek: "eeee 'στις' p",
  other: "P"
};
t.default = function(e, t) {
  var a = i[e];
  return "function" == typeof a ? a(t) : a
}