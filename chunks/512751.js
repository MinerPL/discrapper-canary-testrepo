n.d(t, {
  o: function() {
return s;
  }
});
var i = n(399606),
  a = n(592125),
  l = n(587100);

function s(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getChannel(e)),
{
  enabled: n
} = l.Z.useExperiment({
  location: 'baec9c_1'
});
  return n && function(e) {
return null != e && (!!e.isMultiUserDM() || !!e.isDM() && !e.isSystemDM() && null == e.rawRecipients.find(e => e.bot));
  }(t);
}