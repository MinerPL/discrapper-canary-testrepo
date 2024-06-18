"use strict";
t.d(s, {
  Fd: function() {
    return I
  },
  GN: function() {
    return T
  },
  rM: function() {
    return _
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(481060),
  d = t(692437),
  u = t(755930),
  E = t(306787);

function _(e, s) {
  let {
    expandableToggleColumnKey: t
  } = s, i = (0, u.Yn)(e.map(e => ({
    ...e,
    sort: !1,
    renderHeader() {
      var s;
      return null === (s = e.renderHeader) || void 0 === s ? void 0 : s.call(e, e, [])
    },
    render(s, t, n) {
      var i, l;
      if (s.isExpandedItem) return "renderExpandedContent" in e ? e.renderExpandedContent(s.item, t) : null;
      return null !== (l = null === (i = e.render) || void 0 === i ? void 0 : i.call(e, s.item, t, n)) && void 0 !== l ? l : null
    }
  })));
  return [function(e) {
    let {
      key: s
    } = e;
    return {
      key: s,
      cellClassName: E.toggleExpandColumn,
      renderHeader: () => null,
      render(e, s) {
        if (o()(null != s, "Cell props missing; did you use the hook?"), e.isExpandedItem) return null;
        let {
          expandedRows: t,
          onToggleExpandRow: i
        } = s, l = t.has(e.key);
        return (0, n.jsx)(c.Clickable, {
          className: E.toggleExpandCell,
          onClick: () => i(e.key),
          children: (0, n.jsx)(u.bL, {
            children: (0, n.jsx)(d.Z, {
              className: a()(E.caretIcon, {
                [E.caretDownIcon]: l
              })
            })
          })
        })
      }
    }
  }({
    key: t
  }), ...i]
}

function I(e) {
  let {
    renderExpandedContent: s,
    ...t
  } = e;
  return {
    ...(0, u.wy)(t),
    renderExpandedContent: s
  }
}

function T(e, s) {
  let {
    generateExpandedRows: t
  } = s, n = function() {
    let [e, s] = i.useState(new Set);
    return {
      expandedRows: e,
      onToggleExpandRow: i.useCallback(e => {
        s(s => {
          let t = new Set(s);
          return t.has(e) ? t.delete(e) : t.add(e), t
        })
      }, [s])
    }
  }();
  return {
    data: i.useMemo(() => {
      let s = [];
      for (let i of e)
        if (s.push({
            isExpandedItem: !1,
            key: i.key,
            item: i
          }), n.expandedRows.has(i.key))
          for (let e of t(i)) s.push({
            isExpandedItem: !0,
            key: e.key,
            item: e
          });
      return s
    }, [n.expandedRows, e, t]),
    cellProps: n
  }
}