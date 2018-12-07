function $(selector) {
  return document.querySelector(selector);
}

function appendAnswer({ content, writer, date, answerId }) {
  const commentHTML = `
    <li class="answer" data-id=${answerId}>
        <div class="answer-content"> ${content} </div>
        <div class="answer-metainfo">
            <div class="answer-id">${writer.id}</div>
            <div class="answer-date">${date}</div>
            <div class="answer-util">
                <a class="answer-delete" href="/api/questions/2/answers/${answerId}">삭제</a>
            </div>
        </div>
    </li> `

  return commentHTML;
}


function initEvents() {
  //이벤트등록
}

const id = {
  user: 'crong'
}

function login(id) {
  fetch('/api/login', {
    method: 'POST',
    // headers: JSON.stringify(id)
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'appliction/json'
      // user : "crong"
    },
    body: JSON.stringify({
      id
    })
  })
    .then((response) => {
      return response
    })
    // .then(function (data) {
    //   console.log('cc', data);
    // })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
  console.log('login');
}

function logout() { }

document.addEventListener("DOMContentLoaded", () => {
  initEvents();
})



$('.login-btn').addEventListener('click', () => {
  login(id);
})
