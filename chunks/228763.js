n.d(t, {
  d: function() {
return i;
  }
});
var r = n(149765);

function i(e) {
  if (null == e.guilds)
return e;
  return {
...e,
guilds: e.guilds.map(e => ({
  ...e,
  permissions: r.vB(e.permissions)
}))
  };
}