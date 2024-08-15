var n = {
lastWeek: '\'el\' eeee \'pasado a la\' p',
yesterday: '\'ayer a la\' p',
today: '\'hoy a la\' p',
tomorrow: '\'mañana a la\' p',
nextWeek: 'eeee \'a la\' p',
other: 'P'
  },
  t = {
lastWeek: '\'el\' eeee \'pasado a las\' p',
yesterday: '\'ayer a las\' p',
today: '\'hoy a las\' p',
tomorrow: '\'mañana a las\' p',
nextWeek: 'eeee \'a las\' p',
other: 'P'
  };
a.Z = function(e, a, o, i) {
  return 1 !== a.getUTCHours() ? t[e] : n[e];
};