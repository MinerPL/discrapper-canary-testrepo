r.r(s);
var o = r(735250), t = r(470079), c = r(120356), a = r.n(c), i = r(613828), n = r(481060), b = r(710845), d = r(361207), w = r(954824), l = r(981631), p = r(689938), m = r(548582);
let f = [
        {
            id: 'discord',
            getName: () => p.Z.Messages.DESKTOP_APP,
            url: (0, d.t3)()
        },
        {
            id: 'chrome',
            getName: () => p.Z.Messages.BROWSER_CHROME,
            url: 'https://www.google.com/chrome/browser/desktop/'
        },
        {
            id: 'firefox',
            getName: () => p.Z.Messages.BROWSER_FIREFOX,
            url: 'https://www.mozilla.org/en-US/firefox/new/?scene=2'
        }
    ], h = {
        discord: 'browserDiscord',
        firefox: 'browserFirefox',
        chrome: 'browserChrome'
    };
class x extends t.Component {
    render() {
        let e;
        let {
            id: s,
            getName: r,
            url: t
        } = this.props.browser;
        return e = null != t ? (0, o.jsx)(n.Anchor, {
            className: m.btn,
            href: t,
            children: p.Z.Messages.DOWNLOAD
        }) : (0, o.jsx)(i.rU, {
            className: m.btn,
            to: l.Z5c.APPS,
            children: p.Z.Messages.DOWNLOAD
        }), (0, o.jsxs)('li', {
            className: m.browserItem,
            children: [
                (0, o.jsx)('div', { className: a()(m.browserItemText, m.browser, m[h[s]]) }),
                (0, o.jsx)('div', {
                    className: m.browserItemText,
                    children: r()
                }),
                e
            ]
        });
    }
}
class u extends t.Component {
    componentDidMount() {
        w.Z.launch('discord://' + this.props.location.pathname, e => {
            new b.Z('UnsupportedBrowser').log('discord://', e);
        });
    }
    render() {
        let e = f.map(e => (0, o.jsx)(x, { browser: e }, e.id));
        return (0, o.jsx)('div', {
            className: m.unsupportedBrowser,
            children: (0, o.jsxs)('div', {
                className: m.wrap,
                children: [
                    (0, o.jsx)(n.H, {
                        className: m.title,
                        children: p.Z.Messages.UNSUPPORTED_BROWSER_TITLE
                    }),
                    (0, o.jsx)('p', {
                        className: m.message,
                        children: p.Z.Messages.UNSUPPORTED_BROWSER_BODY
                    }),
                    (0, o.jsx)('ul', {
                        className: m.browserList,
                        children: e
                    })
                ]
            })
        });
    }
}
s.default = u;
