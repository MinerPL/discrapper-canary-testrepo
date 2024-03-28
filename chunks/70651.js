"use strict";
t.r(n);
var a = ["neděli", "ponděl\xed", "\xfater\xfd", "středu", "čtvrtek", "p\xe1tek", "sobotu"],
  r = {
    lastWeek: "'posledn\xed' eeee 've' p",
    yesterday: "'včera v' p",
    today: "'dnes v' p",
    tomorrow: "'z\xedtra v' p",
    nextWeek: function(e) {
      return "'v " + a[e.getUTCDay()] + " o' p"
    },
    other: "P"
  };
n.default = function(e, n) {
  var t = r[e];
  return "function" == typeof t ? t(n) : t
}