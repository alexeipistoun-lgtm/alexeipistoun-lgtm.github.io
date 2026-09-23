const STORAGE_KEY = 'steakyboneLaunchPlanner.v1';
const SEP22_UPDATE_KEY = 'steakyboneLaunchPlanner.update.2026-09-22.samples-arrived';

const seedTasks = [
  {id: crypto.randomUUID(), name:'Lock Amazon image / shot list', category:'Images', start:'2026-09-15', end:'2026-09-15', status:'In progress', owner:'Alexei', priority:'high', notes:'Finalize the 7-image Amazon set.'},
  {id: crypto.randomUUID(), name:'Shoot missing product photos', category:'Images', start:'2026-09-15', end:'2026-09-17', status:'In progress', owner:'Alexei', priority:'high', notes:'Include white-background product photos and clean lifestyle shots.'},
  {id: crypto.randomUUID(), name:'Dog chewing SteakyBone photo', category:'Images', start:'2026-09-16', end:'2026-09-18', status:'Not started', owner:'Alexei', priority:'high', notes:'Get at least one strong chewing image; this is currently missing.'},
  {id: crypto.randomUUID(), name:'Edit / retouch Amazon images', category:'Images', start:'2026-09-17', end:'2026-09-20', status:'Not started', owner:'Alexei', priority:'high', notes:'Crop, clean backgrounds, improve consistency.'},
  {id: crypto.randomUUID(), name:'Create infographics / size / features', category:'Images', start:'2026-09-17', end:'2026-09-20', status:'Not started', owner:'Alexei', priority:'medium', notes:'Size, beef flavor, made in Texas, easy-to-hold shape, safety.'},
  {id: crypto.randomUUID(), name:'Final image QC + ordering', category:'Images', start:'2026-09-19', end:'2026-09-20', status:'Not started', owner:'Alexei', priority:'high', notes:'Check Amazon image order and readability on mobile.'},
  {id: crypto.randomUUID(), name:'Upload Amazon images', category:'Amazon Listing', start:'2026-09-20', end:'2026-09-20', status:'Not started', owner:'Alexei', priority:'high', notes:''},
  {id: crypto.randomUUID(), name:'Listing review / fix issues', category:'Amazon Listing', start:'2026-09-20', end:'2026-09-23', status:'Not started', owner:'Alexei', priority:'high', notes:'Check title, bullets, backend fields, image compliance.'},
  {id: crypto.randomUUID(), name:'Packaging samples in transit', category:'Packaging', start:'2026-09-15', end:'2026-09-22', status:'Done', owner:'Supplier', priority:'high', notes:'Samples received Sep 22, 2026.'},
  {id: crypto.randomUUID(), name:'Inspect packaging sample + approve 500', category:'Packaging', start:'2026-09-22', end:'2026-09-23', status:'In progress', owner:'Alexei', priority:'high', notes:'Samples are here. Print and cutting look good; verify the material thickness before approving the 500-unit run.'},
  {id: crypto.randomUUID(), name:'Confirm 42 pt thickness with supplier', category:'Packaging', start:'2026-09-22', end:'2026-09-23', status:'In progress', owner:'Alexei / Supplier', priority:'high', notes:'Sample measured around 0.48 mm per card. Confirm whether 42 pt was interpreted incorrectly and resolve before bulk approval.'},
  {id: crypto.randomUUID(), name:'500-card production', category:'Packaging', start:'2026-09-23', end:'2026-09-28', status:'Not started', owner:'Supplier', priority:'high', notes:'Start immediately once thickness is confirmed. Supplier quoted 5 days.'},
  {id: crypto.randomUUID(), name:'500-card shipping', category:'Packaging', start:'2026-09-28', end:'2026-10-06', status:'Not started', owner:'Supplier', priority:'high', notes:'Supplier quoted 6–8 days. Current planning window assumes the thickness issue is resolved by Sep 23.'},
  {id: crypto.randomUUID(), name:'Produce SteakyBone inventory', category:'Production', start:'2026-09-15', end:'2026-10-04', status:'In progress', owner:'Alexei', priority:'high', notes:'Build enough inventory so packaging is the only major launch blocker.'},
  {id: crypto.randomUUID(), name:'Create FBA shipment plan', category:'FBA', start:'2026-09-23', end:'2026-09-25', status:'Not started', owner:'Alexei', priority:'medium', notes:''},
  {id: crypto.randomUUID(), name:'FNSKU / carton labels / prep plan', category:'FBA', start:'2026-09-25', end:'2026-10-02', status:'Not started', owner:'Alexei', priority:'medium', notes:''},
  {id: crypto.randomUUID(), name:'Attach final cards + pack FBA units', category:'FBA', start:'2026-10-06', end:'2026-10-08', status:'Not started', owner:'Alexei', priority:'high', notes:'Start as soon as the 500 production cards arrive.'},
  {id: crypto.randomUUID(), name:'Ship cartons to Amazon', category:'FBA', start:'2026-10-08', end:'2026-10-12', status:'Not started', owner:'Alexei', priority:'high', notes:'Planning estimate.'},
  {id: crypto.randomUUID(), name:'Amazon receiving / check-in', category:'FBA', start:'2026-10-12', end:'2026-10-17', status:'Not started', owner:'Amazon', priority:'high', notes:'Planning estimate; Amazon receiving can vary.'},
  {id: crypto.randomUUID(), name:'Verify Brand Registry status', category:'Brand', start:'2026-09-15', end:'2026-09-17', status:'In progress', owner:'Alexei', priority:'high', notes:''},
  {id: crypto.randomUUID(), name:'Draft A+ Content', category:'Brand', start:'2026-09-18', end:'2026-09-24', status:'Not started', owner:'Alexei', priority:'medium', notes:''},
  {id: crypto.randomUUID(), name:'Amazon PPC campaign setup', category:'Ads', start:'2026-09-24', end:'2026-09-29', status:'Not started', owner:'Alexei', priority:'medium', notes:'Build campaigns now; activate at launch.'},
  {id: crypto.randomUUID(), name:'Build launch social-content bank', category:'Content', start:'2026-09-18', end:'2026-10-05', status:'Not started', owner:'Alexei', priority:'medium', notes:'Prepare organic videos, launch posts, and proof-of-product content.'},
  {id: crypto.randomUUID(), name:'Amazon listing live / buyable target', category:'Launch', start:'2026-10-14', end:'2026-10-18', status:'Not started', owner:'Alexei / Amazon', priority:'high', notes:'Target window if packaging is approved by Sep 23 and Amazon receiving is normal.'},
  {id: crypto.randomUUID(), name:'Enroll in Amazon Vine', category:'Vine', start:'2026-10-15', end:'2026-10-19', status:'Not started', owner:'Alexei', priority:'high', notes:'Enroll as soon as the eligible FBA offer is active and inventory is available.'},
  {id: crypto.randomUUID(), name:'Turn on Amazon PPC', category:'Ads', start:'2026-10-14', end:'2026-10-18', status:'Not started', owner:'Alexei', priority:'high', notes:'Activate once listing is buyable.'},
  {id: crypto.randomUUID(), name:'Vine claims + review monitoring', category:'Vine', start:'2026-10-16', end:'2026-11-16', status:'Not started', owner:'Alexei', priority:'medium', notes:'Track claims, review count, star rating, and recurring feedback themes.'}
];

