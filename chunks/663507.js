
function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
n.d(t, {
  DP: function() {
return a;
  },
  ZP: function() {
return l;
  },
  t$: function() {
return o;
  }
}), n(757143), n(724458), n(47120), n(653041), n(733860), n(411104);
let i = e => '__section__'.concat(e),
  a = e => '__section_header__'.concat(e),
  o = e => parseInt(e.replace(/^__section__/, ''), 10),
  s = () => 0;
class l {
  getPadding() {
return null != this.padding ? this.padding : this.itemGutter;
  }
  getPaddingVertical() {
return null != this.paddingVertical ? this.paddingVertical : this.getPadding();
  }
  getPaddingHorizontal() {
return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding();
  }
  getSectionGutter() {
return null != this.sectionGutter ? this.sectionGutter : this.itemGutter;
  }
  mergeProps(e) {
let {
  sections: t = this.sections,
  columns: n = this.columns,
  itemGutter: r = this.itemGutter,
  removeEdgeItemGutters: i = this.removeEdgeItemGutters,
  getItemKey: a = this.getItemKey,
  getItemHeight: o = this.getItemHeight,
  getSectionHeight: s = this.getSectionHeight,
  bufferWidth: l = this.bufferWidth,
  padding: u = this.padding,
  paddingVertical: c = this.paddingVertical,
  paddingHorizontal: d = this.paddingHorizontal,
  marginLeft: _ = this.marginLeft,
  sectionGutter: E = this.sectionGutter,
  dir: f = this.dir
} = e;
if (this.sections !== t || this.columns !== n || this.itemGutter !== r || this.removeEdgeItemGutters !== i || this.getItemKey !== a || this.getSectionHeight !== s || this.getItemHeight !== o || this.bufferWidth !== l || this.padding !== u || this.paddingVertical !== c || this.paddingHorizontal !== d || this.marginLeft !== _ || this.sectionGutter !== E || this.dir !== f)
  this.needsFullCompute = !0, this.sections = t, this.columns = n, this.itemGutter = r, this.getItemKey = a, this.getSectionHeight = s, this.getItemHeight = o, this.bufferWidth = l, this.padding = u, this.paddingVertical = c, this.paddingHorizontal = d, this.marginLeft = _, this.sectionGutter = E, this.dir = f;
  }
  computeFullCoords() {
var e, t, n;
if (!this.needsFullCompute)
  return;
let {
  columns: r,
  getItemKey: o,
  getItemHeight: s,
  itemGutter: l,
  getSectionHeight: u,
  bufferWidth: c,
  removeEdgeItemGutters: d
} = this, _ = 'rtl' === this.dir ? 'right' : 'left';
this.coordsMap = {}, this.gridData = {
  boundaries: [],
  coordinates: {}
}, this.currentRow = 0, this.lastColumnIndex = 0;
let E = this.getPaddingHorizontal(),
  f = this.getPaddingVertical(),
  h = null !== (e = this.marginLeft) && void 0 !== e ? e : 0;
this.columnHeights = Array(r).fill(f), this.columnWidth = (c - 2 * E - l * (r - 1) - (d ? l : 0)) / r, this.itemGrid = [];
let p = 0;
for (; p < this.sections.length;) {
  this.gridData.boundaries[p] = this.currentRow, this.currentRow = 0, this.lastColumnIndex = 0;
  let e = this.sections[p],
    c = 0,
    d = u(p),
    f = this.getMaxColumnHeight(this.columnHeights);
  p > 0 && (f = f - l + this.getSectionGutter());
  let m = d > 0 ? d + l : 0;
  for (let e = 0; e < this.columnHeights.length; e++)
    this.columnHeights[e] = f + m;
  for (; c < e;) {
    ;
    let e = o(p, c);
    if (null == e) {
      c++;
      continue;
    }
    let [r, i] = (n = this.columnHeights).reduce((e, t, n) => t < e[0] ? [
      t,
      n
    ] : e, [
      n[0],
      0
    ]);
    i < this.lastColumnIndex && this.currentRow++, this.lastColumnIndex = i;
    let a = s(p, c, this.columnWidth),
      u = {
        position: 'absolute',
        [_]: this.columnWidth * i + l * (i + 1) - l + E,
        width: this.columnWidth,
        top: r - f,
        height: a
      },
      d = {
        section: p,
        row: this.currentRow,
        column: i
      };
    this.coordsMap[e] = u, this.gridData.coordinates[e] = d, this.columnHeights[i] = r + a + l, this.itemGrid[i] = null !== (t = this.itemGrid[i]) && void 0 !== t ? t : [], this.itemGrid[i].push(e), c++;
  }
  d > 0 && (this.coordsMap[a(p)] = {
    position: 'sticky',
    [_]: E,
    width: this.columnWidth * r + l * r,
    top: 0,
    height: d
  }), this.coordsMap[i(p)] = {
    position: 'absolute',
    [_]: h,
    width: this.columnWidth * r + l * (r - 1) + 2 * E,
    top: f,
    height: this.getMaxColumnHeight(this.columnHeights) - f
  }, p++;
}
this.columnHeights = this.columnHeights.map(e => e - l + f), this.totalHeight = this.getMaxColumnHeight(), this.visibleSections = {}, this.needsFullCompute = !1;
  }
  computeVisibleSections(e, t) {
this.computeFullCoords();
let {
  getItemKey: n,
  coordsMap: r
} = this;
this.visibleSections = {};
let a = 0;
for (; a < this.sections.length;) {
  let o = this.sections[a],
    s = i(a),
    l = r[s];
  if (null == l) {
    a++;
    continue;
  }
  let {
    top: u
  } = l, c = u + l.height;
  if (u > t)
    break;
  if (c < e) {
    a++;
    continue;
  }
  let d = 0,
    _ = 1;
  for (c < t && c > e && (d = o - 1, _ = -1), this.visibleSections[s] = []; d >= 0 && d < o;) {
    let i = n(a, d),
      o = null != i ? r[i] : null;
    if (null == i || null == o) {
      d += _;
      continue;
    }
    let {
      top: l,
      height: c
    } = o;
    l + u > e - c && l + u < t && (-1 === _ ? this.visibleSections[s].unshift([
      i,
      a,
      d
    ]) : this.visibleSections[s].push([
      i,
      a,
      d
    ])), d += _;
  }
  if (u < e && c > t)
    break;
  a++;
}
  }
  getMaxColumnHeight() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
return e.reduce((e, t) => Math.max(e, t), 0);
  }
  getState() {
return {
  coordsMap: this.coordsMap,
  gridData: this.gridData,
  visibleSections: this.visibleSections,
  totalHeight: this.totalHeight
};
  }
  constructor() {
r(this, 'visibleSections', {}), r(this, 'gridData', {
  coordinates: {},
  boundaries: []
}), r(this, 'coordsMap', {}), r(this, 'columnHeights', []), r(this, 'columnWidth', 0), r(this, 'totalHeight', 0), r(this, 'itemGrid', []), r(this, 'currentRow', 0), r(this, 'lastColumnIndex', 0), r(this, 'needsFullCompute', !0), r(this, 'bufferWidth', 0), r(this, 'sections', []), r(this, 'columns', 0), r(this, 'itemGutter', 0), r(this, 'removeEdgeItemGutters', !1), r(this, 'sectionGutter', null), r(this, 'padding', null), r(this, 'paddingVertical', null), r(this, 'paddingHorizontal', null), r(this, 'marginLeft', null), r(this, 'dir', 'ltr'), r(this, 'getItemKey', () => {
  throw Error('MasonryListComputer: getItemKey has not been implemented');
}), r(this, 'getItemHeight', () => {
  throw Error('MasonryListComputer: getItemHeight has not been implemented');
}), r(this, 'getSectionHeight', s);
  }
}