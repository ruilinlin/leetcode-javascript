/**
 * post-only  example： user login form(upload user data)
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
 * get-only
 */



/**
 * dialog
 */