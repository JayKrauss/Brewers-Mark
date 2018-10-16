import React from "react";
import $ from 'jquery';
import './survey.css'


class Survey extends React.Component {

  state = {
    surveyIndex: 0,
    answerIndex: 0,
    answers: [],
    parent: ["Lager", "Sour", "Stout", "IPA"],
    child: [
      ["American", "Czech", "Pilsner"],
      ["Ale", "Berliner", "Gose"],
      ["Porter", "Imperial", "Milk", "Oatmeal"],
      ["New England", "Double", "Triple", "Session"]
    ],
    survey: [
      {
        question: "Which style of beer is your favorite?",
        answers: [
          "Lager",
          "Sour",
          "Stout",
          "IPA"
        ]
      },
      {
        question: "Which of these beers do you prefer?",
        answers: [
          [
            "Allagash White, Blue Moon, Stiegl Radler",
            "Anderson Valley (Gose Sour style)",
            "Guinness Stout, Founders Breakfast Stout",
            "Dog Fish Head 60 Minute IPA, Sierra Nevada IPA",
          ],
          [
            "Allagash White, Blue Moon, Stiegl Radler",
            "Anderson Valley (Gose Sour style)",
            "Guinness Stout, Founders Breakfast Stout",
            "Dog Fish Head 60 Minute IPA, Sierra Nevada IPA",
          ],
          [
            "Allagash White, Blue Moon, Stiegl Radler",
            "Anderson Valley (Gose Sour style)",
            "Guinness Stout, Founders Breakfast Stout",
            "Dog Fish Head 60 Minute IPA, Sierra Nevada IPA",
          ],
          [
            "Allagash White, Blue Moon, Stiegl Radler",
            "Anderson Valley (Gose Sour style)",
            "Guinness Stout, Founders Breakfast Stout",
            "Dog Fish Head 60 Minute IPA, Sierra Nevada IPA",
          ]
        ]
      },
      {
        question: "What flavors do you enjoy the most?",
        answers: [
          [
            //lager params
            "Crisp, Dry Finish, Low Bitterness, Neutral Palate",
            "Rich, Hoppy, Bitter",
            "Fizzy, Subtle Maltiness, Floral"
          ],
          [
            //sour params
            "Fruity, Bright",
            "Dry, Crisp",
            "Tart, Saltier"
          ],
          [
            //stout params
            "porter stuff",
            "Intense, Complex, Rich",
            "Creamy, Thick, Smooth",
            "Sweet, Dessert-style"
          ],
          [
            //ipa params
            "Juicy, Fruity",
            "Light, Refreshing, Crisp",
            "Hoppy, Clean, Strong but Drinkable",
            "High ABV, Very Hoppy, High Bitterness"
          ]
        ]
      }
    ]
  }

  componentDidMount() {
    $('body').css('background-image', 'url(./surveyback.png)');
  }

  createAnswers() {
    let answerBank = [];
    let index = this.state.surveyIndex;
    let answerIndex = this.state.answerIndex
    let answers = this.state.survey[index].answers

    for (let i = 0; i < answers[answerIndex].length; i++) {
      answerBank.push(
        <option value={i}>
          {
            answers[i]
          }
        </option>
      )
    }
    return answerBank;
  }

  handleSubmit() {
    $("#submit").on("click", function (event) {
      event.preventDefault();
      console.log(event);
    })
  }

  render() {
    return (
      <div id='surveyhome' className='container-fluid'>
        <center>
          <div id='surveychild'>
            <h3><strong>Find Your Favorites</strong></h3>
            <h4>Take our survey to find beers you may like!</h4>

            <hr />

            <h4>{this.state.survey[this.state.surveyIndex].question}</h4>

            <br />
            <br />
            <select className="chosen-select" id="questionBox">
              {

                this.createAnswers()
                // <option value=""></option>
                // <option value="15">Not Bitter At All (American Lager, Scottish Ale)</option>
                // <option value="35">Slightly Bitter (Stout, Porter)</option>
                // <option value="70">Bitter (India Pale Ale)</option>
                // <option value="90">Extremely Bitter (Double or Imperial IPA, Barleywine)</option>
              }
            </select>

            <br />
            <br />

            <button type="submit" class="btn btn-light" id="submit"><i className="fa fa-check-circle" aria-hidden="true"></i>
              Submit</button>


          </div>
        </center>
      </div>
    );
  }
}
export default Survey;