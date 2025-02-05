
const navLinks = document.querySelectorAll('.nav-link');
const container = document.querySelectorAll(".webpage")
container[0].classList.add("active"); 

navLinks.forEach((link,index) => {
  link.addEventListener('click', () => {  
    // Xóa lớp 'active' khỏi tất cả các nav link
     navLinks.forEach(item => item.classList.remove('active'));
     container.forEach(item => item.classList.remove('active')); 
 
    // Thêm lớp 'active' vào nav link đã được click
    navLinks[index].classList.add('active');
    container[index].classList.add("active"); 
  });
});
