/*! Built with http://stenciljs.com (es5) */

window['mdc-text-field'].loadStyles("mdc-text-field","\@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}\@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:1}}\@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:1}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug[data-mdc-text-field]{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug[data-mdc-text-field]::before{border:var(--mdc-ripple-surface-test-edge-var)}\@keyframes invalid-shake-float-above-standard{0%{transform:translateX(0) translateY(-100%) scale(0.75, 0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(10px) translateY(-100%) scale(0.75, 0.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(-5px) translateY(-100%) scale(0.75, 0.75)}100%{transform:translateX(0) translateY(-100%) scale(0.75, 0.75)}}\@keyframes invalid-shake-float-above-box{0%{transform:translateX(0) translateY(-50%) scale(0.75, 0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(10px) translateY(-50%) scale(0.75, 0.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(-5px) translateY(-50%) scale(0.75, 0.75)}100%{transform:translateX(0) translateY(-50%) scale(0.75, 0.75)}}.mdc-text-field[data-mdc-text-field]{display:inline-block;position:relative;margin-bottom:8px;will-change:opacity, transform, color}.mdc-text-field__input[data-mdc-text-field]{color:rgba(0,0,0,0.87);color:var(--mdc-theme-text-primary-on-light, rgba(0,0,0,0.87));font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;letter-spacing:0.04em;width:100%;padding:0 0 8px;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);border:none;border-bottom:1px solid rgba(0,0,0,0.5);background:none;font-size:inherit;appearance:none}.mdc-text-field__input[data-mdc-text-field]::placeholder{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-hint-on-light, rgba(0,0,0,0.38));transition:color 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-text-field__input[data-mdc-text-field]:hover{border-color:#000}.mdc-text-field__input[data-mdc-text-field]:focus{outline:none}.mdc-text-field__input[data-mdc-text-field]:focus::placeholder{color:rgba(255,255,255,0.3)}.mdc-text-field__input[data-mdc-text-field]:invalid{box-shadow:none}.mdc-text-field__input--theme-dark[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{color:#fff;color:var(--mdc-theme-text-primary-on-dark, #fff);border-bottom:1px solid rgba(255,255,255,0.5)}.mdc-text-field__input--theme-dark[data-mdc-text-field]:hover, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:hover{border-bottom:1px solid #fff}.mdc-text-field__input--theme-dark[data-mdc-text-field]::placeholder, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]::placeholder{color:rgba(255,255,255,0.5);color:var(--mdc-theme-text-hint-on-dark, rgba(255,255,255,0.5))}.mdc-text-field__input--theme-dark[data-mdc-text-field]:focus::placeholder, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus::placeholder{color:rgba(0,0,0,0.38)}.mdc-text-field__bottom-line[data-mdc-text-field]{background-color:#3f51b5;background-color:var(--mdc-theme-primary, #3f51b5);position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;z-index:2}.mdc-text-field__bottom-line--active[data-mdc-text-field]{transform:scaleX(1)}.mdc-text-field[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus    ~ .mdc-text-field__bottom-line[data-mdc-text-field]{opacity:1}.mdc-text-field__label[data-mdc-text-field]{position:absolute;bottom:8px;left:0;transform-origin:left top;transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),color 180ms cubic-bezier(0.4, 0, 0.2, 1);color:rgba(0,0,0,0.5);cursor:text}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{right:0;left:auto;transform-origin:right top}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{color:rgba(255,255,255,0.6)}.mdc-text-field__label--float-above[data-mdc-text-field]{transform:translateY(-100%) scale(0.75, 0.75);cursor:auto}.mdc-text-field__input[data-mdc-text-field]:-webkit-autofill + .mdc-text-field__label[data-mdc-text-field]{transform:translateY(-100%) scale(0.75, 0.75);cursor:auto}.mdc-text-field--box[data-mdc-text-field]{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;will-change:transform, opacity;-webkit-tap-highlight-color:transparent;border-radius:4px 4px 0 0;display:inline-flex;position:relative;height:56px;background-color:rgba(0,0,0,0.04);overflow:hidden}.mdc-text-field--box[data-mdc-text-field]::before, .mdc-text-field--box[data-mdc-text-field]::after{position:absolute;transition:opacity 250ms linear;border-radius:50%;pointer-events:none;content:\"\"}.mdc-text-field--box[data-mdc-text-field]::before, .mdc-text-field--box[data-mdc-text-field]::after{background-color:rgba(0,0,0,0.04);opacity:0}.mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):hover::before, .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):active::after{transition-duration:85ms;opacity:.6}.mdc-text-field--box.mdc-ripple-upgraded--background-focused[data-mdc-text-field]::before{opacity:.99999}.mdc-text-field--box.mdc-ripple-upgraded--background-active-fill[data-mdc-text-field]::before{transition-duration:120ms;opacity:1}.mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::after{opacity:0}.mdc-text-field--box.mdc-ripple-upgraded--foreground-activation[data-mdc-text-field]::after{animation:300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards}.mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation[data-mdc-text-field]::after{animation:83ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--box[data-mdc-text-field]::before, .mdc-text-field--box[data-mdc-text-field]::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%;transform:scale(var(--mdc-ripple-fg-scale, 0))}.mdc-text-field--box.mdc-ripple-upgraded--unbounded[data-mdc-text-field]::before{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%);transform:scale(var(--mdc-ripple-fg-scale, 0))}.mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::after{top:0;left:0;width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%);transform:scale(0);transform-origin:center center}.mdc-text-field--box.mdc-ripple-upgraded--unbounded[data-mdc-text-field]::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]{background-color:rgba(255,255,255,0.1)}.mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]::before, .mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]::after{background-color:rgba(255,255,255,0.05);opacity:0}.mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):hover::before, .mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):active::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):hover::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):focus::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):active::after{transition-duration:85ms;opacity:.6}.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded--background-focused[data-mdc-text-field]::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded--background-focused[data-mdc-text-field]::before{opacity:.99999}.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded--background-active-fill[data-mdc-text-field]::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded--background-active-fill[data-mdc-text-field]::before{transition-duration:120ms;opacity:1}.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::after{opacity:0}.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded--foreground-activation[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded--foreground-activation[data-mdc-text-field]::after{animation:300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards}.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation[data-mdc-text-field]::after{animation:83ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{align-self:flex-end;box-sizing:border-box;height:100%;padding:20px 16px 0}.mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{left:16px;right:initial;position:absolute;bottom:20px;width:calc(100% - 48px);color:rgba(0,0,0,0.6);text-overflow:ellipsis;white-space:nowrap;pointer-events:none;overflow:hidden;will-change:transform}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field]{left:initial;right:16px}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{color:rgba(255,255,255,0.7);color:var(--mdc-theme-text-secondary-on-dark, rgba(255,255,255,0.7))}.mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label--float-above[data-mdc-text-field]{transform:translateY(-50%) scale(0.75, 0.75)}.mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label--float-above.mdc-text-field__label--shake[data-mdc-text-field]{animation:invalid-shake-float-above-box 250ms 1}.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]{color:rgba(255,255,255,0.3);border-bottom:none;background-color:rgba(0,0,0,0.02)}.mdc-text-field--theme-dark.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]{background-color:#303030;color:rgba(0,0,0,0.38);border-bottom:none}.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{bottom:20px}.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field]{color:rgba(0,0,0,0.3)}.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__icon--theme-dark[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field]{color:rgba(255,255,255,0.3)}.mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{padding:12px 12px 0}.mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{left:12px;right:initial;bottom:20px}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field]{left:initial;right:12px}.mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label--float-above[data-mdc-text-field]{transform:translateY(calc(-75% - 2px)) scale(0.923, 0.923)}.mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field]{position:absolute;bottom:16px;cursor:pointer}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field]{color:rgba(255,255,255,0.7);color:var(--mdc-theme-text-secondary-on-dark, rgba(255,255,255,0.7))}.mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{padding-left:48px;padding-right:15px}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__input[dir=\"rtl\"][data-mdc-text-field]{padding-left:15px;padding-right:48px}.mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field]{left:15px;right:initial}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[dir=\"rtl\"][data-mdc-text-field]{left:initial;right:15px}.mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{left:48px;right:initial}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field]{left:initial;right:48px}.mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{padding-left:15px;padding-right:48px}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__input[dir=\"rtl\"][data-mdc-text-field]{padding-left:48px;padding-right:15px}.mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field]{left:initial;right:15px}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[dir=\"rtl\"][data-mdc-text-field]{left:15px;right:initial}.mdc-text-field__icon[data-mdc-text-field]:not([tabindex]), .mdc-text-field__icon[tabindex=\"-1\"][data-mdc-text-field]{cursor:default;pointer-events:none}.mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field]{bottom:16px;transform:scale(0.8)}.mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{padding-left:38px;padding-right:12px}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[dir=\"rtl\"][data-mdc-text-field]{padding-left:12px;padding-right:38px}.mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field]{left:12px;right:initial}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[dir=\"rtl\"][data-mdc-text-field]{left:initial;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{left:38px;right:initial}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field]{left:initial;right:38px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{padding-left:12px;padding-right:38px}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[dir=\"rtl\"][data-mdc-text-field]{padding-left:38px;padding-right:12px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field]{left:initial;right:12px}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[dir=\"rtl\"][data-mdc-text-field]{left:12px;right:initial}.mdc-text-field--upgraded[data-mdc-text-field]:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box){display:inline-flex;position:relative;align-items:flex-end;box-sizing:border-box;margin-top:16px}.mdc-text-field--upgraded[data-mdc-text-field]:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box):not(.mdc-text-field--textarea){height:48px}.mdc-text-field--upgraded[data-mdc-text-field]:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box)   .mdc-text-field__label[data-mdc-text-field]{pointer-events:none}.mdc-text-field--invalid[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{color:#d50000}.mdc-text-field--invalid[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{border-color:#d50000}.mdc-text-field--invalid[data-mdc-text-field]   .mdc-text-field__bottom-line[data-mdc-text-field]{background-color:#d50000}.mdc-text-field--invalid.mdc-text-field--textarea[data-mdc-text-field]{border-color:#d50000}.mdc-text-field__label--float-above.mdc-text-field__label--shake[data-mdc-text-field]{animation:invalid-shake-float-above-standard 250ms 1}.mdc-text-field--dense[data-mdc-text-field]{margin-top:12px;margin-bottom:4px;font-size:.813rem}.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label--float-above[data-mdc-text-field]{transform:translateY(calc(-100% - 2px)) scale(0.923, 0.923)}.mdc-text-field--disabled[data-mdc-text-field]{pointer-events:none}.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{border-bottom:1px dotted rgba(35,31,32,0.26)}.mdc-text-field--theme-dark.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{border-bottom:1px dotted rgba(255,255,255,0.3)}.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--disabled[data-mdc-text-field] + .mdc-text-field-helptext[data-mdc-text-field]{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0,0,0,0.38))}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{color:rgba(255,255,255,0.5);color:var(--mdc-theme-text-disabled-on-dark, rgba(255,255,255,0.5))}.mdc-text-field--theme-dark.mdc-text-field--disabled[data-mdc-text-field] + .mdc-text-field-helptext[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field] + .mdc-text-field-helptext[data-mdc-text-field]{color:rgba(255,255,255,0.5);color:var(--mdc-theme-text-disabled-on-dark, rgba(255,255,255,0.5))}.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{bottom:8px;cursor:default}.mdc-text-field--invalid.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0,0,0,0.38))}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--invalid.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--invalid.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{color:rgba(255,255,255,0.5);color:var(--mdc-theme-text-disabled-on-dark, rgba(255,255,255,0.5))}.mdc-text-field__input[data-mdc-text-field]:required + .mdc-text-field__label[data-mdc-text-field]::after{margin-left:1px;content:\"*\"}.mdc-text-field--focused[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:required + .mdc-text-field__label[data-mdc-text-field]::after{color:#d50000}.mdc-text-field--theme-dark.mdc-text-field--focused[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:required + .mdc-text-field__label[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--focused[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:required + .mdc-text-field__label[data-mdc-text-field]::after{color:#ff6e6e}.mdc-text-field--textarea[data-mdc-text-field]{border-radius:4px;display:flex;height:initial;transition:none;border:1px solid rgba(0,0,0,0.73);overflow:hidden}.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{border-radius:4px 4px 0 0}.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{border-radius:2px}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]{border-color:#fff}.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]{padding:16px;padding-top:32px;border:1px solid transparent}.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus{border-color:#3f51b5;border-color:var(--mdc-theme-primary, #3f51b5)}.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus){border-color:#d50000}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:hover, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:hover{border-bottom-color:transparent}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus{border-color:#ff4081;border-color:var(--mdc-theme-secondary, #ff4081)}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus), .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus){border-color:#ff6e6e}.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{left:1px;right:initial;top:18px;bottom:auto;padding:8px 16px;background-color:#fff}[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field]{left:initial;right:1px}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{background-color:#303030}.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label--float-above[data-mdc-text-field]{transform:translateY(-50%) scale(0.923, 0.923)}.mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field]{border-style:solid;border-color:rgba(35,31,32,0.26);background-color:#f9f9f9}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field]{border-color:rgba(255,255,255,0.3);background-color:#2f2f2f}.mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{background-color:#f9f9f9}.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field]{background-color:#2f2f2f}.mdc-text-field--textarea[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]{padding-top:16px}.mdc-text-field--textarea.mdc-text-field--focused[data-mdc-text-field]{border-color:#3f51b5;border-color:var(--mdc-theme-primary, #3f51b5)}.mdc-text-field--fullwidth[data-mdc-text-field]{width:100%}.mdc-text-field--fullwidth[data-mdc-text-field]:not(.mdc-text-field--textarea){display:block;box-sizing:border-box;height:56px;margin:0;border:none;border-bottom:1px solid rgba(0,0,0,0.12);outline:none}.mdc-text-field--fullwidth[data-mdc-text-field]:not(.mdc-text-field--textarea)   .mdc-text-field__input[data-mdc-text-field]{width:100%;height:100%;padding:0;resize:none;border:none !important}.mdc-text-field--fullwidth--theme-dark[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--fullwidth[data-mdc-text-field]{border-bottom:1px solid rgba(255,255,255,0.12)}.mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded):not(.mdc-text-field--textarea)   .mdc-text-field__input[data-mdc-text-field]{transition:border-bottom-color 180ms cubic-bezier(0.4, 0, 0.2, 1);border-bottom:1px solid rgba(0,0,0,0.12)}.mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:focus{border-color:#3f51b5;border-color:var(--mdc-theme-primary, #3f51b5)}.mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:disabled{color:rgba(0,0,0,0.38);border-bottom-style:dotted}.mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus){border-color:#d50000}.mdc-text-field--theme-dark[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:not(:focus), .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:not(:focus){border-color:rgba(255,255,255,0.12)}.mdc-text-field--theme-dark[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:disabled, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:disabled{color:rgba(0,0,0,0.38);border-color:rgba(255,255,255,0.3);background-color:#2f2f2f}.mdc-text-field--theme-dark[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus), .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus){border-color:#ff6e6e}.mdc-text-field--box[data-mdc-text-field]:not(.mdc-text-field--upgraded){height:56px}.mdc-text-field--box[data-mdc-text-field]:not(.mdc-text-field--upgraded)::before, .mdc-text-field--box[data-mdc-text-field]:not(.mdc-text-field--upgraded)::after{border-radius:0}.mdc-text-field--box[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]{padding-top:0}.mdc-text-field-helptext[data-mdc-text-field]{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-hint-on-light, rgba(0,0,0,0.38));margin:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;font-size:.75rem;will-change:opacity}.mdc-text-field-helptext--theme-dark[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field-helptext[data-mdc-text-field]{color:rgba(255,255,255,0.5);color:var(--mdc-theme-text-hint-on-dark, rgba(255,255,255,0.5))}.mdc-text-field[data-mdc-text-field] + .mdc-text-field-helptext[data-mdc-text-field]{margin-bottom:8px}.mdc-text-field--dense[data-mdc-text-field] + .mdc-text-field-helptext[data-mdc-text-field]{margin-bottom:4px}.mdc-text-field--focused[data-mdc-text-field] + .mdc-text-field-helptext[data-mdc-text-field]:not(.mdc-text-field-helptext--validation-msg){opacity:1}.mdc-text-field--box[data-mdc-text-field] + .mdc-text-field-helptext[data-mdc-text-field]{margin-right:16px;margin-left:16px}.mdc-text-field-helptext--persistent[data-mdc-text-field]{transition:none;opacity:1;will-change:initial}.mdc-text-field--invalid[data-mdc-text-field] + .mdc-text-field-helptext--validation-msg[data-mdc-text-field]{opacity:1;color:#d50000}.mdc-text-field--theme-dark.mdc-text-field--invalid[data-mdc-text-field] + .mdc-text-field-helptext--validation-msg[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--invalid[data-mdc-text-field] + .mdc-text-field-helptext--validation-msg[data-mdc-text-field]{color:#ff6e6e}.mdc-form-field[data-mdc-text-field] > .mdc-text-field[data-mdc-text-field] + label[data-mdc-text-field]{align-self:flex-start}#mdcTextField[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus    ~ .mdc-text-field-helper-text[data-mdc-text-field]{display:none}#mdcTextField[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus    ~ .mdc-text-field-helper-text--persistent[data-mdc-text-field]{display:inherit !important}\nmdc-text-field.hydrated{visibility:inherit}");
window['mdc-text-field'].loadComponents(

/**** module id (dev mode) ****/
"ynr6bdaf",

/**** component modules ****/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function importComponent(exports, h, Context, publicPath) {
    "use strict";
    // @stencil/core
    function getClassesFromMap(map) {
        var classes = [];
        map.forEach(function (value, className) {
            if (value) {
                classes.push(className);
            }
        });
        return classes.join(' ');
    }
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @template A
     */
    var MDCFoundation = /** @class */ (function () {
        /**
         * @param {A=} adapter
         */
        function MDCFoundation(adapter) {
            if (adapter === void 0) { adapter = {}; }
            /** @protected {!A} */
            this.adapter_ = adapter;
        }
        Object.defineProperty(MDCFoundation, "cssClasses", {
            /** @return enum{cssClasses} */
            get: function () {
                // Classes extending MDCFoundation should implement this method to return an object which exports every
                // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
                return {};
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCFoundation, "strings", {
            /** @return enum{strings} */
            get: function () {
                // Classes extending MDCFoundation should implement this method to return an object which exports all
                // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
                return {};
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCFoundation, "numbers", {
            /** @return enum{numbers} */
            get: function () {
                // Classes extending MDCFoundation should implement this method to return an object which exports all
                // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
                return {};
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCFoundation, "defaultAdapter", {
            /** @return {!Object} */
            get: function () {
                // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
                // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
                // validation.
                return {};
            },
            enumerable: true,
            configurable: true
        });
        MDCFoundation.prototype.init = function () {
            // Subclasses should override this method to perform initialization routines (registering events, etc.)
        };
        MDCFoundation.prototype.destroy = function () {
            // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
        };
        return MDCFoundation;
    }());
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @template F
     */
    var MDCComponent = /** @class */ (function () {
        /**
         * @param {!Element} root
         * @param {F=} foundation
         * @param {...?} args
         */
        function MDCComponent(root, foundation) {
            if (foundation === void 0) { foundation = undefined; }
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            /** @protected {!Element} */
            this.root_ = root;
            this.initialize.apply(this, args);
            // Note that we initialize foundation here and not within the constructor's default param so that
            // this.root_ is defined and can be used within the foundation class.
            /** @protected {!F} */
            this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
            this.foundation_.init();
            this.initialSyncWithDOM();
        }
        /**
         * @param {!Element} root
         * @return {!MDCComponent}
         */
        MDCComponent.attachTo = function (root) {
            // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
            // returns an instantiated component with its root set to that element. Also note that in the cases of
            // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
            // from getDefaultFoundation().
            return new MDCComponent(root, new MDCFoundation());
        };
        MDCComponent.prototype.initialize = function () {
            // Subclasses can override this to do any additional setup work that would be considered part of a
            // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
            // initialized. Any additional arguments besides root and foundation will be passed in here.
        };
        /**
         * @return {!F} foundation
         */
        MDCComponent.prototype.getDefaultFoundation = function () {
            // Subclasses must override this method to return a properly configured foundation class for the
            // component.
            throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
                'foundation class');
        };
        MDCComponent.prototype.initialSyncWithDOM = function () {
            // Subclasses should override this method if they need to perform work to synchronize with a host DOM
            // object. An example of this would be a form control wrapper that needs to synchronize its internal state
            // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
            // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
        };
        MDCComponent.prototype.destroy = function () {
            // Subclasses may implement this method to release any resources / deregister any listeners they have
            // attached. An example of this might be deregistering a resize event from the window object.
            this.foundation_.destroy();
        };
        /**
         * Wrapper method to add an event listener to the component's root element. This is most useful when
         * listening for custom events.
         * @param {string} evtType
         * @param {!Function} handler
         */
        MDCComponent.prototype.listen = function (evtType, handler) {
            this.root_.addEventListener(evtType, handler);
        };
        /**
         * Wrapper method to remove an event listener to the component's root element. This is most useful when
         * unlistening for custom events.
         * @param {string} evtType
         * @param {!Function} handler
         */
        MDCComponent.prototype.unlisten = function (evtType, handler) {
            this.root_.removeEventListener(evtType, handler);
        };
        /**
         * Fires a cross-browser-compatible custom event from the component root of the given type,
         * with the given data.
         * @param {string} evtType
         * @param {!Object} evtData
         * @param {boolean=} shouldBubble
         */
        MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
            if (shouldBubble === void 0) { shouldBubble = false; }
            var evt;
            if (typeof CustomEvent === 'function') {
                evt = new CustomEvent(evtType, {
                    detail: evtData,
                    bubbles: shouldBubble,
                });
            }
            else {
                evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(evtType, shouldBubble, false, evtData);
            }
            this.root_.dispatchEvent(evt);
        };
        return MDCComponent;
    }());
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /* eslint no-unused-vars: [2, {"args": "none"}] */
    /**
     * Adapter for MDC Ripple. Provides an interface for managing
     * - classes
     * - dom
     * - CSS variables
     * - position
     * - dimensions
     * - scroll position
     * - event handlers
     * - unbounded, active and disabled states
     *
     * Additionally, provides type information for the adapter to the Closure
     * compiler.
     *
     * Implement this adapter for your framework of choice to delegate updates to
     * the component in your framework of choice. See architecture documentation
     * for more details.
     * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
     *
     * @record
     */
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var cssClasses = {
        // Ripple is a special case where the "root" component is really a "mixin" of sorts,
        // given that it's an 'upgrade' to an existing component. That being said it is the root
        // CSS class that all other CSS classes derive from.
        ROOT: 'mdc-ripple-upgraded',
        UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
        BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
        BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    };
    var strings = {
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top',
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    };
    var numbers = {
        PADDING: 10,
        INITIAL_ORIGIN_SCALE: 0.6,
        DEACTIVATION_TIMEOUT_MS: 300,
        FG_DEACTIVATION_MS: 83,
    };
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
     * @private {boolean|undefined}
     */
    var supportsCssVariables_;
    /**
     * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
     * @private {boolean|undefined}
     */
    var supportsPassive_;
    /**
     * @param {!Window} windowObj
     * @return {boolean}
     */
    function detectEdgePseudoVarBug(windowObj) {
        // Detect versions of Edge with buggy var() support
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
        var document = windowObj.document;
        var node = document.createElement('div');
        node.className = 'mdc-ripple-surface--test-edge-var-bug';
        document.body.appendChild(node);
        // The bug exists if ::before style ends up propagating to the parent element.
        // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
        // but Firefox is known to support CSS custom properties correctly.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        var computedStyle = windowObj.getComputedStyle(node);
        var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
        node.remove();
        return hasPseudoVarBug;
    }
    /**
     * @param {!Window} windowObj
     * @param {boolean=} forceRefresh
     * @return {boolean|undefined}
     */
    function supportsCssVariables(windowObj, forceRefresh) {
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
            return supportsCssVariables_;
        }
        var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
        if (!supportsFunctionPresent) {
            return;
        }
        var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
        // See: https://bugs.webkit.org/show_bug.cgi?id=154669
        // See: README section on Safari
        var weAreFeatureDetectingSafari10plus = (windowObj.CSS.supports('(--css-vars: yes)') &&
            windowObj.CSS.supports('color', '#00000000'));
        if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
            supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
        }
        else {
            supportsCssVariables_ = false;
        }
        return supportsCssVariables_;
    }
    //
    /**
     * Determine whether the current browser supports passive event listeners, and if so, use them.
     * @param {!Window=} globalObj
     * @param {boolean=} forceRefresh
     * @return {boolean|{passive: boolean}}
     */
    function applyPassive(globalObj, forceRefresh) {
        if (globalObj === void 0) { globalObj = window; }
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (supportsPassive_ === undefined || forceRefresh) {
            var isSupported_1 = false;
            try {
                globalObj.document.addEventListener('test', null, { get passive() {
                        isSupported_1 = true;
                    } });
            }
            catch (e) { }
            supportsPassive_ = isSupported_1;
        }
        return supportsPassive_ ? { passive: true } : false;
    }
    /**
     * @param {!Object} HTMLElementPrototype
     * @return {!Array<string>}
     */
    function getMatchesProperty(HTMLElementPrototype) {
        return [
            'webkitMatchesSelector', 'msMatchesSelector', 'matches',
        ].filter(function (p) { return p in HTMLElementPrototype; }).pop();
    }
    /**
     * @param {!Event} ev
     * @param {!{x: number, y: number}} pageOffset
     * @param {!ClientRect} clientRect
     * @return {!{x: number, y: number}}
     */
    function getNormalizedEventCoords(ev, pageOffset, clientRect) {
        var x = pageOffset.x, y = pageOffset.y;
        var documentX = x + clientRect.left;
        var documentY = y + clientRect.top;
        var normalizedX;
        var normalizedY;
        // Determine touch point relative to the ripple container.
        if (ev.type === 'touchstart') {
            normalizedX = ev.changedTouches[0].pageX - documentX;
            normalizedY = ev.changedTouches[0].pageY - documentY;
        }
        else {
            normalizedX = ev.pageX - documentX;
            normalizedY = ev.pageY - documentY;
        }
        return { x: normalizedX, y: normalizedY };
    }
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @enum {string}
     */
    var DEACTIVATION_ACTIVATION_PAIRS = {
        mouseup: 'mousedown',
        pointerup: 'pointerdown',
        touchend: 'touchstart',
        keyup: 'keydown',
        blur: 'focus',
    };
    /**
     * @extends {MDCFoundation<!MDCRippleAdapter>}
     */
    var MDCRippleFoundation = /** @class */ (function (_super) {
        __extends(MDCRippleFoundation, _super);
        function MDCRippleFoundation(adapter) {
            var _this = _super.call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)) || this;
            /** @private {number} */
            _this.layoutFrame_ = 0;
            /** @private {!ClientRect} */
            _this.frame_ = /** @type {!ClientRect} */ ({ width: 0, height: 0 });
            /** @private {!ActivationStateType} */
            _this.activationState_ = _this.defaultActivationState_();
            /** @private {number} */
            _this.xfDuration_ = 0;
            /** @private {number} */
            _this.initialSize_ = 0;
            /** @private {number} */
            _this.maxRadius_ = 0;
            /** @private {!Array<{ListenerInfoType}>} */
            _this.listenerInfos_ = [
                { activate: 'touchstart', deactivate: 'touchend' },
                { activate: 'pointerdown', deactivate: 'pointerup' },
                { activate: 'mousedown', deactivate: 'mouseup' },
                { activate: 'keydown', deactivate: 'keyup' },
                { focus: 'focus', blur: 'blur' },
            ];
            /** @private {!ListenersType} */
            _this.listeners_ = {
                activate: function (e) { return _this.activate_(e); },
                deactivate: function (e) { return _this.deactivate_(e); },
                focus: function () { return requestAnimationFrame(function () { return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); }); },
                blur: function () { return requestAnimationFrame(function () { return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); }); },
            };
            /** @private {!Function} */
            _this.resizeHandler_ = function () { return _this.layout(); };
            /** @private {!{left: number, top:number}} */
            _this.unboundedCoords_ = {
                left: 0,
                top: 0,
            };
            /** @private {number} */
            _this.fgScale_ = 0;
            /** @private {number} */
            _this.activationTimer_ = 0;
            /** @private {number} */
            _this.fgDeactivationRemovalTimer_ = 0;
            /** @private {boolean} */
            _this.activationAnimationHasEnded_ = false;
            /** @private {!Function} */
            _this.activationTimerCallback_ = function () {
                _this.activationAnimationHasEnded_ = true;
                _this.runDeactivationUXLogicIfReady_();
            };
            return _this;
        }
        Object.defineProperty(MDCRippleFoundation, "cssClasses", {
            get: function () {
                return cssClasses;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "strings", {
            get: function () {
                return strings;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "numbers", {
            get: function () {
                return numbers;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
            get: function () {
                return {
                    browserSupportsCssVars: function () { },
                    isUnbounded: function () { },
                    isSurfaceActive: function () { },
                    isSurfaceDisabled: function () { },
                    addClass: function () { },
                    removeClass: function () { },
                    registerInteractionHandler: function () { },
                    deregisterInteractionHandler: function () { },
                    registerResizeHandler: function () { },
                    deregisterResizeHandler: function () { },
                    updateCssVariable: function () { },
                    computeBoundingRect: function () { },
                    getWindowPageOffset: function () { },
                };
            },
            enumerable: true,
            configurable: true
        });
        /**
         * We compute this property so that we are not querying information about the client
         * until the point in time where the foundation requests it. This prevents scenarios where
         * client-side feature-detection may happen too early, such as when components are rendered on the server
         * and then initialized at mount time on the client.
         * @return {boolean}
         * @private
         */
        MDCRippleFoundation.prototype.isSupported_ = function () {
            return this.adapter_.browserSupportsCssVars();
        };
        /**
         * @return {!ActivationStateType}
         */
        MDCRippleFoundation.prototype.defaultActivationState_ = function () {
            return {
                isActivated: false,
                hasDeactivationUXRun: false,
                wasActivatedByPointer: false,
                wasElementMadeActive: false,
                activationStartTime: 0,
                activationEvent: null,
                isProgrammatic: false,
            };
        };
        MDCRippleFoundation.prototype.init = function () {
            var _this = this;
            if (!this.isSupported_()) {
                return;
            }
            this.addEventListeners_();
            var _a = MDCRippleFoundation.cssClasses, ROOT = _a.ROOT, UNBOUNDED = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.addClass(ROOT);
                if (_this.adapter_.isUnbounded()) {
                    _this.adapter_.addClass(UNBOUNDED);
                }
                _this.layoutInternal_();
            });
        };
        /** @private */
        MDCRippleFoundation.prototype.addEventListeners_ = function () {
            var _this = this;
            this.listenerInfos_.forEach(function (info) {
                Object.keys(info).forEach(function (k) {
                    _this.adapter_.registerInteractionHandler(info[k], _this.listeners_[k]);
                });
            });
            this.adapter_.registerResizeHandler(this.resizeHandler_);
        };
        /**
         * @param {Event} e
         * @private
         */
        MDCRippleFoundation.prototype.activate_ = function (e) {
            var _this = this;
            if (this.adapter_.isSurfaceDisabled()) {
                return;
            }
            var activationState = this.activationState_;
            if (activationState.isActivated) {
                return;
            }
            activationState.isActivated = true;
            activationState.isProgrammatic = e === null;
            activationState.activationEvent = e;
            activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');
            activationState.activationStartTime = Date.now();
            requestAnimationFrame(function () {
                // This needs to be wrapped in an rAF call b/c web browsers
                // report active states inconsistently when they're called within
                // event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                activationState.wasElementMadeActive = (e && e.type === 'keydown') ? _this.adapter_.isSurfaceActive() : true;
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
                else {
                    // Reset activation state immediately if element was not made active.
                    _this.activationState_ = _this.defaultActivationState_();
                }
            });
        };
        /**
         * @param {?Event=} event Optional event containing position information.
         */
        MDCRippleFoundation.prototype.activate = function (event) {
            if (event === void 0) { event = null; }
            this.activate_(event);
        };
        /** @private */
        MDCRippleFoundation.prototype.animateActivation_ = function () {
            var _this = this;
            var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
            var _b = MDCRippleFoundation.cssClasses, BG_ACTIVE_FILL = _b.BG_ACTIVE_FILL, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
            var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
            var translateStart = '';
            var translateEnd = '';
            if (!this.adapter_.isUnbounded()) {
                var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
                translateStart = startPoint.x + "px, " + startPoint.y + "px";
                translateEnd = endPoint.x + "px, " + endPoint.y + "px";
            }
            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
            // Cancel any ongoing activation/deactivation animations
            clearTimeout(this.activationTimer_);
            clearTimeout(this.fgDeactivationRemovalTimer_);
            this.rmBoundedActivationClasses_();
            this.adapter_.removeClass(FG_DEACTIVATION);
            // Force layout in order to re-trigger the animation.
            this.adapter_.computeBoundingRect();
            this.adapter_.addClass(BG_ACTIVE_FILL);
            this.adapter_.addClass(FG_ACTIVATION);
            this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
        };
        /**
         * @private
         * @return {{startPoint: PointType, endPoint: PointType}}
         */
        MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
            var activationState = this.activationState_;
            var activationEvent = activationState.activationEvent, wasActivatedByPointer = activationState.wasActivatedByPointer;
            var startPoint;
            if (wasActivatedByPointer) {
                startPoint = getNormalizedEventCoords(
                /** @type {!Event} */ (activationEvent), this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
            }
            else {
                startPoint = {
                    x: this.frame_.width / 2,
                    y: this.frame_.height / 2,
                };
            }
            // Center the element around the start point.
            startPoint = {
                x: startPoint.x - (this.initialSize_ / 2),
                y: startPoint.y - (this.initialSize_ / 2),
            };
            var endPoint = {
                x: (this.frame_.width / 2) - (this.initialSize_ / 2),
                y: (this.frame_.height / 2) - (this.initialSize_ / 2),
            };
            return { startPoint: startPoint, endPoint: endPoint };
        };
        /** @private */
        MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
            var _this = this;
            var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
            var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
            var activationHasEnded = hasDeactivationUXRun || !isActivated;
            if (activationHasEnded && this.activationAnimationHasEnded_) {
                this.rmBoundedActivationClasses_();
                this.adapter_.addClass(FG_DEACTIVATION);
                this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                    _this.adapter_.removeClass(FG_DEACTIVATION);
                }, numbers.FG_DEACTIVATION_MS);
            }
        };
        /** @private */
        MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
            var _a = MDCRippleFoundation.cssClasses, BG_ACTIVE_FILL = _a.BG_ACTIVE_FILL, FG_ACTIVATION = _a.FG_ACTIVATION;
            this.adapter_.removeClass(BG_ACTIVE_FILL);
            this.adapter_.removeClass(FG_ACTIVATION);
            this.activationAnimationHasEnded_ = false;
            this.adapter_.computeBoundingRect();
        };
        /**
         * @param {Event} e
         * @private
         */
        MDCRippleFoundation.prototype.deactivate_ = function (e) {
            var _this = this;
            var activationState = this.activationState_;
            // This can happen in scenarios such as when you have a keyup event that blurs the element.
            if (!activationState.isActivated) {
                return;
            }
            // Programmatic deactivation.
            if (activationState.isProgrammatic) {
                var evtObject_1 = null;
                var state_1 = (Object.assign({}, activationState));
                requestAnimationFrame(function () { return _this.animateDeactivation_(evtObject_1, state_1); });
                this.activationState_ = this.defaultActivationState_();
                return;
            }
            var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
            var expectedActivationType = activationState.activationEvent.type;
            // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
            // Essentially, what we need to do here is decouple the deactivation UX from the actual
            // deactivation state itself. This way, touch/pointer events in sequence do not trample one
            // another.
            var needsDeactivationUX = actualActivationType === expectedActivationType;
            var needsActualDeactivation = needsDeactivationUX;
            if (activationState.wasActivatedByPointer) {
                needsActualDeactivation = e.type === 'mouseup';
            }
            var state = (Object.assign({}, activationState));
            requestAnimationFrame(function () {
                if (needsDeactivationUX) {
                    _this.activationState_.hasDeactivationUXRun = true;
                    _this.animateDeactivation_(e, state);
                }
                if (needsActualDeactivation) {
                    _this.activationState_ = _this.defaultActivationState_();
                }
            });
        };
        /**
         * @param {?Event=} event Optional event containing position information.
         */
        MDCRippleFoundation.prototype.deactivate = function (event) {
            if (event === void 0) { event = null; }
            this.deactivate_(event);
        };
        /**
         * @param {Event} e
         * @param {!ActivationStateType} options
         * @private
         */
        MDCRippleFoundation.prototype.animateDeactivation_ = function (e, _a) {
            var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
            var BG_FOCUSED = MDCRippleFoundation.cssClasses.BG_FOCUSED;
            if (wasActivatedByPointer || wasElementMadeActive) {
                // Remove class left over by element being focused
                this.adapter_.removeClass(BG_FOCUSED);
                this.runDeactivationUXLogicIfReady_();
            }
        };
        MDCRippleFoundation.prototype.destroy = function () {
            var _this = this;
            if (!this.isSupported_()) {
                return;
            }
            this.removeEventListeners_();
            var _a = MDCRippleFoundation.cssClasses, ROOT = _a.ROOT, UNBOUNDED = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter_.removeClass(ROOT);
                _this.adapter_.removeClass(UNBOUNDED);
                _this.removeCssVars_();
            });
        };
        /** @private */
        MDCRippleFoundation.prototype.removeEventListeners_ = function () {
            var _this = this;
            this.listenerInfos_.forEach(function (info) {
                Object.keys(info).forEach(function (k) {
                    _this.adapter_.deregisterInteractionHandler(info[k], _this.listeners_[k]);
                });
            });
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        };
        /** @private */
        MDCRippleFoundation.prototype.removeCssVars_ = function () {
            var _this = this;
            var strings$$1 = MDCRippleFoundation.strings;
            Object.keys(strings$$1).forEach(function (k) {
                if (k.indexOf('VAR_') === 0) {
                    _this.adapter_.updateCssVariable(strings$$1[k], null);
                }
            });
        };
        MDCRippleFoundation.prototype.layout = function () {
            var _this = this;
            if (this.layoutFrame_) {
                cancelAnimationFrame(this.layoutFrame_);
            }
            this.layoutFrame_ = requestAnimationFrame(function () {
                _this.layoutInternal_();
                _this.layoutFrame_ = 0;
            });
        };
        /** @private */
        MDCRippleFoundation.prototype.layoutInternal_ = function () {
            this.frame_ = this.adapter_.computeBoundingRect();
            var maxDim = Math.max(this.frame_.height, this.frame_.width);
            var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
            // 60% of the largest dimension of the surface
            this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
            // Diameter of the surface + 10px
            this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
            this.fgScale_ = this.maxRadius_ / this.initialSize_;
            this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
            this.updateLayoutCssVars_();
        };
        /** @private */
        MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
            var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
            this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
            this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
            if (this.adapter_.isUnbounded()) {
                this.unboundedCoords_ = {
                    left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                    top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
                };
                this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
                this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
            }
        };
        return MDCRippleFoundation;
    }(MDCFoundation));
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @extends MDCComponent<!MDCRippleFoundation>
     */
    var MDCRipple = /** @class */ (function (_super) {
        __extends(MDCRipple, _super);
        /** @param {...?} args */
        function MDCRipple() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            /** @type {boolean} */
            _this.disabled = false;
            /** @private {boolean} */
            _this.unbounded_;
            return _this;
        }
        /**
         * @param {!Element} root
         * @param {{isUnbounded: (boolean|undefined)}=} options
         * @return {!MDCRipple}
         */
        MDCRipple.attachTo = function (root, _a) {
            var _b = (_a === void 0 ? {} : _a).isUnbounded, isUnbounded = _b === void 0 ? undefined : _b;
            var ripple = new MDCRipple(root);
            // Only override unbounded behavior if option is explicitly specified
            if (isUnbounded !== undefined) {
                ripple.unbounded = /** @type {boolean} */ (isUnbounded);
            }
            return ripple;
        };
        /**
         * @param {!RippleCapableSurface} instance
         * @return {!MDCRippleAdapter}
         */
        MDCRipple.createAdapter = function (instance) {
            var MATCHES = getMatchesProperty(HTMLElement.prototype);
            return {
                browserSupportsCssVars: function () { return supportsCssVariables(window); },
                isUnbounded: function () { return instance.unbounded; },
                isSurfaceActive: function () { return instance.root_[MATCHES](':active'); },
                isSurfaceDisabled: function () { return instance.disabled; },
                addClass: function (className) { return instance.root_.classList.add(className); },
                removeClass: function (className) { return instance.root_.classList.remove(className); },
                registerInteractionHandler: function (evtType, handler) {
                    return instance.root_.addEventListener(evtType, handler, applyPassive());
                },
                deregisterInteractionHandler: function (evtType, handler) {
                    return instance.root_.removeEventListener(evtType, handler, applyPassive());
                },
                registerResizeHandler: function (handler) { return window.addEventListener('resize', handler); },
                deregisterResizeHandler: function (handler) { return window.removeEventListener('resize', handler); },
                updateCssVariable: function (varName, value) { return instance.root_.style.setProperty(varName, value); },
                computeBoundingRect: function () { return instance.root_.getBoundingClientRect(); },
                getWindowPageOffset: function () { return ({ x: window.pageXOffset, y: window.pageYOffset }); },
            };
        };
        Object.defineProperty(MDCRipple.prototype, "unbounded", {
            /** @return {boolean} */
            get: function () {
                return this.unbounded_;
            },
            /** @param {boolean} unbounded */
            set: function (unbounded) {
                var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
                this.unbounded_ = Boolean(unbounded);
                if (this.unbounded_) {
                    this.root_.classList.add(UNBOUNDED);
                }
                else {
                    this.root_.classList.remove(UNBOUNDED);
                }
            },
            enumerable: true,
            configurable: true
        });
        MDCRipple.prototype.activate = function () {
            this.foundation_.activate();
        };
        MDCRipple.prototype.deactivate = function () {
            this.foundation_.deactivate();
        };
        MDCRipple.prototype.layout = function () {
            this.foundation_.layout();
        };
        /** @return {!MDCRippleFoundation} */
        MDCRipple.prototype.getDefaultFoundation = function () {
            return new MDCRippleFoundation(MDCRipple.createAdapter(this));
        };
        MDCRipple.prototype.initialSyncWithDOM = function () {
            this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
        };
        return MDCRipple;
    }(MDCComponent));
    /**
     * See Material Design spec for more details on when to use ripples.
     * https://material.io/guidelines/motion/choreography.html#choreography-creation
     * @record
     */
    var RippleCapableSurface = /** @class */ (function () {
        function RippleCapableSurface() {
        }
        return RippleCapableSurface;
    }());
    /** @protected {!Element} */
    RippleCapableSurface.prototype.root_;
    /**
     * Whether or not the ripple bleeds out of the bounds of the element.
     * @type {boolean|undefined}
     */
    RippleCapableSurface.prototype.unbounded;
    /**
     * Whether or not the ripple is attached to a disabled component.
     * @type {boolean|undefined}
     */
    RippleCapableSurface.prototype.disabled;
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /** @enum {string} */
    var strings$1 = {
        ARIA_HIDDEN: 'aria-hidden',
        ROLE: 'role',
        INPUT_SELECTOR: '.mdc-text-field__input',
        LABEL_SELECTOR: '.mdc-text-field__label',
        ICON_SELECTOR: '.mdc-text-field__icon',
        ICON_EVENT: 'MDCTextField:icon',
        BOTTOM_LINE_SELECTOR: '.mdc-text-field__bottom-line',
    };
    /** @enum {string} */
    var cssClasses$1 = {
        ROOT: 'mdc-text-field',
        UPGRADED: 'mdc-text-field--upgraded',
        DISABLED: 'mdc-text-field--disabled',
        FOCUSED: 'mdc-text-field--focused',
        INVALID: 'mdc-text-field--invalid',
        HELPTEXT_PERSISTENT: 'mdc-text-field-helptext--persistent',
        HELPTEXT_VALIDATION_MSG: 'mdc-text-field-helptext--validation-msg',
        LABEL_FLOAT_ABOVE: 'mdc-text-field__label--float-above',
        LABEL_SHAKE: 'mdc-text-field__label--shake',
        BOX: 'mdc-text-field--box',
        TEXT_FIELD_ICON: 'mdc-text-field__icon',
        TEXTAREA: 'mdc-text-field--textarea',
        BOTTOM_LINE_ACTIVE: 'mdc-text-field__bottom-line--active',
    };
    /**
     * @license
     * Copyright 2017 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /* eslint no-unused-vars: [2, {"args": "none"}] */
    /**
     * @typedef {{
     *   value: string,
     *   disabled: boolean,
     *   badInput: boolean,
     *   checkValidity: (function(): boolean)
     * }}
     */
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @extends {MDCFoundation<!MDCTextFieldAdapter>}
     * @final
     */
    var MDCTextFieldFoundation = /** @class */ (function (_super) {
        __extends(MDCTextFieldFoundation, _super);
        /**
         * @param {!MDCTextFieldAdapter=} adapter
         */
        function MDCTextFieldFoundation(adapter) {
            if (adapter === void 0) { adapter = ({}); }
            var _this = _super.call(this, Object.assign(MDCTextFieldFoundation.defaultAdapter, adapter)) || this;
            /** @private {boolean} */
            _this.isFocused_ = false;
            /** @private {boolean} */
            _this.receivedUserInput_ = false;
            /** @private {boolean} */
            _this.useCustomValidityChecking_ = false;
            /** @private {function(): undefined} */
            _this.inputFocusHandler_ = function () { return _this.activateFocus(); };
            /** @private {function(): undefined} */
            _this.inputBlurHandler_ = function () { return _this.deactivateFocus(); };
            /** @private {function(): undefined} */
            _this.inputInputHandler_ = function () { return _this.autoCompleteFocus(); };
            /** @private {function(!Event): undefined} */
            _this.setPointerXOffset_ = function (evt) { return _this.animateBottomLine(evt); };
            /** @private {function(!Event): undefined} */
            _this.textFieldInteractionHandler_ = function (evt) { return _this.handleTextFieldInteraction(evt); };
            /** @private {function(!Event): undefined} */
            _this.transitionEndHandler_ = function (evt) { return _this.handleBottomLineAnimationEnd(evt); };
            return _this;
        }
        Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
            /** @return enum {string} */
            get: function () {
                return cssClasses$1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation, "strings", {
            /** @return enum {string} */
            get: function () {
                return strings$1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
            /**
             * {@see MDCTextFieldAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCTextFieldAdapter}
             */
            get: function () {
                return /** @type {!MDCTextFieldAdapter} */ ({
                    addClass: function () { },
                    removeClass: function () { },
                    addClassToLabel: function () { },
                    removeClassFromLabel: function () { },
                    setIconAttr: function () { },
                    eventTargetHasClass: function () { },
                    registerTextFieldInteractionHandler: function () { },
                    deregisterTextFieldInteractionHandler: function () { },
                    notifyIconAction: function () { },
                    addClassToBottomLine: function () { },
                    removeClassFromBottomLine: function () { },
                    addClassToHelptext: function () { },
                    removeClassFromHelptext: function () { },
                    helptextHasClass: function () { return false; },
                    registerInputInteractionHandler: function () { },
                    deregisterInputInteractionHandler: function () { },
                    registerTransitionEndHandler: function () { },
                    deregisterTransitionEndHandler: function () { },
                    setBottomLineAttr: function () { },
                    setHelptextAttr: function () { },
                    removeHelptextAttr: function () { },
                    getNativeInput: function () { },
                });
            },
            enumerable: true,
            configurable: true
        });
        MDCTextFieldFoundation.prototype.init = function () {
            var _this = this;
            this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
            // Ensure label does not collide with any pre-filled value.
            if (this.getNativeInput_().value) {
                this.adapter_.addClassToLabel(MDCTextFieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
            }
            this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
            this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
            this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
            ['mousedown', 'touchstart'].forEach(function (evtType) {
                _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
            });
            ['click', 'keydown'].forEach(function (evtType) {
                _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
            });
            this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
        };
        MDCTextFieldFoundation.prototype.destroy = function () {
            var _this = this;
            this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
            this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
            this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
            this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
            ['mousedown', 'touchstart'].forEach(function (evtType) {
                _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
            });
            ['click', 'keydown'].forEach(function (evtType) {
                _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
            });
            this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
        };
        /**
         * Handles all user interactions with the Text Field.
         * @param {!Event} evt
         */
        MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function (evt) {
            if (this.adapter_.getNativeInput().disabled) {
                return;
            }
            this.receivedUserInput_ = true;
            var target = evt.target, type = evt.type;
            var TEXT_FIELD_ICON = MDCTextFieldFoundation.cssClasses.TEXT_FIELD_ICON;
            var targetIsIcon = this.adapter_.eventTargetHasClass(target, TEXT_FIELD_ICON);
            var eventTriggersNotification = type === 'click' || evt.key === 'Enter' || evt.keyCode === 13;
            if (targetIsIcon && eventTriggersNotification) {
                this.adapter_.notifyIconAction();
            }
        };
        /**
         * Activates the text field focus state.
         */
        MDCTextFieldFoundation.prototype.activateFocus = function () {
            var _a = MDCTextFieldFoundation.cssClasses, BOTTOM_LINE_ACTIVE = _a.BOTTOM_LINE_ACTIVE, FOCUSED = _a.FOCUSED, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
            this.adapter_.addClass(FOCUSED);
            this.adapter_.addClassToBottomLine(BOTTOM_LINE_ACTIVE);
            this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
            this.adapter_.removeClassFromLabel(LABEL_SHAKE);
            this.showHelptext_();
            this.isFocused_ = true;
        };
        /**
         * Animates the bottom line out from the user's click location.
         * @param {!Event} evt
         */
        MDCTextFieldFoundation.prototype.animateBottomLine = function (evt) {
            var targetClientRect = evt.target.getBoundingClientRect();
            var evtCoords = { x: evt.clientX, y: evt.clientY };
            var normalizedX = evtCoords.x - targetClientRect.left;
            var attributeString = "transform-origin: " + normalizedX + "px center";
            this.adapter_.setBottomLineAttr('style', attributeString);
        };
        /**
         * Activates the Text Field's focus state in cases when the input value
         * changes without user input (e.g. programatically).
         */
        MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
            if (!this.receivedUserInput_) {
                this.activateFocus();
            }
        };
        /**
         * Makes the help text visible to screen readers.
         * @private
         */
        MDCTextFieldFoundation.prototype.showHelptext_ = function () {
            var ARIA_HIDDEN = MDCTextFieldFoundation.strings.ARIA_HIDDEN;
            this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
        };
        /**
         * Executes when the bottom line's transition animation ends, performing
         * actions that must wait for animations to finish.
         * @param {!Event} evt
         */
        MDCTextFieldFoundation.prototype.handleBottomLineAnimationEnd = function (evt) {
            var BOTTOM_LINE_ACTIVE = MDCTextFieldFoundation.cssClasses.BOTTOM_LINE_ACTIVE;
            // We need to wait for the bottom line to be entirely transparent
            // before removing the class. If we do not, we see the line start to
            // scale down before disappearing
            if (evt.propertyName === 'opacity' && !this.isFocused_) {
                this.adapter_.removeClassFromBottomLine(BOTTOM_LINE_ACTIVE);
            }
        };
        /**
         * Deactives the Text Field's focus state.
         */
        MDCTextFieldFoundation.prototype.deactivateFocus = function () {
            var _a = MDCTextFieldFoundation.cssClasses, FOCUSED = _a.FOCUSED, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
            var input = this.getNativeInput_();
            this.isFocused_ = false;
            this.adapter_.removeClass(FOCUSED);
            this.adapter_.removeClassFromLabel(LABEL_SHAKE);
            if (!input.value && !this.isBadInput_()) {
                this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
                this.receivedUserInput_ = false;
            }
            if (!this.useCustomValidityChecking_) {
                this.changeValidity_(input.checkValidity());
            }
        };
        /**
         * Updates the Text Field's valid state based on the supplied validity.
         * @param {boolean} isValid
         * @private
         */
        MDCTextFieldFoundation.prototype.changeValidity_ = function (isValid) {
            var _a = MDCTextFieldFoundation.cssClasses, INVALID = _a.INVALID, LABEL_SHAKE = _a.LABEL_SHAKE;
            if (isValid) {
                this.adapter_.removeClass(INVALID);
            }
            else {
                this.adapter_.addClassToLabel(LABEL_SHAKE);
                this.adapter_.addClass(INVALID);
            }
            this.updateHelptext_(isValid);
        };
        /**
         * Updates the state of the Text Field's help text based on validity and
         * the Text Field's options.
         * @param {boolean} isValid
         */
        MDCTextFieldFoundation.prototype.updateHelptext_ = function (isValid) {
            var _a = MDCTextFieldFoundation.cssClasses, HELPTEXT_PERSISTENT = _a.HELPTEXT_PERSISTENT, HELPTEXT_VALIDATION_MSG = _a.HELPTEXT_VALIDATION_MSG;
            var ROLE = MDCTextFieldFoundation.strings.ROLE;
            var helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
            var helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
            var validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;
            if (validationMsgNeedsDisplay) {
                this.adapter_.setHelptextAttr(ROLE, 'alert');
            }
            else {
                this.adapter_.removeHelptextAttr(ROLE);
            }
            if (helptextIsPersistent || validationMsgNeedsDisplay) {
                return;
            }
            this.hideHelptext_();
        };
        /**
         * Hides the help text from screen readers.
         * @private
         */
        MDCTextFieldFoundation.prototype.hideHelptext_ = function () {
            var ARIA_HIDDEN = MDCTextFieldFoundation.strings.ARIA_HIDDEN;
            this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
        };
        /**
         * @return {boolean} True if the Text Field input fails validity checks.
         * @private
         */
        MDCTextFieldFoundation.prototype.isBadInput_ = function () {
            var input = this.getNativeInput_();
            return input.validity ? input.validity.badInput : input.badInput;
        };
        /**
         * @return {boolean} True if the Text Field is disabled.
         */
        MDCTextFieldFoundation.prototype.isDisabled = function () {
            return this.getNativeInput_().disabled;
        };
        /**
         * @param {boolean} disabled Sets the text-field disabled or enabled.
         */
        MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
            var DISABLED = MDCTextFieldFoundation.cssClasses.DISABLED;
            this.getNativeInput_().disabled = disabled;
            if (disabled) {
                this.adapter_.addClass(DISABLED);
                this.adapter_.setIconAttr('tabindex', '-1');
            }
            else {
                this.adapter_.removeClass(DISABLED);
                this.adapter_.setIconAttr('tabindex', '0');
            }
        };
        /**
         * @return {!Element|!NativeInputType} The native text input from the
         * host environment, or a dummy if none exists.
         * @private
         */
        MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
            return this.adapter_.getNativeInput() ||
                /** @type {!NativeInputType} */ ({
                    checkValidity: function () { return true; },
                    value: '',
                    disabled: false,
                    badInput: false,
                });
        };
        /**
         * @param {boolean} isValid Sets the validity state of the Text Field.
         */
        MDCTextFieldFoundation.prototype.setValid = function (isValid) {
            this.useCustomValidityChecking_ = true;
            this.changeValidity_(isValid);
        };
        return MDCTextFieldFoundation;
    }(MDCFoundation));
    /**
     * @license
     * Copyright 2016 Google Inc. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
    /**
     * @extends {MDCComponent<!MDCTextFieldFoundation>}
     * @final
     */
    var MDCTextField$1 = /** @class */ (function (_super) {
        __extends(MDCTextField$1, _super);
        /**
         * @param {...?} args
         */
        function MDCTextField$1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            /** @private {?Element} */
            _this.input_;
            /** @private {?Element} */
            _this.label_;
            /** @type {?Element} */
            _this.helptextElement;
            /** @type {?MDCRipple} */
            _this.ripple;
            /** @private {?Element} */
            _this.bottomLine_;
            /** @private {?Element} */
            _this.icon_;
            return _this;
        }
        /**
         * @param {!Element} root
         * @return {!MDCTextField}
         */
        MDCTextField$1.attachTo = function (root) {
            return new MDCTextField$1(root);
        };
        /**
         * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
         * creates a new MDCRipple.
         */
        MDCTextField$1.prototype.initialize = function (rippleFactory) {
            if (rippleFactory === void 0) { rippleFactory = function (el) { return new MDCRipple(el); }; }
            this.input_ = this.root_.querySelector(strings$1.INPUT_SELECTOR);
            this.label_ = this.root_.querySelector(strings$1.LABEL_SELECTOR);
            this.helptextElement = null;
            this.ripple = null;
            if (this.input_.hasAttribute('aria-controls')) {
                this.helptextElement = document.getElementById(this.input_.getAttribute('aria-controls'));
            }
            if (this.root_.classList.contains(cssClasses$1.BOX)) {
                this.ripple = rippleFactory(this.root_);
            }
            if (!this.root_.classList.contains(cssClasses$1.TEXTAREA)) {
                this.bottomLine_ = this.root_.querySelector(strings$1.BOTTOM_LINE_SELECTOR);
            }
            if (!this.root_.classList.contains(cssClasses$1.TEXT_FIELD_ICON)) {
                this.icon_ = this.root_.querySelector(strings$1.ICON_SELECTOR);
            }
        };
        MDCTextField$1.prototype.destroy = function () {
            if (this.ripple) {
                this.ripple.destroy();
            }
            _super.prototype.destroy.call(this);
        };
        /**
         * Initiliazes the Text Field's internal state based on the environment's
         * state.
         */
        MDCTextField$1.prototype.initialSyncWithDom = function () {
            this.disabled = this.input_.disabled;
        };
        Object.defineProperty(MDCTextField$1.prototype, "disabled", {
            /**
             * @return {boolean} True if the Text Field is disabled.
             */
            get: function () {
                return this.foundation_.isDisabled();
            },
            /**
             * @param {boolean} disabled Sets the Text Field disabled or enabled.
             */
            set: function (disabled) {
                this.foundation_.setDisabled(disabled);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCTextField$1.prototype, "valid", {
            /**
             * @param {boolean} valid Sets the Text Field valid or invalid.
             */
            set: function (valid) {
                this.foundation_.setValid(valid);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {!MDCTextFieldFoundation}
         */
        MDCTextField$1.prototype.getDefaultFoundation = function () {
            var _this = this;
            return new MDCTextFieldFoundation(/** @type {!MDCTextFieldAdapter} */ (Object.assign({
                addClass: function (className) { return _this.root_.classList.add(className); },
                removeClass: function (className) { return _this.root_.classList.remove(className); },
                addClassToLabel: function (className) {
                    var label = _this.label_;
                    if (label) {
                        label.classList.add(className);
                    }
                },
                removeClassFromLabel: function (className) {
                    var label = _this.label_;
                    if (label) {
                        label.classList.remove(className);
                    }
                },
                eventTargetHasClass: function (target, className) { return target.classList.contains(className); },
                registerTextFieldInteractionHandler: function (evtType, handler) { return _this.root_.addEventListener(evtType, handler); },
                deregisterTextFieldInteractionHandler: function (evtType, handler) { return _this.root_.removeEventListener(evtType, handler); },
                notifyIconAction: function () { return _this.emit(MDCTextFieldFoundation.strings.ICON_EVENT, {}); },
            }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_(), this.getBottomLineAdapterMethods_(), this.getIconAdapterMethods_())));
        };
        /**
         * @return {!{
         *   setIconAttr: function(string, string): undefined,
         * }}
         */
        MDCTextField$1.prototype.getIconAdapterMethods_ = function () {
            var _this = this;
            return {
                setIconAttr: function (name, value) {
                    if (_this.icon_) {
                        _this.icon_.setAttribute(name, value);
                    }
                },
            };
        };
        /**
         * @return {!{
         *   addClassToBottomLine: function(string): undefined,
         *   removeClassFromBottomLine: function(string): undefined,
         *   setBottomLineAttr: function(string, string): undefined,
         *   registerTransitionEndHandler: function(function()): undefined,
         *   deregisterTransitionEndHandler: function(function()): undefined,
         * }}
         */
        MDCTextField$1.prototype.getBottomLineAdapterMethods_ = function () {
            var _this = this;
            return {
                addClassToBottomLine: function (className) {
                    if (_this.bottomLine_) {
                        _this.bottomLine_.classList.add(className);
                    }
                },
                removeClassFromBottomLine: function (className) {
                    if (_this.bottomLine_) {
                        _this.bottomLine_.classList.remove(className);
                    }
                },
                setBottomLineAttr: function (attr, value) {
                    if (_this.bottomLine_) {
                        _this.bottomLine_.setAttribute(attr, value);
                    }
                },
                registerTransitionEndHandler: function (handler) {
                    if (_this.bottomLine_) {
                        _this.bottomLine_.addEventListener('transitionend', handler);
                    }
                },
                deregisterTransitionEndHandler: function (handler) {
                    if (_this.bottomLine_) {
                        _this.bottomLine_.removeEventListener('transitionend', handler);
                    }
                },
            };
        };
        /**
         * @return {!{
         *   registerInputInteractionHandler: function(string, function()): undefined,
         *   deregisterInputInteractionHandler: function(string, function()): undefined,
         *   getNativeInput: function(): ?Element,
         * }}
         */
        MDCTextField$1.prototype.getInputAdapterMethods_ = function () {
            var _this = this;
            return {
                registerInputInteractionHandler: function (evtType, handler) { return _this.input_.addEventListener(evtType, handler); },
                deregisterInputInteractionHandler: function (evtType, handler) { return _this.input_.removeEventListener(evtType, handler); },
                getNativeInput: function () { return _this.input_; },
            };
        };
        /**
         * @return {!{
         *   addClassToHelptext: function(string): undefined,
         *   removeClassFromHelptext: function(string): undefined,
         *   helptextHasClass: function(string): boolean,
         *   setHelptextAttr: function(string, string): undefined,
         *   removeHelptextAttr: function(string): undefined,
         * }}
         */
        MDCTextField$1.prototype.getHelptextAdapterMethods_ = function () {
            var _this = this;
            return {
                addClassToHelptext: function (className) {
                    if (_this.helptextElement) {
                        _this.helptextElement.classList.add(className);
                    }
                },
                removeClassFromHelptext: function (className) {
                    if (_this.helptextElement) {
                        _this.helptextElement.classList.remove(className);
                    }
                },
                helptextHasClass: function (className) {
                    if (!_this.helptextElement) {
                        return false;
                    }
                    return _this.helptextElement.classList.contains(className);
                },
                setHelptextAttr: function (name, value) {
                    if (_this.helptextElement) {
                        _this.helptextElement.setAttribute(name, value);
                    }
                },
                removeHelptextAttr: function (name) {
                    if (_this.helptextElement) {
                        _this.helptextElement.removeAttribute(name);
                    }
                },
            };
        };
        return MDCTextField$1;
    }(MDCComponent));
    var MDCTextField$$1 = /** @class */ (function () {
        function MDCTextField$$1() {
        }
        Object.defineProperty(MDCTextField$$1.prototype, "el", {
            // Getters
            get: function () {
                return this['__el'];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCTextField$$1.prototype, "classes", {
            get: function () {
                return getClassesFromMap(this.classesMap);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MDCTextField$$1.prototype, "classesMap", {
            get: function () {
                return new Map([['mdc-text-field', true], ['mdc-text-field--disabled', this.disabled]]);
            },
            enumerable: true,
            configurable: true
        });
        // Lifecycle
        MDCTextField$$1.prototype.componentDidLoad = function () {
            var mdcTextField = this.el.shadowRoot.querySelector('.mdc-text-field');
            MDCTextField$1.attachTo(mdcTextField);
            if (this.initialValue) {
                var input = this.el.shadowRoot.querySelector('input');
                var label = this.el.shadowRoot.querySelector('label');
                input.value = this.initialValue;
                label.className += ' mdc-text-field__label--float-above';
            }
        };
        // Handlers
        MDCTextField$$1.prototype.handleOnKeyUp = function (e) {
            var value = e.target.value;
            this.value = value;
            this.el.dispatchEvent(new CustomEvent('value-changed', { bubbles: true, detail: { value: value } }));
        };
        // Render
        MDCTextField$$1.prototype.render = function () {
            var _this = this;
            var helperTextClasses = ['mdc-text-field-helper-text'];
            if (this.persistent) {
                helperTextClasses.push('mdc-text-field-helper-text--persistent');
            }
            return (h("div", { id: "mdcTextField", class: this.classes }, h("input", { type: "text", class: "mdc-text-field__input", onKeyUp: function (e) { return _this.handleOnKeyUp(e); } }), h("label", { htmlFor: "input", class: "mdc-text-field__label" }, this.label), h("div", { class: "mdc-text-field__bottom-line" }), h("div", { class: helperTextClasses.join(' '), "aria-hidden": "true" }, h("slot", null))));
        };
        return MDCTextField$$1;
    }());
    exports['mdc-text-field'] = MDCTextField$$1;
}
,


/***************** mdc-text-field *****************/
[
/** mdc-text-field: tag **/
"mdc-text-field",

/** mdc-text-field: members **/
[
  [ "disabled", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "initialValue", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "label", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "persistent", /** prop **/ 1, /** observe attribute **/ 1, /** type boolean **/ 3 ],
  [ "value", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** mdc-text-field: host **/
{}

]
);