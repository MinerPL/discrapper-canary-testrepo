"use strict";
t.r(a);
var i = t("261168"),
  n = {
    date: (0, i.default)({
      formats: {
        full: "EEEE, d 'de' MMMM 'de' y",
        long: "d 'de' MMMM 'de' y",
        medium: "d MMM y",
        short: "dd/MM/yyyy"
      },
      defaultWidth: "full"
    }),
    time: (0, i.default)({
      formats: {
        full: "HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, i.default)({
      formats: {
        full: "{{date}} '\xe0s' {{time}}",
        long: "{{date}} '\xe0s' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  };
a.default = n