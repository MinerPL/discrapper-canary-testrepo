"use strict";
a.r(t);
var n = {
  lastWeek: "'forrige' eeee 'kl.' p",
  yesterday: "'i g\xe5r kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: "P"
};
t.default = function(e, t, a, r) {
  return n[e]
}