let tasks = loadTasks();
applySep22Update();
let timelineStart = '2026-09-15';
let timelineEnd = '2026-10-25';

const els = {
  addTaskBtn: document.getElementById('addTaskBtn'),
  exportBtn: document.getElementById('exportBtn'),
  importInput: document.getElementById('importInput'),
  resetBtn: document.getElementById('resetBtn'),
  timelineStart: document.getElementById('timelineStart'),
  timelineEnd: document.getElementById('timelineEnd'),
  categoryFilter: document.getElementById('categoryFilter'),
  searchInput: document.getElementById('searchInput'),
  summary: document.getElementById('summary'),
  ganttWrap: document.getElementById('ganttWrap'),
  taskTableBody: document.getElementById('taskTableBody'),
  dialog: document.getElementById('taskDialog'),
  form: document.getElementById('taskForm'),
  dialogTitle: document.getElementById('dialogTitle'),
  taskId: document.getElementById('taskId'),
  taskName: document.getElementById('taskName'),
  taskCategory: document.getElementById('taskCategory'),
  taskStatus: document.getElementById('taskStatus'),
  taskStart: document.getElementById('taskStart'),
  taskEnd: document.getElementById('taskEnd'),
  taskOwner: document.getElementById('taskOwner'),
  taskPriority: document.getElementById('taskPriority'),
  taskNotes: document.getElementById('taskNotes'),
  deleteTaskBtn: document.getElementById('deleteTaskBtn'),
  cancelBtn: document.getElementById('cancelBtn'),
  closeDialogBtn: document.getElementById('closeDialogBtn'),
  categoryList: document.getElementById('categoryList')
};

