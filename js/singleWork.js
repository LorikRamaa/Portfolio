async function getData() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const response = await fetch(`../js/data.json?id=${productId}`);

  const data = await response.json();
  console.log(data, "data");
  //   console.log(
  //     data.find((obj) => obj.id === parseFloat(productId)),
  //     productId
  //   );
  let findedDataObj = data.find((obj) => obj.id === parseFloat(productId));
  if (findedDataObj) {
    let directories = document.getElementById("directories");
    directories.innerHTML = `
        <h3>Home / ${findedDataObj.title}</h3>
      `;
    let bigImage = document.getElementById("bigImage");
    bigImage.innerHTML = `
        <img src="${findedDataObj.image.one}">
      `;
    let twoImage = document.getElementById("twoImage");
    twoImage.innerHTML = `
        <img src="${findedDataObj.image.two}">
        <img src="${findedDataObj.image.three}">
      `;
    let bigImageTwo = document.getElementById("bigImageTwo");
    bigImageTwo.innerHTML = `
        <img src="${findedDataObj.image.four}">
      `;
    let leftSingle = document.getElementById("left__single");
    leftSingle.innerHTML = `
        <h1>${findedDataObj.title}</h1>
        ${
          findedDataObj.url === null
            ? "<p>*This website is not published*</p>"
            : '<a href="' + findedDataObj.url + '">Website</a>'
        }
    
      `;
    let rightSingle = document.getElementById("right__single");
    rightSingle.innerHTML = `
        <p>${findedDataObj.description}</p>
        <p>Date: <b>${findedDataObj.date}</b></p>
        <p>Category: <b>${findedDataObj.category}</b></p>
      `;
  } else {
    let all = document.querySelector("#all");
    all.innerHTML = ``;
    let singleContent = document.querySelector("#error");
    singleContent.innerHTML = `
        <h1 class="error first__color__bg">404</h1>
        <h2>Oops.. Bad request</h2>
        <a href="../index.html">Back to home page</a>
    `;
  }
}
getData();
