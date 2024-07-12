var n = r(475227),
  _ = r(389109),
  a = Object.prototype,
  i = a.hasOwnProperty,
  o = a.propertyIsEnumerable,
  E = n(function() {
return arguments;
  }()) ? n : function(t) {
return _(t) && i.call(t, 'callee') && !o.call(t, 'callee');
  };
t.exports = E;