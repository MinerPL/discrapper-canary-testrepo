n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(481060), o = n(378720), c = n(285952), d = n(424218), u = n(823379), _ = n(358085), E = n(843445), h = n(981631), I = n(689938), m = n(723951);
let p = {
    [h.TaA.WINDOWS]: _.PlatformTypes.WINDOWS,
    [h.TaA.MACOS]: _.PlatformTypes.OSX,
    [h.TaA.LINUX]: _.PlatformTypes.LINUX
};
class g extends s.PureComponent {
    render() {
        let {
                active: e,
                children: t,
                pageSize: n,
                onClick: s
            } = this.props, a = n === E.b.LARGE;
        return (0, i.jsx)(l.Button, {
            size: a ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
            fullWidth: !a,
            color: e ? m.tabSelectedColor : m.tabNotSelectedColor,
            className: r()({
                [m.tabPageLarge]: a,
                [m.tabPageSmall]: !a,
                [m.tabSelected]: e,
                [m.tabNotSelected]: !e
            }),
            onClick: s,
            children: t
        });
    }
}
let T = e => [
    {
        key: I.Z.Messages.APPLICATION_STORE_SPECS_OS,
        value: e.operating_system_version
    },
    {
        key: I.Z.Messages.APPLICATION_STORE_SPECS_CPU,
        value: e.cpu
    },
    {
        key: I.Z.Messages.APPLICATION_STORE_SPECS_MEMORY,
        value: null != e.ram ? I.Z.Messages.APPLICATION_STORE_SPECS_MEMORY_VALUE.format({ size: (0, d.BU)(1000 * e.ram, { showDecimalForGB: !1 }) }) : null
    },
    {
        key: I.Z.Messages.APPLICATION_STORE_SPECS_VIDEO,
        value: e.gpu
    },
    {
        key: I.Z.Messages.APPLICATION_STORE_SPECS_STORAGE,
        value: null != e.disk ? (0, d.BU)(1000 * e.disk, { showDecimalForGB: !1 }) : null
    },
    {
        key: I.Z.Messages.APPLICATION_STORE_SPECS_SOUND,
        value: e.sound_card
    },
    {
        key: I.Z.Messages.APPLICATION_STORE_SPECS_NETWORK,
        value: e.network
    },
    {
        key: I.Z.Messages.APPLICATION_STORE_SPECS_NOTES,
        value: e.notes
    }
];
class S extends s.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let {systemRequirements: n} = e, {selectedOperatingSystem: i} = t, s = Object.keys(n);
        return s.includes(i) ? null : { selectedOperatingSystem: s[0] };
    }
    renderTabs() {
        let {
                pageSize: e,
                systemRequirements: t
            } = this.props, {selectedOperatingSystem: n} = this.state, s = Object.keys(t);
        return 1 === s.length ? null : (0, i.jsxs)(c.Z, {
            className: m.tabs,
            children: [
                (0, i.jsx)('div', { className: m.separator }),
                s.map(t => (0, i.jsx)(g, {
                    active: t === n,
                    onClick: () => this.handleSelectOperatingSystem(t),
                    pageSize: e,
                    children: function (e) {
                        switch (e) {
                        case h.TaA.WINDOWS:
                            return I.Z.Messages.WINDOWS;
                        case h.TaA.MACOS:
                            return I.Z.Messages.MACOS;
                        case h.TaA.LINUX:
                            return I.Z.Messages.LINUX;
                        }
                    }(t)
                }, t))
            ]
        });
    }
    renderRequirementsSection(e, t) {
        if (null == e)
            return null;
        let n = T(e).map((e, t) => {
            let n = null != e.value ? e.value.trim() : null;
            return null == n || 0 === n.length ? null : (0, i.jsxs)('div', {
                className: m.requirement,
                children: [
                    (0, i.jsxs)('span', {
                        className: m.requirementKey,
                        children: [
                            e.key,
                            ':'
                        ]
                    }),
                    n
                ]
            }, t);
        }).filter(u.lm);
        return (0, i.jsxs)('div', {
            className: m.requirements,
            children: [
                (0, i.jsx)(o.Z, {
                    tag: 'h4',
                    children: t
                }),
                n
            ]
        });
    }
    renderBody() {
        let {
            minimum: e,
            recommended: t
        } = this.props.systemRequirements[this.state.selectedOperatingSystem];
        return (0, i.jsxs)('div', {
            className: m.requirementsContainer,
            children: [
                this.renderRequirementsSection(e, I.Z.Messages.APPLICATION_STORE_SPECS_MINIMUM),
                this.renderRequirementsSection(t, I.Z.Messages.APPLICATION_STORE_SPECS_RECOMMENDED)
            ]
        });
    }
    render() {
        return (0, i.jsxs)('div', {
            className: this.props.className,
            children: [
                (0, i.jsx)(o.Z, { children: I.Z.Messages.APPLICATION_STORE_SECTION_TITLE_SYSTEM_REQUIREMENTS }),
                this.renderTabs(),
                this.renderBody()
            ]
        });
    }
    constructor(e) {
        var t, n, i;
        super(e), t = this, n = 'handleSelectOperatingSystem', i = e => {
            this.setState({ selectedOperatingSystem: e });
        }, n in t ? Object.defineProperty(t, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = i;
        let s = (0, _.getPlatform)(), a = Object.keys(e.systemRequirements), r = a[0];
        for (let e of a)
            p[e] === s && (r = e);
        this.state = { selectedOperatingSystem: r };
    }
}
t.Z = S;
