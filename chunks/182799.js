"use strict";
a.r(t);
var n = {
  lastWeek: "'i' EEEE's kl.' p",
  yesterday: "'ig\xe5r kl.' p",
  today: "'idag kl.' p",
  tomorrow: "'imorgon kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: "P"
};
t.default = function(e, t, a, r) {
  return n[e]
}