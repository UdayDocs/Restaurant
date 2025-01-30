function createMenuPage() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <h1>Our Menu</h1>
    <div class="menu-container">
    <div class="menu-card">
    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" class="menu-image">
    <h2>Pizza</h2>
        <p>Delicious pizza with various toppings.</p>
        <p>Price: $10</p>    
    </div>
        <div class="menu-card">
    <img src="https://images.unsplash.com/photo-1632808664408-f8ab196b0523?q=80&w=1003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pasta" class="menu-image">
    <h2>Pasta</h2>
        <p>Tasty pasta with different sauces.</p>
        <p>Price: $8</p>    
    </div>
     <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1650539688286-ae822d422d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2FsYWQlMjByZXN0YXVyYW50fGVufDB8MXwwfHx8Mg%3D%3D" alt="Salad" class="menu-image">
        <h2>Salad</h2>
        <p>Fresh and healthy salad options.</p>
        <p>Price: $6</p>
      </div>
      <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1626869300069-eb1c0866feea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJ1cmdlciUyMHJlc3RhdXJhbnR8ZW58MHwxfDB8fHwy" alt="Burger" class="menu-image">
        <h2>Burger</h2>
        <p>Juicy burgers with your favorite toppings.</p>
        <p>Price: $7</p>
      </div>



    </div>
  `;
}

export default createMenuPage;