els.timelineStart.value = timelineStart;
els.timelineEnd.value = timelineEnd;

function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return seedTasks;
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : seedTasks;
  } catch {
    return seedTasks;
  }
}

function applySep22Update() {
  if (localStorage.getItem(SEP22_UPDATE_KEY)) return;

  const patch = (name, changes) => {
    const task = tasks.find(t => t.name === name);
    if (task) Object.assign(task, changes);
  };

  patch('Packaging samples in transit', {
    end: '2026-09-22',
    status: 'Done',
    notes: 'Samples received Sep 22, 2026.'
  });
  patch('Inspect packaging sample + approve 500', {
    start: '2026-09-22',
    end: '2026-09-23',
    status: 'In progress',
    notes: 'Samples are here. Print and cutting look good; verify the material thickness before approving the 500-unit run.'
  });

  if (!tasks.some(t => t.name === 'Confirm 42 pt thickness with supplier')) {
    tasks.push({
      id: crypto.randomUUID(),
      name: 'Confirm 42 pt thickness with supplier',
      category: 'Packaging',
      start: '2026-09-22',
      end: '2026-09-23',
      status: 'In progress',
      owner: 'Alexei / Supplier',
      priority: 'high',
      notes: 'Sample measured around 0.48 mm per card. Confirm whether 42 pt was interpreted incorrectly and resolve before bulk approval.'
    });
  }

  patch('500-card production', {
    start: '2026-09-23',
    end: '2026-09-28',
    notes: 'Start immediately once thickness is confirmed. Supplier quoted 5 days.'
  });
  patch('500-card shipping', {
    start: '2026-09-28',
    end: '2026-10-06',
    notes: 'Supplier quoted 6–8 days. Current planning window assumes the thickness issue is resolved by Sep 23.'
  });
  patch('Attach final cards + pack FBA units', {
    start: '2026-10-06',
    end: '2026-10-08',
    notes: 'Start as soon as the 500 production cards arrive.'
  });
  patch('Ship cartons to Amazon', { start: '2026-10-08', end: '2026-10-12' });
  patch('Amazon receiving / check-in', { start: '2026-10-12', end: '2026-10-17' });
  patch('Amazon listing live / buyable target', {
    start: '2026-10-14',
    end: '2026-10-18',
    notes: 'Target window if packaging is approved by Sep 23 and Amazon receiving is normal.'
  });
  patch('Enroll in Amazon Vine', { start: '2026-10-15', end: '2026-10-19' });
  patch('Turn on Amazon PPC', { start: '2026-10-14', end: '2026-10-18' });
  patch('Vine claims + review monitoring', { start: '2026-10-16', end: '2026-11-16' });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  localStorage.setItem(SEP22_UPDATE_KEY, '1');
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function parseDate(s) {
  return new Date(`${s}T00:00:00`);
}
function daysBetween(a, b) {
  return Math.round((parseDate(b) - parseDate(a)) / 86400000);
}
function addDays(dateStr, n) {
  const d = parseDate(dateStr);
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0,10);
}
function fmtDate(s) {
  return parseDate(s).toLocaleDateString(undefined, {month:'short', day:'numeric'});
}

function getFilteredTasks() {
  const cat = els.categoryFilter.value;
  const q = els.searchInput.value.trim().toLowerCase();
  return tasks.filter(t => {
    const matchesCat = cat === 'all' || t.category === cat;
    const hay = `${t.name} ${t.category} ${t.owner || ''} ${t.notes || ''}`.toLowerCase();
    return matchesCat && (!q || hay.includes(q));
  }).sort((a,b) => a.start.localeCompare(b.start) || a.end.localeCompare(b.end));
}

function refreshCategoryOptions() {
  const current = els.categoryFilter.value || 'all';
  const categories = [...new Set(tasks.map(t => t.category))].sort();
  els.categoryFilter.innerHTML = '<option value="all">All categories</option>' + categories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  if ([...els.categoryFilter.options].some(o => o.value === current)) els.categoryFilter.value = current;
  els.categoryList.innerHTML = categories.map(c => `<option value="${escapeHtml(c)}"></option>`).join('');
}

