var d = new Date();

var elem = document.getElementById("date");

elem.value = d.toISOString().slice(0, 0);

// ---------------------------

loadList1();

function loadList1() {
  const ulTasks1 = document.getElementById("ulTasks1");

  const listStr1 = localStorage.getItem("tasks-list1");

  const list = listStr1 === null ? [] : JSON.parse(listStr1);

  for (const obj of list) {
    ulTasks1.innerHTML += `<p>${obj.tasks}</p>`;
  }
}

function saveTasks1() {
  const tasksBox1 = document.getElementById("tasksBox1");

  const ulTasks1 = document.getElementById("ulTasks1");

  const tasks = tasksBox1.value;

  const oldListStr1 = localStorage.getItem("tasks-list1");

  const list = oldListStr1 === null ? [] : JSON.parse(oldListStr1);

  list.push({ tasks });

  const newListStr1 = JSON.stringify(list);

  localStorage.setItem("tasks-list1", newListStr1);

  tasksBox1.value = "";

  tasksBox1.focus();

  ulTasks1.innerHTML = "";
  for (const obj of list) {
    ulTasks1.innerHTML += `<p> ${obj.tasks} </p>`;
  }
}

function clearAll1() {
  const ulTasks1 = document.getElementById("ulTasks1");
  ulTasks1.innerHTML = "";
  localStorage.removeItem("tasks-list1");
}

// -----------------------------------------------

loadList2();

function loadList2() {
  const ulTasks2 = document.getElementById("ulTasks2");

  const listStr2 = localStorage.getItem("tasks-list2");

  const list = listStr2 === null ? [] : JSON.parse(listStr2);

  for (const obj of list) {
    ulTasks2.innerHTML += `<p>${obj.tasks}</p>`;
  }
}

function saveTasks2() {
  const tasksBox2 = document.getElementById("tasksBox2");

  const ulTasks2 = document.getElementById("ulTasks2");

  const tasks = tasksBox2.value;

  const oldListStr2 = localStorage.getItem("tasks-list2");

  const list = oldListStr2 === null ? [] : JSON.parse(oldListStr2);

  list.push({ tasks });

  const newListStr2 = JSON.stringify(list);

  localStorage.setItem("tasks-list2", newListStr2);

  tasksBox2.value = "";

  tasksBox2.focus();

  ulTasks2.innerHTML = "";
  for (const obj of list) {
    ulTasks2.innerHTML += `<p> ${obj.tasks} </p>`;
  }
}

function clearAll2() {
  const ulTasks2 = document.getElementById("ulTasks2");
  ulTasks2.innerHTML = "";
  localStorage.removeItem("tasks-list2");
}

// -----------------------------------------------

loadList3();

function loadList3() {
  const ulTasks3 = document.getElementById("ulTasks3");

  const listStr3 = localStorage.getItem("tasks-list3");

  const list = listStr3 === null ? [] : JSON.parse(listStr3);

  for (const obj of list) {
    ulTasks3.innerHTML += `<p>${obj.tasks}</p>`;
  }
}

function saveTasks3() {
  const tasksBox3 = document.getElementById("tasksBox3");

  const ulTasks3 = document.getElementById("ulTasks3");

  const tasks = tasksBox3.value;

  const oldListStr3 = localStorage.getItem("tasks-list3");

  const list = oldListStr3 === null ? [] : JSON.parse(oldListStr3);

  list.push({ tasks });

  const newListStr3 = JSON.stringify(list);

  localStorage.setItem("tasks-list3", newListStr3);

  tasksBox3.value = "";

  tasksBox3.focus();

  ulTasks3.innerHTML = "";
  for (const obj of list) {
    ulTasks3.innerHTML += `<p> ${obj.tasks} </p>`;
  }
}

function clearAll3() {
  const ulTasks3 = document.getElementById("ulTasks3");
  ulTasks3.innerHTML = "";
  localStorage.removeItem("tasks-list3");
}

// -----------------------------------------------

loadList4();

function loadList4() {
  const ulTasks4 = document.getElementById("ulTasks4");

  const listStr4 = localStorage.getItem("tasks-list4");

  const list = listStr4 === null ? [] : JSON.parse(listStr4);

  for (const obj of list) {
    ulTasks4.innerHTML += `<p>${obj.tasks}</p>`;
  }
}

function saveTasks4() {
  const tasksBox4 = document.getElementById("tasksBox4");

  const ulTasks4 = document.getElementById("ulTasks4");

  const tasks = tasksBox4.value;

  const oldListStr4 = localStorage.getItem("tasks-list4");

  const list = oldListStr4 === null ? [] : JSON.parse(oldListStr4);

  list.push({ tasks });

  const newListStr4 = JSON.stringify(list);

  localStorage.setItem("tasks-list4", newListStr4);

  tasksBox4.value = "";

  tasksBox4.focus();

  ulTasks4.innerHTML = "";
  for (const obj of list) {
    ulTasks4.innerHTML += `<p> ${obj.tasks} </p>`;
  }
}

