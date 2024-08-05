n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(544891),
  i = n(981631),
  a = n(689938);
class s extends r.sX {
  constructor(e, t) {
super(e, t, null != t ? a.Z.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
  statusPageURL: i.yXt.STATUS,
  details: ''.concat(t)
}) : a.Z.Messages.FORM_ERROR_GENERIC.format({
  statusPageURL: i.yXt.STATUS
}));
  }
}