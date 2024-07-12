var o = e(757490),
  t = {
masculine: 'ostatni',
feminine: 'ostatnia'
  },
  a = {
masculine: 'ten',
feminine: 'ta'
  },
  r = {
masculine: 'następny',
feminine: 'następna'
  },
  u = {
0: 'feminine',
1: 'masculine',
2: 'masculine',
3: 'feminine',
4: 'masculine',
5: 'masculine',
6: 'feminine'
  };

function s(n, i, e, s) {
  if ((0, o.Z)(i, e, s))
d = a;
  else if ('lastWeek' === n)
d = t;
  else if ('nextWeek' === n)
d = r;
  else
throw Error('Cannot determine adjectives for token '.concat(n));
  var d, c = d[u[i.getUTCDay()]];
  return '\''.concat(c, '\' eeee \'o\' p');
}
var d = {
  lastWeek: s,
  yesterday: '\'wczoraj o\' p',
  today: '\'dzisiaj o\' p',
  tomorrow: '\'jutro o\' p',
  nextWeek: s,
  other: 'P'
};
i.Z = function(n, i, e, o) {
  var t = d[n];
  return 'function' == typeof t ? t(n, i, e, o) : t;
};