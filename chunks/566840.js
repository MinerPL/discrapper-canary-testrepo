n.d(t, {
  Eg: function() {
return o;
  },
  XL: function() {
return u;
  }
});
var i = n(470079),
  l = n(652874),
  r = n(143927),
  a = n(731965);
let s = (0, l.Z)(e => ({
  upsellsByGuildId: {}
}));

function o(e) {
  return s(t => {
var n;
let i = {};
return null == e ? i : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n ? n : i;
  }, r.Z);
}

function c(e) {
  if (null == e)
return !1;
  try {
return window.getComputedStyle(e).overflow.includes('scroll');
  } catch (e) {
return !1;
  }
}

function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
l = i.useRef(null);
  return i.useLayoutEffect(() => {
let i = l.current,
  r = () => {
    requestAnimationFrame(() => {
      var i, r, o;
      let c = null !== (r = null === (i = l.current) || void 0 === i ? void 0 : i.getBoundingClientRect()) && void 0 !== r ? r : null;
      o = {
        name: t,
        guildId: e,
        disabled: n,
        boundingRect: null != c ? c : null
      }, (0, a.j)(() => {
        s.setState(e => {
          var t, n;
          return {
            upsellsByGuildId: {
              ...null !== (t = e.upsellsByGuildId) && void 0 !== t ? t : {},
              [o.guildId]: {
                ...null !== (n = e.upsellsByGuildId[o.guildId]) && void 0 !== n ? n : {},
                [o.name]: o
              }
            }
          };
        });
      });
    });
  };
if (null == i)
  return r(), () => {};
let o = function(e) {
  let t = e.parentNode;
  for (; null != t && t !== document.body && !c(t);)
    t = t.parentNode;
  return c(t) ? t : null;
}(i);
return r(), null == o || o.addEventListener('scroll', r, {
  passive: !0
}), () => {
  null == o || o.removeEventListener('scroll', r);
};
  }, [
e,
t,
n
  ]), l;
}