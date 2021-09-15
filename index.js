state = {
  rating: 0,
};

const reviews = [
  { id: 1, review: 'pretty average', rating: '3' },
  { id: 2, review: 'cool', rating: '4' },
  { id: 3, review: 'not so good', rating: '2' },
];

const htmlReview = reviews
  .map((review) => {
    return `<div style="display:flex"><i class="fas fa-star" style='font-size: 28px; color: lightgrey; margin: 5px 10px 0'></i><div style="margin-top:6px"><strong>${review.rating}</strong>, ${review.review}</div></div>`;
  })
  .join('');

document.getElementById('reviews').innerHTML = htmlReview;

function submitReview() {
  const review = document.getElementById('review-input').value;
  // POST rating / product id and review when submit
  // close modal also
  console.log('rating', state.rating);
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

// loop over stars
