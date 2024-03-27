"use strict";
r("424973"), t.exports.parse = function(t) {
  var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
  if (!n) return null;
  n.shift();
  var r = null,
    e = [];
  n[2] && (r = (s = n[2].split("-")).shift(), e = s);
  var i = [];
  n[5] && (i = n[5].split("-")).shift();
  var a = [];
  if (n[6]) {
    (s = n[6].split("-")).shift();
    for (var s, o, u = []; s.length;) {
      var l = s.shift();
      1 === l.length ? o ? (a.push({
        singleton: o,
        extension: u
      }), o = l, u = []) : o = l : u.push(l)
    }
    a.push({
      singleton: o,
      extension: u
    })
  }
  var c = [];
  n[7] && ((c = n[7].split("-")).shift(), c.shift());
  var f = [];
  return n[8] && (f = n[8].split("-")).shift(), {
    langtag: {
      language: {
        language: r,
        extlang: e
      },
      script: n[3] || null,
      region: n[4] || null,
      variant: i,
      extension: a,
      privateuse: c
    },
    privateuse: f,
    grandfathered: {
      irregular: n[0] || null,
      regular: n[1] || null
    }
  }
}