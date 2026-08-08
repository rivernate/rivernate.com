/* @ds-bundle: {"format":4,"namespace":"RivernateDesignSystem_665cb5","components":[{"name":"PostRow","sourcePath":"components/content/PostRow.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"LUCIDE_BASE","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CodeBlock","sourcePath":"components/terminal/CodeBlock.jsx"},{"name":"Prompt","sourcePath":"components/terminal/Prompt.jsx"},{"name":"TerminalWindow","sourcePath":"components/terminal/TerminalWindow.jsx"},{"name":"THEMES","sourcePath":"components/theming/ThemeSelector.jsx"},{"name":"FONTS","sourcePath":"components/theming/ThemeSelector.jsx"},{"name":"ApplyScheme","sourcePath":"components/theming/ThemeSelector.jsx"},{"name":"ThemeSelector","sourcePath":"components/theming/ThemeSelector.jsx"}],"sourceHashes":{"components/content/PostRow.jsx":"cbffd02d31e6","components/core/Badge.jsx":"e8e13f086fa5","components/core/Button.jsx":"1f2a0e23d869","components/core/Card.jsx":"d4d537ce397a","components/core/Icon.jsx":"c524a2f1efb6","components/core/IconButton.jsx":"8c2eaa65c026","components/core/Tag.jsx":"daf9acd7ec68","components/feedback/Callout.jsx":"00bbf448b5ff","components/feedback/Dialog.jsx":"68c8643c349a","components/feedback/Tooltip.jsx":"c4061786ac56","components/forms/Checkbox.jsx":"7304edb6b882","components/forms/Field.jsx":"9e6e20c802cb","components/forms/Input.jsx":"33d7e40de714","components/forms/Select.jsx":"bfa40d10c1ea","components/forms/Switch.jsx":"e3cfb06de516","components/forms/Textarea.jsx":"a381b0e88d2a","components/navigation/NavBar.jsx":"9e817a423d14","components/navigation/Tabs.jsx":"6b246b55b7c3","components/terminal/CodeBlock.jsx":"1177cb1ee343","components/terminal/Prompt.jsx":"2d4f43c5dbef","components/terminal/TerminalWindow.jsx":"a3240a966fba","components/theming/ThemeSelector.jsx":"7cf6a293e2c7","ui_kits/website/AboutScreen.jsx":"9e066cf40bc5","ui_kits/website/HomeScreen.jsx":"a97a49c86f80","ui_kits/website/PostScreen.jsx":"1fe438380411","ui_kits/website/ProjectsScreen.jsx":"4aa627972804","ui_kits/website/Shell.jsx":"9859b9b0f533","ui_kits/website/WritingScreen.jsx":"6090b834ab66","ui_kits/website/data.js":"a11f6dc33d1e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RivernateDesignSystem_665cb5 = window.RivernateDesignSystem_665cb5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    c: 'var(--text-muted)',
    b: 'var(--border-subtle)',
    bg: 'transparent'
  },
  accent: {
    c: 'var(--green-bright)',
    b: 'var(--green-mid)',
    bg: 'var(--green-wash)'
  },
  warn: {
    c: 'var(--amber)',
    b: 'rgba(255,176,0,.4)',
    bg: 'var(--amber-wash)'
  },
  error: {
    c: 'var(--red)',
    b: 'rgba(255,92,92,.4)',
    bg: 'var(--red-wash)'
  },
  info: {
    c: 'var(--cyan)',
    b: 'rgba(61,219,217,.4)',
    bg: 'var(--cyan-wash)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return React.createElement('span', {
    ...rest,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      padding: '4px 7px',
      color: t.c,
      background: t.bg,
      border: '1px solid ' + t.b,
      borderRadius: 'var(--radius-1)',
      ...(rest.style || {})
    }
  }, dot ? React.createElement('span', {
    style: {
      width: 5,
      height: 5,
      background: t.c,
      borderRadius: 'var(--radius-pill)'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-mono)',
  fontWeight: 'var(--fw-medium)',
  letterSpacing: '0.02em',
  borderRadius: 'var(--radius-1)',
  borderStyle: 'solid',
  borderWidth: 'var(--border-1)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--sp-2)',
  whiteSpace: 'nowrap',
  transition: 'background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out)'
};
const sizes = {
  sm: {
    fontSize: 'var(--fs-tiny)',
    padding: '4px 10px',
    height: '26px'
  },
  md: {
    fontSize: 'var(--fs-base)',
    padding: '6px 14px',
    height: '32px'
  },
  lg: {
    fontSize: 'var(--fs-md)',
    padding: '9px 20px',
    height: '40px'
  }
};
function skin(variant, hover) {
  switch (variant) {
    case 'primary':
      return {
        background: hover ? 'var(--green-bright)' : 'var(--green)',
        color: 'var(--ink-900)',
        borderColor: hover ? 'var(--green-bright)' : 'var(--green)'
      };
    case 'ghost':
      return {
        background: hover ? 'var(--surface-hover)' : 'transparent',
        color: 'var(--text-secondary)',
        borderColor: 'transparent'
      };
    case 'danger':
      return {
        background: hover ? 'var(--red-wash)' : 'transparent',
        color: 'var(--red)',
        borderColor: 'var(--red)'
      };
    default:
      return {
        background: hover ? 'var(--surface-hover)' : 'transparent',
        color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
        borderColor: hover ? 'var(--border-strong)' : 'var(--border-subtle)'
      };
  }
}
function Button({
  variant = 'secondary',
  size = 'md',
  prefix,
  disabled = false,
  fullWidth = false,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...(sizes[size] || sizes.md),
    ...skin(variant, hover && !disabled),
    width: fullWidth ? '100%' : undefined,
    justifyContent: fullWidth ? 'center' : undefined,
    opacity: disabled ? 0.4 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
  return React.createElement('button', {
    ...rest,
    disabled,
    style: {
      ...style,
      ...(rest.style || {})
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, prefix ? React.createElement('span', {
    style: {
      opacity: .7
    }
  }, prefix) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  title,
  meta,
  interactive = false,
  glow = false,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const active = interactive && hover;
  return React.createElement('div', {
    ...rest,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: 'var(--border-1) solid ' + (active ? 'var(--border-accent)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-1)',
      boxShadow: glow ? 'var(--glow-soft)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...(rest.style || {})
    }
  }, title || meta ? React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      padding: '10px var(--sp-4)',
      borderBottom: 'var(--rule)'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--fw-medium) var(--fs-tiny)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: active ? 'var(--text-accent)' : 'var(--text-secondary)'
    }
  }, title), meta ? React.createElement('span', {
    style: {
      font: 'var(--fs-micro)/1 var(--font-mono)',
      color: 'var(--text-faint)'
    }
  }, meta) : null) : null, React.createElement('div', {
    style: {
      padding: 'var(--sp-4)'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const LUCIDE_BASE = 'https://unpkg.com/lucide-static@0.454.0/icons/';
const cache = {};
function load(name) {
  if (cache[name]) return cache[name];
  cache[name] = fetch(LUCIDE_BASE + name + '.svg').then(r => r.ok ? r.text() : '').then(t => t.replace(/<!--[\s\S]*?-->/g, '').replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"')).catch(() => '');
  return cache[name];
}

/** Renders a Lucide glyph inline; stroke follows the given colour token. */
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  title,
  ...rest
}) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => {
    let live = true;
    load(name).then(s => {
      if (live) setSvg(s);
    });
    return () => {
      live = false;
    };
  }, [name]);
  return React.createElement('span', {
    ...rest,
    role: 'img',
    'aria-label': title || name,
    dangerouslySetInnerHTML: {
      __html: svg
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      ...(rest.style || {})
    }
  });
}
Object.assign(__ds_scope, { LUCIDE_BASE, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 26,
  md: 32,
  lg: 40
};
function IconButton({
  name,
  label,
  size = 'md',
  variant = 'secondary',
  disabled = false,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size] || sizes.md;
  const bordered = variant === 'secondary';
  return React.createElement('button', {
    ...rest,
    disabled,
    'aria-label': label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover && !disabled ? 'var(--surface-hover)' : 'transparent',
      border: bordered ? 'var(--border-1) solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)') : '1px solid transparent',
      borderRadius: 'var(--radius-1)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--dur-fast) var(--ease-out),border-color var(--dur-fast) var(--ease-out)',
      ...(rest.style || {})
    }
  }, React.createElement(__ds_scope.Icon, {
    name,
    size: size === 'sm' ? 13 : 15,
    color: hover && !disabled ? 'var(--text-primary)' : 'var(--text-muted)'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  interactive = false,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('span', {
    ...rest,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      font: 'var(--fw-regular) var(--fs-tiny)/1 var(--font-mono)',
      padding: '5px 8px',
      color: hover && interactive ? 'var(--text-primary)' : 'var(--text-secondary)',
      background: hover && interactive ? 'var(--surface-hover)' : 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-1)',
      cursor: interactive ? 'pointer' : 'default',
      ...(rest.style || {})
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--text-faint)'
    }
  }, '#'), children, onRemove ? React.createElement('span', {
    onClick: onRemove,
    style: {
      cursor: 'pointer',
      color: 'var(--text-faint)',
      paddingLeft: 2
    }
  }, '\u00d7') : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/PostRow.jsx
