var a = {
  lastWeek: function(e) {
if (6 === e.getUTCDay())
  return '\'το προηγούμενο\' eeee \'στις\' p';
return '\'την προηγούμενη\' eeee \'στις\' p';
  },
  yesterday: '\'χθες στις\' p',
  today: '\'σήμερα στις\' p',
  tomorrow: '\'αύριο στις\' p',
  nextWeek: 'eeee \'στις\' p',
  other: 'P'
};
t.Z = function(e, t) {
  var i = a[e];
  return 'function' == typeof i ? i(t) : i;
};