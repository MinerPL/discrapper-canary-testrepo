s.d(t, {
  Z: function() {
return c;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(981631),
  l = s(690476);
class c extends a.Component {
  render() {
let {
  className: e,
  videoID: t,
  videoClassName: s
} = this.props;
return (0, n.jsx)('div', {
  className: r()(e, l.videoWrapper),
  children: (0, n.jsx)('iframe', {
    className: r()(s, l.video),
    src: 'https://www.youtube.com/embed/'.concat(t, '?rel=0&showinfo=0&controls=1&origin=https://').concat(o.$R1),
    allowFullScreen: !0,
    sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
  })
});
  }
}