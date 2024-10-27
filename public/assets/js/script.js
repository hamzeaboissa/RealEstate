'use strict';
document.addEventListener("DOMContentLoaded", function() {
  const getStartedButton = document.getElementById('get-started');
  const formContainer = document.getElementById('form-container');
  const blurBackground = document.getElementById('blur-background'); // استهداف الطبقة المغبشة

  // إظهار الفورم والطبقة المغبشة عند الضغط على زر Get Started
  getStartedButton.addEventListener('click', function() {
    formContainer.style.display = 'block';
    blurBackground.style.display = 'block'; // إظهار الخلفية المغبشة
  });

  // إخفاء الفورم والطبقة المغبشة عند الضغط على زر Close
  document.getElementById('close-btn').addEventListener('click', function() {
    formContainer.style.display = 'none';
    blurBackground.style.display = 'none'; // إخفاء الخلفية المغبشة
  });

  // التبديل بين تسجيل الدخول والتسجيل
  const toggleFormButton = document.getElementById('toggle-form');
  toggleFormButton.addEventListener('click', function(event) {
    event.preventDefault();
    const formTitle = document.getElementById('form-title');

    if (formTitle.textContent === 'تسجيل الدخول') {
      formTitle.textContent = 'تسجيل الحساب الجديد';
      this.textContent = 'لديك حساب؟ تسجيل الدخول';
    } else {
      formTitle.textContent = 'تسجيل الدخول';
      this.textContent = 'سجل الآن';
    }
  });

  // باقي الكود كالمعتاد
  const navbar = document.querySelector("[data-navbar]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const navToggler = document.querySelector("[data-nav-toggler]");
  const toggleNav = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
  }
  addEventOnElement(navToggler, "click", toggleNav);
  const closeNav = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  }
  addEventOnElement(navLinks, "click", closeNav);
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  });
  const tabBtns = document.querySelectorAll("[data-tab-btn]");
  let lastClickedTabBtn = tabBtns[0];
  const changeTab = function () {
    lastClickedTabBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedTabBtn = this;
  }
  addEventOnElement(tabBtns, "click", changeTab);
});

// JavaScript code to handle tab switching
const tabButtons = document.querySelectorAll('[data-tab-btn]');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
