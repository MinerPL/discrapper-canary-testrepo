"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(47120);
var i, r, s = n(470079),
  o = n(981631);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(r = i || (i = {})).ARROW_UP = "ARROW_UP", r.ARROW_DOWN = "ARROW_DOWN", r.ARROW_LEFT = "ARROW_LEFT", r.ARROW_RIGHT = "ARROW_RIGHT";
class l extends s.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, !0)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, !0)
  }
  focusNext(e) {
    let {
      getItemGrid: t,
      onFocus: n
    } = this.props, {
      focusedColumn: i,
      focusedRow: r
    } = this.state;
    if (null == e) return;
    let s = t();
    if (null == s) return;
    let o = this.getNext(s, i, r, e);
    this.setState({
      focusedColumn: o.column,
      focusedRow: o.row
    }, () => {
      let e = this.calculateFocusedItem();
      null != e && null != n && n(e)
    })
  }
  getNext(e, t, n, i) {
    let r, s, o, a;
    if (null == t || null == n) s = 0, o = 0, r = {
      column: 0,
      row: 0
    };
    else switch (s = t, o = n, i) {
      case "ARROW_UP":
        r = {
          column: s,
          row: Math.max(o - 1, 0)
        };
        break;
      case "ARROW_DOWN":
        r = {
          column: s,
          row: Math.min(o + 1, e[s].length - 1)
        };
        break;
      case "ARROW_LEFT":
        r = this.wrapPosition(e, s, o, -1);
        break;
      case "ARROW_RIGHT":
        r = this.wrapPosition(e, s, o, 1)
    }
    return null != r && (a = e[r.column][r.row]), (null == a || null == r) && (a = e[(r = {
      column: s,
      row: o
    }).column][r.row]), {
      column: r.column,
      row: r.row,
      id: a
    }
  }
  calculateClosest(e, t) {
    let n;
    let i = this.props.getCoordsMap()[e];
    if (null == i) return;
    let r = Number.MAX_SAFE_INTEGER;
    for (let e = 0; e < t.length; e++) {
      let s = this.props.getCoordsMap()[t[e]];
      if (null == s) continue;
      let o = Math.abs(s.top - i.top);
      if (o < r) r = o, n = e;
      else break
    }
    return n
  }
  calculateFocusedItem() {
    let {
      getItemGrid: e
    } = this.props, {
      focusedRow: t,
      focusedColumn: n
    } = this.state, i = e();
    return null == i || null == n || null == t || null == i[n] || null == i[n][t] ? null : i[n][t]
  }
  render() {
    return this.props.children
  }
  constructor(...e) {
    super(...e), a(this, "state", {
      focusedColumn: null,
      focusedRow: null
    }), a(this, "handleKeyDown", e => {
      let {
        onSelect: t
      } = this.props;
      switch (e.keyCode) {
        case o.yXg.ARROW_DOWN:
        case o.yXg.ARROW_UP:
        case o.yXg.ARROW_LEFT:
        case o.yXg.ARROW_RIGHT:
          this.focusNext(function(e) {
            switch (e) {
              case o.yXg.ARROW_DOWN:
                return "ARROW_DOWN";
              case o.yXg.ARROW_UP:
                return "ARROW_UP";
              case o.yXg.ARROW_LEFT:
                return "ARROW_LEFT";
              case o.yXg.ARROW_RIGHT:
                return "ARROW_RIGHT";
              default:
                return null
            }
          }(e.keyCode));
          break;
        case o.yXg.ENTER:
          let n = this.calculateFocusedItem();
          null != n && null != t && (e.preventDefault(), e.stopPropagation(), t(n))
      }
    }), a(this, "wrapPosition", (e, t, n, i) => {
      var r;
      let s = e.length,
        o = Math.max(n * s + t + i, 0) % s,
        a = null !== (r = this.calculateClosest(e[t][n], e[o])) && void 0 !== r ? r : n,
        l = 0;
      return i < 0 && o > t && (l = -1), i > 0 && o < t && (l = 1), {
        column: o,
        row: a + l
      }
    })
  }
}