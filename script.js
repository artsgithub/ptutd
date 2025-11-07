
document.querySelectorAll('.menu a').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.startsWith('#')){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  console.log('Contact form data:', data);
  alert('Thanks! Your message has been captured locally. Replace this handler with your email/API endpoint.');
  form.reset();
});
