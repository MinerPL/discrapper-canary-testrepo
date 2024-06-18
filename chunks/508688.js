"use strict";
n.d(t, {
  BR: function() {
    return d
  },
  RX: function() {
    return l
  },
  Tw: function() {
    return _
  },
  dY: function() {
    return E
  },
  wL: function() {
    return c
  },
  z5: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(157709);
let l = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: s()(a.autocompleteRowContent, n),
      children: t
    })
  },
  u = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: s()(a.autocompleteRowContentPrimary, n),
      children: t
    })
  },
  _ = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: s()(a.autocompleteRowIcon, n),
      children: t
    })
  },
  d = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, i.jsx)(o.Text, {
      className: s()(n, a.autocompleteRowHeading),
      color: "interactive-active",
      variant: "text-md/normal",
      children: t
    })
  },
  c = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, i.jsx)(o.Text, {
      className: s()(n, a.autocompleteRowSubheading),
      color: "interactive-normal",
      variant: "text-xs/normal",
      children: t
    })
  },
  E = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, i.jsx)(o.Text, {
      className: s()(n, a.autocompleteRowContentSecondary),
      color: "interactive-normal",
      variant: "text-xs/normal",
      children: t
    })
  }