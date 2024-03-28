"use strict";
e.a(n, async function(r, i) {
  try {
    e.r(t), e.d(t, {
      __wbindgen_rethrow: function() {
        return d
      },
      __wbindgen_string_new: function() {
        return f
      },
      crop_gif: function() {
        return _
      }
    }), e("518263"), e("970173"), e("520712"), e("268111"), e("941497"), e("32026"), e("480839"), e("744285"), e("492257"), e("873817"), e("653041"), e("747282");
    var u = e("612580");
    n = e.hmd(n);
    var c = r([u]);
    [u] = c.then ? (await c)() : c;
    let l = new("undefined" == typeof TextDecoder ? (0, n.require)("util").TextDecoder : TextDecoder)("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    l.decode();
    let s = null;

    function a() {
      return (null === s || s.buffer !== u.memory.buffer) && (s = new Uint8Array(u.memory.buffer)), s
    }
    let w = Array(32).fill(void 0);
    w.push(void 0, null, !0, !1);
    let h = w.length,
      b = 0,
      g = null;

    function o() {
      return (null === g || g.buffer !== u.memory.buffer) && (g = new Int32Array(u.memory.buffer)), g
    }

    function _(n, t, e, r, i) {
      try {
        let h = u.__wbindgen_add_to_stack_pointer(-16);
        var c, _, f = function(n, t) {
            let e = t(1 * n.length);
            return a().set(n, e / 1), b = n.length, e
          }(n, u.__wbindgen_malloc),
          d = b;
        u.crop_gif(h, f, d, t, e, r, i);
        var l = o()[h / 4 + 0],
          s = o()[h / 4 + 1];
        var w = (c = l, _ = s, a().subarray(c / 1, c / 1 + _)).slice();
        return u.__wbindgen_free(l, 1 * s), w
      } finally {
        u.__wbindgen_add_to_stack_pointer(16)
      }
    }

    function f(n, t) {
      var e, r, i = (e = n, r = t, l.decode(a().subarray(e, e + r)));
      return function(n) {
        h === w.length && w.push(w.length + 1);
        let t = h;
        return h = w[t], w[t] = n, t
      }(i)
    }

    function d(n) {
      throw function(n) {
        var t;
        let e = w[n];
        return (t = n) < 36 || (w[t] = h, h = t), e
      }(n)
    }
    i()
  } catch (n) {
    i(n)
  }
})