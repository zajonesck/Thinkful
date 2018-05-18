import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { WilksActions } from 'app/actions/wilks';


const initialWilksState: RootState.WilksState =
  {
    bodyWeight: 0,
    barWeight: 0,
    goalWilks: 0,
    isMale: false,
  };

export const wilksReducer = handleActions(
  {

    [WilksActions.Type.CALCULATE_BAR_WEIGHT]: (state, action) => {
        console.log('finding bar weight...');
        if (action.payload) {
          return {
            barWeight: new WilksCalculations(action.payload.bodyWeight, action.payload.goalWilks, action.payload.isMale).calcBarWeight(),
            bodyWeight: action.payload.bodyWeight,
            goalWilks: action.payload.goalWilks,
            isMale: action.payload.isMale,
          };
        } else {
          return state
        }
    },
  },
  initialWilksState
);

class WilksCalculations {

  private bodyWeight: number;
  private wilks: number;
  private isMale: boolean;

  constructor(bodyWeight: number, wilks: number, isMale: boolean) {
    this.bodyWeight = bodyWeight;
    this.wilks = wilks;
    this.isMale = isMale;
  }

  calcBarWeight(): number {
    if (this.isMale) {
      return this.calcMaleBarWeight();
    } else {
      return this.calcFemaleBarWeight();
    }
  }

  private calcFemaleCoeff(): number {

    let femaleA = 594.31747775582;
    let femaleB = -27.23842536447;
    let femaleC = 0.82112226871;
    let femaleD = -0.00930733913;
    let femaleE = 4.731582E-05;
    let femaleF = -9.054E-08;

    let divideBy = (femaleA) + (femaleB * this.bodyWeight) +
      (femaleC * Math.pow(this.bodyWeight, 2)) +
      (femaleD * Math.pow(this.bodyWeight, 3)) +
      (femaleE * Math.pow(this.bodyWeight, 4)) +
      (femaleF * Math.pow(this.bodyWeight, 5));

    return 500 / divideBy;
  }

  calcFemaleBarWeight(): number {
    return this.wilks / this.calcFemaleCoeff();
  }

  private calcMaleCoeff(): number {
    let maleA = -216.0475144;
    let maleB = 16.2606339;
    let maleC = -0.002388645;
    let maleD = -0.00113732;
    let maleE = 7.01863E-06;
    let maleF = -1.291E-08;

    let divideBy = (maleA) + (maleB * this.bodyWeight) +
      (maleC * Math.pow(this.bodyWeight, 2)) +
      (maleD * Math.pow(this.bodyWeight, 3)) +
      (maleE * Math.pow(this.bodyWeight, 4)) +
      (maleF * Math.pow(this.bodyWeight, 5));

    return 500 / divideBy;
  }

  calcMaleBarWeight(): number {
    return this.wilks / this.calcMaleCoeff();
  }
}
