var r = n(73184),
  i = n(533206),
  a = Object.prototype,
  s = a.hasOwnProperty,
  o = a.propertyIsEnumerable,
  l = r(function() {
return arguments;
  }()) ? r : function(e) {
return i(e) && s.call(e, 'callee') && !o.call(e, 'callee');
  };
e.exports = l;