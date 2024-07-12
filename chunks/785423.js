var n = /\s/;
t.Z = function(e) {
  for (var t = e.length; t-- && n.test(e.charAt(t)););
  return t;
};