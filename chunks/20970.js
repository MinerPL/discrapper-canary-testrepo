n.d(t, {
  j: function() {
return f;
  }
});
var r = n(302454);
let {
  newline: i,
  paragraph: a,
  url: o,
  link: s,
  strong: l,
  u,
  br: c,
  em: d,
  image: _,
  text: E
} = r.defaultRules, f = {
  newline: i,
  paragraph: a,
  url: o,
  link: {
...s,
parse(e, t, n) {
  let r = s.parse(e, t, n);
  return r.context = n.context, r;
}
  },
  strong: l,
  u,
  br: c,
  em: d,
  image: _,
  hook: {
order: E.order,
match: (0, r.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
parse(e, t, n) {
  let {
    context: r
  } = n;
  return {
    render: r[e[2]],
    content: t(e[1], n)
  };
},
react: (e, t, n) => e.render(t(e.content, n), n.key)
  },
  noparse: {
order: E.order,
match: (0, r.inlineRegex)(/^!!(\d+?)!!/),
parse(e, t, n) {
  let {
    unsafeContext: r
  } = n, i = r[e[1]];
  return 'string' != typeof i && (i = null != i ? i.toString() : ''), {
    type: 'text',
    content: i
  };
},
react: e => e.content
  },
  text: E
};