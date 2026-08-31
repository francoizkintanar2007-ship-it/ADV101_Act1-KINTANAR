const input = document.getElementById('itemInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('itemList');
const items = [];
let n = 1;

function addItem(text) {
  const value = text.trim();
  if (!value || items.some(i => i.toLowerCase() === value.toLowerCase())) return;
  items.push(value);
  const li = document.createElement('li');
  li.textContent = value;
  list.appendChild(li);
}

btn.addEventListener('click', () => {
  const raw = input.value.trim();
  if (raw) {
    raw.split(',').map(v => v.trim()).filter(Boolean).forEach(addItem);
    input.value = '';
  } else {
    const label = `Task ${n}`;
    if (!items.some(i => i.toLowerCase() === label.toLowerCase())) {
      addItem(label);
      n++;
    }
  }
});
