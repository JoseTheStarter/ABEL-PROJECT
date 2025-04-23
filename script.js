// Contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    
    if (response.ok) {
      document.getElementById('response').textContent = result.message;
      document.getElementById('response').style.color = 'green';
      e.target.reset();
    } else {
      throw new Error(result.message || 'Failed to send message');
    }
  } catch (error) {
    document.getElementById('response').textContent = error.message;
    document.getElementById('response').style.color = 'red';
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Buy Now button functionality
document.querySelectorAll('.buy-now-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our sales team will contact you shortly.');
  });
});