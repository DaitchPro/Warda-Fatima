 (function () {
    const toggle = document.getElementById('platformToggle');
    const menu = document.getElementById('platformMenu');

    function openMenu() {
      menu.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
      const first = menu.querySelector('[role="menuitem"]');
      if (first) first.focus();
    }

    function closeMenu() {
      menu.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }

    function toggleMenu(e) {
      e.preventDefault();
      const isOpen = menu.classList.contains('show');
      if (isOpen) closeMenu(); else openMenu();
    }
    toggle.addEventListener('click', toggleMenu);
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (menu.classList.contains('show')) {
        if (e.key === 'Escape') {
          closeMenu();
        } else if (e.key === 'ArrowDown' || e.key === 'Down') {
          e.preventDefault();
          const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
          if (items.length) {
            const idx = items.indexOf(document.activeElement);
            const next = items[(idx + 1) % items.length];
            next.focus();
          }
        } else if (e.key === 'ArrowUp' || e.key === 'Up') {
          e.preventDefault();
          const items = Array.from(menu.querySelectorAll('[role="menuitem"]'));
          if (items.length) {
            const idx = items.indexOf(document.activeElement);
            const prev = items[(idx - 1 + items.length) % items.length];
            prev.focus();
          }
        }
      }
    });

    
    menu.addEventListener('click', (e) => {
      const target = e.target.closest('[role="menuitem"]');
      if (target) {
            closeMenu();
      }
    });
  })();