function clearAll4() {
  const ulTasks4 = document.getElementById("ulTasks4");
  ulTasks4.innerHTML = "";
  localStorage.removeItem("tasks-list4");
}

// -----------------------------------------------

loadList5();

function loadList5() {
  const ulTasks5 = document.getElementById("ulTasks5");

  const listStr5 = localStorage.getItem("tasks-list5");

  const list = listStr5 === null ? [] : JSON.parse(listStr5);

  for (const obj of list) {
    ulTasks5.innerHTML += `<p>${obj.tasks}</p>`;
  }
}

function saveTasks5() {
  const tasksBox5 = document.getElementById("tasksBox5");

  const ulTasks5 = document.getElementById("ulTasks5");

  const tasks = tasksBox5.value;

  const oldListStr5 = localStorage.getItem("tasks-list5");

  const list = oldListStr5 === null ? [] : JSON.parse(oldListStr5);

  list.push({ tasks });

  const newListStr5 = JSON.stringify(list);

  localStorage.setItem("tasks-list5", newListStr5);

  tasksBox5.value = "";

  tasksBox5.focus();

  ulTasks5.innerHTML = "";

  for (const obj of list) {
    ulTasks5.innerHTML += `<p> ${obj.tasks} </p>`;
  }
}

function clearAll5() {
  const ulTasks5 = document.getElementById("ulTasks5");
  ulTasks5.innerHTML = "";
  localStorage.removeItem("tasks-list5");
}

// -----------------------------------------------

// function zero_first_format(value) {
//   if (value < 10) {
//     value = "0" + value;
//   }
//   return value;
// }

// function date_time() {
//   var current_datetime = new Date();
//   var day = zero_first_format(current_datetime.getDate());
//   var month = zero_first_format(current_datetime.getMonth() + 1);
//   var year = current_datetime.getFullYear();
//   var hours = zero_first_format(current_datetime.getHours());
//   var minutes = zero_first_format(current_datetime.getMinutes());

//   return day + "." + month + "." + year + " " + hours + ":" + minutes;
// }

// document.getElementById("current_date_time_block1").innerHTML = date_time();
// // -------------------------------
// function zero_first_format(value) {
//   if (value < 10) {
//     value = "0" + value;
//   }
//   return value;
// }

// function date_time() {
//   var current_datetime = new Date();
//   var day = zero_first_format(current_datetime.getDate());
//   var month = zero_first_format(current_datetime.getMonth() + 1);
//   var year = current_datetime.getFullYear();
//   var hours = zero_first_format(current_datetime.getHours());
//   var minutes = zero_first_format(current_datetime.getMinutes());
//   var seconds = zero_first_format(current_datetime.getSeconds());

//   return (
//     day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
//   );
// }

// document.getElementById("current_date_time_block2").innerHTML = date_time();
// // --------------------------------------------------------
// function zero_first_format(value) {
//   if (value < 10) {
//     value = "0" + value;
//   }
//   return value;
// }

// function date_time() {
//   var current_datetime = new Date();
//   var day = zero_first_format(current_datetime.getDate());
//   var month = zero_first_format(current_datetime.getMonth() + 1);
//   var year = current_datetime.getFullYear();
//   var hours = zero_first_format(current_datetime.getHours());
//   var minutes = zero_first_format(current_datetime.getMinutes());
//   var seconds = zero_first_format(current_datetime.getSeconds());

//   return (
//     day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
//   );
// }

// document.getElementById("current_date_time_block3").innerHTML = date_time();
// // --------------------------------------------------------
// function zero_first_format(value) {
//   if (value < 10) {
//     value = "0" + value;
//   }
//   return value;
// }

// function date_time() {
//   var current_datetime = new Date();
//   var day = zero_first_format(current_datetime.getDate());
//   var month = zero_first_format(current_datetime.getMonth() + 1);
//   var year = current_datetime.getFullYear();
//   var hours = zero_first_format(current_datetime.getHours());
//   var minutes = zero_first_format(current_datetime.getMinutes());
//   var seconds = zero_first_format(current_datetime.getSeconds());

//   return (
//     day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
//   );
// }

// document.getElementById("current_date_time_block4").innerHTML = date_time();
// // --------------------------------------------------------
// function zero_first_format(value) {
//   if (value < 10) {
//     value = "0" + value;
//   }
//   return value;
// }

// function date_time() {
//   var current_datetime = new Date();
//   var day = zero_first_format(current_datetime.getDate());
//   var month = zero_first_format(current_datetime.getMonth() + 1);
//   var year = current_datetime.getFullYear();
//   var hours = zero_first_format(current_datetime.getHours());
//   var minutes = zero_first_format(current_datetime.getMinutes());
//   var seconds = zero_first_format(current_datetime.getSeconds());

//   return (
//     day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
//   );
// }

// document.getElementById("current_date_time_block5").innerHTML = date_time();
