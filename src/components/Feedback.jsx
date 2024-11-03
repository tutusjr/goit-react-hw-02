export default function Feedback({ feedback,total }) {

  const positiveFeedback = Math.round((feedback.good / total) *100)
  return (
    <div>
      {total === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <div>
          {" "}
          <p>Good: {feedback.good}</p>
          <p>Neutral: {feedback.neutral}</p>
          <p>Bad: {feedback.bad}</p>
          <p>Total: {total}</p>
          <p>Positive: {positiveFeedback}%</p>
        </div>
      )}
    </div>
  );
}
