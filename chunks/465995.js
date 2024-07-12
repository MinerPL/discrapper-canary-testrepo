var r = n(470079),
  i = n(844303),
  a = n(329022),
  o = n(464854);
t.Z = function(e) {
  var t = e.colors,
n = e.onClick,
s = e.onSwatchHover,
l = (0, i.default)({
  default: {
    swatches: {
      marginRight: '-10px'
    },
    swatch: {
      width: '22px',
      height: '22px',
      float: 'left',
      marginRight: '10px',
      marginBottom: '10px',
      borderRadius: '4px'
    },
    clear: {
      clear: 'both'
    }
  }
});
  return r.createElement('div', {
style: l.swatches
  }, (0, a.Z)(t, function(e) {
return r.createElement(o.m4, {
  key: e,
  color: e,
  style: l.swatch,
  onClick: n,
  onHover: s,
  focusStyle: {
    boxShadow: '0 0 4px ' + e
  }
});
  }), r.createElement('div', {
style: l.clear
  }));
};