/*! Built with http://stenciljs.com */

window['mdc-text-field'].loadStyles("mdc-text-field","\@keyframes mdc-ripple-fg-radius-in {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n  }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    animation-timing-function: linear;\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    animation-timing-function: linear;\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.mdc-ripple-surface--test-edge-var-bug[data-mdc-text-field] {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden;\n}\n\n.mdc-ripple-surface--test-edge-var-bug[data-mdc-text-field]::before {\n  border: var(--mdc-ripple-surface-test-edge-var);\n}\n\n\n\n\n\n\n\n\n\n\@keyframes invalid-shake-float-above-standard {\n  0% {\n    transform: translateX(0) translateY(-100%) scale(0.75, 0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(10px) translateY(-100%) scale(0.75, 0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(-5px) translateY(-100%) scale(0.75, 0.75);\n  }\n  100% {\n    transform: translateX(0) translateY(-100%) scale(0.75, 0.75);\n  }\n}\n\n\@keyframes invalid-shake-float-above-box {\n  0% {\n    transform: translateX(0) translateY(-50%) scale(0.75, 0.75);\n  }\n  33% {\n    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);\n    transform: translateX(10px) translateY(-50%) scale(0.75, 0.75);\n  }\n  66% {\n    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);\n    transform: translateX(-5px) translateY(-50%) scale(0.75, 0.75);\n  }\n  100% {\n    transform: translateX(0) translateY(-50%) scale(0.75, 0.75);\n  }\n}\n\n.mdc-text-field[data-mdc-text-field] {\n  display: inline-block;\n  position: relative;\n  margin-bottom: 8px;\n  will-change: opacity, transform, color;\n}\n\n.mdc-text-field__input[data-mdc-text-field] {\n  \n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  letter-spacing: 0.04em;\n  width: 100%;\n  padding: 0 0 8px;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  background: none;\n  font-size: inherit;\n  appearance: none;\n}\n\n.mdc-text-field__input[data-mdc-text-field]::placeholder {\n  \n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  transition: color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n}\n\n.mdc-text-field__input[data-mdc-text-field]:hover {\n  border-color: black;\n}\n\n.mdc-text-field__input[data-mdc-text-field]:focus {\n  outline: none;\n}\n\n.mdc-text-field__input[data-mdc-text-field]:focus::placeholder {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-text-field__input[data-mdc-text-field]:invalid {\n  box-shadow: none;\n}\n\n.mdc-text-field__input--theme-dark[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  \n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n.mdc-text-field__input--theme-dark[data-mdc-text-field]:hover, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:hover {\n  border-bottom: 1px solid white;\n}\n\n.mdc-text-field__input--theme-dark[data-mdc-text-field]::placeholder, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]::placeholder {\n  \n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-text-field__input--theme-dark[data-mdc-text-field]:focus::placeholder, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.mdc-text-field__bottom-line[data-mdc-text-field] {\n  \n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  transform: scaleX(0);\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  z-index: 2;\n}\n\n.mdc-text-field__bottom-line--active[data-mdc-text-field] {\n  transform: scaleX(1);\n}\n\n.mdc-text-field[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus    ~ .mdc-text-field__bottom-line[data-mdc-text-field] {\n  opacity: 1;\n}\n\n.mdc-text-field__label[data-mdc-text-field] {\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  transform-origin: left top;\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  color: rgba(0, 0, 0, 0.5);\n  cursor: text;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  right: 0;\n  left: auto;\n  transform-origin: right top;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.mdc-text-field__label--float-above[data-mdc-text-field] {\n  transform: translateY(-100%) scale(0.75, 0.75);\n  cursor: auto;\n}\n\n.mdc-text-field__input[data-mdc-text-field]:-webkit-autofill    + .mdc-text-field__label[data-mdc-text-field] {\n  transform: translateY(-100%) scale(0.75, 0.75);\n  cursor: auto;\n}\n\n.mdc-text-field--box[data-mdc-text-field] {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  border-radius: 4px 4px 0 0;\n  display: inline-flex;\n  position: relative;\n  height: 56px;\n  background-color: rgba(0, 0, 0, 0.04);\n  overflow: hidden;\n}\n\n.mdc-text-field--box[data-mdc-text-field]::before, .mdc-text-field--box[data-mdc-text-field]::after {\n  position: absolute;\n  transition: opacity 250ms linear;\n  border-radius: 50%;\n  pointer-events: none;\n  content: \"\";\n}\n\n.mdc-text-field--box[data-mdc-text-field]::before, .mdc-text-field--box[data-mdc-text-field]::after {\n  background-color: rgba(0, 0, 0, 0.04);\n  opacity: 0;\n}\n\n.mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):hover::before, .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--background-focused[data-mdc-text-field]::before {\n  opacity: .99999;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--background-active-fill[data-mdc-text-field]::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::after {\n  opacity: 0;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--foreground-activation[data-mdc-text-field]::after {\n  animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation[data-mdc-text-field]::after {\n  animation: 83ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-text-field--box[data-mdc-text-field]::before, .mdc-text-field--box[data-mdc-text-field]::after {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::before {\n  top: calc(50% - 100%);\n  left: calc(50% - 100%);\n  width: 200%;\n  height: 200%;\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--unbounded[data-mdc-text-field]::before {\n  top: var(--mdc-ripple-top, calc(50% - 50%));\n  left: var(--mdc-ripple-left, calc(50% - 50%));\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(var(--mdc-ripple-fg-scale, 0));\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::after {\n  top: 0;\n  left: 0;\n  width: var(--mdc-ripple-fg-size, 100%);\n  height: var(--mdc-ripple-fg-size, 100%);\n  transform: scale(0);\n  transform-origin: center center;\n}\n\n.mdc-text-field--box.mdc-ripple-upgraded--unbounded[data-mdc-text-field]::after {\n  top: var(--mdc-ripple-top, 0);\n  left: var(--mdc-ripple-left, 0);\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]::before, .mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]::after {\n  background-color: rgba(255, 255, 255, 0.05);\n  opacity: 0;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):hover::before, .mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field--theme-dark.mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):active::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):hover::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):focus::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]:not(.mdc-ripple-upgraded):active::after {\n  transition-duration: 85ms;\n  opacity: .6;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded--background-focused[data-mdc-text-field]::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded--background-focused[data-mdc-text-field]::before {\n  opacity: .99999;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded--background-active-fill[data-mdc-text-field]::before, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded--background-active-fill[data-mdc-text-field]::before {\n  transition-duration: 120ms;\n  opacity: 1;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded[data-mdc-text-field]::after {\n  opacity: 0;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded--foreground-activation[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded--foreground-activation[data-mdc-text-field]::after {\n  animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation[data-mdc-text-field]::after {\n  animation: 83ms mdc-ripple-fg-opacity-out;\n  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n}\n\n.mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  align-self: flex-end;\n  box-sizing: border-box;\n  height: 100%;\n  padding: 20px 16px 0;\n}\n\n.mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  left: 16px;\n  right: initial;\n  position: absolute;\n  bottom: 20px;\n  width: calc(100% - 48px);\n  color: rgba(0, 0, 0, 0.6);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field] {\n  left: initial;\n  right: 16px;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  \n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label--float-above[data-mdc-text-field] {\n  transform: translateY(-50%) scale(0.75, 0.75);\n}\n\n.mdc-text-field--box[data-mdc-text-field]   .mdc-text-field__label--float-above.mdc-text-field__label--shake[data-mdc-text-field] {\n  animation: invalid-shake-float-above-box 250ms 1;\n}\n\n.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field] {\n  color: rgba(255, 255, 255, 0.3);\n  border-bottom: none;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field] {\n  background-color: #303030;\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: none;\n}\n\n.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  bottom: 20px;\n}\n\n.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field] {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__icon--theme-dark[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--box.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field] {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  padding: 12px 12px 0;\n}\n\n.mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  left: 12px;\n  right: initial;\n  bottom: 20px;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field] {\n  left: initial;\n  right: 12px;\n}\n\n.mdc-text-field--box.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label--float-above[data-mdc-text-field] {\n  transform: translateY(calc(-75% - 2px)) scale(0.923, 0.923);\n}\n\n.mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field] {\n  position: absolute;\n  bottom: 16px;\n  cursor: pointer;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--theme-dark\n.mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-theme--dark\n.mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field] {\n  \n  color: rgba(255, 255, 255, 0.7);\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7));\n}\n\n.mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  padding-left: 48px;\n  padding-right: 15px;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__input[dir=\"rtl\"][data-mdc-text-field] {\n  padding-left: 15px;\n  padding-right: 48px;\n}\n\n.mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field] {\n  left: 15px;\n  right: initial;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__icon[dir=\"rtl\"][data-mdc-text-field] {\n  left: initial;\n  right: 15px;\n}\n\n.mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  left: 48px;\n  right: initial;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--with-leading-icon[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field] {\n  left: initial;\n  right: 48px;\n}\n\n.mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  padding-left: 15px;\n  padding-right: 48px;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__input[dir=\"rtl\"][data-mdc-text-field] {\n  padding-left: 48px;\n  padding-right: 15px;\n}\n\n.mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field] {\n  left: initial;\n  right: 15px;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-trailing-icon[data-mdc-text-field]   .mdc-text-field__icon[dir=\"rtl\"][data-mdc-text-field] {\n  left: 15px;\n  right: initial;\n}\n\n.mdc-text-field__icon[data-mdc-text-field]:not([tabindex]), .mdc-text-field__icon[tabindex=\"-1\"][data-mdc-text-field] {\n  cursor: default;\n  pointer-events: none;\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field] {\n  bottom: 16px;\n  transform: scale(0.8);\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  padding-left: 38px;\n  padding-right: 12px;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[dir=\"rtl\"][data-mdc-text-field] {\n  padding-left: 12px;\n  padding-right: 38px;\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field] {\n  left: 12px;\n  right: initial;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[dir=\"rtl\"][data-mdc-text-field] {\n  left: initial;\n  right: 12px;\n}\n\n.mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  left: 38px;\n  right: initial;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--with-leading-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field] {\n  left: initial;\n  right: 38px;\n}\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  padding-left: 12px;\n  padding-right: 38px;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__input[dir=\"rtl\"][data-mdc-text-field] {\n  padding-left: 38px;\n  padding-right: 12px;\n}\n\n.mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field] {\n  left: initial;\n  right: 12px;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[data-mdc-text-field], .mdc-text-field--with-trailing-icon.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__icon[dir=\"rtl\"][data-mdc-text-field] {\n  left: 12px;\n  right: initial;\n}\n\n.mdc-text-field--upgraded[data-mdc-text-field]:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box) {\n  display: inline-flex;\n  position: relative;\n  align-items: flex-end;\n  box-sizing: border-box;\n  margin-top: 16px;\n}\n\n.mdc-text-field--upgraded[data-mdc-text-field]:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box):not(.mdc-text-field--textarea) {\n  height: 48px;\n}\n\n.mdc-text-field--upgraded[data-mdc-text-field]:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box)   .mdc-text-field__label[data-mdc-text-field] {\n  pointer-events: none;\n}\n\n.mdc-text-field--invalid[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  color: #d50000;\n}\n\n.mdc-text-field--invalid[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  border-color: #d50000;\n}\n\n.mdc-text-field--invalid[data-mdc-text-field]   .mdc-text-field__bottom-line[data-mdc-text-field] {\n  background-color: #d50000;\n}\n\n.mdc-text-field--invalid.mdc-text-field--textarea[data-mdc-text-field] {\n  border-color: #d50000;\n}\n\n.mdc-text-field__label--float-above.mdc-text-field__label--shake[data-mdc-text-field] {\n  animation: invalid-shake-float-above-standard 250ms 1;\n}\n\n.mdc-text-field--dense[data-mdc-text-field] {\n  margin-top: 12px;\n  margin-bottom: 4px;\n  font-size: .813rem;\n}\n\n.mdc-text-field--dense[data-mdc-text-field]   .mdc-text-field__label--float-above[data-mdc-text-field] {\n  transform: translateY(calc(-100% - 2px)) scale(0.923, 0.923);\n}\n\n.mdc-text-field--disabled[data-mdc-text-field] {\n  pointer-events: none;\n}\n\n.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  border-bottom: 1px dotted rgba(35, 31, 32, 0.26);\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.3);\n}\n\n.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--disabled[data-mdc-text-field]    + .mdc-text-field-helptext[data-mdc-text-field] {\n  \n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field], .mdc-text-field--theme-dark\n.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark\n.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  \n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--disabled[data-mdc-text-field]    + .mdc-text-field-helptext[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--disabled[data-mdc-text-field]    + .mdc-text-field-helptext[data-mdc-text-field] {\n  \n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  bottom: 8px;\n  cursor: default;\n}\n\n.mdc-text-field--invalid.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  \n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--invalid.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--invalid.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  \n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-text-field__input[data-mdc-text-field]:required    + .mdc-text-field__label[data-mdc-text-field]::after {\n  margin-left: 1px;\n  content: \"*\";\n}\n\n.mdc-text-field--focused[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:required    + .mdc-text-field__label[data-mdc-text-field]::after {\n  color: #d50000;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--focused[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:required    + .mdc-text-field__label[data-mdc-text-field]::after, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--focused[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:required    + .mdc-text-field__label[data-mdc-text-field]::after {\n  color: #ff6e6e;\n}\n\n.mdc-text-field--textarea[data-mdc-text-field] {\n  border-radius: 4px;\n  display: flex;\n  height: initial;\n  transition: none;\n  border: 1px solid rgba(0, 0, 0, 0.73);\n  overflow: hidden;\n}\n\n.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  border-radius: 4px 4px 0 0;\n}\n\n.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  border-radius: 2px;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field] {\n  border-color: white;\n}\n\n.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field] {\n  padding: 16px;\n  padding-top: 32px;\n  border: 1px solid transparent;\n}\n\n.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus {\n  \n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus) {\n  border-color: #d50000;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:hover, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:hover {\n  border-bottom-color: transparent;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus {\n  \n  border-color: #ff4081;\n  border-color: var(--mdc-theme-secondary, #ff4081);\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus), .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus) {\n  border-color: #ff6e6e;\n}\n\n.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  left: 1px;\n  right: initial;\n  top: 18px;\n  bottom: auto;\n  padding: 8px 16px;\n  background-color: white;\n}\n\n[dir=\"rtl\"][data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[dir=\"rtl\"][data-mdc-text-field] {\n  left: initial;\n  right: 1px;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  background-color: #303030;\n}\n\n.mdc-text-field--textarea[data-mdc-text-field]   .mdc-text-field__label--float-above[data-mdc-text-field] {\n  transform: translateY(-50%) scale(0.923, 0.923);\n}\n\n.mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field] {\n  border-style: solid;\n  border-color: rgba(35, 31, 32, 0.26);\n  background-color: #f9f9f9;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field] {\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: #2f2f2f;\n}\n\n.mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  background-color: #f9f9f9;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]   .mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--textarea.mdc-text-field--disabled[data-mdc-text-field]   .mdc-text-field__label[data-mdc-text-field] {\n  background-color: #2f2f2f;\n}\n\n.mdc-text-field--textarea[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field] {\n  padding-top: 16px;\n}\n\n.mdc-text-field--textarea.mdc-text-field--focused[data-mdc-text-field] {\n  \n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-text-field--fullwidth[data-mdc-text-field] {\n  width: 100%;\n}\n\n.mdc-text-field--fullwidth[data-mdc-text-field]:not(.mdc-text-field--textarea) {\n  display: block;\n  box-sizing: border-box;\n  height: 56px;\n  margin: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  outline: none;\n}\n\n.mdc-text-field--fullwidth[data-mdc-text-field]:not(.mdc-text-field--textarea)   .mdc-text-field__input[data-mdc-text-field] {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  resize: none;\n  border: none !important;\n}\n\n.mdc-text-field--fullwidth--theme-dark[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--fullwidth[data-mdc-text-field] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n\n.mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded):not(.mdc-text-field--textarea)   .mdc-text-field__input[data-mdc-text-field] {\n  transition: border-bottom-color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:focus {\n  \n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5);\n}\n\n.mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom-style: dotted;\n}\n\n.mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus) {\n  border-color: #d50000;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:not(:focus), .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:not(:focus) {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:disabled, .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: #2f2f2f;\n}\n\n.mdc-text-field--theme-dark[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus), .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field]:invalid:not(:focus) {\n  border-color: #ff6e6e;\n}\n\n.mdc-text-field--box[data-mdc-text-field]:not(.mdc-text-field--upgraded) {\n  height: 56px;\n}\n\n.mdc-text-field--box[data-mdc-text-field]:not(.mdc-text-field--upgraded)::before, .mdc-text-field--box[data-mdc-text-field]:not(.mdc-text-field--upgraded)::after {\n  border-radius: 0;\n}\n\n.mdc-text-field--box[data-mdc-text-field]:not(.mdc-text-field--upgraded)   .mdc-text-field__input[data-mdc-text-field] {\n  padding-top: 0;\n}\n\n.mdc-text-field-helptext[data-mdc-text-field] {\n  \n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  margin: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  font-size: .75rem;\n  will-change: opacity;\n}\n\n.mdc-text-field-helptext--theme-dark[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field-helptext[data-mdc-text-field] {\n  \n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5));\n}\n\n.mdc-text-field[data-mdc-text-field]    + .mdc-text-field-helptext[data-mdc-text-field] {\n  margin-bottom: 8px;\n}\n\n.mdc-text-field--dense[data-mdc-text-field]    + .mdc-text-field-helptext[data-mdc-text-field] {\n  margin-bottom: 4px;\n}\n\n.mdc-text-field--focused[data-mdc-text-field]    + .mdc-text-field-helptext[data-mdc-text-field]:not(.mdc-text-field-helptext--validation-msg) {\n  opacity: 1;\n}\n\n.mdc-text-field--box[data-mdc-text-field]    + .mdc-text-field-helptext[data-mdc-text-field] {\n  margin-right: 16px;\n  margin-left: 16px;\n}\n\n.mdc-text-field-helptext--persistent[data-mdc-text-field] {\n  transition: none;\n  opacity: 1;\n  will-change: initial;\n}\n\n.mdc-text-field--invalid[data-mdc-text-field]    + .mdc-text-field-helptext--validation-msg[data-mdc-text-field] {\n  opacity: 1;\n  color: #d50000;\n}\n\n.mdc-text-field--theme-dark.mdc-text-field--invalid[data-mdc-text-field]    + .mdc-text-field-helptext--validation-msg[data-mdc-text-field], .mdc-theme--dark[data-mdc-text-field]   .mdc-text-field--invalid[data-mdc-text-field]    + .mdc-text-field-helptext--validation-msg[data-mdc-text-field] {\n  color: #ff6e6e;\n}\n\n.mdc-form-field[data-mdc-text-field]    > .mdc-text-field[data-mdc-text-field]    + label[data-mdc-text-field] {\n  align-self: flex-start;\n}\n\n#mdcTextField[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus    ~ .mdc-text-field-helper-text[data-mdc-text-field] {\n  display: none;\n}\n\n#mdcTextField[data-mdc-text-field]   .mdc-text-field__input[data-mdc-text-field]:focus    ~ .mdc-text-field-helper-text--persistent[data-mdc-text-field] {\n  display: inherit !important;\n}\nmdc-text-field.hydrated{visibility:inherit}");
window['mdc-text-field'].loadComponents(

/**** module id (dev mode) ****/
"mdc-text-field",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

function getClassesFromMap(map) {
  const classes = [];
  map.forEach((value, className) => {
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
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
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
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new MDCFoundation());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
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

const cssClasses = {
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

const strings = {
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
};

const numbers = {
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
let supportsCssVariables_;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
let supportsPassive_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  const computedStyle = windowObj.getComputedStyle(node);
  const hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj, forceRefresh = false) {
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
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
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const {x, y} = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {x: normalizedX, y: normalizedY};
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
const DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus',
};

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
class MDCRippleFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses;
  }

  static get strings() {
    return strings;
  }

  static get numbers() {
    return numbers;
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */ {},
      isUnbounded: () => /* boolean */ {},
      isSurfaceActive: () => /* boolean */ {},
      isSurfaceDisabled: () => /* boolean */ {},
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      updateCssVariable: (/* varName: string, value: string */) => {},
      computeBoundingRect: () => /* ClientRect */ {},
      getWindowPageOffset: () => /* {x: number, y: number} */ {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */ ({width: 0, height: 0});

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.xfDuration_ = 0;

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {!Array<{ListenerInfoType}>} */
    this.listenerInfos_ = [
      {activate: 'touchstart', deactivate: 'touchend'},
      {activate: 'pointerdown', deactivate: 'pointerup'},
      {activate: 'mousedown', deactivate: 'mouseup'},
      {activate: 'keydown', deactivate: 'keyup'},
      {focus: 'focus', blur: 'blur'},
    ];

    /** @private {!ListenersType} */
    this.listeners_ = {
      activate: (e) => this.activate_(e),
      deactivate: (e) => this.deactivate_(e),
      focus: () => requestAnimationFrame(
        () => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
      blur: () => requestAnimationFrame(
        () => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
    };

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {!{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0,
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */
  isSupported_() {
    return this.adapter_.browserSupportsCssVars();
  }

  /**
   * @return {!ActivationStateType}
   */
  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationStartTime: 0,
      activationEvent: null,
      isProgrammatic: false,
    };
  }

  init() {
    if (!this.isSupported_()) {
      return;
    }
    this.addEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.addClass(ROOT);
      if (this.adapter_.isUnbounded()) {
        this.adapter_.addClass(UNBOUNDED);
      }
      this.layoutInternal_();
    });
  }

  /** @private */
  addEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.registerInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  }

  /**
   * @param {Event} e
   * @private
   */
  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const {activationState_: activationState} = this;
    if (activationState.isActivated) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );
    activationState.activationStartTime = Date.now();

    requestAnimationFrame(() => {
      // This needs to be wrapped in an rAF call b/c web browsers
      // report active states inconsistently when they're called within
      // event handling code:
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = (e && e.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      } else {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  activate(event = null) {
    this.activate_(event);
  }

  /** @private */
  animateActivation_() {
    const {VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END} = MDCRippleFoundation.strings;
    const {
      BG_ACTIVE_FILL,
      FG_DEACTIVATION,
      FG_ACTIVATION,
    } = MDCRippleFoundation.cssClasses;
    const {DEACTIVATION_TIMEOUT_MS} = MDCRippleFoundation.numbers;

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const {startPoint, endPoint} = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
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
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  getFgTranslationCoordinates_() {
    const {activationState_: activationState} = this;
    const {activationEvent, wasActivatedByPointer} = activationState;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(
        /** @type {!Event} */ (activationEvent),
        this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()
      );
    } else {
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

    const endPoint = {
      x: (this.frame_.width / 2) - (this.initialSize_ / 2),
      y: (this.frame_.height / 2) - (this.initialSize_ / 2),
    };

    return {startPoint, endPoint};
  }

  /** @private */
  runDeactivationUXLogicIfReady_() {
    const {FG_DEACTIVATION} = MDCRippleFoundation.cssClasses;
    const {hasDeactivationUXRun, isActivated} = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  }

  /** @private */
  rmBoundedActivationClasses_() {
    const {BG_ACTIVE_FILL, FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(BG_ACTIVE_FILL);
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  /**
   * @param {Event} e
   * @private
   */
  deactivate_(e) {
    const {activationState_: activationState} = this;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }
    // Programmatic deactivation.
    if (activationState.isProgrammatic) {
      const evtObject = null;
      const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.activationState_ = this.defaultActivationState_();
      return;
    }

    const actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
    const expectedActivationType = activationState.activationEvent.type;
    // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
    // Essentially, what we need to do here is decouple the deactivation UX from the actual
    // deactivation state itself. This way, touch/pointer events in sequence do not trample one
    // another.
    const needsDeactivationUX = actualActivationType === expectedActivationType;
    let needsActualDeactivation = needsDeactivationUX;
    if (activationState.wasActivatedByPointer) {
      needsActualDeactivation = e.type === 'mouseup';
    }

    const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
    requestAnimationFrame(() => {
      if (needsDeactivationUX) {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
      }

      if (needsActualDeactivation) {
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  /**
   * @param {?Event=} event Optional event containing position information.
   */
  deactivate(event = null) {
    this.deactivate_(event);
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation_(e, {wasActivatedByPointer, wasElementMadeActive}) {
    const {BG_FOCUSED} = MDCRippleFoundation.cssClasses;
    if (wasActivatedByPointer || wasElementMadeActive) {
      // Remove class left over by element being focused
      this.adapter_.removeClass(BG_FOCUSED);
      this.runDeactivationUXLogicIfReady_();
    }
  }

  destroy() {
    if (!this.isSupported_()) {
      return;
    }
    this.removeEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.removeClass(ROOT);
      this.adapter_.removeClass(UNBOUNDED);
      this.removeCssVars_();
    });
  }

  /** @private */
  removeEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.deregisterInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  /** @private */
  removeCssVars_() {
    const {strings: strings$$1} = MDCRippleFoundation;
    Object.keys(strings$$1).forEach((k) => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings$$1[k], null);
      }
    });
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  /** @private */
  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();

    const maxDim = Math.max(this.frame_.height, this.frame_.width);
    const surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

    // 60% of the largest dimension of the surface
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

    // Diameter of the surface + 10px
    this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;
    this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
    this.updateLayoutCssVars_();
  }

  /** @private */
  updateLayoutCssVars_() {
    const {
      VAR_FG_SIZE, VAR_LEFT, VAR_TOP, VAR_FG_SCALE,
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
        top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }
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
 * @extends MDCComponent<!MDCRippleFoundation>
 */
class MDCRipple extends MDCComponent {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @type {boolean} */
    this.disabled = false;

    /** @private {boolean} */
    this.unbounded_;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */
  static attachTo(root, {isUnbounded = undefined} = {}) {
    const ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */ (isUnbounded);
    }
    return ripple;
  }

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */
  static createAdapter(instance) {
    const MATCHES = getMatchesProperty(HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => supportsCssVariables(window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: (className) => instance.root_.classList.add(className),
      removeClass: (className) => instance.root_.classList.remove(className),
      registerInteractionHandler: (evtType, handler) =>
        instance.root_.addEventListener(evtType, handler, applyPassive()),
      deregisterInteractionHandler: (evtType, handler) =>
        instance.root_.removeEventListener(evtType, handler, applyPassive()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    };
  }

  /** @return {boolean} */
  get unbounded() {
    return this.unbounded_;
  }

  /** @param {boolean} unbounded */
  set unbounded(unbounded) {
    const {UNBOUNDED} = MDCRippleFoundation.cssClasses;
    this.unbounded_ = Boolean(unbounded);
    if (this.unbounded_) {
      this.root_.classList.add(UNBOUNDED);
    } else {
      this.root_.classList.remove(UNBOUNDED);
    }
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  /** @return {!MDCRippleFoundation} */
  getDefaultFoundation() {
    return new MDCRippleFoundation(MDCRipple.createAdapter(this));
  }

  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */
class RippleCapableSurface {}

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
const strings$1 = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-text-field__label',
  ICON_SELECTOR: '.mdc-text-field__icon',
  ICON_EVENT: 'MDCTextField:icon',
  BOTTOM_LINE_SELECTOR: '.mdc-text-field__bottom-line',
};

/** @enum {string} */
const cssClasses$1 = {
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
class MDCTextFieldFoundation extends MDCFoundation {
  /** @return enum {string} */
  static get cssClasses() {
    return cssClasses$1;
  }

  /** @return enum {string} */
  static get strings() {
    return strings$1;
  }

  /**
   * {@see MDCTextFieldAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCTextFieldAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCTextFieldAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      addClassToLabel: () => {},
      removeClassFromLabel: () => {},
      setIconAttr: () => {},
      eventTargetHasClass: () => {},
      registerTextFieldInteractionHandler: () => {},
      deregisterTextFieldInteractionHandler: () => {},
      notifyIconAction: () => {},
      addClassToBottomLine: () => {},
      removeClassFromBottomLine: () => {},
      addClassToHelptext: () => {},
      removeClassFromHelptext: () => {},
      helptextHasClass: () => false,
      registerInputInteractionHandler: () => {},
      deregisterInputInteractionHandler: () => {},
      registerTransitionEndHandler: () => {},
      deregisterTransitionEndHandler: () => {},
      setBottomLineAttr: () => {},
      setHelptextAttr: () => {},
      removeHelptextAttr: () => {},
      getNativeInput: () => {},
    });
  }

  /**
   * @param {!MDCTextFieldAdapter=} adapter
   */
  constructor(adapter = /** @type {!MDCTextFieldAdapter} */ ({})) {
    super(Object.assign(MDCTextFieldFoundation.defaultAdapter, adapter));

    /** @private {boolean} */
    this.isFocused_ = false;
    /** @private {boolean} */
    this.receivedUserInput_ = false;
    /** @private {boolean} */
    this.useCustomValidityChecking_ = false;
    /** @private {function(): undefined} */
    this.inputFocusHandler_ = () => this.activateFocus();
    /** @private {function(): undefined} */
    this.inputBlurHandler_ = () => this.deactivateFocus();
    /** @private {function(): undefined} */
    this.inputInputHandler_ = () => this.autoCompleteFocus();
    /** @private {function(!Event): undefined} */
    this.setPointerXOffset_ = (evt) => this.animateBottomLine(evt);
    /** @private {function(!Event): undefined} */
    this.textFieldInteractionHandler_ = (evt) => this.handleTextFieldInteraction(evt);
    /** @private {function(!Event): undefined} */
    this.transitionEndHandler_ = (evt) => this.handleBottomLineAnimationEnd(evt);
  }

  init() {
    this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
    // Ensure label does not collide with any pre-filled value.
    if (this.getNativeInput_().value) {
      this.adapter_.addClassToLabel(MDCTextFieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach((evtType) => {
      this.adapter_.registerInputInteractionHandler(evtType, this.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach((evtType) => {
      this.adapter_.registerTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler_);
    });
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
  }

  destroy() {
    this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    ['mousedown', 'touchstart'].forEach((evtType) => {
      this.adapter_.deregisterInputInteractionHandler(evtType, this.setPointerXOffset_);
    });
    ['click', 'keydown'].forEach((evtType) => {
      this.adapter_.deregisterTextFieldInteractionHandler(evtType, this.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
  }

  /**
   * Handles all user interactions with the Text Field.
   * @param {!Event} evt
   */
  handleTextFieldInteraction(evt) {
    if (this.adapter_.getNativeInput().disabled) {
      return;
    }

    this.receivedUserInput_ = true;

    const {target, type} = evt;
    const {TEXT_FIELD_ICON} = MDCTextFieldFoundation.cssClasses;
    const targetIsIcon = this.adapter_.eventTargetHasClass(target, TEXT_FIELD_ICON);
    const eventTriggersNotification = type === 'click' || evt.key === 'Enter' || evt.keyCode === 13;

    if (targetIsIcon && eventTriggersNotification) {
      this.adapter_.notifyIconAction();
    }
  }

  /**
   * Activates the text field focus state.
   */
  activateFocus() {
    const {BOTTOM_LINE_ACTIVE, FOCUSED, LABEL_FLOAT_ABOVE, LABEL_SHAKE} = MDCTextFieldFoundation.cssClasses;
    this.adapter_.addClass(FOCUSED);
    this.adapter_.addClassToBottomLine(BOTTOM_LINE_ACTIVE);
    this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
    this.adapter_.removeClassFromLabel(LABEL_SHAKE);
    this.showHelptext_();
    this.isFocused_ = true;
  }

  /**
   * Animates the bottom line out from the user's click location.
   * @param {!Event} evt
   */
  animateBottomLine(evt) {
    const targetClientRect = evt.target.getBoundingClientRect();
    const evtCoords = {x: evt.clientX, y: evt.clientY};
    const normalizedX = evtCoords.x - targetClientRect.left;
    const attributeString =
      `transform-origin: ${normalizedX}px center`;

    this.adapter_.setBottomLineAttr('style', attributeString);
  }

  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programatically).
   */
  autoCompleteFocus() {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  }

  /**
   * Makes the help text visible to screen readers.
   * @private
   */
  showHelptext_() {
    const {ARIA_HIDDEN} = MDCTextFieldFoundation.strings;
    this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
  }

  /**
   * Executes when the bottom line's transition animation ends, performing
   * actions that must wait for animations to finish.
   * @param {!Event} evt
   */
  handleBottomLineAnimationEnd(evt) {
    const {BOTTOM_LINE_ACTIVE} = MDCTextFieldFoundation.cssClasses;

    // We need to wait for the bottom line to be entirely transparent
    // before removing the class. If we do not, we see the line start to
    // scale down before disappearing
    if (evt.propertyName === 'opacity' && !this.isFocused_) {
      this.adapter_.removeClassFromBottomLine(BOTTOM_LINE_ACTIVE);
    }
  }

  /**
   * Deactives the Text Field's focus state.
   */
  deactivateFocus() {
    const {FOCUSED, LABEL_FLOAT_ABOVE, LABEL_SHAKE} = MDCTextFieldFoundation.cssClasses;
    const input = this.getNativeInput_();

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
  }

  /**
   * Updates the Text Field's valid state based on the supplied validity.
   * @param {boolean} isValid
   * @private
   */
  changeValidity_(isValid) {
    const {INVALID, LABEL_SHAKE} = MDCTextFieldFoundation.cssClasses;
    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClassToLabel(LABEL_SHAKE);
      this.adapter_.addClass(INVALID);
    }
    this.updateHelptext_(isValid);
  }

  /**
   * Updates the state of the Text Field's help text based on validity and
   * the Text Field's options.
   * @param {boolean} isValid
   */
  updateHelptext_(isValid) {
    const {HELPTEXT_PERSISTENT, HELPTEXT_VALIDATION_MSG} = MDCTextFieldFoundation.cssClasses;
    const {ROLE} = MDCTextFieldFoundation.strings;
    const helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
    const helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
    const validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setHelptextAttr(ROLE, 'alert');
    } else {
      this.adapter_.removeHelptextAttr(ROLE);
    }

    if (helptextIsPersistent || validationMsgNeedsDisplay) {
      return;
    }
    this.hideHelptext_();
  }

  /**
   * Hides the help text from screen readers.
   * @private
   */
  hideHelptext_() {
    const {ARIA_HIDDEN} = MDCTextFieldFoundation.strings;
    this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
  }

  /**
   * @return {boolean} True if the Text Field input fails validity checks.
   * @private
   */
  isBadInput_() {
    const input = this.getNativeInput_();
    return input.validity ? input.validity.badInput : input.badInput;
  }

  /**
   * @return {boolean} True if the Text Field is disabled.
   */
  isDisabled() {
    return this.getNativeInput_().disabled;
  }

  /**
   * @param {boolean} disabled Sets the text-field disabled or enabled.
   */
  setDisabled(disabled) {
    const {DISABLED} = MDCTextFieldFoundation.cssClasses;
    this.getNativeInput_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.setIconAttr('tabindex', '-1');
    } else {
      this.adapter_.removeClass(DISABLED);
      this.adapter_.setIconAttr('tabindex', '0');
    }
  }

  /**
   * @return {!Element|!NativeInputType} The native text input from the
   * host environment, or a dummy if none exists.
   * @private
   */
  getNativeInput_() {
    return this.adapter_.getNativeInput() ||
    /** @type {!NativeInputType} */ ({
      checkValidity: () => true,
      value: '',
      disabled: false,
      badInput: false,
    });
  }

  /**
   * @param {boolean} isValid Sets the validity state of the Text Field.
   */
  setValid(isValid) {
    this.useCustomValidityChecking_ = true;
    this.changeValidity_(isValid);
  }
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
 * @extends {MDCComponent<!MDCTextFieldFoundation>}
 * @final
 */
class MDCTextField$1 extends MDCComponent {
  /**
   * @param {...?} args
   */
  constructor(...args) {
    super(...args);
    /** @private {?Element} */
    this.input_;
    /** @private {?Element} */
    this.label_;
    /** @type {?Element} */
    this.helptextElement;
    /** @type {?MDCRipple} */
    this.ripple;
    /** @private {?Element} */
    this.bottomLine_;
    /** @private {?Element} */
    this.icon_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCTextField}
   */
  static attachTo(root) {
    return new MDCTextField$1(root);
  }

  /**
   * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
   * creates a new MDCRipple.
   */
  initialize(rippleFactory = (el) => new MDCRipple(el)) {
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
  }

  destroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    super.destroy();
  }

  /**
   * Initiliazes the Text Field's internal state based on the environment's
   * state.
   */
  initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  }

  /**
   * @return {boolean} True if the Text Field is disabled.
   */
  get disabled() {
    return this.foundation_.isDisabled();
  }

  /**
   * @param {boolean} disabled Sets the Text Field disabled or enabled.
   */
  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  /**
   * @param {boolean} valid Sets the Text Field valid or invalid.
   */
  set valid(valid) {
    this.foundation_.setValid(valid);
  }

  /**
   * @return {!MDCTextFieldFoundation}
   */
  getDefaultFoundation() {
    return new MDCTextFieldFoundation(/** @type {!MDCTextFieldAdapter} */ (Object.assign({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      addClassToLabel: (className) => {
        const label = this.label_;
        if (label) {
          label.classList.add(className);
        }
      },
      removeClassFromLabel: (className) => {
        const label = this.label_;
        if (label) {
          label.classList.remove(className);
        }
      },
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      registerTextFieldInteractionHandler: (evtType, handler) => this.root_.addEventListener(evtType, handler),
      deregisterTextFieldInteractionHandler: (evtType, handler) => this.root_.removeEventListener(evtType, handler),
      notifyIconAction: () => this.emit(MDCTextFieldFoundation.strings.ICON_EVENT, {}),
    },
    this.getInputAdapterMethods_(),
    this.getHelptextAdapterMethods_(),
    this.getBottomLineAdapterMethods_(),
    this.getIconAdapterMethods_())));
  }

  /**
   * @return {!{
   *   setIconAttr: function(string, string): undefined,
   * }}
   */
  getIconAdapterMethods_() {
    return {
      setIconAttr: (name, value) => {
        if (this.icon_) {
          this.icon_.setAttribute(name, value);
        }
      },
    };
  }

  /**
   * @return {!{
   *   addClassToBottomLine: function(string): undefined,
   *   removeClassFromBottomLine: function(string): undefined,
   *   setBottomLineAttr: function(string, string): undefined,
   *   registerTransitionEndHandler: function(function()): undefined,
   *   deregisterTransitionEndHandler: function(function()): undefined,
   * }}
   */
  getBottomLineAdapterMethods_() {
    return {
      addClassToBottomLine: (className) => {
        if (this.bottomLine_) {
          this.bottomLine_.classList.add(className);
        }
      },
      removeClassFromBottomLine: (className) => {
        if (this.bottomLine_) {
          this.bottomLine_.classList.remove(className);
        }
      },
      setBottomLineAttr: (attr, value) => {
        if (this.bottomLine_) {
          this.bottomLine_.setAttribute(attr, value);
        }
      },
      registerTransitionEndHandler: (handler) => {
        if (this.bottomLine_) {
          this.bottomLine_.addEventListener('transitionend', handler);
        }
      },
      deregisterTransitionEndHandler: (handler) => {
        if (this.bottomLine_) {
          this.bottomLine_.removeEventListener('transitionend', handler);
        }
      },
    };
  }

  /**
   * @return {!{
   *   registerInputInteractionHandler: function(string, function()): undefined,
   *   deregisterInputInteractionHandler: function(string, function()): undefined,
   *   getNativeInput: function(): ?Element,
   * }}
   */
  getInputAdapterMethods_() {
    return {
      registerInputInteractionHandler: (evtType, handler) => this.input_.addEventListener(evtType, handler),
      deregisterInputInteractionHandler: (evtType, handler) => this.input_.removeEventListener(evtType, handler),
      getNativeInput: () => this.input_,
    };
  }

  /**
   * @return {!{
   *   addClassToHelptext: function(string): undefined,
   *   removeClassFromHelptext: function(string): undefined,
   *   helptextHasClass: function(string): boolean,
   *   setHelptextAttr: function(string, string): undefined,
   *   removeHelptextAttr: function(string): undefined,
   * }}
   */
  getHelptextAdapterMethods_() {
    return {
      addClassToHelptext: (className) => {
        if (this.helptextElement) {
          this.helptextElement.classList.add(className);
        }
      },
      removeClassFromHelptext: (className) => {
        if (this.helptextElement) {
          this.helptextElement.classList.remove(className);
        }
      },
      helptextHasClass: (className) => {
        if (!this.helptextElement) {
          return false;
        }
        return this.helptextElement.classList.contains(className);
      },
      setHelptextAttr: (name, value) => {
        if (this.helptextElement) {
          this.helptextElement.setAttribute(name, value);
        }
      },
      removeHelptextAttr: (name) => {
        if (this.helptextElement) {
          this.helptextElement.removeAttribute(name);
        }
      },
    };
  }
}

class MDCTextField$$1 {
    // Getters
    get el() {
        return this['__el'];
    }
    get classes() {
        return getClassesFromMap(this.classesMap);
    }
    get classesMap() {
        return new Map([['mdc-text-field', true], ['mdc-text-field--disabled', this.disabled]]);
    }
    // Lifecycle
    componentDidLoad() {
        const mdcTextField = this.el.shadowRoot.querySelector('.mdc-text-field');
        MDCTextField$1.attachTo(mdcTextField);
        if (this.initialValue) {
            const input = this.el.shadowRoot.querySelector('input');
            const label = this.el.shadowRoot.querySelector('label');
            input.value = this.initialValue;
            label.className += ' mdc-text-field__label--float-above';
        }
    }
    // Handlers
    handleOnKeyUp(e) {
        const value = e.target.value;
        this.value = value;
        this.el.dispatchEvent(new CustomEvent('value-changed', { bubbles: true, detail: { value } }));
    }
    // Render
    render() {
        const helperTextClasses = ['mdc-text-field-helper-text'];
        if (this.persistent) {
            helperTextClasses.push('mdc-text-field-helper-text--persistent');
        }
        return (h("div", { id: "mdcTextField", class: this.classes },
            h("input", { type: "text", class: "mdc-text-field__input", onKeyUp: (e) => this.handleOnKeyUp(e) }),
            h("label", { htmlFor: "input", class: "mdc-text-field__label" }, this.label),
            h("div", { class: "mdc-text-field__bottom-line" }),
            h("div", { class: helperTextClasses.join(' '), "aria-hidden": "true" },
                h("slot", null))));
    }
}

exports['mdc-text-field'] = MDCTextField$$1;
},


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