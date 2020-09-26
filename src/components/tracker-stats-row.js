import Link from "next/link";

export default function TrackerStatsRow(props) {
  return (
    <>
      <pre>
        <span>{props.headline}</span>
        <span>{props.stats}</span>
      </pre>
      <style jsx>{`
        pre {
          padding: 0.78em 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px rgba(255, 255, 255, 0.1) solid;
        }
      `}</style>
    </>
  );
}
