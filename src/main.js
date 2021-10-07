'use strict';
const taskTrigger = document.getElementById('task-trigger');
const taskValue = document.getElementById('task-value');
const taskTable = document.getElementById('task-table');
const tasks = [];

const showTasks = () => {
  taskTable.innerText = '';
  tasks.forEach((task) => {
    const taskId = taskTable.rows.length;
    const row = taskTable.insertRow(-1);

    const id = row.insertCell(0);
    const comment = row.insertCell(1);
    const status = row.insertCell(2);
    const remove = row.insertCell(3);
  
    id.innerText = taskId;
    comment.innerText = task.task;
    createStatusButton(task, status);
    createRemoveButton(task, remove);
  });
}

const createStatusButton = (task, status) => {
  const statusButton = document.createElement('button');
  statusButton.innerText = task.status;
  status.appendChild(statusButton);
}

const createRemoveButton = (task, remove) => {
  const removeButton = document.createElement('button');
  removeButton.innerText = task.remove;
  removeButton.onclick = function() {
    const tr = this.parentNode.parentNode;
    tasks.splice(tr.sectionRowIndex,1);
    showTasks();
  };
  remove.appendChild(removeButton);
}

taskTrigger.addEventListener('click', () => {
  const task = {task: taskValue.value, status: '作業中', remove: '削除'};
  tasks.push(task);
  showTasks();
  taskValue.value = '';
});