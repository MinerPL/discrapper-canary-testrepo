"use strict";
e.r(t);
var i = e("261168"),
  u = {
    date: (0, i.default)({
      formats: {
        full: "eeee d. MMMM y",
        long: "d. MMMM y",
        medium: "d. MMM y",
        short: "d.M.y"
      },
      defaultWidth: "full"
    }),
    time: (0, i.default)({
      formats: {
        full: "HH.mm.ss zzzz",
        long: "HH.mm.ss z",
        medium: "HH.mm.ss",
        short: "HH.mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, i.default)({
      formats: {
        full: "{{date}} 'klo' {{time}}",
        long: "{{date}} 'klo' {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}"
      },
      defaultWidth: "full"
    })
  };
t.default = u