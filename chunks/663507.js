"use strict";

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n.d(t, {
  DP: function() {
    return s
  },
  ZP: function() {
    return l
  },
  t$: function() {
    return o
  }
}), n(757143), n(724458), n(47120), n(653041), n(733860), n(411104);
let r = e => "__section__".concat(e),
  s = e => "__section_header__".concat(e),
  o = e => parseInt(e.replace(/^__section__/, ""), 10),
  a = () => 0;
class l {
  getPadding() {
    return null != this.padding ? this.padding : this.itemGutter
  }
  getPaddingVertical() {
    return null != this.paddingVertical ? this.paddingVertical : this.getPadding()
  }
  getPaddingHorizontal() {
    return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding()
  }
  getSectionGutter() {
    return null != this.sectionGutter ? this.sectionGutter : this.itemGutter
  }
  mergeProps(e) {
    let {
      sections: t = this.sections,
      columns: n = this.columns,
      itemGutter: i = this.itemGutter,
      removeEdgeItemGutters: r = this.removeEdgeItemGutters,
      getItemKey: s = this.getItemKey,
      getItemHeight: o = this.getItemHeight,
      getSectionHeight: a = this.getSectionHeight,
      bufferWidth: l = this.bufferWidth,
      padding: u = this.padding,
      paddingVertical: _ = this.paddingVertical,
      paddingHorizontal: d = this.paddingHorizontal,
      marginLeft: c = this.marginLeft,
      sectionGutter: E = this.sectionGutter,
      dir: I = this.dir
    } = e;
    if (this.sections !== t || this.columns !== n || this.itemGutter !== i || this.removeEdgeItemGutters !== r || this.getItemKey !== s || this.getSectionHeight !== a || this.getItemHeight !== o || this.bufferWidth !== l || this.padding !== u || this.paddingVertical !== _ || this.paddingHorizontal !== d || this.marginLeft !== c || this.sectionGutter !== E || this.dir !== I) this.needsFullCompute = !0, this.sections = t, this.columns = n, this.itemGutter = i, this.getItemKey = s, this.getSectionHeight = a, this.getItemHeight = o, this.bufferWidth = l, this.padding = u, this.paddingVertical = _, this.paddingHorizontal = d, this.marginLeft = c, this.sectionGutter = E, this.dir = I
  }
  computeFullCoords() {
    var e, t, n;
    if (!this.needsFullCompute) return;
    let {
      columns: i,
      getItemKey: o,
      getItemHeight: a,
      itemGutter: l,
      getSectionHeight: u,
      bufferWidth: _,
      removeEdgeItemGutters: d
    } = this, c = "rtl" === this.dir ? "right" : "left";
    this.coordsMap = {}, this.gridData = {
      boundaries: [],
      coordinates: {}
    }, this.currentRow = 0, this.lastColumnIndex = 0;
    let E = this.getPaddingHorizontal(),
      I = this.getPaddingVertical(),
      T = null !== (e = this.marginLeft) && void 0 !== e ? e : 0;
    this.columnHeights = Array(i).fill(I), this.columnWidth = (_ - 2 * E - l * (i - 1) - (d ? l : 0)) / i, this.itemGrid = [];
    let h = 0;
    for (; h < this.sections.length;) {
      this.gridData.boundaries[h] = this.currentRow, this.currentRow = 0, this.lastColumnIndex = 0;
      let e = this.sections[h],
        _ = 0,
        d = u(h),
        I = this.getMaxColumnHeight(this.columnHeights);
      h > 0 && (I = I - l + this.getSectionGutter());
      let S = d > 0 ? d + l : 0;
      for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = I + S;
      for (; _ < e;) {
        ;
        let e = o(h, _);
        if (null == e) {
          _++;
          continue
        }
        let [i, r] = (n = this.columnHeights).reduce((e, t, n) => t < e[0] ? [t, n] : e, [n[0], 0]);
        r < this.lastColumnIndex && this.currentRow++, this.lastColumnIndex = r;
        let s = a(h, _, this.columnWidth),
          u = {
            position: "absolute",
            [c]: this.columnWidth * r + l * (r + 1) - l + E,
            width: this.columnWidth,
            top: i - I,
            height: s
          },
          d = {
            section: h,
            row: this.currentRow,
            column: r
          };
        this.coordsMap[e] = u, this.gridData.coordinates[e] = d, this.columnHeights[r] = i + s + l, this.itemGrid[r] = null !== (t = this.itemGrid[r]) && void 0 !== t ? t : [], this.itemGrid[r].push(e), _++
      }
      d > 0 && (this.coordsMap[s(h)] = {
        position: "sticky",
        [c]: E,
        width: this.columnWidth * i + l * i,
        top: 0,
        height: d
      }), this.coordsMap[r(h)] = {
        position: "absolute",
        [c]: T,
        width: this.columnWidth * i + l * (i - 1) + 2 * E,
        top: I,
        height: this.getMaxColumnHeight(this.columnHeights) - I
      }, h++
    }
    this.columnHeights = this.columnHeights.map(e => e - l + I), this.totalHeight = this.getMaxColumnHeight(), this.visibleSections = {}, this.needsFullCompute = !1
  }
  computeVisibleSections(e, t) {
    this.computeFullCoords();
    let {
      getItemKey: n,
      coordsMap: i
    } = this;
    this.visibleSections = {};
    let s = 0;
    for (; s < this.sections.length;) {
      let o = this.sections[s],
        a = r(s),
        l = i[a];
      if (null == l) {
        s++;
        continue
      }
      let {
        top: u
      } = l, _ = u + l.height;
      if (u > t) break;
      if (_ < e) {
        s++;
        continue
      }
      let d = 0,
        c = 1;
      for (_ < t && _ > e && (d = o - 1, c = -1), this.visibleSections[a] = []; d >= 0 && d < o;) {
        let r = n(s, d),
          o = null != r ? i[r] : null;
        if (null == r || null == o) {
          d += c;
          continue
        }
        let {
          top: l,
          height: _
        } = o;
        l + u > e - _ && l + u < t && (-1 === c ? this.visibleSections[a].unshift([r, s, d]) : this.visibleSections[a].push([r, s, d])), d += c
      }
      if (u < e && _ > t) break;
      s++
    }
  }
  getMaxColumnHeight() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
    return e.reduce((e, t) => Math.max(e, t), 0)
  }
  getState() {
    return {
      coordsMap: this.coordsMap,
      gridData: this.gridData,
      visibleSections: this.visibleSections,
      totalHeight: this.totalHeight
    }
  }
  constructor() {
    i(this, "visibleSections", {}), i(this, "gridData", {
      coordinates: {},
      boundaries: []
    }), i(this, "coordsMap", {}), i(this, "columnHeights", []), i(this, "columnWidth", 0), i(this, "totalHeight", 0), i(this, "itemGrid", []), i(this, "currentRow", 0), i(this, "lastColumnIndex", 0), i(this, "needsFullCompute", !0), i(this, "bufferWidth", 0), i(this, "sections", []), i(this, "columns", 0), i(this, "itemGutter", 0), i(this, "removeEdgeItemGutters", !1), i(this, "sectionGutter", null), i(this, "padding", null), i(this, "paddingVertical", null), i(this, "paddingHorizontal", null), i(this, "marginLeft", null), i(this, "dir", "ltr"), i(this, "getItemKey", () => {
      throw Error("MasonryListComputer: getItemKey has not been implemented")
    }), i(this, "getItemHeight", () => {
      throw Error("MasonryListComputer: getItemHeight has not been implemented")
    }), i(this, "getSectionHeight", a)
  }
}