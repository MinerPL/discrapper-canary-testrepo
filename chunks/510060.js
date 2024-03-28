"use strict";
a.r(t), a.d(t, {
  ForumListLayoutRenderOptions: function() {
    return d
  },
  GRID_POST_CONTROLS_MARGIN: function() {
    return i
  },
  GridLayout: function() {
    return o
  },
  IMAGE_PADDING: function() {
    return c
  },
  getFrameDimensions: function() {
    return u
  },
  getGridPostHeight: function() {
    return m
  }
});
var s = a("512722"),
  n = a.n(s);

function l(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let r = 2 / 3,
  i = 12;
class o {
  getWidth(e) {
    return this.getRenderOptions(e).columnWidth
  }
  getRenderOptions(e) {
    if (e <= this.minWidth) return {
      columns: 1,
      columnWidth: this.minWidth
    };
    let t = e / this.maxWidth,
      a = Math.max(Math.floor(t + (e / this.minWidth - t) / 2), 1),
      s = this.gap * (a - 1);
    return {
      columns: a,
      columnWidth: (e - s) / a
    }
  }
  constructor({
    minWidth: e,
    maxWidth: t,
    gap: a
  }) {
    l(this, "minWidth", void 0), l(this, "maxWidth", void 0), l(this, "gap", void 0), n()(e < t, "minWidth needs to be smaller than maxWidth"), this.minWidth = e, this.maxWidth = t, this.gap = a
  }
}
let d = {
    columns: 1,
    columnWidth: 450
  },
  u = e => {
    let t = e - 2;
    return [t, Math.ceil(t * r)]
  },
  c = 12,
  m = e => 60 + u(e - 2 * c)[1] + 24 + 3 * i