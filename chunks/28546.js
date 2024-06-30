n.d(t, {
    Iu: function () {
        return p;
    },
    PG: function () {
        return c;
    },
    RO: function () {
        return E;
    },
    _Q: function () {
        return d;
    },
    hr: function () {
        return f;
    },
    j9: function () {
        return _;
    },
    ql: function () {
        return h;
    }
});
var r = n(97613), i = n.n(r), a = n(652874), o = n(868888), s = n(957825);
let l = Object.freeze({
        activeView: null,
        lastActiveView: null,
        activeViewType: null,
        searchQuery: '',
        isSearchSuggestion: !1,
        pickerId: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'uid_';
            return i()(e);
        }()
    }), u = (0, a.Z)((0, o.tJ)((e, t) => l, {
        name: 'expression-picker-last-active-view',
        partialize: e => ({ lastActiveView: e.lastActiveView })
    })), c = (e, t) => {
        u.setState({
            activeView: e,
            activeViewType: t,
            lastActiveView: u.getState().activeView
        });
    }, d = e => {
        let t = u.getState();
        if ((void 0 === e || e === t.activeViewType) && null !== t.activeView)
            u.setState({
                activeView: null,
                activeViewType: null,
                lastActiveView: t.activeView
            });
    }, _ = e => {
        let t = u.getState();
        if (null == t.activeView) {
            var n;
            c(null !== (n = t.lastActiveView) && void 0 !== n ? n : s.X1.EMOJI, e);
        } else
            d();
    }, E = (e, t) => {
        u.getState().activeView === e ? d() : c(e, t);
    }, f = e => {
        u.setState({
            activeView: e,
            lastActiveView: u.getState().activeView
        });
    }, h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        u.setState({
            searchQuery: e,
            isSearchSuggestion: t
        });
    }, p = u;
