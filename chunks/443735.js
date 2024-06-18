var n = e(475227),
  o = e(389109),
  i = Object.prototype,
  a = i.hasOwnProperty,
  u = i.propertyIsEnumerable,
  f = n(function() {
    return arguments
  }()) ? n : function(t) {
    return o(t) && a.call(t, "callee") && !u.call(t, "callee")
  };
t.exports = f