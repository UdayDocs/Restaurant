function createHomePage() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <h1>Welcome to Our Restaurant</h1>
    <p>Enjoy delicious food and great service!</p>
    <img src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc3RhdXJhbnQlMjBtb3ZpZSUyMHBvc3RlcnxlbnwwfHwwfHx8Mg%3D%3D" alt="Restaurant" />
  `;
}

export default createHomePage;