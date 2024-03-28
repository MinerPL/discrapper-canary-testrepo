"use strict";
t.r(n);
var a = t("261168"),
  r = {
    date: (0, a.default)({
      formats: {
        full: "EEEE, d. MMMM yyyy",
        long: "d. MMMM yyyy",
        medium: "d. M. yyyy",
        short: "dd.MM.yyyy"
      },
      defaultWidth: "full"
    }),
    time: (0, a.default)({
      formats: {
        full: "H:mm:ss zzzz",
        long: "H:mm:ss z",
        medium: "H:mm:ss",
        short: "H:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, a.default)({
      formats: {
        full: "{{date}} 'v' {{time}}",
        long: "{{date}} 'v' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  };
n.default = r