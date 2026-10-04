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
const CRLF = String.fromCharCode(13, 10);

function buildMessage(form) {
  const f = new FormData(form);
  const val = key => (f.get(key) || '').toString().trim() || '-';
  const body = [
    "Hi Wolf's Landscaping, I'd like a free estimate.",
    '',
    'Name: ' + val('name'),
    'Phone: ' + val('phone'),
    'Email: ' + val('email'),
    'Address or town: ' + val('address'),
    'Service needed: ' + val('service'),
    'Best way to reach me: ' + val('contact_pref'),
    '',
    'Project details:',
    val('message')
  ].join(CRLF);
  const subject = 'Estimate request: ' + val('service') + ' (' + val('name') + ')';
  const to = ['redacted', 'gmail.com'].join('@');
  const q = encodeURIComponent;
  return {
    to, subject, body,
    mailto: 'mailto:' + to + '?subject=' + q(subject) + '&body=' + q(body),
    gmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=' + q(to) + '&su=' + q(subject) + '&body=' + q(body)
  };
}

if (estimateForm) {
  estimateForm.addEventListener('submit', e => {
    e.preventDefault();
    const m = buildMessage(estimateForm);
    document.getElementById('open-mail').href = m.mailto;
    document.getElementById('open-gmail').href = m.gmail;
    document.getElementById('to-addr').textContent = m.to;
    const copyBtn = document.getElementById('copy-msg');
    const copyStatus = document.getElementById('copy-status');
    copyStatus.textContent = '';
    copyBtn.onclick = async () => {
      const text = 'To: ' + m.to + CRLF + 'Subject: ' + m.subject + CRLF + CRLF + m.body;
      try {
        await navigator.clipboard.writeText(text);
        copyStatus.textContent = 'Copied. Paste it into a new email, or text it to 610-357-1098.';
      } catch (err) {
        copyStatus.textContent = 'Could not copy automatically. Please call 610-357-1098 instead.';
      }
    };
    const result = document.getElementById('form-result');
    result.hidden = false;
    result.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  });
}
