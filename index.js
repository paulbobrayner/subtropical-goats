state = {
  rating: 0,
};

// would likely come from the looped over products on a previous page
const productId = 1;
const baseUrl = 'http://localhost:9080/api';

const reviews = [
  { id: 1, review: 'pretty average', rating: 3 },
  { id: 2, review: 'cool', rating: 4 },
  { id: 3, review: 'not so good', rating: 2 },
];

async function fetchProduct(url) {
  let response = await fetch(url);
  const data = await response.json();
  document.getElementById('title').innerHTML = data?.name;

  // do reviews stuff here - create func tho
  // possibly total rating also
}

const product = fetchProduct(`${baseUrl}/product/${productId}`);

function getTotalRating() {
  const total = reviews.reduce((a, b) => a + b.rating, 0);
  const average = total / reviews.length;

  return Math.round(average);
}

function getStars(rating) {
  // if index less than rating colour it yellow
  const stars = ['1', '2', '3', '4', '5'];
  return stars
    .map((star, index) => {
      const colour = index < rating ? '#FEE12B' : 'lightgrey';
      return `<i class="fas fa-star" style="font-size: 28px; color: ${colour}; margin-right: 4px"></i>`;
    })
    .join('');
}

// loop over reviews and add to html
const htmlReview = reviews
  .map((review) => {
    return `<div style="display:flex; margin-top:15px;">${getStars(
      review.rating
    )}<div style="margin:3px 10px"><strong>${review.rating}</strong>, ${
      review.review
    }</div></div>`;
  })
  .join('');

const overallRating = getStars(getTotalRating());

// do same with actual aveage rating - innerhtml
document.getElementById('totalRating').innerHTML = overallRating;
document.getElementById('reviews').innerHTML = htmlReview;

function submitReview() {
  const review = document.getElementById('review-input').value;
  let xhr = new XMLHttpRequest();
  xhr.open('POST', `${baseUrl}/review`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(
    JSON.stringify({
      product_id: productId,
      rating: state.rating,
      review,
    })
  );
  // close modal - re-fetch reviews
  document.getElementById('closeButton').click();
  // fetchReviews()
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
