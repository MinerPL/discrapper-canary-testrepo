"use strict";
t.r(e);
var i = t("261168"),
  n = {
    date: (0, i.default)({
      formats: {
        full: "d MMMM y EEEE",
        long: "d MMMM y",
        medium: "d MMM y",
        short: "dd.MM.yyyy"
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
        full: "{{date}} 'saat' {{time}}",
        long: "{{date}} 'saat' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  };
e.default = n