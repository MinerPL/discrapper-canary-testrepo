var r,
    i = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    l = n(692547),
    u = n(477690),
    c = n(481060),
    d = n(585483),
    _ = n(624138),
    E = n(890056),
    f = n(636879),
    h = n(810847),
    p = n(898625),
    m = n(981631),
    I = n(328237);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = (0, _.Mg)(u.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    S = 1 / 120;
class A extends (r = a.Component) {
    componentDidMount() {
        this.initialize();
    }
    componentDidUpdate(e) {
        let { waveState: t } = this.props;
        t === p.hO.FILLING && t !== e.waveState && this.waveFill();
    }
    componentWillUnmount() {
        this.terminate();
    }
    initialize() {
        this.children.forEach((e) => e.initialize()), this.bindEvents(), this.resizeCanvas(), document.hidden && this.delayedPause();
    }
    terminate() {
        this.pause(), this.unbindEvents(), this.children.forEach((e) => e.terminate());
    }
    bindEvents() {
        window.addEventListener('resize', this.resizeCanvas, !1), window.addEventListener('blur', this.delayedPause, !1), window.addEventListener('focus', this.play, !1), document.addEventListener('visibilitychange', this.handleVisibilityChange, !1), d.S.subscribe(m.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize);
    }
    unbindEvents() {
        window.removeEventListener('resize', this.resizeCanvas, !1), window.removeEventListener('blur', this.delayedPause, !1), window.removeEventListener('focus', this.play, !1), document.removeEventListener('visibilitychange', this.handleVisibilityChange, !1), d.S.unsubscribe(m.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize);
    }
    advanceTransitionalState() {
        let { waveState: e } = this.props;
        (e === p.hO.INITIAL || e === p.hO.FILLING) && this.updateWaveState(e + 1);
    }
    waveFill() {
        this._isPlaying ? this.children.forEach((e) => e.fill()) : this.updateWaveState(p.hO.FILLED);
    }
    updateAnimation(e) {
        this.children.forEach((t) => t.update(e));
    }
    renderAnimation() {
        let { canvasFillStyle: e } = this.props,
            { canvasContext: t } = this;
        if (null != t) (t.fillStyle = e), t.fillRect(0, 0, this.width, this.height), this.children.forEach((e) => e.render(t));
    }
    render() {
        let { waveState: e, hideFallback: t, embedded: n } = this.props;
        return (0, i.jsx)(c.AccessibilityPreferencesContext.Consumer, {
            children: (r) => {
                let { reducedMotion: a } = r;
                return a.enabled
                    ? (0, i.jsx)('div', {
                          className: o()(I.fallbackImage, {
                              [I.embedded]: n,
                              [I.visible]: !t && e >= p.hO.ENTERED
                          })
                      })
                    : (0, i.jsx)('canvas', {
                          className: o()(I.canvas, { [I.embedded]: n }),
                          ref: this.setCanvas
                      });
            }
        });
    }
    constructor(e) {
        super(e),
            T(this, 'width', 0),
            T(this, 'height', 0),
            T(this, 'canvas', void 0),
            T(this, 'canvasContext', void 0),
            T(this, 'children', []),
            T(this, 'wave', void 0),
            T(this, 'ratio', 0),
            T(this, '_lastTick', 0),
            T(this, '_isPlaying', !1),
            T(this, '_reqAnimId', null),
            T(this, '_pauseTimeout', void 0),
            T(this, 'setCanvas', (e) => {
                var t;
                if (null == e) return;
                (this.canvas = e), (this.canvasContext = this.canvas.getContext('2d'));
                let n = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1,
                    r = this.canvasContext.webkitBackingStorePixelRatio || this.canvasContext.mozBackingStorePixelRatio || this.canvasContext.msBackingStorePixelRatio || this.canvasContext.oBackingStorePixelRatio || this.canvasContext.backingStorePixelRatio || 1;
                (this.ratio = n / r), this.resizeCanvas();
            }),
            T(this, 'resizeCanvas', () => {
                (this.width = window.innerWidth), (this.height = window.innerHeight);
                let { canvas: e, canvasContext: t, width: n, height: r, ratio: i } = this;
                null != e && null != t && ((e.width = n * i), (e.height = r * i), (e.style.width = n + 'px'), (e.style.height = r + 'px'), t.scale(i, i)), n <= g ? this.pause() : this.play(), this.wave.resizeWave(), this.renderAnimation();
            }),
            T(this, 'handleVisibilityChange', () => {
                document.hidden ? this.delayedPause() : this.play();
            }),
            T(this, 'play', () => {
                clearTimeout(this._pauseTimeout), !this._isPlaying && ((this._isPlaying = !0), this.run());
            }),
            T(this, 'pause', () => {
                clearTimeout(this._pauseTimeout), (this._isPlaying = !1), null != this._reqAnimId && window.cancelAnimationFrame(this._reqAnimId), (this._reqAnimId = null), this.advanceTransitionalState();
            }),
            T(this, 'delayedPause', () => {
                clearTimeout(this._pauseTimeout), (this._pauseTimeout = setTimeout(this.pause, 4000));
            }),
            T(this, 'updateWaveState', (e) => {
                let { updateWaveState: t } = this.props;
                t(e);
            }),
            T(this, 'handleWaveEmphasize', () => {
                this.wave.emphasize();
            }),
            T(this, 'run', () => {
                if (!this._isPlaying) return;
                if (0 === this._lastTick) {
                    (this._lastTick = Date.now()), (this._reqAnimId = requestAnimationFrame(this.run));
                    return;
                }
                let e = Date.now(),
                    t = Math.min((e - this._lastTick) / 1000, 8 * S);
                for (; t > 0; ) {
                    let e = t < S ? t : S;
                    this.updateAnimation(e), (t -= e);
                }
                this.renderAnimation(), (this._lastTick = e), (this._reqAnimId = requestAnimationFrame(this.run));
            }),
            (this.wave = new h.Z(this.updateWaveState)),
            (this.children = [new E.Z(), new f.Z(), this.wave]);
    }
}
T(A, 'defaultProps', { embedded: !1 });
t.Z = (e) => {
    let t = (0, c.useToken)(l.Z.unsafe_rawColors.PRIMARY_630).hex();
    return (0, i.jsx)(A, {
        canvasFillStyle: t,
        ...e
    });
};
