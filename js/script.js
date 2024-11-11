const mSenseSlider = document.getElementById('mouse-sensitivity-slider')
const mSenseInput = document.getElementById('mouse-sensitivity')

const mSenseValue = () => {
    mSenseInput.value = mSenseSlider.value;
    console.log(mSenseSlider.value);
}

mSenseSlider.addEventListener('mousemove', mSenseValue)

// #########################################

const mZoomSlider = document.getElementById('zoom-sensitivity-slider')
const mZoomInput = document.getElementById('zoom-sensitivity-ratio-mouse')

const mZoomValue = () => {
    mZoomInput.value = mZoomSlider.value;
    console.log(mZoomSlider.value);
}

mZoomSlider.addEventListener('mousemove', mZoomValue)