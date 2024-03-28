    "use strict";
    r.r(t), r("653041"), r("47120"), r("312677");
    let n = (e, t, r, n) => {
      var o;
      let i;
      let {
        fineTuning: u,
        fineTuningResolution: f,
        duration: l
      } = r, a = Math.floor(t / n.waveformBlockWidth);
      if (u >= 0) {
        let t = Math.floor(e.length * (u - f * u / l) / l),
          r = Math.floor(e.length * (u + f * (l - u) / l) / l);
        i = e.slice(t, r)
      } else i = e;
      let c = Math.floor(i.length / a),
        s = [];
      for (let e = 0; e < a; e++) {
        let t = c * e,
          r = 0;
        for (let e = 0; e < c; e++) r += Math.abs(i[t + e]);
        s.push(r / c)
      }
      let p = Math.pow(Math.max(...s), -1),
        h = s.map(e => e * p),
        d = [...s].sort()[Math.floor(.95 * s.length)];
      return {
        normalizedData: h,
        normalizedVolumeMultipler: Math.min((null !== (o = n.loudnessThreshold) && void 0 !== o ? o : d) / d, 1)
      }
    };
    self.addEventListener("message", e => {
      let {
        data: {
          rawBufferData: t,
          width: r,
          options: o,
          config: i,
          id: u
        }
      } = e, {
        normalizedData: f,
        normalizedVolumeMultipler: l
      } = n(t, r, o, i);
      self.postMessage({
        waveform: f,
        id: u,
        normalizedVolumeMultipler: l
      })
    })