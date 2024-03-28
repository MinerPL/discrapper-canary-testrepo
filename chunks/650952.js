"use strict";
a.r(t);
var r = a("261168"),
  n = {
    date: (0, r.default)({
      formats: {
        full: "EEEE, dd MMMM yyyy",
        long: "dd MMMM yyyy",
        medium: "dd MMM yyyy",
        short: "dd/MM/yyyy"
      },
      defaultWidth: "full"
    }),
    time: (0, r.default)({
      formats: {
        full: "HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "H:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, r.default)({
      formats: {
        any: "{{date}} {{time}}"
      },
      defaultWidth: "any"
    })
  };
t.default = n