s.d(t, {
  HV: function() {
return d;
  },
  Tp: function() {
return c;
  },
  Xv: function() {
return l;
  }
}), s(724458);
var n = s(392711),
  a = s(423891),
  i = s.n(a);
let r = e => i().decode(e),
  o = e => e.frames.reduce((e, t) => e + t.delay, 0),
  l = async (e, t, s, n) => ({
src: e,
base64: t,
loop: !1,
loopDelay: 0,
duration: o(r(await s.arrayBuffer())),
start: 0,
position: {
  x: 0,
  y: 0
},
zIndex: 100 + n,
height: 880,
width: 450,
name: s.name
  }), c = e => {
let t = (0, n.cloneDeep)(e),
  s = Math.floor(101 * Math.random()) + 150;
return t.forEach(e => {
  e.duration -= s;
}), t;
  }, d = function(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'json',
  s = '\n[';
return 'json' === t && e.forEach((e, t) => {
  s += '\n              {\n                  "src": "file-'.concat(t, '.png",\n                  "start": ').concat(e.start, ',\n                  "duration": ').concat(e.duration, ',\n                  "height": ').concat(e.height, ',\n                  "width": ').concat(e.width, ',\n                  "zIndex": ').concat(e.zIndex, ',\n                  "loop": ').concat(e.loop, ',\n                  "loop_delay": ').concat(e.loopDelay, '\n              },\n          ');
}), 'proto' === t && e.forEach((e, t) => {
  s += '\n              ProfileEffectKeyFrame(\n                  src=\'file-'.concat(t, '.png\',\n                  loop=').concat(e.loop, ',\n                  width=').concat(e.width, ',\n                  height=').concat(e.height, ',\n                  duration=').concat(e.duration, ',\n                  start=').concat(e.start, ',\n                  loop_delay=').concat(e.loopDelay, ',\n                  position=Point(x=0, y=0),\n                  z_index=').concat(e.zIndex, ',\n              ),\n          ');
}), s += '\n]';
  };