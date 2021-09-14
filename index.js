function submitReview() {
  const review = document.getElementById('review-input').value;
  console.log('REV', review);
  // POST rating / product id and review when submit
  // close modal also
}

function toggleColour(id) {
  console.log('ID', id);
  const color = document.getElementById(id).style.color;
  if (color == 'lightgrey') {
    document.getElementById(id).style.color = '#FEE12B';
  } else {
    document.getElementById(id).style.color = 'lightgrey';
  }
}

// loop over stars
