function createAboutPage() {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = `
    <h1>Contact Us</h1>
    <p>We are a family-owned restaurant offering the finest cuisine!</p>
    <div class="form-container">
    <form>
     <div class="fs-field">
  
    <input class="fs-input" id="name" name="name" placeholder="Name" required />
  </div>
  <div class="fs-field">

    <input class="fs-input" id="email" name="email" placeholder="Email" required />
    <p class="fs-description">
      This will help me respond to your query via an email.
    </p>
  </div>
  <div class="fs-field">

    <textarea
      class="fs-textarea"
      id="message"
      name="message" placeholder="What would you like to discuss?"
      required
    ></textarea>

  </div>
  <div class="fs-button-group">
    <button class="fs-button" type="submit">Submit</button>
  </div>
    
    </form>
    
    </div>
  `;
}

export default createAboutPage;














