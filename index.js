state = {
  rating: 0,
};

// id would likely come from the looped over products on a previous page
const productId = 1;
const baseUrl = 'http://localhost:9080/api';

async function fetchProduct(url) {
  let response = await fetch(url);
  const data = await response.json();
  document.getElementById('title').innerHTML = data?.name;
}

fetchProduct(`${baseUrl}/product/${productId}`);

function getTotalRating(reviews) {
  const total = reviews.reduce((a, b) => a + b.rating, 0);
  const average = total / reviews.length;

  return average.toFixed(1);
}

function getStars(rating) {
  // if index less than rating make it yellow
  const stars = ['1', '2', '3', '4', '5'];
  return stars
    .map((star, index) => {
      const colour = index < rating ? '#FEE12B' : 'lightgrey';
      return `<i class="fas fa-star" style="font-size: 28px; color: ${colour}; margin-right: 4px"></i>`;
    })
    .join('');
}

function getHtmlReviews(reviews) {
  return reviews
    .map((review) => {
      return `<div style="display:flex; margin-top:15px;">${getStars(
        review.rating
      )}<div style="margin:3px 10px"><strong>${review.rating}</strong>, ${
        review.review
      }</div></div>`;
    })
    .join('');
}

// get reviews and add to html
async function fetchReviews(url) {
  let response = await fetch(url);
  const data = await response.json();
  const averageRating = getTotalRating(data);

  document.getElementById('averageRating').innerHTML = averageRating;
  document.getElementById('averageRatingStars').innerHTML =
    getStars(averageRating);
  document.getElementById('reviews').innerHTML = getHtmlReviews(data);
}

fetchReviews(`${baseUrl}/reviews/${productId}`);

function submitReview() {
  const review = document.getElementById('review-input').value;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', `${baseUrl}/reviews`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(
    JSON.stringify({
      product_id: productId,
      rating: state.rating,
      review,
    })
  );
  document.getElementById('closeButton').click();
  fetchReviews(`${baseUrl}/reviews/${productId}`);
}

function toggleColour(id) {
  const color = document.getElementById(id).style.color;
  if (color == 'lightgrey') {
    document.getElementById(id).style.color = '#FEE12B';
    state.rating++;
  } else {
    document.getElementById(id).style.color = 'lightgrey';
    state.rating--;
  }
}
