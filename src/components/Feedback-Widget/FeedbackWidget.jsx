// import React from 'react';
// import { Statistics } from './Statistics';
// import { FeedbackContainer } from './FeedbackWidgetStyled.Styled';
// import { FeedbackOptions } from './FeedbackOptions';
// import { Section } from './Section';
// class FeedbackWidget extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positive: 0,
//   };

//   handleLeaveFeedback = option => {
//     this.setState(
//       prevState => ({
//         [option]: prevState[option] + 1,
//         total: prevState.total + 1,
//       }),
//       () => {
//         const { good, total } = this.state;
//         const positive = total > 0 ? Math.round((good / total) * 100) : 0;
//         this.setState({ positive });
//       }
//     );
//     this.props.onFeedbackGiven();
//   };

//   //   (handleGoodFeedback = () => {
//   //     this.setState(prevState => ({ good: prevState.good + 1 }));
//   //   });
//   // handleNeutralFeedback = () => {
//   //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
//   // };
//   // handleBadFeedback = () => {
//   //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
//   // };

//   render() {
//     const { good, neutral, bad, total, positive } = this.state;
//     const options = ['good', 'neutral', 'bad'];
//     console.log('action');
//     return (
//       <FeedbackContainer>
//         <h1>Please leave feedback</h1>

//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positive={positive}
//           />
//         </Section>
//         <Section title="Feedback Options">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleLeaveFeedback}
//           />
//         </Section>
//       </FeedbackContainer>
//     );
//   }
// }
// export default FeedbackWidget;
