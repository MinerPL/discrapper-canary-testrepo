n.d(t, {
  WD: function() {
return l;
  },
  nt: function() {
return s;
  }
});
var r = n(404759),
  i = n.n(r);
n(913527);
var a = n(124368),
  o = n(689938);

function s() {
  return [{
  label: o.Z.Messages.AUTO_ARCHIVE_DURATION_1_HOUR,
  value: 60
},
{
  label: o.Z.Messages.AUTO_ARCHIVE_DURATION_24_HOURS,
  value: 1440
},
{
  label: o.Z.Messages.AUTO_ARCHIVE_DURATION_3_DAYS,
  value: 4320
},
{
  label: o.Z.Messages.AUTO_ARCHIVE_DURATION_1_WEEK,
  value: 10080
}
  ];
}

function l(e, t) {
  var n;
  return null !== (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) && void 0 !== n ? n : a.AX;
}
i()(() => s().map(e => e.value));