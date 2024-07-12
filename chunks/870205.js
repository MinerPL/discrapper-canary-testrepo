t.d(n, {
  Z: function() {
return c;
  }
});
var i = t(735250),
  l = t(481060),
  a = t(984168),
  r = t(314734),
  s = t(689938),
  o = t(114601);

function c(e) {
  let n, {
sortOrder: t,
onSortOptionClick: c
  } = e;
  switch (t) {
case r.bS.POPULAR:
  n = s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR;
  break;
case r.bS.ALPHABETICAL:
  n = s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL;
  }
  return (0, i.jsx)(l.Popout, {
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(a.Z, {
    sortOrder: t,
    onSortOptionClick: c,
    closePopout: n
  });
},
position: 'bottom',
align: 'left',
children: (e, t) => {
  let {
    isShown: a
  } = t;
  return (0, i.jsxs)(l.Button, {
    ...e,
    size: l.Button.Sizes.MIN,
    color: l.Button.Colors.CUSTOM,
    className: o.sortDropdown,
    innerClassName: o.sortDropdownInner,
    'aria-label': s.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
    children: [
      (0, i.jsx)(l.ArrowsUpDownIcon, {
        size: 'xs',
        color: 'currentColor',
        className: o.sortIconMargin
      }),
      (0, i.jsx)(l.Text, {
        variant: 'text-sm/medium',
        color: 'text-normal',
        children: n
      }),
      a ? (0, i.jsx)(l.ChevronSmallUpIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20
      }) : (0, i.jsx)(l.ChevronSmallDownIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20
      })
    ]
  });
}
  });
}