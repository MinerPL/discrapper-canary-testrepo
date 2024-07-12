i.d(n, {
  Z: function() {
return t;
  }
});

function t(e) {
  if (null != e.title && null != e.filename) {
let n = e.filename.lastIndexOf('.'),
  i = n > 0 ? e.filename.substr(n) : '';
return e.title + i;
  }
  return e.filename;
}