function renderSummary(filtered) {
  const done = filtered.filter(t => t.status === 'Done').length;
  const active = filtered.filter(t => t.status === 'In progress').length;
  const blocked = filtered.filter(t => t.status === 'Blocked').length;
  const high = filtered.filter(t => t.priority === 'high' && t.status !== 'Done').length;
  const launchTask = tasks.find(t => t.name === 'Amazon listing live / buyable target');
  const today = new Date();
  today.setHours(0,0,0,0);
  let launchCountdown = null;
  if (launchTask) {
    const startDays = Math.max(0, Math.ceil((parseDate(launchTask.start) - today) / 86400000));
    const endDays = Math.max(0, Math.ceil((parseDate(launchTask.end) - today) / 86400000));
    launchCountdown = startDays === endDays ? `${startDays}` : `${startDays}–${endDays}`;
  }
  const cards = [
    ['Tasks', filtered.length],
    ['In progress', active],
    ['Done', done],
    ['Blocked', blocked],
    ['High priority open', high]
  ];
  if (launchCountdown !== null) cards.unshift(['Amazon target', `${launchCountdown} days`]);
  els.summary.innerHTML = cards.map(([label, value]) => `<div class="summary-card"><strong>${value}</strong><span>${label}</span></div>`).join('');
}

function renderGantt(filtered) {
  timelineStart = els.timelineStart.value;
  timelineEnd = els.timelineEnd.value;
  let totalDays = daysBetween(timelineStart, timelineEnd) + 1;
  if (!timelineStart || !timelineEnd || totalDays < 1) {
    els.ganttWrap.innerHTML = '<div class="empty-state">Choose a valid timeline range.</div>';
    return;
  }
  totalDays = Math.min(totalDays, 120);
  const effectiveEnd = addDays(timelineStart, totalDays - 1);
  const gridCols = `repeat(${totalDays}, minmax(20px, 1fr))`;

  const days = Array.from({length: totalDays}, (_, i) => addDays(timelineStart, i));
  const todayStr = new Date().toLocaleDateString('en-CA');
  const todayIndex = days.indexOf(todayStr);
  const header = `<div class="gantt-header"><div class="gantt-label"><strong>Task</strong></div><div class="gantt-days" style="grid-template-columns:${gridCols}">${days.map(d => `<div class="day-cell ${d === todayStr ? 'today' : ''}" title="${d}${d === todayStr ? ' — Today' : ''}">${fmtDate(d)}</div>`).join('')}</div></div>`;

  const visible = filtered.filter(t => t.end >= timelineStart && t.start <= effectiveEnd);
  if (!visible.length) {
    els.ganttWrap.innerHTML = '<div class="empty-state"><h3>No tasks in this date range</h3><p>Expand the timeline or add a task.</p></div>';
    return;
  }

  const rows = visible.map(t => {
    const clippedStart = t.start < timelineStart ? timelineStart : t.start;
    const clippedEnd = t.end > effectiveEnd ? effectiveEnd : t.end;
    const startCol = daysBetween(timelineStart, clippedStart) + 1;
    const span = daysBetween(clippedStart, clippedEnd) + 1;
    const statusClass = t.status === 'Done' ? 'done' : t.status === 'Blocked' ? 'blocked' : '';
    return `<div class="gantt-row" data-id="${t.id}">
      <div class="gantt-task-label"><div class="name">${escapeHtml(t.name)}</div><div class="meta">${escapeHtml(t.category)} · ${fmtDate(t.start)}–${fmtDate(t.end)}</div></div>
      <div class="gantt-track" style="grid-template-columns:${gridCols}; --dayWidth: calc(100% / ${totalDays});">
        ${todayIndex >= 0 ? `<div class="today-column" style="grid-column:${todayIndex + 1}" title="Today"></div>` : ''}
        <div class="task-bar ${t.priority} ${statusClass}" style="grid-column:${startCol} / span ${span}" title="${escapeHtml(t.name)}">${escapeHtml(t.name)}</div>
      </div>
    </div>`;
  }).join('');

  els.ganttWrap.innerHTML = `<div class="gantt">${header}${rows}</div>`;
  els.ganttWrap.querySelectorAll('.gantt-row').forEach(row => row.addEventListener('click', () => openEdit(row.dataset.id)));
}

