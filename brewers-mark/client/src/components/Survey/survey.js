import React from "react";
import $ from 'jquery';
import './survey.css'


class Survey extends React.Component {

  state = {
    questionIndex: 0,
    answerIndex: 0,
    survey: [
      [{
        questions: ["Which of these beer styles do you prefer?"],
        answers: [
          "Allagash White, Blue Moon, Stiegl Radler",
          "Anderson Valley (Gose Sour style)",
          "Guinness, Founders Breakfast Stout",
          "Dog Fish Head 60 Minute IPA, Sierra Nevada IPA",
        ]
      }],
      [{

      }]
    ]
  }

  componentDidMount() {
    $('body').css('background-image', 'url(./surveyback.png)');
  }

  render() {
    return (
      <div id='surveyhome' className='container-fluid'>
        <center>
          <div id='surveychild'>
            <h3><strong>About You</strong></h3>
            <h4>Name (Required)</h4>
            <input type="text" id="name" class="form-control" required />

            <h4>Age (You must be 21 years of age to enter.)</h4>
            <input type="text" id="age" class="form-control" required />

            <hr />

            <h3><strong>Question 1</strong></h3>
            <h4>What is the prefered ABV of the beer you enjoy?</h4>
            <select class="chosen-select" id="q1">
              <option value=""></option>
              <option value="4.5">4.0 - 5.0 ABV (LIGHT BEER/LAGER)</option>
              <option value="6.5">6.0 - 7.0 ABV (IPA/SAISON)</option>
              <option value="7.5">7.0 - 8.0 ABV (DOUBLE IPA/BROWN ALE)</option>
              <option value="9.5">9.0+ ABV (PORTER/STOUT)</option>
            </select>

            <h3><strong>Question 2</strong></h3>
            <h4>You prefer light beers like a Pale Lager, Pilsner or Wheat Ale.</h4>
            <select class="chosen-select" id="q2">
              <option value=""></option>
              <option value="11">Yes</option>
              <option value="-1">No Preference</option>
              <option value="-1">No</option>
            </select>


            <h3><strong>Question 3</strong></h3>
            <h4>You prefer light-to-medium beers like an Indian Pale Ale, American Pale Ale or Saison?</h4>
            <select class="chosen-select" id="q3">
              <option value=""></option>
              <option value="15">Yes</option>
              <option value="-1">No Preference</option>
              <option value="-1">No</option>
            </select>


            <h3><strong>Question 4</strong></h3>
            <h4>You prefer medium beers like a Double IPA, Amber Ale or Brown Ale?</h4>
            <select class="chosen-select" id="q4">
              <option value=""></option>
              <option value="30">Yes</option>
              <option value="-1">No Preference</option>
              <option value="-1">No</option>
            </select>


            <h3><strong>Question 5</strong></h3>
            <h4>You prefer darker beers, such as a Stout or Porter?</h4>
            <select class="chosen-select" id="q5">
              <option value=""></option>
              <option value="50">Yes</option>
              <option value="-1">No Preference</option>
              <option value="-1">No</option>
            </select>


            <h3><strong>Question 6</strong></h3>
            <h4>I want to see newer beers, first brewed within the last five years.</h4>
            <select class="chosen-select" id="q6">
              <option value=""></option>
              <option value="1">Yes</option>
              <option value="2">No preference</option>
              <option value="3">No</option>
            </select>


            <h3><strong>Question 7</strong></h3>
            <h4>How bitter do you like your beer?</h4>
            <select class="chosen-select" id="q7">
              <option value=""></option>
              <option value="15">Not Bitter At All (American Lager, Scottish Ale)</option>
              <option value="35">Slightly Bitter (Stout, Porter)</option>
              <option value="70">Bitter (India Pale Ale)</option>
              <option value="90">Extremely Bitter (Double or Imperial IPA, Barleywine)</option>
            </select>

            <br />
            <br />

            <button type="submit" class="btn btn-light btn-lg btn-block" id="submit"><i class="fa fa-check-circle" aria-hidden="true"></i>
              Submit</button>
          </div>
        </center>
      </div>
    );
  }
}
export default Survey;