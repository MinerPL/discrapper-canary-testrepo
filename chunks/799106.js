"use strict";
a.r(t);
var n = a("261168"),
  r = {
    date: (0, n.default)({
      formats: {
        full: "y년 M월 d일 EEEE",
        long: "y년 M월 d일",
        medium: "y.MM.dd",
        short: "y.MM.dd"
      },
      defaultWidth: "full"
    }),
    time: (0, n.default)({
      formats: {
        full: "a H시 mm분 ss초 zzzz",
        long: "a H:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
      },
      defaultWidth: "full"
    }),
    dateTime: (0, n.default)({
      formats: {
        full: "{{date}} {{time}}",
        long: "{{date}} {{time}}",
        medium: "{{date}} {{time}}",
        short: "{{date}} {{time}}"
      },
      defaultWidth: "full"
    })
  };
t.default = r