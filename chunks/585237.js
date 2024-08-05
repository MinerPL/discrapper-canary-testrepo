var i, s, a = n(735250);
n(470079);
var r = n(481060),
  l = n(285952),
  o = n(702594);
(i = s || (s = {})).SMALL = 'SMALL', i.MEDIUM = 'MEDIUM', i.LARGE = 'LARGE';
let c = {
SMALL: o.dropdownSmall,
MEDIUM: o.dropdownMedium,
LARGE: o.dropdownLarge
  },
  u = e => {
let {
  onDropdownClick: t,
  children: n,
  contentClassName: i,
  dropdownSize: s = 'MEDIUM',
  ...u
} = e;
return (0, a.jsx)(r.Button, {
  ...u,
  children: (0, a.jsxs)(l.Z, {
    align: l.Z.Align.CENTER,
    children: [
      (0, a.jsx)(l.Z.Child, {
        className: i,
        children: n
      }),
      null != t ? (0, a.jsxs)(r.Clickable, {
        className: c[s],
        onClick: e => {
          e.stopPropagation(), null != t && t(e);
        },
        children: [
          (0, a.jsx)('div', {
            className: o.arrowSeparator
          }),
          (0, a.jsx)(r.ChevronSmallDownIcon, {
            size: 'md',
            color: 'currentColor',
            className: o.dropdownArrow
          })
        ]
      }) : null
    ]
  })
});
  };
u.DropdownSizes = s, u.Sizes = r.Button.Sizes, u.Colors = r.Button.Colors, u.Looks = r.Button.Looks, t.Z = u;