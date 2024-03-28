"use strict";
a.r(t);
var n = a("261168"),
  i = {
    date: (0, n.default)({
      formats: {
        full: "EEEE, do MMMM, y",
        long: "do MMMM, y",
        medium: "d MMM, y",
        short: "dd/MM/yyyy"
      },
      defaultWidth: "full"
    }),
    time: (0, n.default)({
      formats: {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, n.default)({
      formats: {
        full: "{{date}} 'को' {{time}}",
        long: "{{date}} 'को' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  };
t.default = i