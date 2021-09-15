state = {
  rating: 0,
};

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
