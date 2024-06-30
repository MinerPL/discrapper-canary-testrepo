var r, i, a, o;
function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function l() {
    return {
        num_failed: 0,
        num_delta_installed: 0,
        num_full_installed: 0,
        foreground_bytes_total: 0,
        background_bytes_total: 0,
        foreground_download_ms_total: 0,
        background_download_ms_total: 0,
        foreground_install_ms_total: 0,
        background_install_ms_total: 0
    };
}
function u(e) {
    return 'host' === e;
}
n.d(t, {
    Z: function () {
        return c;
    }
}), (a = r || (r = {})).CHECKING_FOR_UPDATES = 'checking-for-updates', a.INSTALLED_MODULE = 'installed-module', a.UPDATE_CHECK_FINISHED = 'update-check-finished', a.DOWNLOADING_MODULE = 'downloading-module', a.DOWNLOADING_MODULE_PROGRESS = 'downloading-module-progress', a.DOWNLOADING_MODULES_FINISHED = 'downloading-modules-finished', a.UPDATE_MANUALLY = 'update-manually', a.DOWNLOADED_MODULE = 'downloaded-module', a.INSTALLING_MODULES_FINISHED = 'installing-modules-finished', a.INSTALLING_MODULE = 'installing-module', a.INSTALLING_MODULE_PROGRESS = 'installing-module-progress', a.NO_PENDING_UPDATES = 'no-pending-updates', (o = i || (i = {})).CLOUD_SYNC = 'discord_cloudsync', o.DESKTOP_CORE = 'discord_desktop_core', o.DISPATCH = 'discord_dispatch', o.ERLPACK = 'discord_erlpack', o.GAME_UTILS = 'discord_game_utils', o.HOOK = 'discord_hook', o.KRISP = 'discord_krisp', o.MEDIA = 'discord_media', o.MODULES = 'discord_modules', o.OVERLAY2 = 'discord_overlay2', o.RPC = 'discord_rpc', o.SPELLCHECK = 'discord_spellcheck', o.UPDATER_BOOTSTRAP = 'discord_updater_bootstrap', o.UTILS = 'discord_utils', o.VIGILANTE = 'discord_vigilante', o.VOICE = 'discord_voice', o.ZSTD = 'discord_zstd';
class c {
    handleDownloadingModule(e) {
        if (!u(e.name)) {
            if (null != this._downloadingModules[e.name]) {
                console.warn('Duplicate downloading-module event for module ', e.name);
                return;
            }
            this._downloadingModules[e.name] = {
                startTime: BigInt(e.now),
                foreground: e.foreground
            };
        }
    }
    _updateReportField(e, t, n) {
        let r = this._report[e];
        null != r ? this._report[e] = n(r, t) : this._report[e] = t;
    }
    incrementReportField(e, t) {
        this._updateReportField(e, t, (e, t) => e + t);
    }
    setReportFieldMinimum(e, t) {
        this._updateReportField(e, t, Math.min);
    }
    setReportFieldMaximum(e, t) {
        this._updateReportField(e, t, Math.max);
    }
    handleDownloadedModule(e) {
        if (u(e.name))
            return;
        let t = this._downloadingModules[e.name];
        if (null == t) {
            console.warn('Downloaded complete without corresponding downloading event for module ', e.name);
            return;
        }
        let n = t.foreground ? 'foreground' : 'background', r = ''.concat(n, '_download_ms_').concat(e.name), i = ''.concat(n, '_bytes_').concat(e.name), a = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1000000)), o = !1 === e.receivedBytes ? 0 : e.receivedBytes;
        t.foreground ? (this._report.foreground_download_ms_total += a, this._report.foreground_bytes_total += o) : (this._report.background_download_ms_total += a, this._report.background_bytes_total += o), this.incrementReportField(r, a), this.incrementReportField(i, o), delete this._downloadingModules[e.name];
    }
    handleInstallingModule(e) {
        if (!u(e.name)) {
            if (null != this._installingModules[e.name]) {
                console.warn('Duplicate installing-module event for module ', e.name);
                return;
            }
            this._installingModules[e.name] = {
                startTime: BigInt(e.now),
                foreground: e.foreground,
                oldVersion: e.oldVersion,
                newVersion: e.newVersion
            };
        }
    }
    handleInstalledModule(e) {
        if (u(e.name))
            return;
        let t = this._installingModules[e.name];
        if (null == t)
            return;
        let n = t.foreground ? 'foreground' : 'background', r = ''.concat(n, '_install_ms_').concat(e.name), i = 'min_version_'.concat(e.name), a = 'max_version_'.concat(e.name), o = Number((BigInt(e.now) - t.startTime + BigInt(999999)) / BigInt(1000000));
        t.foreground ? this._report.foreground_install_ms_total += o : this._report.background_install_ms_total += o, this.incrementReportField(r, o), this.setReportFieldMinimum(i, t.oldVersion), e.succeeded ? (!0 === e.delta ? this._report.num_delta_installed++ : this._report.num_full_installed++, this.setReportFieldMaximum(a, t.newVersion)) : this._report.num_failed++, delete this._installingModules[e.name];
    }
    trackEvent(e) {
        switch (e.type) {
        case 'installing-module':
            this.handleInstallingModule(e);
            break;
        case 'installed-module':
            this.handleInstalledModule(e);
            break;
        case 'downloading-module':
            this.handleDownloadingModule(e);
            break;
        case 'downloaded-module':
            this.handleDownloadedModule(e);
        }
    }
    getStats() {
        return this._report;
    }
    reset() {
        this._report = l();
    }
    submissionReady() {
        return this._report.num_full_installed + this._report.num_failed + this._report.num_delta_installed + this._report.foreground_bytes_total + this._report.background_bytes_total !== 0 && !(Object.keys(this._installingModules).length > 0) && !(Object.keys(this._downloadingModules).length > 0) && !0;
    }
    constructor() {
        s(this, '_installingModules', {}), s(this, '_downloadingModules', {}), s(this, '_report', void 0), this._report = l();
    }
}
