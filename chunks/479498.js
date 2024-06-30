n.d(t, {
    k: function () {
        return f;
    }
}), n(47120);
var r, i = n(735250), a = n(470079), o = n(120356), s = n.n(o), l = n(442837), u = n(607070), c = n(451478), d = n(740888);
function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class E extends (r = a.PureComponent) {
    async componentDidMount() {
        let {
                importData: e,
                nextScene: t,
                pauseWhileUnfocused: r,
                pause: i,
                isWindowFocused: a,
                useReducedMotion: o
            } = this.props, [s, {default: l}] = await Promise.all([
                e(),
                n.e('23755').then(n.t.bind(n, 500923, 23))
            ]);
        if (null != this.animationRef)
            this.animation = l.loadAnimation({
                container: this.animationRef,
                renderer: 'svg',
                loop: !0,
                autoplay: !0,
                animationData: s
            }), this.animation.addEventListener('loopComplete', this.handleLoopComplete), this.animation.addEventListener('complete', this.handleComplete), this.animation.addEventListener('enterFrame', this.handleEnterFrame), this.playScene(t), (r && !a || i || o) && this.animation.pause();
    }
    componentWillUnmount() {
        this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0);
    }
    componentDidUpdate(e) {
        var t, n, r;
        let {
            nextScene: i,
            pauseWhileUnfocused: a,
            pause: o,
            isWindowFocused: s,
            useReducedMotion: l
        } = this.props;
        i !== this.currentScene && this.shouldForcePlayAfter() && !o && this.playScene(i), null != this.animation && (a && !e.isWindowFocused && s && !l && !0 !== o ? this.animation.play() : (l || a && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && o ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !o && !l && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== i && o && (this.playScene(i), null === (r = this.animation) || void 0 === r || r.pause());
    }
    shouldForcePlayAfter() {
        let {sceneSegments: e} = this.props;
        return !0 === e[this.currentScene].shouldForcePlayAfter;
    }
    playScene(e) {
        if (this.isUnmounted)
            return;
        let {
                onScenePlay: t,
                sceneSegments: n,
                useReducedMotion: r
            } = this.props, i = n[e], a = n[this.currentScene];
        if (null != this.animation && (e === this.currentScene || i.BEG !== a.BEG || i.END !== a.END) && this.animation.playSegments([
                i.BEG,
                i.END
            ], !0), this.currentScene = e, null != t && t(this.currentScene), r) {
            var o;
            null === (o = this.animation) || void 0 === o || o.pause();
        }
    }
    render() {
        return (0, i.jsx)('div', {
            ref: this.handleSetRef,
            className: s()(this.props.className, d.wrapper)
        });
    }
    constructor(...e) {
        super(...e), _(this, 'animationRef', null), _(this, 'animation', void 0), _(this, 'currentScene', this.props.nextScene), _(this, 'isUnmounted', !1), _(this, 'handleLoopComplete', () => {
            let {
                onSceneComplete: e,
                nextScene: t
            } = this.props;
            null != e && e(this.currentScene), this.playScene(t);
        }), _(this, 'handleComplete', () => {
            let {onSceneComplete: e} = this.props;
            null != e && e(this.currentScene);
        }), _(this, 'handleEnterFrame', e => {
            let {onEnterFrame: t} = this.props;
            null == t || t(this.currentScene, e);
        }), _(this, 'handleSetRef', e => {
            this.animationRef = e;
            let {animationRef: t} = this.props;
            null != t && t(e);
        });
    }
}
_(E, 'defaultProps', {
    pauseWhileUnfocused: !0,
    pause: !1
});
let f = e => {
    let {
            componentRef: t,
            ignoreReducedMotion: n = !1,
            ...r
        } = e, a = (0, l.e7)([c.Z], () => c.Z.isFocused()), o = (0, l.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, i.jsx)(E, {
        ...r,
        isWindowFocused: a,
        useReducedMotion: o && !n,
        ref: t
    });
};
