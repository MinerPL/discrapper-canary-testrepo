n.d(t, {
  Z: function() {
return h;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(620662),
  s = n(503438),
  o = n(829820),
  l = n(395361),
  u = n(652853),
  c = n(475413),
  d = n(228168),
  _ = n(981631),
  E = n(689938),
  f = n(692184);

function h(e) {
  var t;
  let {
user: n,
activity: h,
onClick: p
  } = e, {
profileType: m
  } = (0, u.z)(), I = (0, o.Ih)(h, n), T = (0, o.Fe)(h, n);
  return (0, s.Z)(h) && ((0, a.Z)(h, _.xjy.PLAY) || (0, a.Z)(h, _.xjy.SYNC)) ? (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(c.ef, {
    icon: i.UserPlayIcon,
    tooltipText: null !== (t = T.tooltip) && void 0 !== t ? t : E.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
    disabled: T.disabled,
    submitting: T.loading,
    themeColor: m === d.y0.FULL_SIZE ? 'secondary' : 'primary',
    fullWidth: !0,
    onClick: e => {
      null == p || p(e), T.onClick();
    }
  }),
  (0, r.jsx)(i.Tooltip, {
    text: I.tooltip,
    children: e => {
      var t;
      return (0, r.jsx)(c.tG, {
        ...e,
        icon: () => (0, r.jsx)(l.Z, {}),
        text: null !== (t = I.label) && void 0 !== t ? t : E.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
        disabled: I.disabled,
        submitting: I.loading,
        themeColor: m === d.y0.FULL_SIZE ? 'secondary' : 'primary',
        wrapperClassName: f.primaryButton,
        fullWidth: !0,
        onClick: e => {
          null == p || p(e), I.onClick();
        }
      });
    }
  })
]
  }) : null;
}