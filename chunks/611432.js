"use strict";
t.r(a);
var n = t("261168"),
  r = {
    date: (0, n.default)({
      formats: {
        full: "EEEE d MMMM y",
        long: "d MMMM y",
        medium: "d MMM y",
        short: "dd-MM-y"
      },
      defaultWidth: "full"
    }),
    time: (0, n.default)({
      formats: {
        full: "HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, n.default)({
      formats: {
        full: "{{date}} 'om' {{time}}",
        long: "{{date}} 'om' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  };
a.default = r