import './scss/index.scss';
import './scss/region.scss';
import './scss/help.scss';


const url = 'http://localhost:6060/api/region';
const xmlhttp = new XMLHttpRequest();

const getAllRegions = function () {
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const myArr = JSON.parse(this.responseText);
      myFunction(myArr);
    }
  };
  xmlhttp.open('GET', url, true);
  xmlhttp.send();
  
  function myFunction (arr) {
    let out = '';
    for ( let i = 0; i < arr.length; i++) {
      out += '<li onclick="fn(' + arr[i].id + 
      ')"><span class="primary-btn "> ' + arr[i].title + '</span></li>';
    }
    document.getElementById('generate').innerHTML = out;
  }
};

const getOneRegion = function (id) {
  xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const myArr = JSON.parse(this.responseText);
      myFunction(myArr);
    }
  };
  
  xmlhttp.open('GET', url + '/' + id, true);
  xmlhttp.send();

  function myFunction (arr) {
    let out = '';
    for ( let i = 0; i < arr.length; i++) {
      out += '<li onclick="fn(' + arr[i].id + 
      ')"><span class="primary-btn "> ' + arr[i].title + '</span></li>';
    }
    document.getElementById('generate').innerHTML = out;
  }
};


window.onload = function () {
  getAllRegions();
  getOneRegion(1);

};

