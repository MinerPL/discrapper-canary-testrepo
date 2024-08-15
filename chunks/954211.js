r.d(t, {
  V: function() {
return a;
  }
});
let n = [
  'fatal',
  'error',
  'warning',
  'log',
  'info',
  'debug'
];

function a(e) {
  return 'warn' === e ? 'warning' : n.includes(e) ? e : 'log';
}