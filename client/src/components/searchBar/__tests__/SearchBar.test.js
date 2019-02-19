import React from 'react';
import SearchBar from '../SearchBar';
import { shallow } from 'enzyme';

const historyMock = {
  push: jest.fn(),
  goBack: jest.fn()
};
const routerProps = {
  history: historyMock,
  location: {}
};
describe('<SearchBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar {...routerProps} />);
  });

  fit('should render a SearchBar component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe('render', () => {});
  // describe('inner methods', () => {

  //   describe('handleSubmit()', () => {
  //     let _onSearchClick;

  //     describe('when a pax is searched by name', () => {
  //       describe('When a name is typed in lowerCase', () => {
  //         beforeEach(() => {
  //           wrapper.setState({
  //             filter: 'gui'
  //           });
  //           wrapper.update();
  //           _onSearchClick = wrapper.instance()._onSearchClick;
  //         });

  //         it('should filter the grid with the criteria requested', () => {
  //           const initialState = {
  //             p01: {
  //               fullName: {
  //                 first: 'MAU',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'p01',
  //               selected: false
  //             },
  //             pf02: {
  //               fullName: {
  //                 first: 'Guido',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'pf02',
  //               selected: false
  //             }
  //           };
  //           const expectedState = {
  //             pf02: {
  //               fullName: {
  //                 first: 'Guido',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'pf02',
  //               selected: false
  //             }
  //           };

  //           wrapper.setState({ filteredPassengers: initialState });
  //           wrapper.update();
  //           _onSearchClick();
  //           expect(wrapper.state('filteredPassengers')).toEqual(expectedState);
  //         });
  //       });

  //       describe('When a name is typed in upperCase', () => {
  //         beforeEach(() => {
  //           wrapper.setState({
  //             filter: 'GUI'
  //           });
  //           wrapper.update();
  //           _onSearchClick = wrapper.instance()._onSearchClick;
  //         });

  //         it('should filter the grid with the criteria requested', () => {
  //           const initialState = {
  //             p01: {
  //               fullName: {
  //                 first: 'MAU',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'p01',
  //               selected: false
  //             },
  //             pf02: {
  //               fullName: {
  //                 first: 'Guido',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'pf02',
  //               selected: false
  //             }
  //           };
  //           const expectedState = {
  //             pf02: {
  //               fullName: {
  //                 first: 'Guido',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'pf02',
  //               selected: false
  //             }
  //           };

  //           wrapper.setState({ filteredPassengers: initialState });
  //           wrapper.update();
  //           _onSearchClick();
  //           expect(wrapper.state('filteredPassengers')).toEqual(expectedState);
  //         });
  //       });
  //       describe('When a name is not found', () => {
  //         beforeEach(() => {
  //           wrapper.setState({
  //             filter: 'ALE'
  //           });
  //           wrapper.update();
  //           _onSearchClick = wrapper.instance()._onSearchClick;
  //         });

  //         it('should filter the grid with the criteria requested', () => {
  //           const initialState = {
  //             p01: {
  //               fullName: {
  //                 first: 'MAU',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'p01',
  //               selected: false
  //             },
  //             pf02: {
  //               fullName: {
  //                 first: 'Guido',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'pf02',
  //               selected: false
  //             }
  //           };
  //           const expectedState = {};

  //           wrapper.setState({ filteredPassengers: initialState });
  //           wrapper.update();
  //           _onSearchClick();
  //           expect(wrapper.state('filteredPassengers')).toEqual(expectedState);
  //         });
  //       });
  //     });

  //     describe('when a pax is searched by lastname', () => {
  //       describe('When a lastname is typed in lowerCase', () => {
  //         beforeEach(() => {
  //           wrapper.setState({
  //             filter: 'sabre'
  //           });
  //           wrapper.update();
  //           _onSearchClick = wrapper.instance()._onSearchClick;
  //         });

  //         it('should filter the grid with the criteria requested', () => {
  //           const initialState = {
  //             p01: {
  //               fullName: {
  //                 first: 'MAU',
  //                 last: 'SABRE',
  //                 prefix: 'MR'
  //               },
  //               id: 'p01',
  //               selected: false
  //             },
  //             pf02: {
  //               fullName: {
  //                 first: 'Guido',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'pf02',
  //               selected: false
  //             }
  //           };
  //           const expectedState = {
  //             p01: {
  //               fullName: {
  //                 first: 'MAU',
  //                 last: 'SABRE',
  //                 prefix: 'MR'
  //               },
  //               id: 'p01',
  //               selected: false
  //             }
  //           };

  //           wrapper.setState({ filteredPassengers: initialState });
  //           wrapper.update();
  //           _onSearchClick();
  //           expect(wrapper.state('filteredPassengers')).toEqual(expectedState);
  //         });
  //       });

  //       describe('When a lastname is typed in upperCase', () => {
  //         beforeEach(() => {
  //           wrapper.setState({
  //             filter: 'SAB'
  //           });
  //           _onSearchClick = wrapper.instance()._onSearchClick;
  //         });

  //         it('should filter the grid with the criteria requested', () => {
  //           const initialState = {
  //             p01: {
  //               fullName: {
  //                 first: 'MAU',
  //                 last: 'SABRE',
  //                 prefix: 'MR'
  //               },
  //               id: 'p01',
  //               selected: false
  //             },
  //             pf02: {
  //               fullName: {
  //                 first: 'Guido',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'pf02',
  //               selected: false
  //             }
  //           };
  //           const expectedState = {
  //             p01: {
  //               fullName: {
  //                 first: 'MAU',
  //                 last: 'SABRE',
  //                 prefix: 'MR'
  //               },
  //               id: 'p01',
  //               selected: false
  //             }
  //           };

  //           wrapper.setState({ filteredPassengers: initialState });
  //           wrapper.update();
  //           _onSearchClick();
  //           expect(wrapper.state('filteredPassengers')).toEqual(expectedState);
  //         });
  //       });

  //       describe('When a lastname is not founded', () => {
  //         beforeEach(() => {
  //           wrapper.setState({
  //             filter: 'ALE'
  //           });
  //           wrapper.update();
  //           _onSearchClick = wrapper.instance()._onSearchClick;
  //         });

  //         it('should filter the grid with the criteria requested', () => {
  //           const initialState = {
  //             p01: {
  //               fullName: {
  //                 first: 'MAU',
  //                 last: 'SABRE',
  //                 prefix: 'MR'
  //               },
  //               id: 'p01',
  //               selected: false
  //             },
  //             pf02: {
  //               fullName: {
  //                 first: 'Guido',
  //                 last: 'ICEMAN',
  //                 prefix: 'MR'
  //               },
  //               id: 'pf02',
  //               selected: false
  //             }
  //           };
  //           const expectedState = {};

  //           wrapper.setState({ filteredPassengers: initialState });
  //           wrapper.update();
  //           _onSearchClick();
  //           expect(wrapper.state('filteredPassengers')).toEqual(expectedState);
  //         });
  //       });
  //     });
  //   });

  //   describe('_onContinueClick()', () => {
  //     let _onContinueClick;

  //     const state = {
  //       p01: {
  //         id: 'p01',
  //         fullName: {
  //           first: 'MAU',
  //           last: 'ICEMAN',
  //           prefix: 'DR'
  //         },
  //         selected: true,
  //         recordLocator: 'XXXXXX'
  //       },
  //       p02: {
  //         id: 'p02',
  //         fullName: {
  //           first: 'GUIDO',
  //           last: 'ICEMAN',
  //           prefix: 'MR'
  //         },
  //         selected: false,
  //         recordLocator: 'XXXXXX'
  //       }
  //     };

  //     const formattedState = {
  //       passengersPartialData: {
  //         passengers: [
  //           {
  //             firstName: 'MAU',
  //             lastName: 'ICEMAN'
  //           }
  //         ],
  //         recordLocator: 'XXXXXX',
  //         totalPaxMultiParty: [
  //           {
  //             fullName: { first: 'MAU', last: 'ICEMAN', prefix: 'DR' },
  //             id: 'p01',
  //             recordLocator: 'XXXXXX',
  //             selected: true
  //           },
  //           {
  //             fullName: { first: 'GUIDO', last: 'ICEMAN', prefix: 'MR' },
  //             id: 'p02',
  //             recordLocator: 'XXXXXX',
  //             selected: false
  //           }
  //         ]
  //       }
  //     };

  //     beforeEach(() => {
  //       wrapper.setState({ filteredPassengers: state });
  //       wrapper.update();
  //       _onContinueClick = wrapper.instance()._onContinueClick;
  //       _onContinueClick();
  //     });

  //     it('should redirectToPassengerDetails with props', () => {
  //       expect(historyMock.push).toHaveBeenCalledTimes(1);
  //       expect(historyMock.push).toHaveBeenCalledWith(
  //         '/passenger-details',
  //         formattedState
  //       );
  //     });
  //   });
  // });
});
