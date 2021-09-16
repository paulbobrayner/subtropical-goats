state = {
  rating: 0,
};

const reviews = [
  { id: 1, review: 'pretty average', rating: 3 },
  { id: 2, review: 'cool', rating: 4 },
  { id: 3, review: 'not so good', rating: 2 },
];

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

document.getElementById('totalRating').innerHTML = overallRating;
document.getElementById('reviews').innerHTML = htmlReview;

function submitReview() {
  const review = document.getElementById('review-input').value;
  // POST rating / product id and review when submit
  // close modal also
  console.log('submit review', state.rating, review);
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
