"use strict";
a.r(t);
var n = {
    lessThanXSeconds: {
      one: "mindre \xe4n en sekund",
      other: "mindre \xe4n {{count}} sekunder"
    },
    xSeconds: {
      one: "en sekund",
      other: "{{count}} sekunder"
    },
    halfAMinute: "en halv minut",
    lessThanXMinutes: {
      one: "mindre \xe4n en minut",
      other: "mindre \xe4n {{count}} minuter"
    },
    xMinutes: {
      one: "en minut",
      other: "{{count}} minuter"
    },
    aboutXHours: {
      one: "ungef\xe4r en timme",
      other: "ungef\xe4r {{count}} timmar"
    },
    xHours: {
      one: "en timme",
      other: "{{count}} timmar"
    },
    xDays: {
      one: "en dag",
      other: "{{count}} dagar"
    },
    aboutXWeeks: {
      one: "ungef\xe4r en vecka",
      other: "ungef\xe4r {{count}} vecka"
    },
    xWeeks: {
      one: "en vecka",
      other: "{{count}} vecka"
    },
    aboutXMonths: {
      one: "ungef\xe4r en m\xe5nad",
      other: "ungef\xe4r {{count}} m\xe5nader"
    },
    xMonths: {
      one: "en m\xe5nad",
      other: "{{count}} m\xe5nader"
    },
    aboutXYears: {
      one: "ungef\xe4r ett \xe5r",
      other: "ungef\xe4r {{count}} \xe5r"
    },
    xYears: {
      one: "ett \xe5r",
      other: "{{count}} \xe5r"
    },
    overXYears: {
      one: "\xf6ver ett \xe5r",
      other: "\xf6ver {{count}} \xe5r"
    },
    almostXYears: {
      one: "n\xe4stan ett \xe5r",
      other: "n\xe4stan {{count}} \xe5r"
    }
  },
  r = ["noll", "en", "tv\xe5", "tre", "fyra", "fem", "sex", "sju", "\xe5tta", "nio", "tio", "elva", "tolv"];
t.default = function(e, t, a) {
  var i, d = n[e];
  if (i = "string" == typeof d ? d : 1 === t ? d.one : a && a.onlyNumeric ? d.other.replace("{{count}}", String(t)) : d.other.replace("{{count}}", t < 13 ? r[t] : String(t)), null != a && a.addSuffix) return a.comparison && a.comparison > 0 ? "om " + i : i + " sedan";
  return i
}