function list(clients) {
    return clients.map((client, index) => `
      <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        <span>${client.name}</span>
        <strong>$${client.balance.toFixed(2)}</strong>
      </li>
    `).join('');
  }

  function order(clients, property) {
    return clients.slice().sort((a, b) => 
      (a[property] > b[property] ? 1 : -1)
    );
  }
  
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }

  function info(index) {
    return clients.find((client, i) => i === index);
  }

  function search(query) {
  return clients.filter(client => 
    client.name.toLowerCase().includes(query.toLowerCase())
  );
}