"use strict";
a.r(t);
var i = a("261168"),
  n = {
    date: (0, i.default)({
      formats: {
        full: "วันEEEEที่ do MMMM y",
        long: "do MMMM y",
        medium: "d MMM y",
        short: "dd/MM/yyyy"
      },
      defaultWidth: "full"
    }),
    time: (0, i.default)({
      formats: {
        full: "H:mm:ss น. zzzz",
        long: "H:mm:ss น. z",
        medium: "H:mm:ss น.",
        short: "H:mm น."
      },
      defaultWidth: "medium"
    }),
    dateTime: (0, i.default)({
      formats: {
        full: "{{date}} 'เวลา' {{time}}",
        long: "{{date}} 'เวลา' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
      },
      defaultWidth: "full"
    })
  };
t.default = n