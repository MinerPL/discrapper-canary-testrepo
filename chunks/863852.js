"use strict";
t.r(n);
var e = t("261168"),
  a = {
    date: (0, e.default)({
      formats: {
        full: "EEEE, d MMMM y 'г.'",
        long: "d MMMM y 'г.'",
        medium: "d MMM y 'г.'",
        short: "dd.MM.y"
      },
      defaultWidth: "full"
    }),
    time: (0, e.default)({
      formats: {
        full: "H:mm:ss zzzz",
        long: "H:mm:ss z",
        medium: "H:mm:ss",
        short: "H:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, e.default)({
      formats: {
        any: "{{date}}, {{time}}"
      },
      defaultWidth: "any"
    })
  };
n.default = a