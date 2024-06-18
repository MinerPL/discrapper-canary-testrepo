"use strict";

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function r(e) {
  return "row" === e.type
}
n.d(t, {
  o: function() {
    return r
  }
}), n(653041);
t.Z = class e {
  mergeProps(e) {
    let {
      sectionHeight: t,
      rowHeight: n,
      footerHeight: i,
      listHeaderHeight: r,
      paddingTop: s,
      paddingBottom: o,
      sections: a,
      getAnchorId: l
    } = e;
    this.sections = a, this.sectionHeight = t, this.rowHeight = n, this.footerHeight = i, this.listHeaderHeight = r, this.uniform = "number" == typeof n, this.paddingTop = s, this.paddingBottom = o, this.getAnchorId = null != l ? l : this.getAnchorId
  }
  getHeight() {
    let e = this.paddingTop + this.getListHeaderHeight(),
      {
        length: t
      } = this.sections;
    for (let n = 0; n < t; n++) {
      if (e += this.getHeightForSection(n), this.uniform) e += this.sections[n] * this.getHeightForRow(n, 0);
      else
        for (let t = 0; t < this.sections[n]; t++) e += this.getHeightForRow(n, t);
      e += this.getHeightForFooter(n)
    }
    return e + this.paddingBottom
  }
  getHeightForSection(e) {
    let {
      sectionHeight: t
    } = this;
    return "number" == typeof t ? t : t(e)
  }
  getHeightForRow(e, t) {
    let {
      rowHeight: n
    } = this;
    return "number" == typeof n ? n : n(e, t)
  }
  getHeightForFooter(e) {
    let {
      footerHeight: t
    } = this;
    return null == t ? 0 : "number" == typeof t ? t : t(e)
  }
  getListHeaderHeight() {
    let {
      listHeaderHeight: e
    } = this;
    return null == e ? 0 : "number" == typeof e ? e : e()
  }
  compute(e, t) {
    let n = this.paddingTop,
      i = n,
      r = n,
      s = 0,
      o = 0,
      a = [],
      l = s => (r = n, (n += s) < e) ? (i += s, !1) : !(r > t) && !0;
    l(this.getListHeaderHeight()) && a.push({
      type: "header",
      section: -1,
      offsetTop: r
    });
    for (let e = 0; e < this.sections.length; e++) {
      let t = this.sections[e];
      if (0 !== t) {
        if (l(this.getHeightForSection(e)) && a.push({
            type: "section",
            section: e,
            listIndex: o,
            offsetTop: r,
            anchorId: this.getAnchorId(e)
          }), o += 1, this.uniform) {
          let n = this.getHeightForRow(e, 0);
          for (let i = 0; i < t; i++) l(n) && a.push({
            type: "row",
            section: e,
            listIndex: o,
            row: i,
            rowIndex: s,
            offsetTop: r,
            anchorId: this.getAnchorId(e, i)
          }), s += 1, o += 1
        } else
          for (let n = 0; n < t; n++) l(this.getHeightForRow(e, n)) && a.push({
            type: "row",
            section: e,
            listIndex: o,
            row: n,
            rowIndex: s,
            offsetTop: r,
            anchorId: this.getAnchorId(e, n)
          }), s += 1, o += 1;
        l(this.getHeightForFooter(e)) && a.push({
          type: "footer",
          section: e,
          offsetTop: r
        })
      }
    }
    return {
      spacerTop: i,
      totalHeight: n + this.paddingBottom,
      items: a
    }
  }
  computeScrollPosition(e, t) {
    let {
      paddingTop: n
    } = this, i = n + this.getListHeaderHeight(), r = 0, s = !1;
    for (; r <= e;) {
      let n = this.sections[r];
      if (r === e && null == t) {
        s = !0;
        break
      }
      if (0 === n) {
        r += 1;
        continue
      }
      if (i += this.getHeightForSection(r), this.uniform) {
        let o = this.getHeightForRow(r, 0);
        r === e && null != t ? (i += o * t, s = !0) : i += o * n
      } else
        for (let o = 0; o < n; o++)
          if (r < e || r === e && null != t && o < t) i += this.getHeightForRow(r, o);
          else if (r === e && null != t && o === t) {
        s = !0;
        break
      }!s && (i += this.getHeightForFooter(r)), r += 1
    }
    return [i, null != t ? this.getHeightForRow(e, t) : this.getHeightForSection(r)]
  }
  constructor() {
    i(this, "sectionHeight", 0), i(this, "rowHeight", 0), i(this, "footerHeight", 0), i(this, "listHeaderHeight", 0), i(this, "uniform", !1), i(this, "paddingBottom", 0), i(this, "paddingTop", 0), i(this, "sections", []), i(this, "getAnchorId", () => void 0)
  }
}