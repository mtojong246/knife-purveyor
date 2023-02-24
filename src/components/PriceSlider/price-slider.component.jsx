import './price-slider.styles.css';

const PriceSlider = ({ onMinChange, onMaxChange }) => {


    function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
        const [from, to] = getParsed(fromInput, toInput);
        fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
        if (from > to) {
            fromSlider.value = to;
            fromInput.value = to;
        } else {
            fromSlider.value = from;
        }
    }
        
    function controlToInput(toSlider, fromInput, toInput, controlSlider) {
        const [from, to] = getParsed(fromInput, toInput);
        fillSlider(fromInput, toInput, '#C6C6C6', '#25daa5', controlSlider);
        setToggleAccessible(toInput);
        if (from <= to) {
            toSlider.value = to;
            toInput.value = to;
        } else {
            toInput.value = from;
        }
    }
    
    function controlFromSlider(fromSlider, toSlider, fromInput) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
      } else {
        fromInput.value = from;
      }
    }
    
    function controlToSlider(fromSlider, toSlider, toInput) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
      setToggleAccessible(toSlider);
      if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
      } else {
        toInput.value = from;
        toSlider.value = from;
      }
    }
    
    function getParsed(currentFrom, currentTo) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
    }
    
    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
        const rangeDistance = to.max-to.min;
        const fromPosition = from.value - to.min;
        const toPosition = to.value - to.min;
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
          ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
          ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} 100%)`;
    }
    
    function setToggleAccessible(currentTarget) {
      const toSlider = document.querySelector('#toSlider');
      if (Number(currentTarget.value) <= 0 ) {
        toSlider.style.zIndex = 2;
      } else {
        toSlider.style.zIndex = 0;
      }
    }

    const fromSlider = document.querySelector('#fromSlider');
    const toSlider = document.querySelector('#toSlider');
    const fromInput = document.querySelector('#fromInput');
    const toInput = document.querySelector('#toInput');


    //const fromSliderHandler = () => controlFromSlider(fromSlider, toSlider, fromInput);
    //const toSliderHandler = () => controlToSlider(fromSlider, toSlider, toInput);
    const fromInputHandler = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
    const toInputHandler = () => controlToInput(toSlider, fromInput, toInput, toSlider);

    const changeMinPrice = () => {
        controlFromSlider(fromSlider, toSlider, fromInput);
        onMinChange(fromSlider);
    }

    const changeMaxPrice = () => {
        controlToSlider(fromSlider, toSlider, toInput);
        onMaxChange(toSlider);
    }

    return (
        <div className="range_container">
            <div className="sliders_control">
                <input id="fromSlider" type="range" defaultValue="0" min='0' max='36500' onChange={changeMinPrice}/>
                <input id="toSlider" type="range" defaultValue="36500" min='0' max='36500' onChange={changeMaxPrice}/>
            </div>
            <div className="form_control">
                <span>$<input className="form_control_container__time__input" type="number" id="fromInput" defaultValue="0" min='0' max='36500' onChange={fromInputHandler}/></span>
                <span>-</span>
                <span>$<input className="form_control_container__time__input" type="number" id="toInput" defaultValue="36500" min='0' max='36500' onChange={toInputHandler}/></span>
            </div>
        </div>
    )
}

export default PriceSlider;

//grab price of all items and sort from lowest to highest 
//set lowest as min price and highest as max price for both slider and display 
