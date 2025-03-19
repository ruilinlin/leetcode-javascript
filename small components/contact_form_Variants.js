/**
 * post-only  example： user login form(upload user data)
 * 数据在请求体中，适合敏感操作（登录、支付）
 */

<form id='login-form'
action='api/login'
method='POST'
>
  <div>
    <label htmlFor='username'>Username</label>
    <input id='username' name='username' type='text'/>
  </div>
  <div>
    <label htmlFor='password'>Password</label>
    <input id='password' name='password' type='password'/>
  </div>
  <button type='submit'>Login</button>
</form>

document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.getElementById('login-form');

  const loginForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(formElement.action, {
        method: formElement.method,
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('网络响应失败');
      }

      const result = await response.json();
      if (result.success) {
        window.location.href = '/dashboard';
      } else {
        console.error('登录失败：', result.message);
      }
    } catch (error) {
      console.error('请求出错：', error);
    }
  };

  formElement.addEventListener('submit', loginForm);
});


/**
 * get-only  example: user search form(search user data)
 * 数据在 URL 参数中，适合无副作用操作（搜索、过滤）
 */

<form id='search-form'
action='api/search'
method='GET'
>
  <div>
    <label htmlFor='search-input'>Search</label>
    <input id='search-input' name='search' type='text'/>
    <button type='submit'> Search </button>
  </div>

  <div id='search-result'>
    <p>Search Resluts</p>
    <ul id='search-results'></ul>
  </div>
</form>

document.addEventListener('DOMContentLoaded', () => {
  const form= document.getElementById('search-form');

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const params= new URLSearchParams(formData);

    try {
      //添加请求参数到url里
      const response = await fetch(`${form.action}?${params.toString()}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('network response failed');
      }

      const result = await response.json();
      resultsList.innerHTML = '';
      try { 
        if (Array.isArray(result)) { 
          result.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.name || 'Unnamed Item'; 
            resultsList.appendChild(li);
          });
        } else { 
          const li = document.createElement('li');
          li.textContent = '无效的数据格式';
          resultsList.appendChild(li);
        }
        console.error('Request error:', error);
        alert('搜索失败，请稍后重试');
      }
    }
});


/**
 * dialog example: （对话框内确认操作）
 * 	提交后关闭对话框，通过 dialog.returnValue 获取结果，需 JavaScript 处理
 */
<dialog id='confirm-dialog'>
  <form method='dialog'>
    <p>Are you sure you want to delete this item?</p>
    <input type='hidden' name='recordId'></input>
    <div>
    <button type='submit' value='cancle'>Cancle</button>
    <button type='submit' value='confirm'>Confirm</button>
    </div>
  </form>
</dialog>

{/* <button id='open-dialog'>delete item</button> */}

document.addEventListener('DOMContentLoaded',() =>{
  const dialog = document.getElementById('confirm-dialog');
  const openDialogButton = document.getElementById('open-dialog');

  // 打开对话框
  openDialogButton.addEventListener('click', () => {
    dialog.showModal();
  });

  dialog.addEventListener('close',()=>{
    const recordId = dialog.querySelector('input[name="recordId"]').value;
    const action = dialog.returnValue;

    if(action === 'confirm'){
      deleteRecord(recordId);
    }else{
      console.log('user cancelled the operation');
    }
  })

  async function deleteRecord(recordId){
    try{
      const response = await fetch(`/api/delete/${id}`, {method:'DELETE'});
      if(!response.ok) throw new Error('networks response failed');

    }catch(error){
      console.error('delete failed with error:',error);
      alert('delete failed,please try later');
    }
  }
})