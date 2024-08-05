var r = n(470079),
  i = n(844303),
  a = n(818966);
t.Z = function(e) {
  var t = e.onClick,
n = e.hsl,
s = (0, i.default)({
  default: {
    swatches: {
      marginTop: '20px'
    },
    swatch: {
      boxSizing: 'border-box',
      width: '20%',
      paddingRight: '1px',
      float: 'left'
    },
    clear: {
      clear: 'both'
    }
  }
});
  return r.createElement('div', {
style: s.swatches
  }, r.createElement('div', {
style: s.swatch
  }, r.createElement(a.Z, {
hsl: n,
offset: '.80',
active: 0.1 > Math.abs(n.l - 0.8) && 0.1 > Math.abs(n.s - 0.5),
onClick: t,
first: !0
  })), r.createElement('div', {
style: s.swatch
  }, r.createElement(a.Z, {
hsl: n,
offset: '.65',
active: 0.1 > Math.abs(n.l - 0.65) && 0.1 > Math.abs(n.s - 0.5),
onClick: t
  })), r.createElement('div', {
style: s.swatch
  }, r.createElement(a.Z, {
hsl: n,
offset: '.50',
active: 0.1 > Math.abs(n.l - 0.5) && 0.1 > Math.abs(n.s - 0.5),
onClick: t
  })), r.createElement('div', {
style: s.swatch
  }, r.createElement(a.Z, {
hsl: n,
offset: '.35',
active: 0.1 > Math.abs(n.l - 0.35) && 0.1 > Math.abs(n.s - 0.5),
onClick: t
  })), r.createElement('div', {
style: s.swatch
  }, r.createElement(a.Z, {
hsl: n,
offset: '.20',
active: 0.1 > Math.abs(n.l - 0.2) && 0.1 > Math.abs(n.s - 0.5),
onClick: t,
last: !0
  })), r.createElement('div', {
style: s.clear
  }));
};