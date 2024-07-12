var t = {
  lastWeek: function(e) {
var a = e.getUTCDay();
return '\'' + (0 === a || 6 === a ? 'último' : 'última') + '\' eeee \'às\' p';
  },
  yesterday: '\'ontem às\' p',
  today: '\'hoje às\' p',
  tomorrow: '\'amanhã às\' p',
  nextWeek: 'eeee \'às\' p',
  other: 'P'
};
a.Z = function(e, a, i, n) {
  var o = t[e];
  return 'function' == typeof o ? o(a) : o;
};