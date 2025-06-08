// تعريف المسارات الأساسية
const ROUTES = {
    HOME: '/',
    LOGIN: '/login.html',
    SIGNUP: '/signup.html',  // تعديل المسار
    DASHBOARD: '/dashboard/Dshboard.html'
};

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const adminLink = document.getElementById('admin-dashboard-link');

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email"); // كنا خزناه بعد تسجيل الدخول

  if (token && email) {
    console.log("✅ مستخدم مسجل الدخول:", email);

    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';

    if (adminLink) {
      const adminEmails = ["abdelrahman.naggar2005@gmail.com"];
      adminLink.style.display = adminEmails.includes(email) ? 'flex' : 'none';
    }

    // لو المستخدم على login.html، نحوله للرئيسية
    if (window.location.pathname.includes('login.html')) {
      window.location.href = ROUTES.HOME;
    }

    // إضافة زر تسجيل الخروج للمستخدمين المسجلين
    const logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'تسجيل الخروج';
    logoutBtn.onclick = logout;
    document.querySelector('.nav').appendChild(logoutBtn);

  } else {
    console.log("❌ لا يوجد مستخدم مسجل");

    if (loginBtn) loginBtn.style.display = 'flex';
    if (signupBtn) signupBtn.style.display = 'flex';
    if (adminLink) adminLink.style.display = 'none';
  }
});

// Signup form is handled directly in signup.html - no duplicate handlers needed here

// إضافة وظيفة تسجيل الخروج
function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.href = ROUTES.HOME;
}
