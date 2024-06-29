'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const successMessage = document.createElement('div');
const errorMessage = document.createElement('div');

successMessage.classList.add('message');
successMessage.innerText = 'Promise was resolved!';
errorMessage.classList.add('message', 'error-message');
errorMessage.innerText = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Reject'));
  }, 3000);
});

const successHandler = () => body.append(successMessage);
const errorHandler = () => body.append(errorMessage);

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
