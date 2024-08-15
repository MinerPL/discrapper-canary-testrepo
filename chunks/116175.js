var r, i;
n.d(t, {
  ME: function() {
return u;
  },
  Nh: function() {
return s;
  },
  ZD: function() {
return r;
  },
  lP: function() {
return c;
  },
  sg: function() {
return a;
  },
  vY: function() {
return o;
  },
  yf: function() {
return l;
  }
}), (i = r || (r = {}))[i.SWORD = 0] = 'SWORD', i[i.WATER_DROP = 1] = 'WATER_DROP', i[i.SKULL = 2] = 'SKULL', i[i.TOADSTOOL = 3] = 'TOADSTOOL', i[i.MOON = 4] = 'MOON', i[i.LIGHTNING = 5] = 'LIGHTNING', i[i.LEAF = 6] = 'LEAF', i[i.HEART = 7] = 'HEART', i[i.FIRE = 8] = 'FIRE', i[i.COMPASS = 9] = 'COMPASS', i[i.CROSSHAIRS = 10] = 'CROSSHAIRS', i[i.FLOWER = 11] = 'FLOWER', i[i.FORCE = 12] = 'FORCE', i[i.GEM = 13] = 'GEM', i[i.LAVA = 14] = 'LAVA', i[i.PSYCHIC = 15] = 'PSYCHIC', i[i.SMOKE = 16] = 'SMOKE', i[i.SNOW = 17] = 'SNOW', i[i.SOUND = 18] = 'SOUND', i[i.SUN = 19] = 'SUN', i[i.WIND = 20] = 'WIND';
let a = [{
  primary: '#ff1c90',
  secondary: '#ff7fc0'
},
{
  primary: '#ff8f1c',
  secondary: '#ffae77'
},
{
  primary: '#eebe1a',
  secondary: '#fffc7f'
},
{
  primary: '#32a070',
  secondary: '#57b59e'
},
{
  primary: '#32839a',
  secondary: '#71c2d9'
},
{
  primary: '#8a43ff',
  secondary: '#bd95ff'
},
{
  primary: '#9b3fe5',
  secondary: '#cc8dff'
},
{
  primary: '#942e8f',
  secondary: '#d46cb5'
},
{
  primary: '#d14242',
  secondary: '#ff8989'
},
{
  primary: '#814300',
  secondary: '#a88a6c'
},
{
  primary: '#717224',
  secondary: '#c3c3c3'
},
{
  primary: '#5d1d47',
  secondary: '#c58fbb'
},
{
  primary: '#222222',
  secondary: '#cccccc'
}
  ],
  s = a[0].primary,
  o = a[0].secondary;

function l() {
  return a[Math.floor(Math.random() * a.length)];
}
let u = {
  0: 2,
  1: 1,
  2: 1,
  3: 2,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 2,
  10: 2,
  11: 2,
  12: 2,
  13: 2,
  14: 2,
  15: 2,
  16: 2,
  17: 2,
  18: 2,
  19: 2,
  20: 2
};

function c() {
  let e = Object.keys(r).filter(e => isNaN(Number(e)));
  return r[e[Math.floor(Math.random() * e.length)]];
}