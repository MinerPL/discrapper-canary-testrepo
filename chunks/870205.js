"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(481060),
  s = n(86813),
  o = n(826026),
  a = n(135163),
  l = n(984168),
  u = n(314734),
  _ = n(689938),
  d = n(36e3);

function c(e) {
  let t, {
    sortOrder: n,
    onSortOptionClick: c
  } = e;
  switch (n) {
    case u.bS.POPULAR:
      t = _.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR;
      break;
    case u.bS.ALPHABETICAL:
      t = _.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL
  }
  return (0, i.jsx)(r.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(l.Z, {
        sortOrder: n,
        onSortOptionClick: c,
        closePopout: t
      })
    },
    position: "bottom",
    align: "left",
    children: (e, n) => {
      let {
        isShown: l
      } = n;
      return (0, i.jsxs)(r.Button, {
        ...e,
        size: r.Button.Sizes.MIN,
        color: r.Button.Colors.CUSTOM,
        className: d.sortDropdown,
        innerClassName: d.sortDropdownInner,
        "aria-label": _.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
        children: [(0, i.jsx)(a.Z, {
          className: d.sortIconMargin
        }), (0, i.jsx)(r.Text, {
          variant: "text-sm/medium",
          color: "text-normal",
          children: t
        }), l ? (0, i.jsx)(o.Z, {
          width: 20
        }) : (0, i.jsx)(s.Z, {
          width: 20
        })]
      })
    }
  })
}