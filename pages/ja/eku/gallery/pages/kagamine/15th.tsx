export default function Anivfifteen() {
  return (
    <>
      <style jsx>{`
        h1 {
          text-align: center;
          animation: slidein forwards alternate 0.8s ease-out infinite;
        }
        @keyframes slidein {
          from {
            transform: translateY(20px);
            transform: rotate(-2deg);
          }
          to {
            transform: translateY(0px);
            transform: rotate(2deg);
          }
        }
      `}</style>
      <h1>鏡音リンレン15周年おめでとう！</h1>
    </>
  );
}
