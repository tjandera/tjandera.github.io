document.querySelectorAll('.tree-item.folder').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.folder;
    const children = document.querySelector(`[data-children="${id}"]`);
    const chevron = btn.querySelector('.chevron');
    const isOpen = btn.classList.toggle('open');

    btn.setAttribute('aria-expanded', String(isOpen));
    if (children) children.classList.toggle('open', isOpen);
    if (chevron) chevron.textContent = isOpen ? '▾' : '▸';
  });
});

document.querySelectorAll('.tree-item.file').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.tree-item.file.active').forEach((el) => {
      el.classList.remove('active');
    });
    link.classList.add('active');
  });
});
