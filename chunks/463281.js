"use strict";
t.a(n, async function(r, i) {
  try {
    t.r(e), t.d(e, {
      __wbindgen_rethrow: function() {
        return d
      },
      __wbindgen_string_new: function() {
        return f
      },
      crop_gif: function() {
        return o
      }
    });
    var u = t("612580");
    n = t.hmd(n);
    var a = r([u]);
    [u] = a.then ? (await a)() : a;
    let l = new("undefined" == typeof TextDecoder ? (0, n.require)("util").TextDecoder : TextDecoder)("utf-8", {
      ignoreBOM: !0,
      fatal: !0
    });
    l.decode();
    let s = null;

    function c() {
      return (null === s || s.buffer !== u.memory.buffer) && (s = new Uint8Array(u.memory.buffer)), s
    }
    let w = Array(32).fill(void 0);
    w.push(void 0, null, !0, !1);
    let h = w.length,
      b = 0,
      g = null;

    function _() {
      return (null === g || g.buffer !== u.memory.buffer) && (g = new Int32Array(u.memory.buffer)), g
    }

    function o(n, e, t, r, i) {
      try {
        let h = u.__wbindgen_add_to_stack_pointer(-16);
        var a, o, f = function(n, e) {
            let t = e(1 * n.length);
            return c().set(n, t / 1), b = n.length, t
          }(n, u.__wbindgen_malloc),
          d = b;
        u.crop_gif(h, f, d, e, t, r, i);
        var l = _()[h / 4 + 0],
          s = _()[h / 4 + 1];
        var w = (a = l, o = s, c().subarray(a / 1, a / 1 + o)).slice();
        return u.__wbindgen_free(l, 1 * s), w
      } finally {
        u.__wbindgen_add_to_stack_pointer(16)
      }
    }

    function f(n, e) {
      var t, r, i = (t = n, r = e, l.decode(c().subarray(t, t + r)));
      return function(n) {
        h === w.length && w.push(w.length + 1);
        let e = h;
        return h = w[e], w[e] = n, e
      }(i)
    }

    function d(n) {
      throw function(n) {
        var e;
        let t = w[n];
        return (e = n) < 36 || (w[e] = h, h = e), t
      }(n)
    }
    i()
  } catch (n) {
    i(n)
  }
})