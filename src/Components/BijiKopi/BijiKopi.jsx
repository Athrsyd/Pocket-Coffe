const CoffeeBean = ({ className, color = "#6b3f1d", lineColor = "#4a2a12" }) => {
  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
    >
      <ellipse cx="50" cy="75" rx="40" ry="70" fill={color} />
      <path
        d="M50 5 C35 40, 35 110, 50 145"
        stroke={lineColor}
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
};

export default CoffeeBean;