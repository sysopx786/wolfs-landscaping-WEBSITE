const menu = document.querySelector('.menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.dd').forEach(dd => {
  const btn = dd.querySelector('.dd-toggle');
  btn.addEventListener('click', () => {
    const open = dd.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  dd.addEventListener('keydown', e => {
    if (e.key === 'Escape') { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
  });
});
document.addEventListener('click', e => {
  document.querySelectorAll('.dd.open').forEach(dd => {
    if (!dd.contains(e.target)) { dd.classList.remove('open'); dd.querySelector('.dd-toggle').setAttribute('aria-expanded', 'false'); }
  });
});

document.querySelectorAll('.ba-box').forEach(box => {
  const range = box.querySelector('.ba-range');
  const set = () => box.style.setProperty('--pos', range.value + '%');
  range.addEventListener('input', set);
  set();
});

const estimateForm = document.getElementById('estimate-form');
function buildMailto(form) {
    const f = new FormData(form);
    const to = ['redacted', 'gmail.com'].join('@');
    const line = (label, key) => label + ': ' + ((f.get(key) || '').toString().trim() || '-');
    const body = [
      "Hi Wolf's Landscaping, I'd like a free estimate.",
      '',
      line('Name', 'name'),
      line('Phone', 'phone'),
      line('Email', 'email'),
      line('Address or town', 'address'),
      line('Service needed', 'service'),
      line('Best way to reach me', 'contact_pref'),
      '',
      'Project details:',
      (f.get('message') || '').toString().trim() || '-'
    ].join('\r\n');
    const subject = 'Estimate request: ' + f.get('service') + ' (' + f.get('name') + ')';
    return 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}
if (estimateForm) {
  estimateForm.addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = buildMailto(estimateForm);
    document.getElementById('form-status').textContent =
      "Your email app should open with your request ready. Press Send there. If nothing opened, call 610-357-1098.";
  });
}
