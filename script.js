let newWindow;

const openNewWindow = () => {
  const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=300`;
  newWindow = window.open('submit.html', 'submit', params);
};

const closeWindow = (message) => {
    window.opener.postMessage({ msg: message }, '*');
    window.close();
  };
  
  window.addEventListener('message', (event) => {
    if (event.data?.foo) {
      response.innerText = event.data.foo;
    }
    if (event.data?.msg) {
      response.innerText = event.data.msg;
    }
  });
  