try { (() => {
function PostRow({
  date,
  title,
  summary,
  tags = [],
  href = '#',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('a', {
    ...rest,
    href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '96px 1fr',
      gap: 'var(--sp-4)',
      padding: 'var(--sp-4) 0',
      borderBottom: 'var(--rule)',
      textDecoration: 'none',
      border: 'none',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--border-subtle)',
      background: 'transparent',
      ...(rest.style || {})
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--fs-tiny)/var(--row) var(--font-mono)',
      color: 'var(--text-faint)',
      whiteSpace: 'nowrap'
    }
  }, date), React.createElement('span', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--fw-medium) var(--fs-lg)/1.3 var(--font-display)',
      letterSpacing: 'var(--ls-heading)',
      color: hover ? 'var(--text-accent)' : 'var(--text-primary)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, title), summary ? React.createElement('span', {
    style: {
      font: 'var(--fs-base)/var(--lh-body) var(--font-mono)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure)'
    }
  }, summary) : null, tags.length ? React.createElement('span', {
    style: {
      display: 'flex',
      gap: 'var(--sp-2)',
      marginTop: 2
    }
  }, tags.map(t => React.createElement(__ds_scope.Tag, {
    key: t
  }, t))) : null));
}
Object.assign(__ds_scope, { PostRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
const tones = {
  note: {
    c: 'var(--text-secondary)',
    a: 'var(--border-strong)',
    i: 'info',
    bg: 'var(--surface-raised)'
  },
  accent: {
    c: 'var(--text-primary)',
    a: 'var(--green-mid)',
    i: 'zap',
    bg: 'var(--green-wash)'
  },
  warn: {
    c: 'var(--text-primary)',
    a: 'var(--amber)',
    i: 'triangle-alert',
    bg: 'var(--amber-wash)'
  },
  error: {
    c: 'var(--text-primary)',
    a: 'var(--red)',
    i: 'octagon-x',
    bg: 'var(--red-wash)'
  }
};
function Callout({
  tone = 'note',
  title,
  children,
  ...rest
}) {
  const t = tones[tone] || tones.note;
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      padding: 'var(--sp-4)',
      background: t.bg,
      border: 'var(--border-1) solid var(--border-subtle)',
      borderRadius: 'var(--radius-1)',
      ...(rest.style || {})
    }
  }, React.createElement(__ds_scope.Icon, {
    name: t.i,
    size: 15,
    color: t.a,
    style: {
      marginTop: 2
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, title ? React.createElement('span', {
    style: {
      font: 'var(--fw-medium) var(--fs-tiny)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: t.a
    }
  }, title) : null, React.createElement('div', {
    style: {
      font: 'var(--fs-base)/var(--lh-body) var(--font-mono)',
      color: t.c
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title = 'dialog',
  onClose,
  footer,
  children,
  width = 440,
  ...rest
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(8,9,10,.72)',
      backdropFilter: 'blur(2px)'
    },
    onClick: onClose
  }, React.createElement('div', {
    ...rest,
    onClick: e => e.stopPropagation(),
    role: 'dialog',
    style: {
      width,
      maxWidth: '92vw',
      background: 'var(--surface-card)',
      border: 'var(--border-1) solid var(--border-strong)',
      borderRadius: 'var(--radius-1)',
      boxShadow: 'var(--shadow-modal)',
      ...(rest.style || {})
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 8px 8px var(--sp-4)',
      borderBottom: 'var(--rule)',
      background: 'var(--surface-raised)'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--fw-medium) var(--fs-tiny)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, title), React.createElement(__ds_scope.IconButton, {
    name: 'x',
    label: 'Close',
    size: 'sm',
    variant: 'ghost',
    onClick: onClose
  })), React.createElement('div', {
    style: {
      padding: 'var(--sp-5) var(--sp-4)',
      font: 'var(--fs-base)/var(--lh-body) var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, children), footer ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--sp-2)',
      padding: 'var(--sp-3) var(--sp-4)',
      borderTop: 'var(--rule)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  side = 'top',
  children,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : side === 'left' ? {
    right: 'calc(100% + 6px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : side === 'right' ? {
    left: 'calc(100% + 6px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  return React.createElement('span', {
    ...rest,
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...(rest.style || {})
    }
  }, children, show ? React.createElement('span', {
    role: 'tooltip',
    style: {
      position: 'absolute',
      zIndex: 40,
      whiteSpace: 'nowrap',
      ...pos,
      font: 'var(--fs-micro)/1 var(--font-mono)',
      letterSpacing: '.02em',
      color: 'var(--text-primary)',
      background: 'var(--ink-900)',
      border: 'var(--border-1) solid var(--border-strong)',
      borderRadius: 'var(--radius-1)',
      padding: '5px 7px'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  ...rest
}) {
  return React.createElement('label', {
    ...rest,
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: 'var(--fs-base)/1 var(--font-mono)',
      color: 'var(--text-secondary)',
      ...(rest.style || {})
    }
  }, React.createElement('input', {
    type: 'checkbox',
    id,
    checked,
    disabled,
    onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement('span', {
    style: {
      width: 16,
      height: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--green)' : 'var(--surface-inset)',
      border: 'var(--border-1) solid ' + (checked ? 'var(--green)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-1)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, checked ? React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 11,
    color: 'var(--ink-900)'
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Label + hint + error scaffold shared by the form controls. */
function Field({
  label,
  hint,
  error,
  htmlFor,
  children
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label ? React.createElement('label', {
    htmlFor,
    style: {
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label) : null, children, error || hint ? React.createElement('span', {
    style: {
      font: 'var(--fs-tiny)/1.4 var(--font-mono)',
      color: error ? 'var(--status-error)' : 'var(--text-faint)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  prefix = '',
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const input = React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--surface-inset)',
      borderRadius: 'var(--radius-1)',
      padding: '0 10px',
      border: 'var(--border-1) solid ' + (error ? 'var(--status-error)' : focus ? 'var(--border-accent)' : 'var(--border-subtle)'),
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, prefix ? React.createElement('span', {
    style: {
      color: 'var(--text-accent)',
      fontSize: 'var(--fs-base)'
    }
  }, prefix) : null, React.createElement('input', {
    ...rest,
    id,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      caretColor: 'var(--caret)',
      color: 'var(--text-primary)',
      font: 'var(--fs-base)/1 var(--font-mono)',
      padding: '9px 0'
    }
  }));
  return label || hint || error ? React.createElement(__ds_scope.Field, {
    label,
    hint,
    error,
    htmlFor: id
  }, input) : input;
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const el = React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement('select', {
    ...rest,
    id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      background: 'var(--surface-inset)',
      color: 'var(--text-primary)',
      font: 'var(--fs-base)/1 var(--font-mono)',
      padding: '9px 30px 9px 10px',
      border: 'var(--border-1) solid ' + (error ? 'var(--status-error)' : focus ? 'var(--border-accent)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-1)',
      outline: 'none',
      cursor: 'pointer'
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return React.createElement('option', {
      key: v,
      value: v
    }, l);
  })), React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 13,
    color: 'var(--text-muted)',
    style: {
      position: 'absolute',
      right: 10,
      pointerEvents: 'none'
    }
  }));
  return label || hint || error ? React.createElement(__ds_scope.Field, {
    label,
    hint,
    error,
    htmlFor: id
  }, el) : el;
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  ...rest
}) {
  return React.createElement('label', {
    ...rest,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      font: 'var(--fs-base)/1 var(--font-mono)',
      color: 'var(--text-secondary)',
      ...(rest.style || {})
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    disabled,
    onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement('span', {
    style: {
      width: 34,
      height: 18,
      padding: 2,
      display: 'inline-flex',
      background: checked ? 'var(--green-wash)' : 'var(--surface-inset)',
      border: 'var(--border-1) solid ' + (checked ? 'var(--green-mid)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-1)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, React.createElement('span', {
    style: {
      width: 12,
      height: 12,
      alignSelf: 'center',
      background: checked ? 'var(--green-bright)' : 'var(--text-faint)',
      transform: 'translateX(' + (checked ? 14 : 0) + 'px)',
      transition: 'transform var(--dur-base) var(--ease-out),background var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  hint,
  error,
  rows = 5,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const el = React.createElement('textarea', {
    ...rest,
    id,
    rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: '100%',
      resize: 'vertical',
      background: 'var(--surface-inset)',
      caretColor: 'var(--caret)',
      color: 'var(--text-primary)',
      font: 'var(--fs-base)/var(--lh-body) var(--font-mono)',
      padding: '10px',
      border: 'var(--border-1) solid ' + (error ? 'var(--status-error)' : focus ? 'var(--border-accent)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-1)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  });
  return label || hint || error ? React.createElement(__ds_scope.Field, {
    label,
    hint,
    error,
    htmlFor: id
  }, el) : el;
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  brand = 'rivernate',
  items = [],
  active,
  onNavigate,
  right,
  ...rest
}) {
  return React.createElement('nav', {
    ...rest,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      height: 52,
      padding: '0 var(--sp-6)',
      borderBottom: 'var(--rule)',
      background: 'var(--surface-page)',
      ...(rest.style || {})
    }
  }, React.createElement('a', {
    href: '/',
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && (items[0].value || items[0]));
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      textDecoration: 'none'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'terminal',
    size: 15,
    color: 'var(--green-bright)'
  }), React.createElement('span', {
    style: {
      font: 'var(--fw-semibold) var(--fs-md)/1 var(--font-display)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-primary)'
    }
  }, brand)), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--sp-5)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label;
    const on = v === active;
    return React.createElement('a', {
      key: v,
      href: '#' + v,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(v);
      },
      style: {
        font: 'var(--fs-base)/1 var(--font-mono)',
        textDecoration: 'none',
        border: 'none',
        color: on ? 'var(--text-accent)' : 'var(--text-muted)'
      }
    }, React.createElement('span', {
      style: {
        opacity: .5
      }
    }, '/'), l);
  })), right ? React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)'
    }
  }, right) : null);
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  ...rest
}) {
  return React.createElement('div', {
    ...rest,
    role: 'tablist',
    style: {
      display: 'flex',
      gap: 'var(--sp-5)',
      borderBottom: 'var(--rule)',
      ...(rest.style || {})
    }
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label;
    const on = v === value;
    return React.createElement('button', {
      key: v,
      role: 'tab',
      'aria-selected': on,
      onClick: () => onChange && onChange(v),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 10px',
        marginBottom: -1,
        font: (on ? 'var(--fw-medium)' : 'var(--fw-regular)') + ' var(--fs-base)/1 var(--font-mono)',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (on ? 'var(--green-bright)' : 'transparent'),
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, React.createElement('span', {
      style: {
        color: 'var(--text-faint)',
        marginRight: 6
      }
    }, '/'), l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/terminal/CodeBlock.jsx
try { (() => {
function CodeBlock({
  code = '',
  lang = 'sh',
  showLineNumbers = true,
  copyable = true,
  ...rest
}) {
  const lines = String(code).replace(/\n$/, '').split('\n');
  return React.createElement('div', {
    ...rest,
    style: {
      background: 'var(--surface-inset)',
      border: 'var(--border-1) solid var(--border-subtle)',
      borderRadius: 'var(--radius-1)',
      ...(rest.style || {})
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4px 6px 4px 10px',
      borderBottom: 'var(--rule)'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--fs-micro)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, lang), copyable ? React.createElement(__ds_scope.IconButton, {
    name: 'copy',
    label: 'Copy code',
    size: 'sm',
    variant: 'ghost',
    onClick: () => navigator.clipboard && navigator.clipboard.writeText(code)
  }) : null), React.createElement('pre', {
    style: {
      margin: 0,
      padding: 'var(--sp-3) 0',
      overflowX: 'auto'
    }
  }, lines.map((l, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      padding: '0 10px',
      font: 'var(--fs-base)/var(--row) var(--font-mono)',
      color: 'var(--text-secondary)',
      whiteSpace: 'pre'
    }
  }, showLineNumbers ? React.createElement('span', {
    style: {
      color: 'var(--text-faint)',
      userSelect: 'none',
      minWidth: '2ch',
      textAlign: 'right'
    }
  }, i + 1) : null, React.createElement('span', null, l)))));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/terminal/Prompt.jsx
try { (() => {
/** A single shell line: user@host path $ command, with an optional blinking block caret. */
function Prompt({
  user = 'river',
  host = 'rivernate.com',
  path = '~',
  symbol = '$',
  command = '',
  caret = false,
  ...rest
}) {
  return React.createElement('div', {
    ...rest,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: '0 .5ch',
      font: 'var(--fs-base)/var(--row) var(--font-mono)',
      ...(rest.style || {})
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--green-bright)'
    }
  }, user + '@' + host), React.createElement('span', {
    style: {
      color: 'var(--cyan)'
    }
  }, path), React.createElement('span', {
    style: {
      color: 'var(--text-faint)'
    }
  }, symbol), React.createElement('span', {
    style: {
      color: 'var(--text-primary)'
    }
  }, command), caret ? React.createElement('span', {
    style: {
      display: 'inline-block',
      width: '.6em',
      height: '1em',
      background: 'var(--caret)',
      transform: 'translateY(2px)',
      animation: 'rn-blink 1.05s var(--ease-step) infinite'
    }
  }) : null);
}
Object.assign(__ds_scope, { Prompt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/Prompt.jsx", error: String((e && e.message) || e) }); }

// components/terminal/TerminalWindow.jsx
try { (() => {
function TerminalWindow({
  title = 'bash',
  shell = 'sh',
  scanlines = false,
  glow = false,
  children,
  ...rest
}) {
  return React.createElement('div', {
    ...rest,
    style: {
      background: 'var(--surface-inset)',
      border: 'var(--border-1) solid var(--border-strong)',
      borderRadius: 'var(--radius-1)',
      boxShadow: glow ? 'var(--glow-soft)' : 'none',
      overflow: 'hidden',
      ...(rest.style || {})
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      height: 30,
      padding: '0 10px',
      background: 'var(--surface-raised)',
      borderBottom: 'var(--rule)'
    }
  }, React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: 3,
      height: 12,
      background: 'var(--green-mid)'
    }
  }), React.createElement('span', {
    style: {
      font: 'var(--fs-micro)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, title), React.createElement('span', {
    style: {
      marginLeft: 'auto',
      font: 'var(--fs-micro)/1 var(--font-mono)',
      color: 'var(--text-faint)',
      opacity: .7
    }
  }, shell)), React.createElement('div', {
    style: {
      position: 'relative',
      padding: 'var(--sp-4)',
      font: 'var(--fs-base)/var(--row) var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, children, scanlines ? React.createElement('span', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'var(--scanline)'
    }
  }) : null));
}
Object.assign(__ds_scope, { TerminalWindow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/TerminalWindow.jsx", error: String((e && e.message) || e) }); }

// components/theming/ThemeSelector.jsx
try { (() => {
const THEMES = [{
  value: '',
  label: 'phosphor',
  swatches: ['#0b0d0f', '#33ff66', '#3ddbd9', '#ffb000']
}, {
  value: 'gruvbox',
  label: 'gruvbox dark',
  swatches: ['#282828', '#b8bb26', '#8ec07c', '#fabd2f']
}, {
  value: 'solarized-dark',
  label: 'solarized dark',
  swatches: ['#002b36', '#859900', '#2aa198', '#b58900']
}, {
  value: 'dracula',
  label: 'dracula',
  swatches: ['#282a36', '#50fa7b', '#8be9fd', '#bd93f9']
}, {
  value: 'nord',
  label: 'nord',
  swatches: ['#2e3440', '#a3be8c', '#88c0d0', '#ebcb8b']
}, {
  value: 'tokyo-night',
  label: 'tokyo night',
  swatches: ['#1a1b26', '#9ece6a', '#7dcfff', '#bb9af7']
}, {
  value: 'catppuccin',
  label: 'catppuccin mocha',
  swatches: ['#1e1e2e', '#a6e3a1', '#89dceb', '#cba6f7']
}, {
  value: 'one-dark',
  label: 'one dark',
  swatches: ['#282c34', '#98c379', '#56b6c2', '#c678dd']
}, {
  value: 'solarized-light',
  label: 'solarized light',
  swatches: ['#fdf6e3', '#657b00', '#2aa198', '#dc322f']
}, {
  value: 'paper',
  label: 'paper',
  swatches: ['#f6f4ee', '#0f7a33', '#14171a', '#d8d4c8']
}];
const FONTS = [{
  value: '',
  label: 'geist mono'
}, {
  value: 'jetbrains',
  label: 'jetbrains mono'
}, {
  value: 'ibm-plex',
  label: 'ibm plex mono'
}, {
  value: 'fira',
  label: 'fira code'
}, {
  value: 'source',
  label: 'source code pro'
}, {
  value: 'space',
  label: 'space mono'
}];

/** Applies a scheme to a root element (defaults to <html>). */
function ApplyScheme({
  theme,
  font,
  target
}) {
  const el = target || typeof document !== 'undefined' && document.documentElement;
  if (!el) return;
  if (theme !== undefined) {
    theme ? el.setAttribute('data-theme', theme) : el.removeAttribute('data-theme');
  }
  if (font !== undefined) {
    font ? el.setAttribute('data-font', font) : el.removeAttribute('data-font');
  }
}
function Row({
  on,
  onClick,
  children
}) {
  const [h, setH] = React.useState(false);
  return React.createElement('button', {
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      padding: '6px 10px',
      border: 'none',
      background: h ? 'var(--surface-hover)' : 'transparent',
      font: 'var(--fs-tiny)/1 var(--font-mono)',
      color: on ? 'var(--text-accent)' : h ? 'var(--text-primary)' : 'var(--text-secondary)'
    }
  }, React.createElement('span', {
    style: {
      width: '1ch',
      color: 'var(--text-accent)'
    }
  }, on ? '>' : ''), children);
}
function ThemeSelector({
  theme = '',
  font = '',
  onChange,
  target,
  align = 'right',
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [h, setH] = React.useState(false);
  const set = next => {
    const v = {
      theme,
      font,
      ...next
    };
    ApplyScheme({
      ...v,
      target
    });
    onChange && onChange(v);
  };
  const current = (THEMES.find(t => t.value === theme) || THEMES[0]).label;
  return React.createElement('div', {
    ...rest,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...(rest.style || {})
    }
  }, React.createElement('button', {
    onClick: () => setOpen(o => !o),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-2)',
      height: 26,
      padding: '0 8px',
      cursor: 'pointer',
      background: h || open ? 'var(--surface-hover)' : 'transparent',
      borderRadius: 'var(--radius-1)',
      border: 'var(--border-1) solid ' + (open ? 'var(--border-accent)' : 'var(--border-subtle)'),
      font: 'var(--fs-micro)/1 var(--font-mono)',
      color: 'var(--text-secondary)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'palette',
    size: 12,
    color: 'var(--text-accent)'
  }), current), open ? React.createElement('div', {
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      zIndex: 60,
      width: 230,
      [align]: 0,
      background: 'var(--surface-card)',
      border: 'var(--border-1) solid var(--border-strong)',
      borderRadius: 'var(--radius-1)',
      boxShadow: 'var(--shadow-modal)',
      padding: '6px 0'
    }
  }, React.createElement('div', {
    style: {
      padding: '4px 10px 6px',
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, 'colour scheme'), THEMES.map(t => React.createElement(Row, {
    key: t.value || 'default',
    on: t.value === theme,
    onClick: () => set({
      theme: t.value
    })
  }, React.createElement('span', {
    style: {
      flex: 1
    }
  }, t.label), React.createElement('span', {
    style: {
      display: 'flex',
      gap: 2
    }
  }, t.swatches.map((c, i) => React.createElement('span', {
    key: i,
    style: {
      width: 9,
      height: 9,
      background: c,
      border: '1px solid rgba(128,128,128,.35)'
    }
  }))))), React.createElement('div', {
    style: {
      borderTop: 'var(--rule)',
      margin: '6px 0'
    }
  }), React.createElement('div', {
    style: {
      padding: '0 10px 6px',
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, 'font'), FONTS.map(x => React.createElement(Row, {
    key: x.value || 'default',
    on: x.value === font,
    onClick: () => set({
      font: x.value
    })
  }, React.createElement('span', {
    style: {
      flex: 1
    }
  }, x.label)))) : null);
}
Object.assign(__ds_scope, { THEMES, FONTS, ApplyScheme, ThemeSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/theming/ThemeSelector.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
const {
  TerminalWindow,
  Prompt,
  Input,
  Textarea,
  Button,
  Checkbox,
  Callout,
  Dialog,
  Select
} = window.RivernateDesignSystem_665cb5;
function AboutScreen() {
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h2)'
    }
  }, "about"), /*#__PURE__*/React.createElement(TerminalWindow, {
    title: "~/about"
  }, /*#__PURE__*/React.createElement(Prompt, {
    command: "cat bio.txt"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: 'var(--measure)'
    }
  }, "river nate. ten years writing backends, most of them in rust and go. I like systems that are legible at 3am and boring the rest of the time."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Prompt, {
    command: "uname -a"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "berlin \xB7 utc+2 \xB7 replies within a week")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "get in touch"), /*#__PURE__*/React.createElement(Input, {
    label: "name",
    placeholder: "who is this"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "email",
    prefix: "@",
    placeholder: "you@host",
    error: ok ? null : 'required'
  }), /*#__PURE__*/React.createElement(Select, {
    label: "about",
    options: ['a post', 'a project', 'work', 'something else']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "message",
    rows: 4,
    placeholder: "keep it short"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "cc me a copy",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    prefix: "$",
    onClick: () => setSent(true)
  }, "send"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "note",
    title: "no newsletter"
  }, "There is an RSS feed and nothing else. No analytics, no cookie banner, no popup."), /*#__PURE__*/React.createElement(Callout, {
    tone: "accent",
    title: "uses"
  }, "Framework 13 running arch \xB7 sway \xB7 neovim \xB7 tmux \xB7 Geist Mono at 13px \xB7 a mechanical keyboard I regret."))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    title: "message sent",
    onClose: () => setSent(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "primary",
      onClick: () => setSent(false)
    }, "ok")
  }, "Queued. You will get a reply from river@rivernate.com, usually within a week."));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  TerminalWindow,
  Prompt,
  PostRow,
  Button,
  Badge,
  Icon
} = window.RivernateDesignSystem_665cb5;
function SectionHead({
  label,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      borderBottom: 'var(--rule)',
      paddingBottom: 'var(--sp-2)',
      marginBottom: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-micro)/1 var(--font-mono)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), action ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onAction && onAction();
    },
    style: {
      fontSize: 'var(--fs-tiny)',
      border: 'none'
    }
  }, action) : null);
}
function HomeScreen({
  go
}) {
  const posts = window.RN_DATA.posts.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement(TerminalWindow, {
    title: "~",
    scanlines: true,
    glow: true
  }, /*#__PURE__*/React.createElement(Prompt, {
    command: "whoami"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-primary)',
      fontSize: 'var(--fs-lg)',
      lineHeight: 'var(--row)',
      margin: 'var(--sp-2) 0'
    }
  }, "river nate \u2014 backend engineer. distributed systems, postgres, and build times."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure)'
    }
  }, "currently at a payments company, working on the ledger. previously infrastructure at two startups you have not heard of."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Prompt, {
    command: "cat now.txt"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: 'var(--measure)'
    }
  }, "reading the raft paper again. writing a queue in sql. not looking for work."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement(Prompt, {
    command: "",
    caret: true
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    label: "selected writing",
    action: "all posts ->",
    onAction: () => go('writing')
  }), posts.map(p => /*#__PURE__*/React.createElement(PostRow, _extends({
    key: p.slug
  }, p, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('post', p);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    prefix: "->",
    onClick: () => go('projects')
  }, "projects"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('about')
  }, "about"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--fs-tiny)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "git-branch",
    size: 13,
    color: "var(--text-faint)"
  }), " main \xB7 4f2a91c")));
}
Object.assign(window, {
  HomeScreen,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PostScreen.jsx
try { (() => {
const {
  CodeBlock,
  Callout,
  Tag,
  Button,
  Badge,
  Icon
} = window.RivernateDesignSystem_665cb5;
function PostScreen({
  post,
  go
}) {
  const p = post || window.RN_DATA.posts[0];
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('writing');
    },
    style: {
      fontSize: 'var(--fs-tiny)',
      border: 'none'
    }
  }, "<- writing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'center',
      fontSize: 'var(--fs-tiny)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("span", null, p.read), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  }, "published")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h1)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-2)'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure)',
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-md)',
      lineHeight: 'var(--lh-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-primary)',
      fontSize: 'var(--fs-lg)'
    }
  }, p.summary), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Our CI run took nineteen minutes. Half of that was one crate rebuilding because a build script touched a file in ", /*#__PURE__*/React.createElement("code", {
    style: {
      color: 'var(--text-accent)'
    }
  }, "OUT_DIR"), " on every invocation. The fix was four lines."), /*#__PURE__*/React.createElement(CodeBlock, {
    lang: "toml",
    code: "[profile.dev]\nincremental = true\ncodegen-units = 256\n\n[build]\nrustflags = [\"-C\", \"link-arg=-fuse-ld=lld\"]"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "The remaining time was test startup. We were spinning a fresh Postgres per test file; a shared container with a template database cut it to under a second."), /*#__PURE__*/React.createElement(Callout, {
    tone: "note",
    title: "note"
  }, "Numbers here are from a 32-core runner. On a laptop the ratios hold but the wall time does not."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Nothing in this post is novel. It is written down because I have now fixed the same three things at three companies.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--rule)',
      paddingTop: 'var(--sp-4)',
      display: 'flex',
      gap: 'var(--sp-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "rss",
      size: 12,
      color: "var(--text-secondary)"
    })
  }, "subscribe"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "reply by email")));
}
Object.assign(window, {
  PostScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PostScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Tag,
  Icon,
  Button
} = window.RivernateDesignSystem_665cb5;
function ProjectsScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h2)'
    }
  }, "projects"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure)',
      margin: 0
    }
  }, "things I maintain in public. issues welcome, pull requests read slowly."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-4)'
    }
  }, window.RN_DATA.projects.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    interactive: true,
    title: p.name,
    meta: p.status === 'archived' ? 'archived' : p.stars + ' ★'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-body)'
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, p.lang), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status === 'active' ? 'accent' : 'neutral',
    dot: p.status === 'active'
  }, p.status), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 13,
    color: "var(--text-faint)"
  }))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    prefix: "$"
  }, "git clone --all")));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const {
  NavBar,
  IconButton,
  Tooltip,
  ThemeSelector
} = window.RivernateDesignSystem_665cb5;
function Shell({
  route,
  go,
  children
}) {
  const [scheme, setScheme] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('rn-scheme')) || {
        theme: '',
        font: ''
      };
    } catch (e) {
      return {
        theme: '',
        font: ''
      };
    }
  });
  React.useEffect(() => {
    const el = document.documentElement;
    scheme.theme ? el.setAttribute('data-theme', scheme.theme) : el.removeAttribute('data-theme');
    scheme.font ? el.setAttribute('data-font', scheme.font) : el.removeAttribute('data-font');
    try {
      localStorage.setItem('rn-scheme', JSON.stringify(scheme));
    } catch (e) {}
  }, [scheme]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: ['writing', 'projects', 'about'],
    active: route === 'post' ? 'writing' : route,
    onNavigate: go,
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ThemeSelector, {
      theme: scheme.theme,
      font: scheme.font,
      onChange: setScheme
    }), /*#__PURE__*/React.createElement(Tooltip, {
      label: "github"
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "github",
      label: "GitHub",
      size: "sm",
      variant: "ghost"
    })), /*#__PURE__*/React.createElement(Tooltip, {
      label: "rss"
    }, /*#__PURE__*/React.createElement(IconButton, {
      name: "rss",
      label: "RSS",
      size: "sm",
      variant: "ghost"
    })))
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      width: '100%',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--sp-9) var(--sp-6) var(--sp-11)'
    }
  }, children), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: 'var(--rule)',
      padding: 'var(--sp-5) var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--sp-4)',
      flexWrap: 'wrap',
      fontSize: 'var(--fs-tiny)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "rivernate.com \u2014 built with plain html, deployed on push"), /*#__PURE__*/React.createElement("span", null, "last commit 4f2a91c \xB7 2026-04-14"))));
}
Object.assign(window, {
  Shell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WritingScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PostRow,
  Tabs,
  Input,
  Icon
} = window.RivernateDesignSystem_665cb5;
function WritingScreen({
  go
}) {
  const [tab, setTab] = React.useState('all');
  const [q, setQ] = React.useState('');
  const posts = window.RN_DATA.posts.filter(p => p.title.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-h2)'
    }
  }, "writing"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure)',
      margin: 0
    }
  }, "notes on systems that stayed up, and the ones that did not. ", window.RN_DATA.posts.length, " posts."), /*#__PURE__*/React.createElement(Tabs, {
    items: ['all', 'notes', 'longform'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement(Input, {
    prefix: "/",
    placeholder: "filter by title",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement("div", null, posts.map(p => /*#__PURE__*/React.createElement(PostRow, _extends({
    key: p.slug
  }, p, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('post', p);
    }
  }))), !posts.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-6) 0',
      color: 'var(--text-faint)'
    }
  }, "no matches.") : null));
}
Object.assign(window, {
  WritingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WritingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.RN_DATA = {
  posts: [{
    slug: 'build-in-half',
    date: '2026-04-11',
    title: 'Cutting our build in half',
    summary: 'Where the time actually went, and the three changes that mattered.',
    tags: ['ci', 'rust'],
    read: '8 min'
  }, {
    slug: 'boring-deploys',
    date: '2026-02-02',
    title: 'A boring deploy pipeline',
    summary: 'Nothing clever. That is the point.',
    tags: ['infra'],
    read: '5 min'
  }, {
    slug: 'pg-queue',
    date: '2025-11-19',
    title: 'Postgres is a fine queue',
    summary: 'Until it is not. Here is the line I use to decide.',
    tags: ['postgres', 'queues'],
    read: '11 min'
  }, {
    slug: 'reading-logs',
    date: '2025-09-07',
    title: 'Reading logs like a detective',
    summary: 'A short method for the first ten minutes of an incident.',
    tags: ['ops'],
    read: '6 min'
  }],
  projects: [{
    name: 'nate-cli',
    desc: 'Scaffolding tool for small Rust services. Opinionated, single binary.',
    lang: 'rust',
    stars: '1.2k',
    status: 'active'
  }, {
    name: 'pgqueue',
    desc: 'A job queue in ~600 lines of SQL and Go. No broker.',
    lang: 'go',
    stars: '840',
    status: 'active'
  }, {
    name: 'dotfiles',
    desc: 'Twelve years of accumulated shell. Read at your own risk.',
    lang: 'shell',
    stars: '96',
    status: 'active'
  }, {
    name: 'lognote',
    desc: 'Terminal notebook for incident timelines. Archived in favour of plain files.',
    lang: 'rust',
    stars: '210',
    status: 'archived'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.PostRow = __ds_scope.PostRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.LUCIDE_BASE = __ds_scope.LUCIDE_BASE;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Prompt = __ds_scope.Prompt;

__ds_ns.TerminalWindow = __ds_scope.TerminalWindow;

__ds_ns.THEMES = __ds_scope.THEMES;

__ds_ns.FONTS = __ds_scope.FONTS;

__ds_ns.ApplyScheme = __ds_scope.ApplyScheme;

__ds_ns.ThemeSelector = __ds_scope.ThemeSelector;

})();

