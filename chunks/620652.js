n.d(t, {
  M: function() {
return s;
  },
  Z: function() {
return _;
  }
});
var i, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  r = n.n(l),
  c = n(500923),
  u = n.n(c),
  d = n(570140),
  h = n(960020),
  m = n(831244),
  p = n(815605),
  g = n(981631),
  f = n(12430);
(i = s || (s = {}))[i.NORMAL = 16] = 'NORMAL', i[i.LARGE = 32] = 'LARGE';
let T = async e => {
  var t;
  let {
effect: n
  } = e, i = await (0, m.T)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : g.lds, n.emoji.name), s = await (0, p.aB)(''.concat(n.channelId, ':').concat(n.messageId, ':').concat(n.emoji.name), n.url, i, n.color);
  return s.assets[0].p = n.url, s;
};

function _(e) {
  let {
className: t,
effect: n,
onComplete: i,
emojiSize: s = 16
  } = e, l = a.useRef(null), c = s * p.Vz, m = (c + s) / 2;
  return a.useEffect(() => {
let e;
if (null != n)
  return !async function() {
    if (null != l.current) {
      let t = await T({
        effect: n
      });
      (e = u().loadAnimation({
        container: l.current,
        renderer: 'svg',
        loop: !1,
        autoplay: !0,
        animationData: t
      })).addEventListener('complete', () => {
        null == i || i(), e.destroy();
      }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === h.I.HOVER && d.Z.dispatch({
        type: 'BURST_REACTION_ANIMATION_ADD',
        channelId: n.channelId,
        messageId: n.messageId,
        emoji: n.emoji,
        animation: e
      });
    }
  }(), () => {
    null != e && e.destroy();
  };
  }, [
i,
n,
s
  ]), (0, o.jsx)('div', {
className: f.effectsWrapper,
children: (0, o.jsx)('div', {
  className: r()(f.effect, t),
  style: {
    transform: 'translateY('.concat(m, 'px)'),
    height: c,
    width: c
  },
  ref: l
})
  });
}