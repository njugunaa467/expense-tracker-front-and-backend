async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    if (response.ok) {
      document.getElementById('login').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      loadTransactions();
    } else {
      alert('Login failed');
    }
  }
  
  async function loadTransactions() {
    const response = await fetch('/api/transactions');
    const transactions = await response.json();
    const transactionsDiv = document.getElementById('transactions');
    transactionsDiv.innerHTML = transactions.map(t => `<p>${t.description}: ${t.amount}</p>`).join('');
  }
  
  function logout() {
    document.cookie = 'token=; Max-Age=0';
    document.getElementById('login').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
  }
  