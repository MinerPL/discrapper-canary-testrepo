n.d(t, {
  F: function() {
return _;
  },
  Y: function() {
return d;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(772848),
  s = n(993365),
  o = n(481060),
  l = n(245216),
  u = n(561466),
  c = n(301235);

function d(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.si,
{
  position: r = u.si.position,
  component: i = u.si.component,
  duration: s = u.si.duration
} = n;
  return {
message: e,
id: (0, a.Z)(),
type: t,
options: {
  position: r,
  component: i,
  duration: s
}
  };
}
let _ = i.memo(function(e) {
  let {
message: t,
type: n,
id: i,
options: {
  component: a = u.si.component
} = u.si
  } = e;
  return null != a ? (0, r.jsx)(r.Fragment, {
children: a
  }) : (0, r.jsxs)('div', {
id: i,
className: c.toast,
children: [
  function(e) {
    switch (e) {
      case u.pC.SUCCESS:
        return (0, r.jsx)(o.CheckmarkLargeIcon, {
          size: 'md',
          className: c.icon,
          color: o.tokens.colors.STATUS_POSITIVE.css
        });
      case u.pC.FAILURE:
        return (0, r.jsx)(o.XLargeIcon, {
          size: 'md',
          className: c.icon,
          color: o.tokens.colors.STATUS_DANGER.css
        });
      case u.pC.CLIP:
        return (0, r.jsx)(o.ClipsIcon, {
          size: 'xs',
          className: c.clipIcon,
          color: o.tokens.colors.HEADER_PRIMARY.css
        });
      case u.pC.LINK:
        return (0, r.jsx)(o.LinkIcon, {
          className: c.icon,
          color: o.tokens.colors.HEADER_PRIMARY.css
        });
      case u.pC.FORWARD:
        return (0, r.jsx)(l.Z, {
          className: c.icon,
          color: o.tokens.colors.STATUS_POSITIVE.css
        });
      default:
        return null;
    }
  }(n),
  (0, r.jsx)(s.x, {
    className: c.__invalid_content,
    color: 'header-primary',
    variant: 'text-md/normal',
    children: t
  })
]
  });
});