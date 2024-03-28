"use strict";
n.r(t), n.d(t, {
  getRecipients: function() {
    return i
  }
}), n("733860");
var a = n("392711"),
  l = n.n(a),
  s = n("823379");

function i(e, t) {
  return l()(e).map(t.getUser).unshift(t.getCurrentUser()).filter(s.isNotNullish).sortBy(e => e.username.toLowerCase()).value()
}