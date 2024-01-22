"use strict";
s.r(t), s.d(t, {
  GRID_POST_CONTROLS_MARGIN: function() {
    return r
  },
  GridLayout: function() {
    return i
  },
  ForumListLayoutRenderOptions: function() {
    return o
  },
  getFrameDimensions: function() {
    return u
  },
  IMAGE_PADDING: function() {
    return d
  },
  getGridPostHeight: function() {
    return c
  }
});
var a = s("627445"),
  n = s.n(a);
let l = 2 / 3,
  r = 12;
class i {
  getWidth(e) {
    return this.getRenderOptions(e).columnWidth
  }
  getRenderOptions(e) {
    if (e <= this.minWidth) return {
      columns: 1,
      columnWidth: this.minWidth
    };
    let t = e / this.maxWidth,
      s = e / this.minWidth,
      a = Math.max(Math.floor(t + (s - t) / 2), 1),
      n = this.gap * (a - 1);
    return {
      columns: a,
      columnWidth: (e - n) / a
    }
  }
  constructor({
    minWidth: e,
    maxWidth: t,
    gap: s
  }) {
    n(e < t, "minWidth needs to be smaller than maxWidth"), this.minWidth = e, this.maxWidth = t, this.gap = s
  }
}
let o = {
    columns: 1,
    columnWidth: 450
  },
  u = e => {
    let t = e - 2;
    return [t, Math.ceil(t * l)]
  },
  d = 12,
  c = e => 60 + u(e - 2 * d)[1] + 24 + 3 * r