n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(620662),
  s = n(503438),
  o = n(829820),
  l = n(395361),
  u = n(475413),
  c = n(981631),
  d = n(689938),
  _ = n(139665);

function E(e) {
  var t;
  let {
user: n,
activity: E,
onAction: f
  } = e, h = (0, o.Ih)(E, n), p = (0, o.Fe)(E, n);
  return (0, s.Z)(E) && ((0, a.Z)(E, c.xjy.PLAY) || (0, a.Z)(E, c.xjy.SYNC)) ? (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(u.ef, {
    icon: i.UserPlayIcon,
    tooltipText: null !== (t = p.tooltip) && void 0 !== t ? t : d.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
    disabled: p.disabled,
    submitting: p.loading,
    fullWidth: !0,
    onClick: () => {
      null == f || f({
        action: 'PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON'
      }), p.onClick();
    }
  }),
  (0, r.jsx)(i.Tooltip, {
    text: h.tooltip,
    children: e => {
      var t;
      return (0, r.jsx)(u.tG, {
        ...e,
        icon: () => (0, r.jsx)(l.Z, {}),
        text: null !== (t = h.label) && void 0 !== t ? t : d.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
        disabled: h.disabled,
        submitting: h.loading,
        wrapperClassName: _.primaryButton,
        fullWidth: !0,
        onClick: () => {
          null == f || f({
            action: 'PRESS_PLAY_ON_SPOTIFY_BUTTON'
          }), h.onClick();
        }
      });
    }
  })
]
  }) : null;
}