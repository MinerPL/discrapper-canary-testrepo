"use strict";
n(47120);
t.Z = {
  makeMemoizer: function(e) {
    let t = new Map;
    return n => {
      let i = t.get(n);
      return void 0 === i && (i = e(n), t.set(n, i)), i
    }
  }
}