function renderTable(filtered) {
  if (!filtered.length) {
    els.taskTableBody.innerHTML = '<tr><td colspan="8"><div class="empty-state">No tasks match this view.</div></td></tr>';
    return;
  }
  els.taskTableBody.innerHTML = filtered.map(t => `
    <tr>
      <td><strong>${escapeHtml(t.name)}</strong></td>
      <td><span class="category-pill">${escapeHtml(t.category)}</span></td>
      <td>${fmtDate(t.start)}</td>
      <td>${fmtDate(t.end)}</td>
      <td>
        <select class="status-select" data-status-id="${t.id}">
          ${['Not started','In progress','Blocked','Done'].map(s => `<option ${s===t.status?'selected':''}>${s}</option>`).join('')}
        </select>
      </td>
      <td>${escapeHtml(t.owner || '')}</td>
      <td>${escapeHtml(t.notes || '')}</td>
      <td><button class="small-btn" data-edit-id="${t.id}">Edit</button></td>
    </tr>`).join('');

  els.taskTableBody.querySelectorAll('[data-edit-id]').forEach(btn => btn.addEventListener('click', () => openEdit(btn.dataset.editId)));
  els.taskTableBody.querySelectorAll('[data-status-id]').forEach(sel => sel.addEventListener('change', () => {
    const task = tasks.find(t => t.id === sel.dataset.statusId);
    if (task) { task.status = sel.value; saveTasks(); renderAll(); }
  }));
}

function renderAll() {
  refreshCategoryOptions();
  const filtered = getFilteredTasks();
  renderSummary(filtered);
  renderGantt(filtered);
  renderTable(filtered);
}

function openAdd() {
  els.dialogTitle.textContent = 'Add task';
  els.form.reset();
  els.taskId.value = '';
  els.taskStatus.value = 'Not started';
  els.taskPriority.value = 'medium';
  els.taskStart.value = new Date().toISOString().slice(0,10);
  els.taskEnd.value = els.taskStart.value;
  els.deleteTaskBtn.classList.add('hidden');
  els.dialog.showModal();
}

function openEdit(id) {
  const t = tasks.find(t => t.id === id);
  if (!t) return;
  els.dialogTitle.textContent = 'Edit task';
  els.taskId.value = t.id;
  els.taskName.value = t.name;
  els.taskCategory.value = t.category;
  els.taskStatus.value = t.status;
  els.taskStart.value = t.start;
  els.taskEnd.value = t.end;
  els.taskOwner.value = t.owner || '';
  els.taskPriority.value = t.priority || 'medium';
  els.taskNotes.value = t.notes || '';
  els.deleteTaskBtn.classList.remove('hidden');
  els.dialog.showModal();
}

function closeDialog() { els.dialog.close(); }

els.form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (els.taskEnd.value < els.taskStart.value) {
    alert('End date cannot be before start date.');
    return;
  }
  const id = els.taskId.value;
  const payload = {
    id: id || crypto.randomUUID(),
    name: els.taskName.value.trim(),
    category: els.taskCategory.value.trim(),
    status: els.taskStatus.value,
    start: els.taskStart.value,
    end: els.taskEnd.value,
    owner: els.taskOwner.value.trim(),
    priority: els.taskPriority.value,
    notes: els.taskNotes.value.trim()
  };
  if (!payload.name || !payload.category) return;
  const idx = tasks.findIndex(t => t.id === id);
  if (idx >= 0) tasks[idx] = payload; else tasks.push(payload);
  saveTasks();
  closeDialog();
  renderAll();
});

els.deleteTaskBtn.addEventListener('click', () => {
  const id = els.taskId.value;
  const t = tasks.find(x => x.id === id);
  if (!t) return;
  if (confirm(`Delete “${t.name}”?`)) {
    tasks = tasks.filter(x => x.id !== id);
    saveTasks();
    closeDialog();
    renderAll();
  }
});

els.addTaskBtn.addEventListener('click', openAdd);
els.cancelBtn.addEventListener('click', closeDialog);
els.closeDialogBtn.addEventListener('click', closeDialog);
els.categoryFilter.addEventListener('change', renderAll);
els.searchInput.addEventListener('input', renderAll);
els.timelineStart.addEventListener('change', renderAll);
els.timelineEnd.addEventListener('change', renderAll);

els.exportBtn.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify({version:1, tasks}, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `steakybone-launch-plan-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

els.importInput.addEventListener('change', async () => {
  const file = els.importInput.files[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const incoming = Array.isArray(parsed) ? parsed : parsed.tasks;
    if (!Array.isArray(incoming)) throw new Error('No tasks array found.');
    tasks = incoming.map(t => ({...t, id: t.id || crypto.randomUUID()}));
    saveTasks();
    renderAll();
  } catch (err) {
    alert(`Could not import file: ${err.message}`);
  }
  els.importInput.value = '';
});

els.resetBtn.addEventListener('click', () => {
  if (confirm('Reset all tasks back to the original SteakyBone launch plan?')) {
    tasks = seedTasks.map(t => ({...t, id: crypto.randomUUID()}));
    saveTasks();
    renderAll();
  }
});

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

renderAll();
