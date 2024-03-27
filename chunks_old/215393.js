"use strict";
s.r(t), s.d(t, {
  createExpandableTableColumns: function() {
    return _
  },
  createExpandableColumn: function() {
    return I
  },
  useExpandableRows: function() {
    return T
  }
}), s("222007"), s("424973");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("627445"),
  o = s.n(r),
  d = s("77078"),
  u = s("772280"),
  c = s("207353"),
  E = s("109816");

function _(e, t) {
  let {
    expandableToggleColumnKey: s
  } = t, l = (0, c.createTableColumns)(e.map(e => ({
    ...e,
    sort: !1,
    renderHeader() {
      var t;
      return null === (t = e.renderHeader) || void 0 === t ? void 0 : t.call(e, e, [])
    },
    render(t, s, a) {
      var l, n;
      if (t.isExpandedItem) return "renderExpandedContent" in e ? e.renderExpandedContent(t.item, s) : null;
      return null !== (n = null === (l = e.render) || void 0 === l ? void 0 : l.call(e, t.item, s, a)) && void 0 !== n ? n : null
    }
  })));
  return [function(e) {
    let {
      key: t
    } = e;
    return {
      key: t,
      cellClassName: E.toggleExpandColumn,
      renderHeader: () => null,
      render(e, t) {
        if (o(null != t, "Cell props missing; did you use the hook?"), e.isExpandedItem) return null;
        let {
          expandedRows: s,
          onToggleExpandRow: l
        } = t, n = s.has(e.key);
        return (0, a.jsx)(d.Clickable, {
          className: E.toggleExpandCell,
          onClick: () => l(e.key),
          children: (0, a.jsx)(c.Cell, {
            children: (0, a.jsx)(u.default, {
              className: i(E.caretIcon, {
                [E.caretDownIcon]: n
              })
            })
          })
        })
      }
    }
  }({
    key: s
  }), ...l]
}

function I(e) {
  let {
    renderExpandedContent: t,
    ...s
  } = e;
  return {
    ...(0, c.createColumn)(s),
    renderExpandedContent: t
  }
}

function T(e, t) {
  let {
    generateExpandedRows: s
  } = t, a = function() {
    let [e, t] = l.useState(new Set), s = l.useCallback(e => {
      t(t => {
        let s = new Set(t);
        return s.has(e) ? s.delete(e) : s.add(e), s
      })
    }, [t]);
    return {
      expandedRows: e,
      onToggleExpandRow: s
    }
  }(), n = l.useMemo(() => {
    let t = [];
    for (let l of e)
      if (t.push({
          isExpandedItem: !1,
          key: l.key,
          item: l
        }), a.expandedRows.has(l.key))
        for (let e of s(l)) t.push({
          isExpandedItem: !0,
          key: e.key,
          item: e
        });
    return t
  }, [a.expandedRows, e, s]);
  return {
    data: n,
    cellProps: a
  }
}